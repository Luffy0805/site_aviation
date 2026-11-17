/* ===== Fiche : Missiles et armement ===== */
FI.push({
  id:"missiles",
  c:"militaire",
  t:"Missiles et armement",
  d:"Portées, types et avions porteurs.",
  sub:"Les ordres de grandeur des principaux missiles : les portées réelles dépendent de la version et du profil de tir.",
  tab:[
    ["Missile","Origine","Type","Porté par"],
    [
      ["Meteor","Europe (MBDA)","Air-air longue portée, statoréacteur","{rafale|Rafale}, {typhoon|Typhoon}, Gripen"],
      ["MICA","France (MBDA)","Air-air moyenne portée, radar ou infrarouge","{rafale|Rafale}, {mirage|Mirage 2000-5}"],
      ["AIM-120 AMRAAM","États-Unis","Air-air moyenne à longue portée","F-16, F-15, {f22|F-22}, {f35|F-35}"],
      ["AIM-9X Sidewinder","États-Unis","Air-air courte portée, infrarouge","F-16, F-15, F-22, F-35"],
      ["R-77","Russie","Air-air moyenne portée","Su-35, MiG-29"],
      ["PL-15","Chine","Air-air longue portée","J-20, J-16"],
      ["SCALP-EG","France et Royaume-Uni (MBDA)","Missile de croisière","{rafale|Rafale}, {mirage|Mirage 2000D}"],
      ["AASM Hammer","France (Safran)","Bombe guidée modulaire","{rafale|Rafale}"],
      ["Exocet AM39","France (MBDA)","Antinavire","{rafale|Rafale M}"]
    ]
  ],
  bars:[
    "Portées comparées (km, ordres de grandeur)",
    [
      ["PL-15",200,"environ 200 (estimation)"],
      ["SCALP-EG",250,"plus de 250"],
      ["AIM-120",130,"100 à 160 selon la version"],
      ["Meteor",110,"plus de 100"],
      ["R-77",95,"environ 80 à 110"],
      ["MICA",80,"environ 80"],
      ["AASM Hammer",60,"environ 50 à 70"],
      ["Exocet AM39",60,"environ 50 à 70"],
      ["AIM-9X",30,"quelques dizaines"]
    ]
  ],
  see:["{rafale|Rafale}","{typhoon|Typhoon}","{chasseurs|Comparatif des chasseurs}"]
});
