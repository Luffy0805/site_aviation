/* ===== Changement de page : View Transitions, retour en haut ===== */
let vtp=Promise.resolve();
{const clr=()=>{document.documentElement.classList.remove("vt-card");document.querySelectorAll("[data-vtn]").forEach(e=>{e.style.viewTransitionName="";e.removeAttribute("data-vtn")})};
 const go=()=>{const de=document.documentElement;de.style.scrollBehavior="auto";const z=()=>scrollTo({top:0,left:0,behavior:"instant"});z();route();z();clr();requestAnimationFrame(()=>{de.style.scrollBehavior=""})};
 addEventListener("hashchange",()=>{const nx=document.getElementById(location.hash.slice(1)),heavy=!!document.querySelector("[data-p]:not([hidden]) .plan.bp")||!!(nx&&nx.querySelector(".plan.bp"));
  if(document.startViewTransition&&!RM&&!heavy){try{let tm;const t=document.startViewTransition(()=>{clearTimeout(tm);go()});tm=setTimeout(()=>{try{t.skipTransition()}catch(e){}},450);[t.ready,t.updateCallbackDone].forEach(x=>x&&x.catch&&x.catch(()=>{}));vtp=t.finished.catch(()=>{});return}catch(e){}}
  vtp=Promise.resolve();go()});
 if(document.startViewTransition&&!RM)document.addEventListener("click",e=>{const c=e.target.closest("a.card");if(!c||c.classList.contains("soon"))return;const h=c.querySelector("h3");if(!h)return;h.style.viewTransitionName="ttl";h.dataset.vtn=1;document.documentElement.classList.add("vt-card");setTimeout(clr,900)},true)}
