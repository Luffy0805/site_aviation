/* ===== Fiche : Airbus A400M Atlas ===== */
FI.push({
  id:"a400m",
  c:"militaire",
  hide:1,
  kw:"atlas transport militaire airbus turbopropulseur fret",
  t:"Airbus A400M Atlas",
  d:"Le transporteur militaire européen à quatre turbopropulseurs.",
  sub:"Plus de fret qu’un C-130, des pistes sommaires, et la capacité de ravitailler en vol.",
  pres:["L’A400M Atlas est un avion de transport militaire à quatre turbopropulseurs, développé par Airbus (Airbus Defence and Space). Il est né pour remplacer les C-130 Hercules et les Transall C-160 : plus de charge, plus de portée, et la capacité de se poser sur des pistes sommaires que les avions à réaction ne peuvent pas utiliser.","Le contrat de lancement date de 2003. Le premier vol a eu lieu le 11 décembre 2009 à Séville, la certification européenne (EASA) en mars 2013 et la première livraison, à la France, le 1er août 2013, avec plusieurs années de retard sur le calendrier prévu.","Avec le kit adapté, il peut aussi ravitailler en vol et servir d’avion d’évacuation sanitaire. En France, les A400M sont basés à Orléans-Bricy (BA 123, voir {bases|Bases}). Pour les ravitailleurs spécialisés, voir l’{a330mrtt|A330 MRTT}."],
  spec:[
    ["Longueur","45,1 m"],
    ["Envergure","42,4 m"],
    ["Hauteur","14,7 m"],
    ["Masse maximale au décollage","141 t"],
    ["Charge utile maximale","37 t"],
    ["Moteurs","4 turbopropulseurs TP400-D6 (puissance non recoupée)"],
    ["Vitesse maximale","environ Mach 0,72, soit 780 km/h"],
    ["Plafond","environ 12 200 m"],
    ["Portée avec 37 t","environ 3 300 à 3 700 km, selon les sources"],
    ["Portée avec 20 t","environ 6 300 km (3 400 milles nautiques, valeur citée d’Airbus)"],
    ["Équipage","3 à 4 personnes"]
  ],
  tl:[
    ["2003","Contrat de lancement du programme."],
    ["26 juin 2008","Sortie d’usine du premier appareil de développement, à Séville."],
    ["11 décembre 2009","Premier vol, à Séville."],
    ["Mars 2013","Certification de l’EASA."],
    ["1er août 2013","Première livraison, à la France."],
    ["Novembre 2014","Entrée en service dans la Royal Air Force."],
    ["Décembre 2014","Première livraison à l’Allemagne."],
    ["Mai 2023","Fin des livraisons à la Royal Air Force (22 appareils)."]
  ],
  see:["{transport|Transport et ravitailleurs}","{a330mrtt|Airbus A330 MRTT}","{bases|Bases et porte-avions}","{rafale|Rafale}"],
  charts(){
    ADDTOP("a400m","Chiffres clés",el=>el.innerHTML=NUMS([["37 t","de charge utile maximale"],["141 t","de masse maximale au décollage"],["4","turbopropulseurs"],["11 déc. 2009","premier vol, à Séville"]]));
    ADD("a400m","Charge utile maximale, comparée (tonnes)",el=>BARS(el,[["C-130J",19.1,"environ 19 t"],["A400M",37,"37 t",1],["C-17",77.5,"77,5 t"]]),"A400M : Airbus ; C-17 : fiche de l’US Air Force ; C-130J : valeur de l’US Air Force pour la version standard, qui varie selon la source et la version.");
  }
});
