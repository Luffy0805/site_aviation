/* ===== Photos et tuiles : effet d'arrivée ===== */
function fxSec(sec){sec.querySelectorAll(".figs figure,.bento .b-tile").forEach(f=>{if(f._fx)return;f._fx=1;if(RM){f.classList.add("vis");return}
 const i=[...f.parentNode.children].indexOf(f);FX.add(f,e=>{e.style.transitionDelay=Math.min(i,6)*.12+"s";e.classList.add("vis");setTimeout(()=>{e.style.transitionDelay=""},1600)},e=>{e.classList.remove("vis")})})}
