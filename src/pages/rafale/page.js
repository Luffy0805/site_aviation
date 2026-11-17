/* ===== Page Rafale ===== */
/* ===== Fiche Rafale : tri, compteurs, bannière ===== */
document.querySelectorAll("table.sort").forEach(t=>{t.querySelectorAll("th.s").forEach((th,c)=>th.onclick=()=>{
 const rows=[...t.rows].slice(1),num=th.hasAttribute("data-num"),d=th.dataset.d=th.dataset.d=="1"?"-1":"1";
 rows.sort((a,b)=>{const x=a.cells[c].textContent,y=b.cells[c].textContent;return d*(num?(parseFloat(y)-parseFloat(x)):x.localeCompare(y,"fr"))*(num?1:-1)});
 rows.forEach(r=>t.tBodies[0].append(r))})});
new IntersectionObserver((e,o)=>{if(!e[0].isIntersecting)return;o.disconnect();
 e[0].target.querySelectorAll("b").forEach(b=>{const n=+b.dataset.n,t0=performance.now();(function f(t){const k=Math.min((t-t0)/1400,1);b.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(t0)})
}).observe(document.getElementById("nums"));

/* ===== Rafale ===== */
$("rintro").textContent="Chasseur omnirôle bimoteur, delta à canards. Une seule cellule pour la défense aérienne, l’attaque au sol, la reconnaissance, la dissuasion nucléaire et l’appontage.";
P("rpres",["Le Rafale est un avion de combat conçu par {dassault|Dassault Aviation}, avec Safran pour les moteurs, Thales pour l’électronique et MBDA pour les missiles. Sa formule aérodynamique associe une aile delta et des plans canard, qui lui donnent une grande agilité à basse vitesse et une bonne stabilité à haute vitesse.",
"Il est dit « omnirôle » : le même appareil, avec le même pilote, enchaîne des missions air-air et air-sol dans un seul vol. Il existe en version armée de l’Air (monoplace C, biplace B) et en version marine (M), pour le porte-avions {porte-avions|Charles de Gaulle}.",
"Il a remplacé, en France, des types aussi variés que le Jaguar, le Mirage F1 et le Super Étendard modernisé. Il est le prolongement naturel de la lignée du {mirage|Mirage 2000}. Les {patrouilles|Rafale Solo Display} le montrent en voltige chaque été.",
"Sa survie ne repose pas sur la furtivité radar pure, mais sur un ensemble : faible surface équivalente radar, système SPECTRA de guerre électronique, capteurs passifs, et vitesse d’action des armes."]);
TB("rspec",["Caractéristique","Valeur"],[["Longueur","15,30 m"],["Envergure","10,90 m"],["Hauteur","5,34 m"],["Surface alaire","45,7 m²"],["Masse à vide","environ 10 t"],["Masse maximale au décollage","24,5 t"],["Moteurs","2 Safran M88, environ 50 kN à sec et 75 kN avec postcombustion chacun"],["Vitesse maximale","environ Mach 1,8"],["Plafond","environ 15 800 m (50 000 ft)"],["Facteur de charge","+9 g / −3,6 g"],["Charge externe","environ 9,5 t, sur 14 points d’emport (13 sur le Rafale M)"],["Distance de convoyage","environ 3 700 km avec réservoirs externes"],["Carburant interne","environ 4,7 t"]]);
HT("rtl",[["1983","Les armées et Dassault étudient l’avion de combat expérimental (ACX), pour remplacer les Jaguar et Mirage F1."],
["1985","La France quitte le programme européen qui deviendra le Typhoon : elle veut un avion capable d’aller sur porte-avions, et garder la maîtrise du programme."],
["4 juillet 1986","Premier vol du démonstrateur Rafale A."],["1990","Le moteur M88 vole sur le Rafale A.",1],
["1991","Premiers vols du Rafale C01 (mai) et du Rafale M01 naval (décembre)."],["1993","Premier vol du Rafale B01 biplace."],
["2001","Premières livraisons du Rafale M, standard F1, à la Marine."],["2004","Le Rafale est opérationnel dans la Marine nationale, à Landivisiau."],
["2006","Il est opérationnel dans l’armée de l’Air."],["2007","Premières missions de combat, en Afghanistan."],["2008","Standard F3 : dissuasion nucléaire (ASMP-A) et reconnaissance."],
["2011","Opérations en Libye."],["2013","Opérations au Mali : raid de longue durée depuis la France."],["2014","Opérations en Irak puis en Syrie (opération Chammal)."],
["2015","Première exportation : l’Égypte (février), puis le Qatar (mai). Les livraisons à l’export débutent."],["2016","Contrat indien pour 36 Rafale."],
["2018","Standard F3-R : missile Meteor et nacelle Talios."],["2020","29 juillet : les premiers Rafale indiens arrivent à Ambala.",1],
["2021","Contrats avec les Émirats (80), l’Égypte (30), la Grèce (24) et la Croatie (12 d’occasion)."],
["2022-2024","L’Indonésie commande 42 appareils en tranches successives. La Serbie en commande 12 en août 2024. Standard F4 : premières livraisons en 2024."],
["2024","21 Rafale livrés dans l’année (14 pour la France, 7 à l’export).",1],["2025","Contrat indien pour 26 Rafale Marine."],
["2025","26 Rafale livrés, un record (15 à l’export, 11 pour la France).",1],["2025","7 octobre : 300e Rafale livré ; 400 entreprises françaises participent au programme.",1],
["2025","Objectif de cadence : 4 Rafale produits par mois.",1],["30 juin 2026","533 Rafale commandés depuis l’origine, 208 restent à livrer."]]);
TB("rstd",["Standard","Date","Apport"],[["F1","2001","Air-air uniquement, pour la Marine"],["F2","2006","Premières capacités air-sol"],["F3","2008","Omnirôle complet, ASMP-A nucléaire, reconnaissance"],["F3-R","2018","Meteor, nacelle Talios, désignation laser"],["F4","2024","Plus connecté, nouveaux capteurs et liaisons de données"],["F5","années 2030","En préparation, avec un drone de combat associé"]]);
TB("rver",["Version","Description"],[["Rafale C","Monoplace de l’armée de l’Air"],["Rafale B","Biplace de l’armée de l’Air : assaut long rayon, dissuasion nucléaire"],["Rafale M","Monoplace marine : train renforcé, crosse d’arrêt, catapultage"],["Rafale EH, DH…","Versions export (Égypte, Qatar, Inde…) aux équipements adaptés"]]);
TL("rarm",[["RBE2 AESA","Radar à antenne active, conçu par Thales."],["SPECTRA","Guerre électronique : détecte et brouille les menaces, base de sa furtivité passive."],["OSF","Veille infrarouge et optronique, discrète : détecte et pistes sans émettre."],["Missiles air-air","Meteor (longue portée, statoréacteur) et MICA (autodirecteur radar ou infrarouge)."],["Attaque","SCALP (croisière), AASM Hammer (bombe guidée), Exocet AM39 (antinavire)."],["Nucléaire","ASMP-A, sur versions et escadrons dédiés."],["Canon","Canon de 30 mm intégré."]]);
SE("rsee",["{dassault|Dassault Aviation}","{mirage|Mirage 2000}","{porte-avions|Porte-avions}","{chasseurs|Comparatif des chasseurs}","{patrouilles|Rafale Solo Display}","{bases|Bases aériennes}"]);
BLUEPRINT("rplan",1590,1260,[
[70,288,"Radar RBE2 AESA","Radar à antenne active dans le nez : des centaines de petits modules émetteurs-récepteurs balayent sans bouger l’antenne.",[0,190,320,200]],
[170,205,"Perche de ravitaillement","La perche (sonde) se déploie devant le pare-brise pour se connecter au panier d’un ravitailleur. Elle est escamotable.",[50,110,320,200]],
[330,205,"Cockpit","Verrière en bulle sur deux places (version biplace), siège éjectable Martin-Baker, grands écrans et affichage tête haute.",[190,110,360,225]],
[470,300,"Entrées d’air","Vue de face : les deux grandes entrées d’air alimentent chacune un moteur. Elles sont profilées pour fonctionner aussi aux fortes incidences.",[1200,725,340,212.5]],
[470,700,"Plans canard","Petits plans avant, mobiles : ils améliorent la maniabilité et raccourcissent l’atterrissage.",[360,620,320,200]],
[790,590,"Aile delta","Aile delta : portance à basse vitesse, rigidité à grande vitesse. 14 points d’emport au total sous l’aile et le fuselage ; les bouts d’aile portent des rails pour missiles.",[560,430,480,300]],
[1090,70,"Dérive et SPECTRA","Dérive verticale, qui accueille des capteurs de guerre électronique SPECTRA. Voir {savoirs|Savoirs}.",[900,20,320,200]],
[1050,780,"Moteurs M88","Deux Safran M88 côte à côte, environ 75 kN chacun avec postcombustion. Ici les tuyères, vues du dessus.",[880,720,320,200]]]);
/* Graphiques ajoutés aux blocs existants */
ADD("rafale","Les clients export, en nombre d’appareils",el=>DONUT(el,[["Émirats arabes unis",80],["Inde",62],["Égypte",54],["Indonésie",42],["Qatar",36],["Grèce",24],["Croatie",12],["Serbie",12]],["322","appareils"]),"Somme des commandes de la table ci-dessus (France exclue).");
ADD("rafale","Livraisons de 2024 et 2025 : France contre export",el=>GBARS(el,[["2024",14,7],["2025",11,15]],["France","Export"]),"Dassault Aviation : 21 livrés en 2024, 26 en 2025.");
