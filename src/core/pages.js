/* ===== Registre des pages et routage par #hash =====
   Chaque page est un élément [data-p]. L'accueil = le héros + la section #rubriques (data-p="home").
   Les pages créées en JS (fiches, aéroports) s'ajoutent à PG elles-mêmes. */
const PG=[...document.querySelectorAll("header[data-p],section")];
PG.forEach(el=>{if(!el.dataset.p){el.dataset.p=el.id;el.insertAdjacentHTML("afterbegin",'<a class="back" href="#">← Retour</a>')}});
function route(){let id=location.hash.slice(1);if(!PG.some(e=>e.dataset.p==id))id="home";
  PG.forEach(e=>e.hidden=e.dataset.p!=id);scrollTo(0,0)}
/* Le déclenchement sur « hashchange » est dans features/page-transition.js (fondu + retour en haut). */
