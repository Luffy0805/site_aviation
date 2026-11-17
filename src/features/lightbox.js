/* ===== Visionneuse (zoom, glisser, carte satellite) ===== */
const LB=(()=>{
 const el=document.createElement("div");el.id="lb";el.hidden=true;
 el.innerHTML='<div class="lbs"></div><div class="lbt"><span id="lbc"></span><span id="lbq"></span><span id="lbl"></span><button id="lbp" title="Précédente">‹</button><button id="lbn" title="Suivante">›</button><button id="lbm" title="Zoom arrière">−</button><button id="lbz" title="Zoom avant">+</button><button id="lbr" title="Ajuster à l’écran">⤢</button><button id="lbx" title="Fermer (Échap)">✕</button></div><div class="lbh">Molette : zoom · glisser : déplacer · double-clic : zoom rapide · ← → : photos · Échap : fermer</div>';
 document.body.append(el);
 const Q=s=>el.querySelector(s),stage=Q(".lbs"),cap=Q("#lbc"),qaEl=Q("#lbq");
 let flipFrom=null,map=null,mapEl=null,mode="photo",mapReady=false,mapLbl="",lastTxt="",img=null,list=[],idx=0,k=1,tx=0,ty=0,fw=0,fh=0,kmax=6,nat=[3,2],tok=0,ptr=new Map(),moved=0;
 const qa={set textContent(v){lastTxt=v;if(mode=="photo")qaEl.textContent=v},get textContent(){return lastTxt}};
 const mk=()=>{const i=new Image();i.draggable=false;i.alt="";return i};
 const apply=()=>{if(!img)return;img.style.width=fw*k+"px";img.style.height=fh*k+"px";img.style.transform="translate("+tx+"px,"+ty+"px)"};
 const fit=()=>{if(!img)return;const W=stage.clientWidth,H=stage.clientHeight,r=nat[0]/nat[1];let w=W,h=W/r;if(h>H){h=H;w=H*r}fw=w;fh=h;img.style.left=(W-w)/2+"px";img.style.top=(H-h)/2+"px"};
 const clampT=()=>{if(k<=1.0001){tx=ty=0;return}const W=stage.clientWidth,H=stage.clientHeight,lim=(f,V)=>Math.max(0,(f*k-V)/2)+V*.3;
  let cx=tx+fw*(k-1)/2,cy=ty+fh*(k-1)/2;const lx=lim(fw,W),ly=lim(fh,H);cx=Math.max(-lx,Math.min(lx,cx));cy=Math.max(-ly,Math.min(ly,cy));tx=cx-fw*(k-1)/2;ty=cy-fh*(k-1)/2};
 const setK=(nk,px,py)=>{nk=Math.max(1,Math.min(kmax,nk));const W=stage.clientWidth,H=stage.clientHeight,ox=(W-fw)/2,oy=(H-fh)/2,r=nk/k;tx=(px-ox)-((px-ox)-tx)*r;ty=(py-oy)-((py-oy)-ty)*r;k=nk;clampT();apply()};
 const show=n=>{stage.textContent="";img=n;stage.append(n);fit();apply()};
 const dims=n=>n.naturalWidth+" × "+n.naturalHeight+" px";
 let LF=null;
 const loadLeaflet=()=>LF||(LF=new Promise((res,rej)=>{if(window.L)return res(window.L);const l=document.createElement("link");l.rel="stylesheet";l.href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css";document.head.append(l);const sc=document.createElement("script");sc.src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js";sc.onload=()=>res(window.L);sc.onerror=()=>{LF=null;rej()};document.head.append(sc)}));
 const killMap=()=>{if(map){try{map.remove()}catch(e){}map=null}if(mapEl){mapEl.remove();mapEl=null}mapReady=false;mode="photo";stage.style.visibility=""};
 const renderBtns=it=>{Q("#lbl").innerHTML=(mapReady?'<a href="#" data-m="photo"'+(mode=="photo"?' class="on"':"")+'>Photo</a><a href="#" data-m="map"'+(mode=="map"?' class="on"':"")+'>Carte satellite</a>':"")+(it.links||[]).map(l=>'<a href="'+l[1]+'" target="_blank" rel="noopener">'+l[0]+" ↗</a>").join("")};
 const setMode=m=>{if(!mapReady)return;mode=m;if(m=="map"){mapEl.classList.add("on");stage.style.visibility="hidden";qaEl.textContent=mapLbl;if(map)map.invalidateSize()}else{mapEl.classList.remove("on");stage.style.visibility="";qaEl.textContent=lastTxt}renderBtns(list[idx])};
 const startMap=(it,t)=>{const m=it.map;if(!m)return;
  loadLeaflet().then(L=>{if(t!==tok)return;
   mapEl=document.createElement("div");mapEl.id="lbmap";el.insertBefore(mapEl,Q(".lbt"));
   const ready=n=>{if(t!==tok||mapReady)return;mapReady=true;mapLbl="Carte satellite · "+n+" · zoom libre";setMode("map")};
   map=L.map(mapEl,{center:[m.lat,m.lon],zoom:m.z,minZoom:8,maxZoom:19});map.zoomControl.setPosition("bottomright");
   L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19,attribution:"Imagerie © Esri, Maxar, Earthstar Geographics"}).addTo(map).once("load",()=>ready("Esri"));
   setTimeout(()=>{if(t===tok&&!mapReady&&mode=="photo")qaEl.textContent=lastTxt+" · la carte met du temps à charger…"},12000)
  },()=>{if(t===tok&&mode=="photo")qaEl.textContent=lastTxt+" · carte indisponible (pas de connexion ?)"})};
 Q("#lbl").addEventListener("click",e=>{const a=e.target.closest("a[data-m]");if(!a)return;e.preventDefault();setMode(a.dataset.m)});
 const flip=n=>{if(!flipFrom||RM)return;const sr=flipFrom.getBoundingClientRect();flipFrom=null;const dr=n.getBoundingClientRect();if(!dr.width||!sr.width)return;
  const k=Math.max(sr.width/dr.width,sr.height/dr.height),w=dr.width*k,h=dr.height*k,x=sr.left+sr.width/2-w/2-dr.left,y=sr.top+sr.height/2-h/2-dr.top,ix=Math.max(0,(w-sr.width)/2/k),iy=Math.max(0,(h-sr.height)/2/k);
  n.animate([{transform:"translate("+x+"px,"+y+"px) scale("+k+")",clipPath:"inset("+iy+"px "+ix+"px round 6px)"},{transform:"translate(0px,0px) scale(1)",clipPath:"inset(0px 0px round 0px)"}],{duration:540,easing:"cubic-bezier(.2,.8,.2,1)"});
  el.animate([{opacity:0},{opacity:1}],{duration:340,easing:"ease-out"})};
 const load=()=>{const it=list[idx],t=++tok;k=1;tx=ty=0;qa.textContent="";cap.textContent=it.cap+(list.length>1?"  ·  "+(idx+1)+" / "+list.length:"");
  Q("#lbp").style.display=Q("#lbn").style.display=list.length>1?"":"none";
  const NH=it.links?"":" (pas de version plus détaillée)";
  killMap();renderBtns(it);
  stage.textContent="";img=null;
  const lo=mk();
  lo.onload=()=>{if(t!==tok)return;nat=[lo.naturalWidth,lo.naturalHeight];show(lo);kmax=Math.max(4,nat[0]/fw*2);flip(lo);
   const lw=lo.naturalWidth;qa.textContent=it.hd?"Photo "+dims(lo)+" · recherche de la haute définition…":"Photo "+dims(lo);
   startMap(it,t);if(!it.hd)return;
   Promise.resolve(it.hd).then(r=>{if(t!==tok)return;if(!r){qa.textContent="Photo "+dims(lo)+NH;return}
    const h=r.el||(()=>{const i=mk();i.src=r.u;return i})();qa.textContent="Photo "+dims(lo)+" · chargement de la haute définition…";
    const fin=()=>{if(t!==tok)return;if(!h.naturalWidth){qa.textContent="Photo "+dims(lo);return}
     if(h.naturalWidth<lw*1.4){qa.textContent="Photo "+dims(lo)+NH;return}
     h.draggable=false;nat=[h.naturalWidth,h.naturalHeight];show(h);kmax=Math.max(8,nat[0]/fw*3);qa.textContent="Haute définition · "+dims(h)};
    const go=()=>{(h.decode?h.decode():Promise.resolve()).then(fin,fin)};
    if(h.complete&&h.naturalWidth)go();else{h.onload=go;h.onerror=()=>{if(t===tok)qa.textContent="Photo "+dims(lo)}}})};
  lo.onerror=()=>{if(t===tok)qa.textContent="Image introuvable"};
  lo.src=it.src};
 const open=(l,i,from)=>{list=l;idx=i||0;flipFrom=from||null;el.hidden=false;document.documentElement.style.overflow="hidden";load()};
 const close=()=>{el.hidden=true;tok++;killMap();stage.textContent="";img=null;document.documentElement.style.overflow=""};
 const go=d=>{if(list.length<2)return;idx=(idx+d+list.length)%list.length;load()};
 const mid=()=>[stage.clientWidth/2,stage.clientHeight/2];
 Q("#lbx").onclick=close;Q("#lbp").onclick=()=>go(-1);Q("#lbn").onclick=()=>go(1);
 Q("#lbz").onclick=()=>setK(k*1.6,...mid());Q("#lbm").onclick=()=>setK(k/1.6,...mid());Q("#lbr").onclick=()=>{k=1;tx=ty=0;apply()};
 stage.addEventListener("wheel",e=>{e.preventDefault();const r=stage.getBoundingClientRect();setK(k*Math.exp(-e.deltaY*(e.ctrlKey?.01:.0018)),e.clientX-r.left,e.clientY-r.top)},{passive:false});
 stage.addEventListener("pointerdown",e=>{stage.setPointerCapture(e.pointerId);ptr.set(e.pointerId,[e.clientX,e.clientY]);moved=0});
 stage.addEventListener("pointermove",e=>{if(!ptr.has(e.pointerId))return;const p=ptr.get(e.pointerId);
  if(ptr.size==2){const o=[...ptr.entries()].find(x=>x[0]!=e.pointerId)[1],d0=Math.hypot(p[0]-o[0],p[1]-o[1]),d1=Math.hypot(e.clientX-o[0],e.clientY-o[1]);ptr.set(e.pointerId,[e.clientX,e.clientY]);if(d0>0){const r=stage.getBoundingClientRect();setK(k*d1/d0,(e.clientX+o[0])/2-r.left,(e.clientY+o[1])/2-r.top)}moved=9;return}
  const dx=e.clientX-p[0],dy=e.clientY-p[1];moved+=Math.abs(dx)+Math.abs(dy);ptr.set(e.pointerId,[e.clientX,e.clientY]);if(k>1){tx+=dx;ty+=dy;clampT();apply()}});
 stage.addEventListener("pointerup",e=>{ptr.delete(e.pointerId);if(!img)return;const r=img.getBoundingClientRect();if(moved<6&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))close()});
 stage.addEventListener("pointercancel",e=>ptr.delete(e.pointerId));
 stage.addEventListener("dblclick",e=>{const r=stage.getBoundingClientRect();if(k>1.05){k=1;tx=ty=0;apply()}else setK(Math.min(kmax,3),e.clientX-r.left,e.clientY-r.top)});
 addEventListener("keydown",e=>{if(el.hidden)return;if(e.key=="Escape")close();else if(e.key=="ArrowRight")go(1);else if(e.key=="ArrowLeft")go(-1);else if(e.key=="+"||e.key=="=")Q("#lbz").click();else if(e.key=="-")Q("#lbm").click();else if(e.key=="0")Q("#lbr").click()});
 addEventListener("resize",()=>{if(!el.hidden){fit();clampT();apply()}});
 return{open};
})();
document.addEventListener("click",e=>{
 const f=e.target.closest(".figs figure");
 if(f){const all=[...f.parentNode.querySelectorAll("figure")];LB.open(all.map(x=>{const im=x.querySelector("img");return{src:im.getAttribute("src"),cap:im.alt}}),all.indexOf(f),f);return}
 const p=e.target.closest("img.pimg");if(p){LB.open([{src:p.getAttribute("src"),cap:p.alt}],0,p);return}
 const g=e.target.closest(".gi[data-ap]");if(g&&g.querySelector("img.aph"))apHD(AIRP[g.dataset.ap],g.querySelector(".zbox2"));
});
