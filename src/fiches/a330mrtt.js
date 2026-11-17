/* ===== Fiche : Airbus A330 MRTT ===== */
FI.push({
  id:"a330mrtt",
  c:"militaire",
  hide:1,
  kw:"mrtt ravitailleur tanker phenix istres a330",
  t:"Airbus A330 MRTT",
  d:"Le ravitailleur en vol qui emporte 111 tonnes de carburant.",
  sub:"Un A330 transformé en station-service volante et en avion de transport.",
  pres:["L’A330 MRTT (Multi Role Tanker Transport) est un avion ravitailleur et de transport dérivé de l’Airbus A330-200. Son atout : il emporte environ 111 tonnes de carburant dans ses ailes et son caisson central, sans réservoir supplémentaire en soute, d’après Airbus.","Il ravitaille les chasseurs, comme le {rafale|Rafale}, avec des nacelles sous les ailes, et les gros avions avec une perche rigide à l’arrière. Il peut aussi transporter jusqu’à 45 tonnes de fret ou environ 300 passagers.","Premier vol le 15 juin 2007, mise en service en 2011. Parmi ses clients : le Royaume-Uni, l’Australie, l’Arabie saoudite, Singapour, les Émirats arabes unis, le Qatar et la France. Une version MRTT+, fondée sur l’A330-800, est prévue pour la fin des années 2020. Les MRTT français sont à Istres (BA 125, voir {bases|Bases})."],
  spec:[
    ["Longueur","58,8 m"],
    ["Envergure","60,3 m"],
    ["Masse maximale au décollage","233 t (242 t pour le MRTT+)"],
    ["Carburant transportable","111 t"],
    ["Charge utile","jusqu’à 45 t"],
    ["Passagers","environ 280 à 300"],
    ["Débit de la perche","jusqu’à 3 600 kg par minute"],
    ["Débit des nacelles","environ 1 300 kg par minute"],
    ["Portée avec 20 t de charge","environ 12 000 km"],
    ["Portée maximale","environ 14 800 km"],
    ["Équipage","2 pilotes et 1 opérateur de ravitaillement, plus l’équipage de mission"]
  ],
  tl:[
    ["15 juin 2007","Premier vol."],
    ["2011","Première livraison et entrée en service."],
    ["30 septembre 2016","Premier vol du MRTT à la nouvelle norme, renforcée et modernisée."],
    ["Début 2025","Airbus compte 82 commandes de 15 nations."],
    ["2026","Airbus indique 91 commandes et 67 livraisons."]
  ],
  see:["{transport|Transport et ravitailleurs}","{a400m|Airbus A400M}","{rafale|Rafale}","{bases|Bases et porte-avions}"],
  charts(){
    ADDTOP("a330mrtt","Chiffres clés",el=>el.innerHTML=NUMS([["111 t","de carburant, sans réservoir en soute"],["45 t","de charge utile maximale"],["91","commandes en 2026 (67 livrées), d’après Airbus"],["3 600 kg/min","de débit maximal de la perche"]]));
    ADD("a330mrtt","Distance pour livrer 45 t de carburant (milles nautiques)",el=>BARS(el,[["KC-46",1500],["A330 MRTT",2000,"2 000",1],["A330 MRTT+",2160]]),"Comparaison tirée d’un document commercial d’Airbus (100 000 lb de carburant livrés) : c’est donc l’argument du constructeur, pas une mesure indépendante.");
  }
});
