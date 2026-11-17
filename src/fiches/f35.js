/* ===== Fiche : Lockheed Martin F-35 ===== */
FI.push({
  id:"f35",
  c:"militaire",
  t:"Lockheed Martin F-35",
  d:"Le chasseur furtif de 5e génération, en trois versions.",
  sub:"Furtivité, fusion de données et très large diffusion chez les alliés des États-Unis.",
  pres:["Le F-35 Lightning II est un chasseur monomoteur furtif de 5e génération, produit par Lockheed Martin. Il existe en trois versions : F-35A (décollage classique), F-35B (décollage court et atterrissage vertical) et F-35C (porte-avions).","Sa force est la furtivité et la fusion des données de ses capteurs, qui donnent au pilote une vision globale du champ de bataille. Ses points faibles sont son coût d’exploitation et une agilité plus limitée."],
  spec:[
    ["Longueur","15,7 m"],
    ["Envergure","10,7 m (versions A et B)"],
    ["Masse maximale au décollage","31,8 t (F-35A)"],
    ["Moteur","Pratt & Whitney F135, environ 190 kN avec postcombustion"],
    ["Vitesse maximale","environ Mach 1,6"],
    ["Charge d’armement","environ 8 t"],
    ["Radar","AN/APG-81, à antenne active"]
  ],
  tl:[
    ["1996","Début du programme Joint Strike Fighter."],
    ["2001","Lockheed Martin l’emporte face à Boeing."],
    ["15 décembre 2006","Premier vol du F-35A."],
    ["2015","Mise en service du F-35B (Marine Corps)."],
    ["2016","Mise en service du F-35A (US Air Force)."],
    ["2018","Premier emploi au combat, par Israël."],
    ["2019","Mise en service du F-35C (US Navy)."],
    ["2023","Plus de 1 000 appareils livrés."],
    ["2024","La Roumanie devient le 20e pays du programme (novembre).",1],
    ["2025","Record annuel : 191 appareils livrés, contre 142 auparavant.",1],
    ["2026","27 septembre : 1 387 appareils livrés, 274 en carnet.",1],
    ["2026","22 octobre : le Pentagone s’engage pour 10 ans, avec un cadre de 1 560 appareils (lots 21 à 30).",1]
  ],
  see:["{chasseurs|Comparatif des chasseurs}","{rafale|Rafale}","{porte-avions|Porte-avions}"],
  charts(){
    ADDTOP("f35","Chiffres clés",el=>el.innerHTML=NUMS([["1 387","livrés au 27 septembre 2026"],["274","en carnet de commandes"],["20","pays participants"],["191","livrés en 2025, record annuel"]]));
    ADD("f35","Les États-Unis face aux alliés (commandes cumulées)",el=>DONUT(el,[["États-Unis (objectif)",2456],["Autres pays (environ)",997]],["3 453","commandes"]),"Décompte publié en 2026 (17 pays) : ordres de grandeur.");
    ADD("f35","Principaux clients hors États-Unis (appareils commandés ou objectifs)",el=>BARS(el,[["Japon",147],["Royaume-Uni",138],["Italie",90],["Canada",88],["Israël",75],["Australie",72],["Finlande",64],["Corée du Sud",60],["Pays-Bas",52],["Norvège",52],["Suisse",36],["Allemagne",35],["Belgique",34],["Pologne",32],["Roumanie",32],["Danemark",27],["Tchéquie",24],["Singapour",20],["Grèce",20]]),"Certains chiffres sont des objectifs ou des commandes partielles, et varient selon les sources. Recoupés : Italie 90, Canada 88, Finlande 64, Belgique 34, Pologne 32, Danemark 27, Tchéquie 24.");
  }
});
