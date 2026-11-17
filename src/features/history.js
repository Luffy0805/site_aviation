/* ===== Bouton « Retour » ===== */
const HS=[location.hash];
addEventListener("hashchange",()=>{const h=location.hash;if(HS.length>1&&HS[HS.length-2]===h)HS.pop();else if(HS[HS.length-1]!==h)HS.push(h)});
document.addEventListener("click",e=>{const b=e.target.closest("a.back");if(b&&HS.length>1){e.preventDefault();history.back()}});
