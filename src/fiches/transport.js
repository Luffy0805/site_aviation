/* ===== Fiche : Avions de transport et ravitailleurs ===== */
FI.push({
  id:"transport",
  c:"militaire",
  hide:1,
  kw:"transport ravitailleur tanker a400m mrtt c-130 hercules c-17 globemaster fret",
  t:"Avions de transport et ravitailleurs",
  d:"A400M, A330 MRTT, C-130J, C-17 : charges et comparatifs.",
  sub:"Ceux qui déplacent le fret, les troupes et le carburant des autres avions.",
  pres:["Un avion de transport militaire déplace des troupes, des véhicules et du fret. Un ravitailleur donne du carburant en vol aux chasseurs et aux gros avions, ce qui multiplie leur rayon d’action. Certains font les deux, comme l’{a330mrtt|A330 MRTT} ou l’{a400m|A400M}.","Les charges utiles varient selon la source et la configuration. Les chiffres du tableau viennent de fiches de l’US Air Force (C-17), d’Airbus (A400M, MRTT) et de comparatifs publics (C-130J) : à lire comme des ordres de grandeur."],
  tab:[
    ["Appareil","Premier vol","Charge utile max","Masse max au décollage","Longueur","Envergure"],
    [
      ["{a400m|Airbus A400M Atlas}","2009","37 t","141 t","45,1 m","42,4 m"],
      ["Lockheed C-130J Super Hercules","1996 (version J)","environ 19 t","environ 74,5 t","29,8 m","40,4 m"],
      ["Boeing C-17 Globemaster III","1991","77,5 t","265 t","53 m","51,75 m"],
      ["{a330mrtt|Airbus A330 MRTT}","2007","jusqu’à 45 t, plus 111 t de carburant","233 t (242 t pour le MRTT+)","58,8 m","60,3 m"]
    ]
  ],
  tl:[
    ["1954","Premier vol du C-130 Hercules d’origine (le C-130J, version modernisée, vole en 1996)."],
    ["1991","Premier vol du C-17 Globemaster III."],
    ["2007","Premier vol de l’A330 MRTT."],
    ["11 décembre 2009","Premier vol de l’A400M."],
    ["1er août 2013","Première livraison d’un A400M, à la France."]
  ],
  see:["{a400m|Airbus A400M}","{a330mrtt|Airbus A330 MRTT}","{bases|Bases et porte-avions}","{rafale|Rafale}"],
  charts(){
    ADD("transport","Charge utile maximale (tonnes)",el=>BARS(el,[["C-130J",19.1,"environ 19 t"],["A400M",37,"37 t"],["A330 MRTT",45,"jusqu’à 45 t"],["C-17",77.5,"77,5 t",1]]),"Sources : fiches de l’US Air Force (C-17), Airbus (A400M, MRTT) et comparatifs publics (C-130J).");
  }
});
