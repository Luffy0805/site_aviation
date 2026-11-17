/* ===== Fiche : Airbus A380 ===== */
FI.push({
  id:"a380",
  c:"civil",
  hide:1,
  kw:"superjumbo airbus a380-800 double pont emirates",
  t:"Airbus A380",
  d:"Le plus grand avion de ligne jamais construit.",
  sub:"Deux ponts complets, quatre réacteurs, jusqu’à 853 places certifiées.",
  pres:["L’A380 est le plus grand avion de ligne jamais construit : deux ponts sur toute la longueur, quatre réacteurs, de 525 places en trois classes à 853 en configuration maximale certifiée.","Le programme est lancé le 19 décembre 2000. Le prototype est présenté à Toulouse le 18 janvier 2005 et vole pour la première fois le 27 avril 2005. Singapore Airlines reçoit le premier appareil le 15 octobre 2007 et l’exploite en vol commercial dès le 25 octobre (Singapour–Sydney).","Le 14 février 2019, Airbus annonce l’arrêt de la production, après la réduction de la dernière commande d’Emirates : les compagnies ont préféré les biréacteurs comme l’A350, le 777 ou le 787. Le 251e et dernier A380 est livré à Emirates le 16 décembre 2021."],
  spec:[
    ["Longueur","72,7 m"],
    ["Envergure","79,8 m"],
    ["Hauteur","24,1 m"],
    ["Masse maximale au décollage","560 t ou 575 t selon la version"],
    ["Moteurs","4 turboréacteurs : Engine Alliance GP7200 ou Rolls-Royce Trent 900 (ce dernier de mémoire)"],
    ["Passagers","525 en trois classes, jusqu’à 853 au maximum certifié"],
    ["Portée avec passagers","environ 15 000 km (8 000 milles nautiques)"],
    ["Croisière","Mach 0,85"],
    ["Surface des deux ponts","environ 550 m²"],
    ["Exemplaires livrés","251, à 14 clients"]
  ],
  tl:[
    ["19 décembre 2000","Lancement du programme."],
    ["18 janvier 2005","Présentation du prototype à Toulouse."],
    ["27 avril 2005","Premier vol."],
    ["15 octobre 2007","Première livraison, à Singapore Airlines."],
    ["25 octobre 2007","Premier vol commercial, Singapour–Sydney."],
    ["14 février 2019","Airbus annonce l’arrêt de la production."],
    ["16 décembre 2021","Dernière livraison, la 251e, à Emirates."]
  ],
  see:["{liners|Avions de ligne}","{constructeurs|Constructeurs civils}","{a320|Airbus A320}","{concorde|Concorde}"],
  charts(){
    ADDTOP("a380","Chiffres clés",el=>el.innerHTML=NUMS([["251","A380 livrés, à 14 clients"],["123","livrés à Emirates, dernier compris"],["853","places au maximum certifié"],["79,8 m","d’envergure"]]));
    ADD("a380","Emirates, premier client",el=>DONUT(el,[["Emirates",123],["13 autres compagnies",128]],["251","livrés"]),"Source : Airbus, A380 Facts and Figures (février 2022).");
  }
});
