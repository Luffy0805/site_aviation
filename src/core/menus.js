/* ===== Menus : catégories (Militaire / Civil / Concept) et cartes d'accès direct =====
   Un id connu = carte vers la page. Un [titre, description] = case « en préparation ». */
const CAT={
  militaire:[["rafale"],["mirage"],["typhoon"],["f35"],["f22"],["dassault"],["chasseurs"],["missiles"],["bases"],["porte-avions"],["transport"],["drones"]],
  civil:[["constructeurs"],["liners"],["a380"],["a320"],["b737"],["concorde"],["compagnies"],["aeroports"]],
  concept:[["patrouilles"],["atmosphere"],["savoirs"],["convertisseur"],["records"],["Quiz","Teste tes connaissances"]]};
Object.keys(CAT).forEach(k=>{$("g-"+k).innerHTML=CAT[k].map(x=>{const r=RUBRIQUES.find(y=>y.id==x[0]);return r?`<a class="card" href="#${r.id}"><h3>${r.t}</h3><p>${r.d}</p></a>`:`<div class="card soon"><h3>${x[0]}</h3><p>${x[1]}</p><i>en préparation</i></div>`}).join("")});
$("cats").innerHTML=[["militaire","Militaire","Chasseurs, constructeurs, bases, porte-avions."],["civil","Civil","Constructeurs, avions de ligne, compagnies."],["concept","Concept","Patrouilles, atmosphère, notions de vol."]].map(c=>`<a class="card big" href="#${c[0]}"><h3>${c[1]}</h3><p>${c[2]}</p></a>`).join("");
$("cards").innerHTML=RUBRIQUES.filter(r=>!r.nh).map(r=>`<a class="card${r.big?" big":""}" href="#${r.id}"><h3>${r.t}</h3><p>${r.d}</p></a>`).join("");
route();
