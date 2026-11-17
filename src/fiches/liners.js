/* ===== Fiche : Avions de ligne ===== */
FI.push({
  id:"liners",
  c:"civil",
  t:"Avions de ligne",
  d:"Comparatif de 21 avions civils, du turbopropulseur au gros-porteur.",
  sub:"Valeurs typiques, qui varient selon la version et la configuration.",
  tab:[
    ["Avion","Service","Longueur","Envergure","Passagers","Autonomie"],
    [
      ["ATR 72-600","2011","27,2 m","27,1 m","environ 70","1 500 km"],
      ["Embraer E195-E2","2019","41,5 m","35,1 m","120 à 146","4 800 km"],
      ["Airbus A220-300","2016","38,7 m","35,1 m","130 à 160","6 300 km"],
      ["{a320|Airbus A320}","1988","37,6 m","34,1 m","150 à 180","6 100 km"],
      ["{b737|Boeing 737-800}","1998","39,5 m","35,8 m","160 à 190","5 400 km"],
      ["Boeing 737 MAX 8","2017","39,5 m","35,9 m","162 à 178","6 500 km"],
      ["Airbus A321neo","2017","44,5 m","35,8 m","180 à 220","6 850 km"],
      ["Airbus A321XLR","2024","44,5 m","35,8 m","180 à 220","8 700 km"],
      ["Boeing 767-300ER","1988","54,9 m","47,6 m","environ 245","11 070 km"],
      ["Airbus A330-300","1994","63,7 m","60,3 m","environ 277","11 750 km"],
      ["Airbus A330-900","2019","63,7 m","64,0 m","260 à 290","13 300 km"],
      ["Boeing 787-8","2011","56,7 m","60,1 m","environ 242","13 530 km"],
      ["Boeing 787-9","2014","62,8 m","60,1 m","environ 290","14 100 km"],
      ["Boeing 787-10","2018","68,3 m","60,1 m","environ 330","11 750 km"],
      ["Airbus A350-900","2015","66,8 m","64,8 m","environ 315","15 000 km"],
      ["Airbus A350-1000","2018","73,8 m","64,8 m","350 à 410","16 100 km"],
      ["Airbus A350-1000 ULR","livraisons dès fin 2026","73,8 m","64,8 m","238 (Qantas)","environ 18 000 km"],
      ["Boeing 777-300ER","2004","73,9 m","64,8 m","environ 365","13 600 km"],
      ["Boeing 747-8","2012","76,3 m","68,4 m","environ 410","14 300 km"],
      ["{a380|Airbus A380-800}","2007","72,7 m","79,8 m","environ 525","15 200 km"],
      ["{concorde|Concorde}","1976","61,7 m","25,6 m","environ 100","7 250 km"]
    ]
  ],
  bars:[
    "Envergure (m)",
    [
      ["Airbus A380",79.8,"79,8 m"],
      ["Boeing 747-8",68.4,"68,4 m"],
      ["Airbus A350",64.8,"64,8 m"],
      ["Boeing 777-300ER",64.8,"64,8 m"],
      ["Airbus A330-900",64,"64,0 m"],
      ["Airbus A330-300",60.3,"60,3 m"],
      ["Boeing 787",60.1,"60,1 m"],
      ["Boeing 767-300ER",47.6,"47,6 m"],
      ["Boeing 737-800",35.8,"35,8 m"],
      ["Airbus A321neo",35.8,"35,8 m"],
      ["Airbus A220",35.1,"35,1 m"],
      ["Airbus A320",34.1,"34,1 m"],
      ["ATR 72",27.1,"27,1 m"],
      ["Concorde",25.6,"25,6 m"]
    ]
  ],
  bars2:[
    "Passagers (typique)",
    [
      ["Airbus A380",525,"environ 525"],
      ["Boeing 747-8",410,"environ 410"],
      ["Airbus A350-1000",366,"350 à 410"],
      ["Boeing 777-300ER",365,"environ 365"],
      ["Boeing 787-10",330,"environ 330"],
      ["Airbus A350-900",315,"environ 315"],
      ["Boeing 787-9",290,"environ 290"],
      ["Airbus A330-300",277,"environ 277"],
      ["Airbus A330-900",275,"260 à 290"],
      ["Boeing 767-300ER",245,"environ 245"],
      ["Boeing 787-8",242,"environ 242"],
      ["A350-1000 ULR",238,"238 chez Qantas"],
      ["Airbus A321neo",200,"180 à 220"],
      ["Boeing 737 MAX 8",170,"162 à 178"],
      ["Airbus A320",165,"150 à 180"],
      ["Airbus A220",145,"130 à 160"],
      ["Concorde",100,"environ 100"],
      ["ATR 72",70,"environ 70"]
    ]
  ],
  see:["{constructeurs|Constructeurs civils}","{a320|Airbus A320}","{b737|Boeing 737}","{concorde|Concorde}"],
  charts(){
    ADD("liners","Fiches détaillées",el=>el.innerHTML="<p>"+lk("{a380|Airbus A380} · {a320|Airbus A320} · {b737|Boeing 737} · {concorde|Concorde}")+"</p>");
    ADD("liners","Passagers contre autonomie (la taille de la bulle suit l’envergure)",el=>SCAT(el,LN_PTS.map((a,k)=>({n:a[5]?a[0]:"",x:a[1],y:a[2],r:5+(a[3]-25)/7,c:a[4],t:"<b>"+a[0]+"</b><br>Passagers : environ "+a[1]+"<br>Autonomie : environ "+a[2].toLocaleString("fr-FR")+" km<br>Envergure : "+String(a[3]).replace(".",",")+" m"})),{xm:600,ym:20000,xs:100,ys:4000,xl:"Passagers (typique)",yl:"Autonomie (km)"}),"Bleu : Airbus. Orange : Boeing. Gris : autres. Blanc : Concorde. L’A350-1000 ULR est annoncé à environ 18 000 km, avec 238 sièges chez Qantas ; ses livraisons sont prévues à partir de fin 2026.");
  }
});
