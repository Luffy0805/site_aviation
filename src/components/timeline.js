/* ===== Composant : frise chronologique horizontale HT() ===== */
/* ===== Frises horizontales ===== */
function HT(id,a){const t=$(id),ys=a.map(x=>+(x[0].match(/\d{4}/)||[0])[0]),y0=Math.floor(Math.min(...ys)/10)*10,y1=Math.max(Math.ceil(Math.max(...ys)/10)*10,y0+10),seen={};
 const X=y=>2+(y-y0)/(y1-y0)*96;let h="",m=0,q=0;
 for(let d=y0;d<=y1;d+=10)h+=`<i class="dc" style="left:${X(d)}%"><u>${d}</u></i>`;
 a.forEach((x,i)=>{const n=seen[ys[i]]=(seen[ys[i]]||0)+1,s2=x[2],H=s2?14+(q++%2)*11:30+(m++%3)*22;h+=`<div class="ev${s2?" s2":""}" tabindex="0" data-i="${i}" style="left:${X(ys[i])+(n-1)*1.1}%;top:${100-H}px;height:${H}px"><s>${ys[i]}</s></div>`});
 t.innerHTML=`<div class="tx"><div class="ax"></div>${h}</div><div class="tinfo"></div><p class="src tlg">Gros points : les étapes. Petits points : les repères chiffrés.</p>`;
 const set=i=>{t.querySelectorAll(".ev").forEach(e=>e.classList.toggle("on",+e.dataset.i==i));t.querySelector(".tinfo").innerHTML="<b>"+a[i][0]+"</b><p>"+lk(a[i][1])+"</p>"};
 t.querySelectorAll(".ev").forEach(e=>{e.onmouseenter=e.onclick=e.onfocus=()=>set(+e.dataset.i)});set(0)}
