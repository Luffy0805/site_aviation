/* ===== Page Porte-avions ===== */
/* ===== Porte-avions ===== */
P("cdg",["Le Charles de Gaulle est le seul porte-avions français en service. Mis sur cale à Brest, lancé en 1994 et admis au service actif en 2001, il est à propulsion nucléaire : deux réacteurs K15. Son port d’attache est Toulon.",
"Il mesure 261,5 m pour environ 42 000 t. Il embarque environ 40 aéronefs : des {rafale|Rafale M}, des avions de guet aérien E-2C Hawkeye et des hélicoptères. Deux catapultes à vapeur lancent les avions, et des brins d’arrêt les récupèrent. L’équipage, avec le groupe aérien, est d’environ 1 900 à 2 000 personnes.",
"Un successeur, le PA-NG (porte-avions de nouvelle génération), est prévu à l’horizon de la fin des années 2030."]);
TB("pat",["Bâtiment","Pays","Type","Longueur","Déplacement","Aéronefs"],[["Charles de Gaulle","France","CATOBAR, nucléaire","261,5 m","42 000 t","environ 40"],["Nimitz (classe)","USA","CATOBAR, nucléaire","333 m","environ 100 000 t","environ 90"],["Gerald R. Ford (classe)","USA","CATOBAR, nucléaire, catapultes électromagnétiques","337 m","environ 100 000 t","75 et plus"],["HMS Queen Elizabeth","Royaume-Uni","STOVL, tremplin","280 m","environ 65 000 t","jusqu’à environ 40"],["Liaoning","Chine","STOBAR","305 m","environ 60 000 t","environ 40"],["INS Vikrant","Inde","STOBAR","262 m","environ 45 000 t","environ 30"]]);
SE("psee",["{rafale|Rafale}","{bases|Bases aériennes}","{atmosphere|Atmosphère}"]);
BLUEPRINT("cplan",1200,385,[
[431,140,"Îlot","Superstructure : passerelle, contrôle des opérations aériennes et mâts de capteurs. Armement de défense : lanceurs SAAM, Sadral, canons Narwal de 20 mm, mitrailleuses de 12,7 mm et lance-leurres Sagaie.",[350,60,260,162]],
[470,40,"Mât et radars","Système radar : le DRBJ-11 (radar tridimensionnel) et le SMART-S. Antennes de communications par satellite Syracuse II et III.",[385,10,170,106]],
[760,236,"Pont oblique","Zone d’appontage inclinée : un avion qui rate la prise de brins peut remettre les gaz sans heurter les avions parqués. Aides à l’appontage : DALLAS et DALLAS-NG, optique OP-3 et IFOLS.",[600,150,320,200]],
[925,215,"Brins d’arrêt","Les brins d’arrêt freinent l’avion à l’appontage : il s’accroche à l’un d’eux avec sa crosse.",[840,140,200,125]],
[200,237,"Catapultes à vapeur","Deux catapultes à vapeur lancent des avions de 25 tonnes à environ 260 km/h, un par minute et par catapulte.",[60,170,300,187]],
[526,232,"Ascenseur d’avions","Les ascenseurs de 36 tonnes montent les avions du hangar, qui contient 35 à 40 appareils, jusqu’au pont d’envol.",[450,190,160,100]],
[215,160,"Rafale M parqués","Le groupe aérien embarqué compte une quarantaine d’aéronefs, dont des Rafale M, des E-2C Hawkeye et des hélicoptères.",[100,105,260,162]],
[1105,166,"E-2C Hawkeye","Avion de guet aérien : son radar surveille l’espace autour du groupe naval. Il décolle et apponte comme les Rafale M.",[1030,100,170,106]],
[650,310,"Coque","Longueur d’environ 261 m pour 42 000 t. Le pont d’envol fait environ 1,2 hectare.",[500,200,300,187]]]);
$("pbar").innerHTML=[["Charles de Gaulle",261.5],["INS Vikrant",262],["HMS Queen Elizabeth",280],["Liaoning",305],["Nimitz (classe)",333],["Ford (classe)",337]].map(b=>`<div class="bar"><span style="margin:0">${b[0]}</span><div><i style="width:${b[1]/337*100}%"></i><span>${b[1]} m</span></div></div>`).join("");
