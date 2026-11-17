/* ===== Curseur personnalisé, effet magnétique, inclinaison des cartes ===== */
let mx=0,my=0,rx=0,ry=0;const cu=document.querySelector(".cur"),rg=document.querySelector(".ring");
if(matchMedia("(pointer:fine)").matches){document.body.classList.add("fc");(function f(){rx+=(mx-rx)*.16;ry+=(my-ry)*.16;cu.style.transform=`translate(${mx}px,${my}px)`;rg.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(f)})()}
document.querySelectorAll(".bigsearch,#open,.hb,.logo,.nl a,.back").forEach(el=>{el.classList.add("mg");el.onmousemove=e=>{const r=el.getBoundingClientRect();el.style.translate=((e.clientX-r.left-r.width/2)*.3)+"px "+((e.clientY-r.top-r.height/2)*.3)+"px"};el.onmouseleave=()=>el.style.translate=""});
document.addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;rg.classList.toggle("h",!!e.target.closest("a,button,.sp,.hi,summary,.card,select"));
 const c=e.target.closest(".card,.plan");if(c){const r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;c.style.setProperty("--mx",x+"px");c.style.setProperty("--my",y+"px");
  if(c.classList.contains("card")&&!c.classList.contains("soon"))c.style.transform=`perspective(700px) rotateX(${(.5-y/r.height)*7}deg) rotateY(${(x/r.width-.5)*9}deg) translateY(-3px)`}
 const pl=$("plane");if(pl)pl.style.translate=((e.clientX/innerWidth-.5)*-26)+"px "+((e.clientY/innerHeight-.5)*-18)+"px"});
document.addEventListener("mouseout",e=>{const c=e.target.closest&&e.target.closest(".card");if(c&&!c.contains(e.relatedTarget))c.style.transform=""});
