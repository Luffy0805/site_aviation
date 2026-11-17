/* ===== Fiche : Compagnies aériennes ===== */
FI.push({
  id:"compagnies",
  c:"civil",
  t:"Compagnies aériennes",
  d:"Flottes, passagers et alliances.",
  sub:"Qui vole le plus, avec combien d’avions, et dans quelles alliances.",
  pres:["Les compagnies se mesurent de plusieurs façons : le nombre de passagers, la taille de la flotte, les destinations ou les kilomètres parcourus. Le classement change selon le critère.","Aux États-Unis, trois compagnies traditionnelles (United, American, Delta) alignent chacune environ 1 000 avions. En Europe, le low-cost Ryanair transporte plus de passagers que Delta ou United.","Les alliances (Star Alliance, SkyTeam, oneworld) regroupent des compagnies qui partagent des vols et des programmes de fidélité. Voir {aeroports|Aéroports} pour leurs hubs."],
  tab:[
    ["Compagnie","Pays","Hub principal","Alliance","Flotte (2 janvier 2026)"],
    [
      ["United Airlines","États-Unis","Chicago, Newark, Houston, Denver","Star Alliance","1 061 avions"],
      ["American Airlines","États-Unis","Dallas–Fort Worth","oneworld","1 013 avions"],
      ["Delta Air Lines","États-Unis","Atlanta","SkyTeam","989 avions"],
      ["Southwest Airlines","États-Unis","Dallas, Denver, Las Vegas","aucune","804 avions"],
      ["China Southern","Chine","Canton","SkyTeam","710 avions"],
      ["China Eastern","Chine","Shanghai","SkyTeam","681 avions"],
      ["Air China","Chine","Pékin","Star Alliance","532 avions"],
      ["Turkish Airlines","Turquie","Istanbul","Star Alliance","402 avions"],
      ["Ryanair","Irlande","bases dans toute l’Europe","aucune","349 avions (compagnie principale)"],
      ["Air France–KLM","France et Pays-Bas","Paris-CDG, Amsterdam","SkyTeam","non recoupée"],
      ["Lufthansa Group","Allemagne","Francfort, Munich","Star Alliance","non recoupée"],
      ["IAG (British Airways, Iberia)","Royaume-Uni et Espagne","Londres-Heathrow, Madrid","oneworld","non recoupée"],
      ["Emirates","Émirats arabes unis","Dubaï","aucune","non recoupée"],
      ["Qatar Airways","Qatar","Doha","oneworld","non recoupée"],
      ["IndiGo","Inde","Delhi","aucune","non recoupée"],
      ["Singapore Airlines","Singapour","Singapour-Changi","Star Alliance","non recoupée"]
    ]
  ],
  bars:[
    "Plus grandes flottes principales (avions, 2 janvier 2026)",
    [
      ["United Airlines",1061,"1 061 avions"],
      ["American Airlines",1013,"1 013 avions"],
      ["Delta Air Lines",989,"989 avions"],
      ["Southwest Airlines",804,"804 avions (tous des Boeing 737)"],
      ["China Southern",710,"710 avions"],
      ["China Eastern",681,"681 avions"],
      ["SkyWest (régional)",600,"600 avions"],
      ["Air China",532,"532 avions"],
      ["Turkish Airlines",402,"402 avions"],
      ["Ryanair",349,"349 avions (hors Malta Air, Buzz et Lauda)"]
    ]
  ],
  bars2:[
    "Passagers transportés en 2025",
    [
      ["Ryanair",208,"208 millions de passagers"],
      ["Delta Air Lines",206,"206 millions de passagers"],
      ["United Airlines",188,"188 millions de passagers"]
    ]
  ],
  tl:[
    ["1919","KLM est fondée : c’est la plus ancienne compagnie à porter encore son nom d’origine."],
    ["1920","Qantas est créée en Australie.",1],
    ["1926","Naissance de la Luft Hansa d’origine, en Allemagne.",1],
    ["1933","Création d’Air France, par fusion de plusieurs compagnies."],
    ["1971","Premier vol de Southwest Airlines, le 18 juin.",1],
    ["1978","Les États-Unis déréglementent le transport aérien : c’est le début de la concurrence sur les prix."],
    ["1985","Premier vol de Ryanair ; la même année, naissance d’Emirates à Dubaï."],
    ["1997","Naissance de la Star Alliance, avec cinq compagnies fondatrices."],
    ["1999","Lancement de oneworld.",1],
    ["2000","Fondation de SkyTeam."],
    ["2004","Fusion d’Air France et de KLM."],
    ["2020","Le trafic mondial s’effondre avec la pandémie.",1],
    ["2025","9,8 milliards de passagers dans le monde (ACI). Ryanair en transporte 208 millions, devant Delta (206) et United (188)."],
    ["2026","Au 2 janvier : United aligne 1 061 avions, American 1 013, Delta 989 (Planespotters).",1]
  ],
  see:["{aeroports|Aéroports}","{constructeurs|Constructeurs civils}","{liners|Avions de ligne}"]
});
