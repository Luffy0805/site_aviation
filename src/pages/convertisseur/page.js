/* ===== Convertisseur aéronautique ===== */
/* ===== Convertisseur ===== */
const T0=288.15;
const U={
 speed:{n:"Vitesse",u:{kmh:["km/h",1/3.6],kt:["kt",1852/3600],ms:["m/s",1],mph:["mph",.44704],mach:["Mach",null]}},
 alt:{n:"Altitude",u:{ft:["ft",.3048],m:["m",1],fl:["FL (niveau de vol)",30.48]}},
 dist:{n:"Distance",u:{nm:["NM",1852],km:["km",1000],mi:["mi",1609.344]}},
 press:{n:"Pression",u:{hpa:["hPa",1],inhg:["inHg",33.8639]}},
 temp:{n:"Température",u:{c:["°C"],f:["°F"],k:["K"]}},
 mass:{n:"Masse",u:{kg:["kg",1],lb:["lb",.45359237],t:["tonne",1000]}}
};
let cat="speed";
function sound(ft){const h=Math.min(Math.max(ft*.3048,0),20000);const T=h<=11000?T0-.0065*h:216.65;return 20.0468*Math.sqrt(T)}
const toBase=(c,u,v)=>c=="temp"?(u=="c"?v:u=="f"?(v-32)*5/9:v-273.15):v*(u=="mach"?sound(+$("alt").value||0):U[c].u[u][1]);
const fromBase=(c,u,b)=>c=="temp"?(u=="c"?b:u=="f"?b*9/5+32:b+273.15):b/(u=="mach"?sound(+$("alt").value||0):U[c].u[u][1]);
const fmt=n=>isFinite(n)?n.toLocaleString("fr-FR",{maximumFractionDigits:3}):"—";
function build(){$("tabs").innerHTML="";Object.keys(U).forEach(k=>{const b=document.createElement("button");b.textContent=U[k].n;b.setAttribute("aria-pressed",k==cat);b.onclick=()=>{cat=k;build()};$("tabs").append(b)});
 $("unit").innerHTML=Object.entries(U[cat].u).map(([k,v])=>'<option value="'+k+'">'+v[0]+"</option>").join("");$("altw").style.display=cat=="speed"?"":"none";calc()}
function calc(){const u=$("unit").value,v=parseFloat($("val").value);const b=toBase(cat,u,v);
 $("res").innerHTML=Object.entries(U[cat].u).filter(([k])=>k!=u).map(([k,x])=>"<div><b>"+fmt(fromBase(cat,k,b))+"</b><span>"+x[0]+"</span></div>").join("");
 $("note").textContent=cat=="speed"?"À cette altitude, la vitesse du son vaut "+fmt(sound(+$("alt").value||0)*3.6)+" km/h ("+fmt(sound(+$("alt").value||0)/.514444)+" kt). Atmosphère standard ISA, jusqu’à 20 km.":cat=="alt"?"FL350 = 35 000 ft. Le niveau de vol se lit avec le calage standard 1013,25 hPa.":""}
["val","alt"].forEach(i=>$(i).oninput=calc);$("unit").onchange=calc;build();
