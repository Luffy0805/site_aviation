/* ===== Page Aéroports : carte, pistes, photos ===== */
const APIMG={},APALIAS={cdg:["cgd"],dfw:["dallas"],icn:["séoul","seoul"],pvg:["shangai","shanghai"],szx:["shenzen","shenzhen"],hnd:["tokyo"]};
const apList=(c,dir)=>{const L=[];[c].concat(APALIAS[c]||[]).forEach(n=>["jpg","jpeg","webp","png"].forEach(e=>L.push(dir+encodeURI(n)+"."+e)));return L};
const apProbe=L=>new Promise(res=>{let k=0;const nx=()=>{if(k>=L.length)return res(null);const u=L[k++],t=new Image();t.onload=()=>res(u);t.onerror=nx;t.src=u};nx()});
function apPhoto(a,box){const c=a.i.toLowerCase(),put=u=>{if(u&&box.isConnected&&!box.querySelector("img")){const im=new Image();im.className="aph";im.alt="Vue satellite de "+a.n;im.src=u;box.classList.add("hasph");box.appendChild(im)}};
 if(c in APIMG){put(APIMG[c]);return}
 apProbe(apList(c,"images/airport/")).then(u=>{APIMG[c]=u||false;put(u)})}
const APHDU={};
const apProbeImg=L=>new Promise(res=>{let k=0;const nx=()=>{if(k>=L.length)return res(null);const u=L[k++],t=new Image();t.onload=()=>res({u:u,el:t});t.onerror=nx;t.src=u};nx()});
const apZ=a=>Math.max(11,Math.min(16,Math.round(Math.log2(156543*Math.cos(a.lat*Math.PI/180)*1400/(Math.max(a.ext[0],a.ext[1])*1.25)))));
const geoLinks=(lat,lon,z)=>{const la=lat.toFixed(5),lo=lon.toFixed(5);return [["Google Maps","https://www.google.com/maps/@"+la+","+lo+","+z+"z/data=!3m1!1e3"],["Flightradar24","https://www.flightradar24.com/"+la+","+lo+"/"+(z-1)]]};
function apLinks(a){return geoLinks(a.lat,a.lon,apZ(a))}
function apHD(a,fr){const c=a.i.toLowerCase(),cap=a.n+" ("+a.i+") · vue satellite",L=apLinks(a),MP={lat:a.lat,lon:a.lon,z:apZ(a)},
 hd=APHDU[c]===false?Promise.resolve(null):apProbeImg(APHDU[c]?[APHDU[c]]:apList(c,"images/airport/hd/")).then(r=>{APHDU[c]=r?r.u:false;return r}),
 th=c in APIMG?Promise.resolve(APIMG[c]):apProbe(apList(c,"images/airport/")).then(u=>(APIMG[c]=u||false));
 th.then(t=>{if(t)LB.open([{src:t,hd:hd,cap:cap,links:L,map:MP}],0,fr);else hd.then(r=>r?LB.open([{src:r.u,cap:cap,links:L,map:MP}],0):window.open(L[0][1],"_blank"))})}
function planSVG(a,fw){const W0=fw||Math.max(a.ext[0],a.ext[1]*1.5)*1.2,H0=W0/1.5,x0=a.cx-W0/2,y0=a.cy-H0/2,sw=W0/520,st=1000;let g="";
 for(let x=Math.ceil(x0/st)*st;x<x0+W0;x+=st)g+='<path d="M'+x+" "+y0+"V"+(y0+H0)+'" stroke="#ffffff16" stroke-width="'+sw*.7+'"/>';
 for(let y=Math.ceil(y0/st)*st;y<y0+H0;y+=st)g+='<path d="M'+x0+" "+y+"H"+(x0+W0)+'" stroke="#ffffff16" stroke-width="'+sw*.7+'"/>';
 a.rw.forEach(r=>{const dx=r[2]-r[0],dy=r[3]-r[1],L=Math.hypot(dx,dy)||1,ux=dx/L,uy=dy/L,w=Math.max(r[4],W0/120)/2,nx=-uy*w,ny=ux*w;
  g+='<polygon points="'+[[r[0]+nx,r[1]+ny],[r[2]+nx,r[3]+ny],[r[2]-nx,r[3]-ny],[r[0]-nx,r[1]-ny]].map(q=>q[0].toFixed(0)+","+q[1].toFixed(0)).join(" ")+'" fill="#cfe0f5" fill-opacity=".16" stroke="#e8eef8" stroke-width="'+sw+'" stroke-linejoin="round"/>';
  g+='<path d="M'+r[0]+" "+r[1]+"L"+r[2]+" "+r[3]+'" stroke="#e8eef8" stroke-width="'+sw*.6+'" stroke-dasharray="'+W0/90+" "+W0/110+'"/>';
  if(!fw){const o=W0/38,fs=W0/42;g+='<text x="'+(r[0]-ux*o)+'" y="'+(r[1]-uy*o)+'" font-size="'+fs+'" text-anchor="middle" dominant-baseline="middle" fill="#9db4d6">'+r[5]+'</text><text x="'+(r[2]+ux*o)+'" y="'+(r[3]+uy*o)+'" font-size="'+fs+'" text-anchor="middle" dominant-baseline="middle" fill="#9db4d6">'+r[6]+"</text>"}});
 const bl=W0<8000?1000:2000,bx=x0+W0*.05,by=y0+H0*.93,nx=x0+W0*.94,ny=y0+H0*.14,ah=W0/22;
 g+='<path d="M'+bx+" "+by+"h"+bl+'" stroke="#ffb347" stroke-width="'+sw*2+'"/><path d="M'+bx+" "+(by-W0/90)+"v"+W0/45+"M"+(bx+bl)+" "+(by-W0/90)+"v"+W0/45+'" stroke="#ffb347" stroke-width="'+sw+'"/><text x="'+bx+'" y="'+(by-W0/40)+'" font-size="'+W0/44+'" fill="#ffb347">'+bl/1000+" km</text>";
 g+='<path d="M'+nx+" "+(ny+ah)+"V"+(ny-ah)+"M"+nx+" "+(ny-ah)+"l-"+W0/90+" "+W0/60+"M"+nx+" "+(ny-ah)+"l"+W0/90+" "+W0/60+'" stroke="#9db4d6" stroke-width="'+sw+'" fill="none"/><text x="'+nx+'" y="'+(ny-ah-W0/70)+'" font-size="'+W0/40+'" text-anchor="middle" fill="#9db4d6">N</text>';
 return '<svg viewBox="'+x0+" "+y0+" "+W0+" "+H0+'">'+g+"</svg>"}
(function(){const sec=document.createElement("section");sec.id="aeroports";
 sec.innerHTML='<a class="back" href="#">← Retour</a><h2>Aéroports</h2><p class="sub">Les 20 aéroports les plus fréquentés du monde en 2025 (classement ACI World), avec le plan à l’échelle de leurs pistes.</p><div class="blk"><h3>Carte du monde</h3><div class="mapw"><svg id="wmap" viewBox="0 0 1000 520"><path class="sph" d="'+MAPD.sphere+'"/><path class="grt" d="'+MAPD.grat+'"/><path class="lnd" d="'+MAPD.land+'"/><g id="apts"></g></svg><div class="mapc"><button id="mzi" aria-label="Zoom avant">+</button><button id="mzo" aria-label="Zoom arrière">−</button><button id="mzr" aria-label="Recentrer">⟲</button></div></div><p class="src">Molette ou boutons pour zoomer, glisser pour se déplacer. Survole un point pour voir le plan des pistes. Pistes à l’échelle d’après la base OurAirports ; les aérogares et les taxiways ne sont pas représentés.</p></div><div class="blk"><h3>Voir aussi</h3><p>'+["{compagnies|Compagnies aériennes}","{liners|Avions de ligne}","{atmosphere|Atmosphère}"].map(lk).join(" · ")+"</p></div>";
 $("convertisseur").before(sec);sec.dataset.p="aeroports";PG.push(sec);
 const svg=$("wmap"),apts=$("apts"),AP=$("apop");let vb=[0,0,1000,520],drag=null;
 AIRP.forEach((a,i)=>{const q=MAPD.pts[a.i];apts.insertAdjacentHTML("beforeend",'<g class="ap" data-i="'+i+'" data-x="'+q[0]+'" data-y="'+q[1]+'"><circle class="apd" r="'+(4+a.pax/106302208*5)+'"/><text class="apl" y="-10">'+a.i+"</text></g>")});
 const draw=()=>{svg.setAttribute("viewBox",vb.join(" "));const k=vb[2]/1000;svg.classList.toggle("zm",vb[2]<560);apts.querySelectorAll(".ap").forEach(g=>g.setAttribute("transform","translate("+g.dataset.x+" "+g.dataset.y+") scale("+k+")"))};
 const clamp=()=>{vb[0]=Math.max(0,Math.min(1000-vb[2],vb[0]));vb[1]=Math.max(0,Math.min(520-vb[3],vb[1]))};
 const pt=e=>{const r=svg.getBoundingClientRect();return[vb[0]+((e.clientX||0)-r.left)/r.width*vb[2],vb[1]+((e.clientY||0)-r.top)/r.height*vb[3]]};
 const zoom=(f,cx,cy)=>{const nw=Math.min(1000,Math.max(70,vb[2]*f)),nh=nw*.52,px=(cx-vb[0])/vb[2],py=(cy-vb[1])/vb[3];vb=[cx-px*nw,cy-py*nh,nw,nh];clamp();draw()};
 svg.addEventListener("wheel",e=>{e.preventDefault();const[x,y]=pt(e);zoom(e.deltaY<0?.8:1.25,x,y)},{passive:false});
 $("mzi").onclick=()=>zoom(.7,vb[0]+vb[2]/2,vb[1]+vb[3]/2);$("mzo").onclick=()=>zoom(1.4,vb[0]+vb[2]/2,vb[1]+vb[3]/2);$("mzr").onclick=()=>{vb=[0,0,1000,520];draw()};
 svg.addEventListener("mousedown",e=>{drag=[e.clientX,e.clientY];svg.classList.add("dg")});
 addEventListener("mouseup",()=>{drag=null;svg.classList.remove("dg")});
 const place=e=>{const w=AP.offsetWidth,h=AP.offsetHeight;let x=e.clientX+22;if(x+w>innerWidth-10)x=e.clientX-22-w;AP.style.transform="translate("+Math.max(10,x)+"px,"+Math.max(10,Math.min(e.clientY-60,innerHeight-h-10))+"px)"};
 svg.addEventListener("mousemove",e=>{if(drag){const r=svg.getBoundingClientRect();vb[0]-=(e.clientX-drag[0])/r.width*vb[2];vb[1]-=(e.clientY-drag[1])/r.height*vb[3];drag=[e.clientX,e.clientY];clamp();draw();AP.hidden=true;return}
  const g=e.target.closest(".ap");if(!g){AP.hidden=true;return}
  if(AP.dataset.i!=g.dataset.i||AP.hidden){const a=AIRP[g.dataset.i];AP.dataset.i=g.dataset.i;AP.innerHTML='<div class="zbox2">'+planSVG(a)+'</div><div class="pinfo"><b>'+a.n+" ("+a.i+")</b>n° "+a.rk+" mondial · "+(a.pax/1e6).toLocaleString("fr-FR",{maximumFractionDigits:1})+" millions de passagers en 2025<br>"+(a.mv?a.mv.toLocaleString("fr-FR")+" mouvements d’avions · ":"")+a.rw.length+" pistes · la plus longue : "+a.longest.toLocaleString("fr-FR")+" m"+(a.elev?" · altitude "+Math.round(a.elev*.3048)+" m":"")+"</div>";AP.hidden=false;apPhoto(a,AP.querySelector(".zbox2"))}place(e)});
 svg.addEventListener("mouseleave",()=>AP.hidden=true);
 svg.addEventListener("mousedown",e=>{svg._d0=[e.clientX,e.clientY]});
 svg.addEventListener("click",e=>{const g=e.target.closest(".ap");if(!g)return;const d0=svg._d0;if(d0&&Math.hypot(e.clientX-d0[0],e.clientY-d0[1])>5)return;AP.hidden=true;apHD(AIRP[g.dataset.i])});
 draw();
 const PX=a=>(a.pax/1e6);
 ADDTOP("aeroports","Chiffres clés 2025",el=>el.innerHTML=NUMS([["9,8 milliards","de passagers dans le monde"],["103,1 millions","de mouvements d’avions dans le monde"],["857 392","mouvements à Chicago O’Hare, n° 1"],["187 contre 99","passagers par mouvement : Haneda contre O’Hare"]]));
 ADD("aeroports","Le classement des 20 aéroports (millions de passagers)",el=>BARS(el,AIRP.map(a=>[a.rk+". "+a.n+" ("+a.i+")",a.pax,(a.pax/1e6).toLocaleString("fr-FR",{maximumFractionDigits:1})+" M"])),"Source : ACI World, trafic 2025 (passagers au départ et à l’arrivée, en transit comptés une fois).");
 ADD("aeroports","Les 20 aéroports : photos satellite et plans de pistes à la même échelle (carrés de 10 km)",el=>{el.innerHTML='<div class="gal">'+AIRP.map((a,i)=>'<div class="gi" data-ap="'+i+'"><div class="zbox2">'+planSVG(a,10000)+"</div><span>"+a.i+" · "+a.n+" · "+a.rw.length+" pistes</span></div>").join("")+"</div>";el.querySelectorAll(".gi").forEach((g,i)=>apPhoto(AIRP[i],g.querySelector(".zbox2")))},"Pistes de plus de 1 200 m, d’après OurAirports. Les carreaux font 1 km. Survole une photo pour voir son plan de pistes, clique pour l’agrandir : une carte satellite zoomable remplace la photo une fois chargée, avec des boutons vers Google Maps et Flightradar24.");
 ADD("aeroports","Les 20 plus grands aéroports, par région",el=>{const R={};AIRP.forEach(a=>R[a.reg]=(R[a.reg]||0)+a.pax/1e6);DONUT(el,Object.entries(R).sort((x,y)=>y[1]-x[1]).map(x=>[x[0],Math.round(x[1]*10)/10]),["1 589","millions de passagers"],["#ffb347","#4aa3ff","#5fd0a0","#c084fc"])},"Millions de passagers en 2025. Asie-Pacifique : 9 aéroports (dont New Delhi). Europe : 5 aéroports (dont Istanbul).");
 ADD("aeroports","Pistes contre trafic",el=>SCAT(el,AIRP.map((a,i)=>({n:i<8?a.i:"",x:a.rw.length+((i%5)-2)*.07,y:Math.round(PX(a)*10)/10,r:9,c:"#4aa3ff",t:"<b>"+a.n+" ("+a.i+")</b><br>"+a.rw.length+" pistes<br>"+(PX(a)).toLocaleString("fr-FR",{maximumFractionDigits:1})+" millions de passagers"})),{xm:9,ym:120,xs:1,ys:20,xl:"Nombre de pistes (plus de 1 200 m)",yl:"Passagers 2025 (millions)"}),"Dubaï fait presque aussi bien qu’Atlanta avec deux pistes, alors que Chicago en aligne huit. Les points d’un même nombre de pistes sont légèrement décalés pour rester visibles.");
 ADD("aeroports","Les pistes les plus longues (mètres)",el=>BARS(el,AIRP.slice().sort((a,b)=>b.longest-a.longest).slice(0,10).map(a=>[a.n+" ("+a.i+")",a.longest,a.longest.toLocaleString("fr-FR")+" m"])));
 ADD("aeroports","Mouvements d’avions en 2025 (décollages et atterrissages)",el=>BARS(el,AIRP.filter(a=>a.mv).sort((x,y)=>y.mv-x.mv).map(a=>[a.n+" ("+a.i+")",a.mv,a.mv.toLocaleString("fr-FR")])),"Treize des 20 aéroports figurent dans le top 20 mondial des mouvements (ACI World). Dubaï, Séoul-Incheon, Pékin, Singapour, Madrid, Shenzhen et Kuala Lumpur n’y sont pas : moins de 460 000 mouvements chacun.");
 ADD("aeroports","Avions contre passagers",el=>SCAT(el,AIRP.filter(a=>a.mv).map(a=>({n:a.i,x:Math.round(a.mv/1000),y:Math.round(a.pax/1e5)/10,r:9,c:"#ffb347",t:"<b>"+a.n+" ("+a.i+")</b><br>"+a.mv.toLocaleString("fr-FR")+" mouvements<br>"+(a.pax/1e6).toLocaleString("fr-FR",{maximumFractionDigits:1})+" M de passagers<br>environ "+Math.round(a.pax/a.mv)+" passagers par mouvement"})),{xm:900,ym:120,xs:100,ys:20,xl:"Mouvements d’avions (milliers)",yl:"Passagers (millions)"}),"Plus un point est haut par rapport à sa position horizontale, plus les avions y sont gros et pleins.");
 ADD("aeroports","Passagers par mouvement : la taille et le remplissage moyens des avions",el=>BARS(el,AIRP.filter(a=>a.mv).sort((x,y)=>y.pax/y.mv-x.pax/x.mv).map(a=>[a.n+" ("+a.i+")",Math.round(a.pax/a.mv),Math.round(a.pax/a.mv)+" passagers par mouvement"])),"Chicago aligne beaucoup d’avions régionaux (99 passagers par mouvement) ; Haneda et Heathrow, surtout des gros-porteurs bien remplis (187 et 176).");
})();
RUBRIQUES.push({id:"aeroports",t:"Aéroports",d:"Carte du monde interactive et plans de pistes.",live:1});
AIRP.forEach(a=>INDEX.push([a.n+" ("+a.i+")","Aéroport n° "+a.rk+" mondial","aeroports",(a.n+" "+a.i+" "+a.p+" aeroport piste").toLowerCase()]));
INDEX.push(["Aéroports","Carte du monde et plans de pistes","aeroports","aeroports carte monde pistes atlanta dubai heathrow roissy"]);
