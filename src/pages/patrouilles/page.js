/* ===== Page Patrouilles ===== */
/* ===== Patrouilles ===== */
const PA=[["Patrouille de France","France","Décret du 10 février 1964, à Salon-de-Provence","Alpha Jet : 8 avions, dont 6 en formation et 2 solistes","Elle volait déjà sur Fouga Magister dès 1957. Vitrine de l’armée de l’Air et de l’Espace."],
["Rafale Solo Display","France","Depuis 2009","Un Rafale monoplace, plus un biplace qui emporte un mécanicien en France","Montrer les capacités du Rafale en voltige. Le pilote doit être chef de patrouille, avec beaucoup d’heures sur Rafale."],
["Blue Angels","États-Unis, US Navy","1946, en Floride","F/A-18 Hornet depuis 1987, aujourd’hui Super Hornet","Le nom vient d’un bar de New York apprécié des pilotes. Distance minimale entre avions : environ 45 cm."],
["Thunderbirds","États-Unis, US Air Force","1953","F-16","Vitrine de l’US Air Force. Elle a déjà volé de concert avec la Patrouille de France."]];
$("pgrid").innerHTML=PA.map(p=>`<div class="card st"><h3>${p[0]}</h3><p><b>Pays</b> : ${p[1]}</p><p><b>Création</b> : ${p[2]}</p><p><b>Avion</b> : ${p[3]}</p><p style="margin-top:8px">${p[4]}</p></div>`).join("");
