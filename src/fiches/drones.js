/* ===== Fiche : Drones ===== */
FI.push({
  id:"drones",
  c:"militaire",
  hide:1,
  kw:"drone reaper mq-9 bayraktar tb2 neuron ucav male",
  t:"Drones",
  d:"MQ-9 Reaper, Bayraktar TB2, nEUROn : de la surveillance au drone furtif.",
  sub:"Des aéronefs sans pilote à bord, pour surveiller, frapper ou préparer l’avion de combat de demain.",
  pres:["Un drone est un aéronef sans pilote à bord, piloté à distance ou en partie autonome. Les drones MALE (moyenne altitude, longue endurance), comme le MQ-9 Reaper, surveillent et frappent pendant plus de 24 heures. Les drones de combat furtifs, comme le nEUROn, restent en Europe au stade de démonstrateurs.","L’armée de l’Air et de l’Espace française utilise des MQ-9 Reaper, basés notamment à Cognac (voir {bases|Bases}). Le programme européen de drone MALE, mené par Airbus, n’est pas encore en service : je n’ai pas recoupé ses chiffres, il n’apparaît donc pas dans le tableau."],
  tab:[
    ["Drone","Pays","Envergure","Charge utile","Endurance annoncée","Premier vol / service"],
    [
      ["General Atomics MQ-9A Reaper","États-Unis","20,1 m","1 746 kg","plus de 27 h","vol en 2001, service en 2007"],
      ["Baykar Bayraktar TB2","Turquie","12 m","150 kg","plus de 27 h (Baykar)","service en 2014"],
      ["Dassault nEUROn","France, avec 5 autres pays","12,5 m","2 bombes de 250 kg prévues (démonstrateur)","non communiquée","1er décembre 2012"]
    ]
  ],
  tl:[
    ["2001","Premier vol du MQ-9 (Predator B), selon les fiches publiques."],
    ["2007","Le MQ-9 Reaper entre en service dans l’US Air Force."],
    ["1er décembre 2012","Premier vol du nEUROn, à Istres."],
    ["Mars 2014","Premier vol en formation d’un drone de combat avec un Rafale et un Falcon, le nEUROn."],
    ["2014","Le Bayraktar TB2 entre en service."],
    ["Septembre 2015","Fin des essais du nEUROn, après 123 vols."],
    ["Mai 2016","La DGA lance des essais du nEUROn en contexte naval."]
  ],
  see:["{rafale|Rafale}","{transport|Transport et ravitailleurs}","{bases|Bases et porte-avions}","{porte-avions|Porte-avions}"],
  charts(){
    ADDTOP("drones","Chiffres clés",el=>el.innerHTML=NUMS([["plus de 27 h","d’endurance annoncée, MQ-9A et TB2"],["environ 30 M$ contre 5 à 6 M$","prix unitaire estimé, MQ-9 contre TB2"],["123","vols d’essai du nEUROn, de 2012 à 2015"],["6","pays dans le programme nEUROn"]]));
    ADD("drones","Charge utile (kg)",el=>BARS(el,[["Bayraktar TB2",150],["MQ-9A Reaper",1746,"1 746 kg",1]]),"MQ-9A : General Atomics ; TB2 : Baykar. Les fiches publiques du TB2 divergent sur sa masse maximale (700 kg ou 1 200 kg selon la source).");
  }
});
