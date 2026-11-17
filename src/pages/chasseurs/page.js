/* ===== Page Chasseurs : tableau, duel, nuage de points ===== */
/* ===== Chasseurs ===== */
const star=n=>'<span class="star"><b>'+"★".repeat(n)+"</b><i>"+"★".repeat(5-n)+"</i></span>";
const CH=[["Rafale","France",4.5,2001,1.8,92,20,4,5,5,9.5,5],["Eurofighter Typhoon","Europe",4.5,2003,2,110,27,3,5,4,9,4],["Gripen E","Suède",4.5,2019,2,75,6,3,4,3,6.5,4],["F-16V","USA",4,1978,2,70,13,2,4,4,7.7,4],["F-15EX","USA",4.5,2024,2.5,92,28,1,5,5,13.4,3],["F/A-18E/F Super Hornet","USA",4.5,2001,1.6,80,18,2,4,4,8,4],["F-35A","USA",5,2016,1.6,80,32,5,4,5,8.1,2],["F-22 Raptor","USA",5,2005,2.25,150,60,5,5,4,9,5],["Su-27 Flanker","Russie",4,1985,2.35,35,18,1,4,3,8,5],["Su-30SM","Russie",4,2012,2,50,20,1,4,4,8,5],["Su-35","Russie",4.5,2014,2.25,65,24,2,5,4,8,5],["Su-57","Russie",5,2020,2,100,30,3,5,4,10,5],["MiG-29","Russie",4,1982,2.25,30,12,1,3,3,3.5,5],["J-10C","Chine",4.5,2018,2,45,12,2,4,3,6.6,4],["J-20","Chine",5,2017,2,100,30,4,5,4,9,3],["JF-17","Pakistan et Chine",4,2007,1.6,30,5,1,3,3,3.7,3],["KF-21 Boramae","Corée du Sud",4.5,2026,1.8,65,15,3,4,4,7.7,4],["Tejas Mk1A","Inde",4,2016,1.6,45,10,2,3,3,5.3,4],["Mirage 2000-5","France",4,1997,2.2,30,10,1,3,3,6.3,4],["F-4 Phantom II","USA",3,1960,2.23,25,15,1,3,3,8.4,2],["MiG-21","Russie",2,1959,2.05,5,4,1,2,2,2,3],["Mirage III","France",2,1961,2.2,10,5,1,2,3,4,3]];
const fx=v=>String(v).replace(".",",");
const CR=[["Mach max",4,1,v=>fx(v)],["Prix unitaire",5,-1,v=>v+" M€"],["Coût d’heure de vol",6,-1,v=>v+" k"],["Furtivité",7,1,star],["Combat aérien",8,1,star],["Attaque au sol",9,1,star],["Charge d’armement",10,1,v=>fx(v)+" t"],["Agilité",11,1,star]];
const CN=["Avion","Pays","Gén.","Service","Mach max","Prix (M€)","Heure (k)","Furtivité","Air-air","Sol","Charge (t)","Agilité"];
$("da").innerHTML=$("db").innerHTML=CH.map((r,i)=>'<option value="'+i+'">'+r[0]+"</option>").join("");$("db").value=1;
function duel(){const a=CH[$("da").value],b=CH[$("db").value];let wa=0,wb=0,tie=0;
 const rows=CR.map(c=>{const k=c[1],mx=Math.max(...CH.map(r=>r[k])),va=a[k],vb=b[k],sg=Math.sign(va-vb)*c[2];if(sg>0)wa++;if(sg<0)wb++;if(sg==0)tie++;
  return `<div class="dr"><div class="dl ${sg>0?"w":sg==0?"t":""}"><span>${c[3](va)}</span><i style="width:calc((100% - 90px)*${va/mx})"></i></div><em>${c[0]}</em><div class="dl rr ${sg<0?"w":sg==0?"t":""}"><i style="width:calc((100% - 90px)*${vb/mx})"></i><span>${c[3](vb)}</span></div></div>`}).join("");
 $("dres").innerHTML=`<div class="dh"><b>${a[0]}</b><span></span><b>${b[0]}</b></div>`+rows+`<p class="verd">${wa>wb?a[0]+" l’emporte":wb>wa?b[0]+" l’emporte":"Égalité"} : ${wa} critères contre ${wb}${tie?", "+tie+" égalité"+(tie>1?"s":""):""}.</p><p class="src">${a[0]} (${a[1]}, en service depuis ${a[3]}) contre ${b[0]} (${b[1]}, ${b[3]}). Mach, prix et coût d’heure : plus la barre est haute, plus la valeur est élevée. Orange : meilleur des deux ; vert : égalité.</p>`}
$("da").onchange=$("db").onchange=duel;duel();
let sc="";for(let x=0;x<=160;x+=40)sc+=`<path d="M${60+x/160*620} 20V320" stroke="#ffffff12"/><text x="${60+x/160*620}" y="340" fill="#8fa1c0" font-size="11" text-anchor="middle">${x} M€</text>`;
for(let y=0;y<=60;y+=20)sc+=`<path d="M60 ${320-y/65*290}H680" stroke="#ffffff12"/><text x="52" y="${324-y/65*290}" fill="#8fa1c0" font-size="11" text-anchor="end">${y} k</text>`;
sc+=CH.map((r,i)=>{const x=60+r[5]/160*620,y=320-r[6]/65*290;return `<circle class="pt" data-i="${i}" cx="${x}" cy="${y}" r="${4+r[2]}" fill="${r[0]=="Rafale"?"#ffb347":"#4aa3ff"}" fill-opacity=".75"/><text x="${x+9}" y="${y-7}" fill="#e8eef8" font-size="10" pointer-events="none">${r[0].split(" ")[0]}</text>`}).join("");
$("csc").innerHTML=sc;
$("csc").onmousemove=e=>{const c=e.target.closest(".pt");if(!c){cuntip();return}const r=CH[c.dataset.i];ctip(e,"<b>"+r[0]+"</b><br>"+r[1]+" · génération "+fx(r[2])+" · en service "+r[3]+"<br>Prix : <b>"+r[5]+" M€</b><br>Coût d’heure de vol : <b>"+r[6]+" k</b>")};
$("csc").onmouseleave=cuntip;
let cs=-1,cd=1,cp="Tous";
function drawC(){const rows=CH.filter(r=>cp=="Tous"||r[1]==cp);
 if(cs>=0)rows.sort((a,b)=>cd*(typeof a[cs]=="string"?a[cs].localeCompare(b[cs],"fr"):a[cs]-b[cs]));
 $("ctab").innerHTML="<tr>"+CN.map((c,i)=>'<th class="s" data-i="'+i+'">'+c+(cs==i?(cd>0?" ▲":" ▼"):"")+"</th>").join("")+"</tr>"+rows.map(r=>"<tr><td><b>"+r[0]+"</b></td><td>"+r[1]+"</td><td>"+fx(r[2])+"</td><td>"+r[3]+"</td><td>"+fx(r[4])+"</td><td>"+r[5]+"</td><td>"+r[6]+"</td>"+"<td>"+star(r[7])+"</td><td>"+star(r[8])+"</td><td>"+star(r[9])+"</td><td>"+fx(r[10])+" t</td><td>"+star(r[11])+"</td>"+"</tr>").join("");
 $("ctab").querySelectorAll("th").forEach(th=>th.onclick=()=>{const i=+th.dataset.i;cd=cs==i?-cd:1;cs=i;drawC()})}
$("cflt").innerHTML=["Tous",...new Set(CH.map(r=>r[1]))].map(p=>'<button aria-pressed="'+(p=="Tous")+'">'+p+"</button>").join("");
$("cflt").onclick=e=>{if(e.target.tagName!="BUTTON")return;cp=e.target.textContent;$("cflt").querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b==e.target));drawC()};
drawC();
/* Graphiques ajoutés aux blocs existants */
ADD("chasseurs","Fiches détaillées",el=>el.innerHTML="<p>"+lk("{rafale|Rafale} · {typhoon|Eurofighter Typhoon} · {gripen|Saab Gripen} · {f35|Lockheed Martin F-35} · {f22|Lockheed Martin F-22 Raptor} · {drones|Drones de combat}")+"</p>");
ADD("chasseurs","Combien d’exemplaires ? Ordres de grandeur",el=>BARS(el,NB),"Selon les cas : exemplaires produits, livrés ou commandés.");
