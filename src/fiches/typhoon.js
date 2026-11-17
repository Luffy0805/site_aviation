/* ===== Fiche : Eurofighter Typhoon ===== */
FI.push({
  id:"typhoon",
  c:"militaire",
  t:"Eurofighter Typhoon",
  d:"Le chasseur européen bimoteur à aile delta.",
  sub:"Le concurrent européen du {rafale|Rafale}, construit par un consortium de quatre pays.",
  pres:["Le Typhoon est un chasseur bimoteur à aile delta et plans canard, construit par un consortium européen (Airbus, BAE Systems et Leonardo). Il est utilisé par le Royaume-Uni, l’Allemagne, l’Italie et l’Espagne, puis par l’Autriche, l’Arabie saoudite, Oman, le Koweït et le Qatar.","Sa formule rappelle celle du {rafale|Rafale}, car les deux avions sont nés du même projet européen. La France l’a quitté en 1985 pour construire son propre appareil.","C’est un excellent intercepteur : rapide, puissant, armé de missiles Meteor. Les versions récentes reçoivent un radar à antenne active, le Captor-E."],
  spec:[
    ["Longueur","15,96 m"],
    ["Envergure","10,95 m"],
    ["Hauteur","5,28 m"],
    ["Masse maximale au décollage","23,5 t"],
    ["Moteurs","2 Eurojet EJ200, environ 90 kN avec postcombustion chacun"],
    ["Vitesse maximale","environ Mach 2"],
    ["Points d’emport","13"],
    ["Radar","Captor-M, puis Captor-E (antenne active)"]
  ],
  tl:[
    ["1985","La France quitte le programme européen, qui continue à quatre pays."],
    ["1986","Création du consortium industriel Eurofighter."],
    ["27 mars 1994","Premier vol du prototype allemand DA1."],
    ["2003","Entrée en service, avec les premières livraisons aux forces aériennes britannique, allemande, italienne et espagnole."],
    ["2007","Contrat saoudien pour 72 appareils."],
    ["2011","Premières missions de combat, en Libye."],
    ["2017","Contrat du Qatar pour 24 appareils."],
    ["2020","L’Allemagne commande 38 Typhoon Tranche 4 (novembre).",1],
    ["2024","L’Espagne commande 25 Typhoon de plus (Halcón II) et l’Italie jusqu’à 24.",1],
    ["2025","Octobre : l’Allemagne commande 20 Tranche 5 ; accord turc pour 20 appareils neufs et 24 d’occasion (12 d’Oman, 12 du Qatar).",1],
    ["2026","29 janvier : la flotte dépasse 1 million d’heures de vol ; 769 commandés par 10 pays.",1]
  ],
  see:["{rafale|Rafale}","{chasseurs|Comparatif des chasseurs}"],
  charts(){
    ADDTOP("typhoon","Chiffres clés",el=>el.innerHTML=NUMS([["769","commandés par 10 pays (consortium)"],["613 à 617","livrés début 2026"],["1 million","d’heures de vol (29 janvier 2026)"],["2 millions","d’heures de vol pour le moteur EJ200"]]));
    ADD("typhoon","Qui l’a commandé ? (données Airbus, en appareils)",el=>DONUT(el,[["Allemagne",181],["Royaume-Uni",160],["Espagne",118],["Italie",112],["Arabie saoudite",72],["Koweït",28],["Qatar",24],["Turquie",20],["Autriche",15],["Oman",12]],["742","appareils"]),"Le consortium annonce 769 commandes au total. La Turquie a aussi accepté 24 appareils d’occasion (12 d’Oman, 12 du Qatar).");
    ADD("typhoon","Commandés contre livrés, par pays",el=>GBARS(el,[["Allemagne",181,143],["Royaume-Uni",160,160],["Espagne",118,73],["Italie",112,96],["Arabie saoudite",72,72],["Koweït",28,21],["Qatar",24,22],["Turquie",20,0],["Autriche",15,15],["Oman",12,12]],["Commandés","Livrés"]));
  }
});
