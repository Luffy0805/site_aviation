/* ===== Plans : projecteur, grille, réticule ===== */
const hud=(pl,e)=>{const h=pl.querySelector(".hud"),sv=pl.querySelector("svg[id$=plan]");if(!h||!sv||sv.id!="cplan")return;const m=sv.getScreenCTM();if(!m)return;const p=new DOMPoint(e.clientX,e.clientY).matrixTransform(m.inverse());
 if(p.x<14||p.x>1199){h.textContent="";return}h.textContent="x "+((p.x-14)*261/1185).toFixed(0)+" m  ·  y "+Math.max(0,(p.y-104)*261/1185).toFixed(0)+" m"};
document.addEventListener("pointermove",e=>{const t=e.target.closest&&e.target.closest(".plan.bp,.bento>*,#hero");if(!t)return;const r=t.getBoundingClientRect();t.style.setProperty("--mx",(e.clientX-r.left)+"px");t.style.setProperty("--my",(e.clientY-r.top)+"px");if(t.classList.contains("bp"))hud(t,e)});
document.querySelectorAll(".plan").forEach(p=>{if(p.querySelector("svg[id$=plan]")){p.classList.add("bp");p.insertAdjacentHTML("beforeend",'<div class="hud"></div>')}});
