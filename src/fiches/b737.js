/* ===== Fiche : Boeing 737 ===== */
FI.push({
  id:"b737",
  c:"civil",
  t:"Boeing 737",
  d:"Le monocouloir le plus livré avec l’A320 : plus de 12 000 exemplaires.",
  sub:"De 1967 au 737 MAX : 12 134 livrés à fin juin 2025.",
  pres:["Le Boeing 737 est l’un des deux avions de ligne les plus produits de l’histoire : fin juin 2025, il comptait 12 134 livraisons contre 12 097 pour la famille A320, qui le dépasse ensuite en 2025. Premier vol en 1967 ; générations Original, Classic, Next Generation et MAX.","Le 737 MAX est cloué au sol de mars 2019 à fin 2020, après deux accidents mortels (Lion Air en 2018, Ethiopian Airlines en 2019) liés à un système de commande de vol. Il reprend ensuite du service."],
  spec:[
    ["Longueur","39,5 m (737-800)"],
    ["Envergure","35,8 m"],
    ["Masse maximale","environ 79 t"],
    ["Moteurs","CFM56-7B"],
    ["Croisière","environ Mach 0,785"],
    ["Passagers","160 à 190"],
    ["Autonomie","environ 5 400 km"]
  ],
  tl:[
    ["9 avril 1967","Premier vol du 737-100."],
    ["1968","Entrée en service avec Lufthansa."],
    ["1998","Entrée en service du 737-800, de la génération Next Generation."],
    ["29 janvier 2016","Premier vol du 737 MAX."],
    ["2017","Mise en service du 737 MAX."],
    ["2019","Immobilisation mondiale du 737 MAX, jusqu’à fin 2020."],
    ["2024","Janvier : une porte de cabine se détache d’un 737 MAX 9 d’Alaska Airlines en vol.",1],
    ["2025","Boeing livre 600 avions, dont 447 de la famille 737. L’autorité américaine (FAA) autorise la production de 42 avions par mois, contre 38 auparavant. Environ 4 870 commandes de 737 MAX restent à livrer.",1]
  ],
  see:["{liners|Avions de ligne}","{constructeurs|Constructeurs civils}","{a320|Airbus A320}"],
  charts(){
    ADD("b737","Le duel des monocouloirs : famille A320 contre famille 737",el=>GBARS(el,[["Livrés (fin juin 2025)",12097,12134],["Ventes totales : livrés + commandes (fin juin 2025)",19276,17007]],["Famille A320","Famille 737"]),"Fin juin 2025, le 737 avait encore 37 livraisons d’avance. Sur l’année 2025, la famille A320 livre 607 appareils contre 447 pour le 737 : elle passe donc devant. Les ventes totales sont déjà nettement plus élevées pour l’A320.");
    ADDTOP("b737","Chiffres clés",el=>el.innerHTML=NUMS([["12 134","737 livrés depuis 1967 (fin juin 2025)"],["17 007","ventes totales : livrés + commandes (fin juin 2025)"],["4 867","737 MAX en carnet de commandes"],["447","737 livrés en 2025, sur 600 avions Boeing"]]));
    ADD("b737","Les 600 livraisons Boeing de 2025, par programme",el=>DONUT(el,[["737",447],["787",88],["777",35],["767",30]],["600","livrés en 2025"]));
  }
});
