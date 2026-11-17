/* ===== Titres qui se décodent ===== */
function scr(el){const t=el.dataset.t||(el.dataset.t=el.textContent),ch="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let i=0;clearInterval(el._i);el._i=setInterval(()=>{el.textContent=t.split("").map((c,k)=>c==" "||k<i?c:ch[Math.random()*ch.length|0]).join("");if(i++>=t.length){clearInterval(el._i);el.textContent=t}},26)}
function scrAll(){document.querySelectorAll("section:not([hidden]) h2,.hero:not([hidden]) h1").forEach(scr)}
addEventListener("hashchange",scrAll);scrAll();
