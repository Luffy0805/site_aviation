/* ===== Fiche : Airbus A320 ===== */
FI.push({
  id:"a320",
  c:"civil",
  t:"Airbus A320",
  d:"Le monocouloir à commandes de vol électriques.",
  sub:"Un des avions les plus vendus de l’histoire.",
  pres:["L’Airbus A320 est un avion de ligne monocouloir moyen-courrier, devenu l’un des plus vendus de l’histoire avec ses variantes A318, A319, A321 et la génération neo.","Il a été le premier avion de ligne commercial à commandes de vol électriques, ce qui a changé la conception des cockpits. Il est assemblé à Toulouse, Hambourg, Tianjin et Mobile."],
  spec:[
    ["Longueur","37,57 m"],
    ["Envergure","34,10 m"],
    ["Masse maximale","78 t"],
    ["Moteurs","CFM56 ou IAE V2500"],
    ["Croisière","Mach 0,78"],
    ["Passagers","150 à 180"],
    ["Autonomie","environ 6 100 km"]
  ],
  tl:[
    ["1984","Lancement du programme."],
    ["22 février 1987","Premier vol."],
    ["1988","Entrée en service avec Air France."],
    ["2010","Lancement de la version neo."],
    ["2016","Mise en service de l’A320neo, avec Lufthansa."],
    ["2019","Record de 863 livraisons pour Airbus, tous modèles.",1],
    ["2025","793 livraisons, dont 607 de la famille A320 ; 8 754 monocouloirs en carnet.",1],
    ["2027","Objectif : 75 A320 produits par mois.",1]
  ],
  see:["{liners|Avions de ligne}","{constructeurs|Constructeurs civils}","{b737|Boeing 737}"],
  charts(){
    ADD("a320","Le duel des monocouloirs : famille A320 contre famille 737",el=>GBARS(el,[["Livrés (fin juin 2025)",12097,12134],["Ventes totales : livrés + commandes (fin juin 2025)",19276,17007]],["Famille A320","Famille 737"]),"Fin juin 2025, le 737 avait encore 37 livraisons d’avance. Sur l’année 2025, la famille A320 livre 607 appareils contre 447 pour le 737 : elle passe donc devant. Les ventes totales sont déjà nettement plus élevées pour l’A320.");
    ADDTOP("a320","Chiffres clés",el=>el.innerHTML=NUMS([["793","livrés par Airbus en 2025"],["91","clients livrés en 2025"],["8 754","monocouloirs en carnet (fin 2025)"],["863","record de livraisons Airbus (2019)"]]));
    ADD("a320","Les 793 livraisons Airbus de 2025, par programme",el=>DONUT(el,[["Famille A320",607],["A220",93],["A350",57],["A330",36]],["793","livrés en 2025"]));
  }
});
