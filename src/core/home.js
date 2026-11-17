/* ===== Accueil : photo du héros (sinon la silhouette SVG reste) ===== */
const IMAGES={hero:"images/rafale_hero.jpg"}; // optionnelle
(()=>{const i=new Image();i.onload=()=>{const h=document.getElementById("hero");h.style.backgroundImage='url("'+IMAGES.hero+'")';h.classList.add("photo");document.getElementById("plane").style.display="none"};i.src=IMAGES.hero})();
