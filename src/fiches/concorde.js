/* ===== Fiche : Concorde ===== */
FI.push({
  id:"concorde",
  c:"civil",
  t:"Concorde",
  d:"L’avion de ligne supersonique franco-britannique.",
  sub:"Paris–New York en trois heures et demie environ, à plus de deux fois la vitesse du son.",
  pres:["Le Concorde est un avion de ligne supersonique franco-britannique, développé par Sud Aviation (puis Aérospatiale) et la British Aircraft Corporation.","Il vole vers Mach 2 à 18 km d’altitude, dans l’air froid de la stratosphère, ce qui explique son profil : ogive abaissable, aile delta et moteurs à postcombustion. Vingt exemplaires ont été construits, dont quatorze en service commercial.","Son exploitation s’arrête en 2003, après l’accident de Gonesse en 2000 et la baisse du trafic aérien. Voir {atmosphere|Atmosphère et Mach} et {records|Histoire et records}."],
  spec:[
    ["Longueur","61,66 m"],
    ["Envergure","25,6 m"],
    ["Masse maximale","environ 185 t"],
    ["Moteurs","4 Rolls-Royce/Snecma Olympus 593, environ 170 kN avec postcombustion chacun"],
    ["Croisière","Mach 2,04, environ 2 150 km/h"],
    ["Altitude de croisière","environ 18 000 m"],
    ["Passagers","environ 100"],
    ["Autonomie","environ 7 000 km"]
  ],
  tl:[
    ["1962","Accord franco-britannique pour développer l’avion."],
    ["2 mars 1969","Premier vol du prototype 001, à Toulouse."],
    ["21 janvier 1976","Début du service commercial : Air France Paris–Rio, British Airways Londres–Bahreïn."],
    ["25 juillet 2000","Accident du vol Air France 4590, à Gonesse."],
    ["2001","Reprise des vols après des modifications."],
    ["2003","Retrait : Air France en mai, British Airways en octobre."],
    ["1976","20 exemplaires construits, dont 14 en service commercial.",1],
    ["1996","7 février : record New York–Londres en 2 h 52.",1],
    ["2003","24 octobre : dernier vol commercial, avec British Airways.",1]
  ],
  see:["{liners|Avions de ligne}","{atmosphere|Atmosphère et Mach}","{records|Histoire et records}"],
  charts(){
    ADDTOP("concorde","Chiffres clés",el=>el.innerHTML=NUMS([["20","exemplaires construits"],["14","en service commercial"],["Mach 2,04","vitesse de croisière"],["2 h 52","record New York–Londres (1996)"]]));
    ADD("concorde","Vitesse de croisière comparée (km/h, ordres de grandeur)",el=>BARS(el,[["Concorde",2150,"environ 2 150 (Mach 2,04)"],["Boeing 747-8",910,"environ 910"],["Airbus A350",900,"environ 900"],["Boeing 737-800",835,"environ 835"],["Airbus A320",830,"environ 830"],["ATR 72",510,"environ 510"]]));
  }
});
