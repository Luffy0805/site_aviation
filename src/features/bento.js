/* ===== Bento : photo + tuiles de chiffres clés ===== */
function BENTO(sec){if(sec.dataset.bento)return;sec.dataset.bento=1;
 const figs=[...sec.children].find(c=>c.classList.contains("figs")&&!c.classList.contains("side")&&!c.classList.contains("row")),nb=[...sec.children].find(c=>c.classList.contains("blk")&&c.querySelector(".nums"));
 if(!figs||!nb)return;const tiles=[...nb.querySelectorAll(".nums > div")],fg=[...figs.querySelectorAll("figure")];if(tiles.length<2||!fg.length)return;
 const bt=document.createElement("div");bt.className="figs bento";fg[0].classList.add("b-main");bt.append(fg[0]);
 tiles.forEach((t,i)=>{if(i==2&&fg[1]){fg[1].classList.add("b-wide");bt.append(fg[1])}t.classList.add("b-tile");if(t.querySelector("b").textContent.length>9)t.querySelector("b").style.fontSize="1.5rem";bt.append(t)});
 if(tiles.length<3&&fg[1]){fg[1].classList.add("b-wide");bt.append(fg[1])}
 if(!fg[1]){const rem=tiles.slice(2),sp=rem.length==1?[4]:rem.length==2?[2,2]:rem.length==3?[1,1,2]:null;if(sp)rem.forEach((t,i)=>t.style.gridColumn="span "+sp[i])}
 const left=fg.slice(2);if(left.length){const g=document.createElement("div");g.className="figs n"+left.length;left.forEach(f=>g.append(f));figs.replaceWith(bt);bt.after(g)}else figs.replaceWith(bt);
 nb.remove()}
(function(){const o=PHOTO;window.PHOTO=function(id){o(id);const s=document.getElementById(id);if(s&&s.dataset.ph){BENTO(s);fxSec(s)}}})();
PHOTO(location.hash.slice(1));
