/* ===== Moteur d'effets (IntersectionObserver) ===== */
const FX=(()=>{const reg=new WeakMap(),mk=m=>new IntersectionObserver(es=>es.forEach(e=>{const el=e.target,h=reg.get(el);if(!h)return;el._v=e.isIntersecting;
  if(e.isIntersecting)Promise.race([vtp,new Promise(r=>setTimeout(r,650))]).then(()=>{if(el._v&&!el._on){el._on=1;h.on(el)}});else if(el._on){el._on=0;h.off(el)}}),m),
 ios={d:mk({rootMargin:"0px 0px -16% 0px"}),p:mk({rootMargin:"0px 0px -8% 0px",threshold:.35})};
 return{add(el,on,off,k){if(reg.has(el))return;reg.set(el,{on:on,off:off});ios[k||"d"].observe(el)}}})();
document.querySelectorAll(".rv").forEach(el=>{if(RM)el.classList.add("in");else FX.add(el,e=>e.classList.add("in"),e=>e.classList.remove("in"))});
