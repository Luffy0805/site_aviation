/* ===== Composant : plan zoomable BLUEPRINT() ===== */
/* ===== Plans interactifs ===== */
function PLAN(svg,info,draw,spots){const S=$(svg),I=$(info);
 S.innerHTML=draw+spots.map((p,i)=>`<g data-i="${i}"><circle class="sp" cx="${p[0]}" cy="${p[1]}" r="6.5"/><text class="sn" x="${p[0]}" y="${p[1]+3.2}">${i+1}</text></g>`).join("");
 S.onclick=e=>{const g=e.target.closest("g[data-i]");if(!g)return;const p=spots[g.dataset.i];S.querySelectorAll(".sp").forEach(c=>c.classList.remove("on"));g.firstChild.classList.add("on");I.innerHTML="<b>"+p[2]+"</b>"+lk(p[3])}}
const HALF="M100 6 104 30 108 62 108 70 138 92 136 97 108 95 110 104 182 192 182 206 112 200 110 224 100 224Z";
const POP=$("pop"),PZ=$("zsvg");let raf2=0;
function BLUEPRINT(id,W,H,spots){const S=$(id),k=W/1590;
 S.insertAdjacentHTML("beforeend",spots.map((p,i)=>`<g data-i="${i}"><circle class="hp" cx="${p[0]}" cy="${p[1]}" r="${16*k}"/><text class="hn" style="font-size:${20*k}px" x="${p[0]}" y="${p[1]+7*k}">${p[6]||i+1}</text></g>`).join(""));
 const place=e=>{const w=POP.offsetWidth,h=POP.offsetHeight;let x=e.clientX+28;if(x+w>innerWidth-10)x=e.clientX-28-w;POP.style.transform=`translate(${Math.max(10,x)}px,${Math.max(10,Math.min(e.clientY-40,innerHeight-h-10))}px)`};
 const hide=()=>{POP.hidden=true;S._g=null;S.querySelectorAll(".hp").forEach(c=>c.classList.remove("on"))};
 S.onmouseover=S.onclick=e=>{const g=e.target.closest("g[data-i]");if(!g){if(e.type=="click")hide();return}
  if(S._g===g){if(e.type=="click")place(e);return}S._g=g;const p=spots[g.dataset.i];
  S.querySelectorAll(".hp").forEach(c=>c.classList.toggle("on",c.parentNode==g));
  $("rinfo").innerHTML="<b>"+p[2]+"</b>"+lk(p[3]);const ov=p[5];$("zuse").setAttribute("href",ov?ov[0]:"#"+id+"d");POP.hidden=false;place(e);
  const t=p[4],t0=performance.now();cancelAnimationFrame(raf2);(function st(n){const q=Math.min((n-t0)/700,1),z=1-Math.pow(1-q,3);PZ.setAttribute("viewBox",(ov?[0,0,ov[1],ov[2]]:[0,0,W,H]).map((v,j)=>v+(t[j]-v)*z).join(" "));if(q<1)raf2=requestAnimationFrame(st)})(t0)};
 S.onmousemove=e=>{if(!POP.hidden&&e.target.closest("g[data-i]"))place(e)};
 S.onmouseout=e=>{const r=e.relatedTarget&&e.relatedTarget.closest&&e.relatedTarget.closest("g[data-i]");if(!r)hide()}}
