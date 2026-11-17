/* ===== Fiche : Lockheed Martin F-22 Raptor ===== */
FI.push({
  id:"f22",
  c:"militaire",
  t:"Lockheed Martin F-22 Raptor",
  d:"Le chasseur de supériorité aérienne furtif américain.",
  sub:"Réservé à l’US Air Force : le Congrès en interdit l’exportation.",
  pres:["Le F-22 Raptor est un chasseur de supériorité aérienne de 5e génération, furtif, développé par Lockheed Martin et Boeing. Il est conçu pour dominer le ciel : supercroisière, poussée vectorielle, radar discret et grande agilité.","Seuls 187 appareils de série ont été construits. Voir {savoirs|Savoirs} pour la supercroisière et la poussée vectorielle."],
  spec:[
    ["Longueur","18,9 m"],
    ["Envergure","13,6 m"],
    ["Masse maximale","38 t"],
    ["Moteurs","2 Pratt & Whitney F119, environ 156 kN avec postcombustion chacun"],
    ["Vitesse maximale","environ Mach 2,25"],
    ["Supercroisière","environ Mach 1,5 à 1,8"],
    ["Armement interne","6 AIM-120 et 2 AIM-9"]
  ],
  tl:[
    ["1990","Premier vol du prototype YF-22."],
    ["1991","Le YF-22 est choisi face au YF-23."],
    ["7 septembre 1997","Premier vol du F-22 de série."],
    ["2005","Entrée en service dans l’US Air Force."],
    ["2011","Fin de la production, à 187 appareils de série."],
    ["2012","Livraison du dernier appareil.",1]
  ],
  see:["{chasseurs|Comparatif des chasseurs}","{savoirs|Savoirs}","{rafale|Rafale}"],
  charts(){
    ADDTOP("f22","Chiffres clés",el=>el.innerHTML=NUMS([["187","exemplaires de série"],["195","avec les appareils d’essai"],["0","exporté : interdit par le Congrès"],["2011","fin de la production"]]));
    ADD("f22","Pourquoi si peu ? 187 exemplaires, face aux autres chasseurs occidentaux",el=>BARS(el,NB.map(r=>r[0]=="F-22"?[...r,1]:r)),"La production s’arrête en 2011 : le coût très élevé et l’interdiction d’exporter l’ont limitée. Ordres de grandeur : exemplaires produits, livrés ou commandés.");
  }
});
