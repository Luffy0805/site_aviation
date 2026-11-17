/* ===== Fiche : Saab Gripen ===== */
FI.push({
  id:"gripen",
  c:"militaire",
  hide:1,
  kw:"saab jas 39 gripen suede chasseur monomoteur meteor",
  t:"Saab Gripen",
  d:"Le chasseur suédois léger, économique, né pour opérer sans grande base.",
  sub:"Un monomoteur à aile delta et canards, pensé pour coûter peu à exploiter.",
  pres:["Le Saab JAS 39 Gripen est un chasseur multirôle suédois, léger et monomoteur, conçu pour coûter peu à exploiter et pouvoir opérer depuis des routes. Le contrat de développement date de 1982, le prototype vole le 9 décembre 1988 et l’avion entre en service en Suède en 1996-1997.","La nouvelle génération, le Gripen E, vole pour la première fois le 15 juin 2017 à Linköping. Elle reçoit un moteur General Electric F414G, un radar à antenne active et davantage de carburant interne (environ 30 % de plus d’après migflug). Saab annonce jusqu’à sept missiles Meteor et deux IRIS-T emportés.","Comme le {rafale|Rafale} et le {typhoon|Typhoon}, il a une aile delta et des plans canard, mais il n’a qu’un moteur. Voir le comparatif dans {chasseurs|Chasseurs}."],
  spec:[
    ["Longueur","15,2 m"],
    ["Envergure","8,6 m"],
    ["Hauteur","4,5 m"],
    ["Masse maximale au décollage","environ 16,5 t"],
    ["Moteur","1 General Electric F414G, environ 98 kN avec postcombustion"],
    ["Vitesse maximale","environ Mach 2 (annoncée)"],
    ["Plafond","environ 15 000 m"],
    ["Points d’emport","10"],
    ["Canon","1 Mauser BK-27 de 27 mm"],
    ["Missiles air-air","Meteor, IRIS-T"],
    ["Prix unitaire","estimé entre 30 et 85 millions de dollars selon la version (estimation, pas un chiffre officiel)"]
  ],
  tl:[
    ["1982","Contrat de développement, pour remplacer le Viggen et le Draken."],
    ["9 décembre 1988","Premier vol du prototype."],
    ["1996","Entrée en service en Suède (1996-1997 selon les sources)."],
    ["2005","Location de Gripen C/D à la République tchèque puis à la Hongrie, pour la police du ciel de l’OTAN (2005-2006)."],
    ["15 juin 2017","Premier vol du Gripen E, 40 minutes depuis Linköping."],
    ["Novembre 2019","Premier vol du premier Gripen E de série."],
    ["20 octobre 2025","Entrée en service officielle du Gripen E en Suède, à Såtenäs (d’après migflug, à confirmer)."]
  ],
  see:["{chasseurs|Comparatif des chasseurs}","{rafale|Rafale}","{typhoon|Eurofighter Typhoon}","{f35|Lockheed Martin F-35}"],
  charts(){
    ADDTOP("gripen","Chiffres clés",el=>el.innerHTML=NUMS([["117","Gripen E commandés, d’après Saab"],["1","moteur F414G, environ 98 kN"],["Mach 2","vitesse maximale annoncée"],["7 + 2","Meteor et IRIS-T emportables (Saab)"]]));
    ADD("gripen","Gripen E commandés par pays",el=>BARS(el,[["Suède",60],["Brésil",36],["Colombie",17],["Thaïlande",4]]),"Source : page Gripen E de Saab, sans date de mise à jour. Le total de 117 est la somme de ces quatre commandes.");
  }
});
