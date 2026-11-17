/* ===== Placement des photos dans les pages ===== */
function PHOTO(id){const sec=document.getElementById(id),a=PHOTOS[id];if(!sec||!a||sec.dataset.ph)return;sec.dataset.ph=1;
 const bl=[...sec.children].filter(x=>x.classList.contains("blk")),g=p=>a.filter(x=>x[3]==p),an=sec.querySelector(".sub")||sec.querySelector("h2");
 const fig=(x,st)=>'<figure'+(st==2?' style="flex:'+x[2]+' 1 0%;aspect-ratio:'+x[2]+'"':st?' style="aspect-ratio:'+x[2]+'"':"")+'><img class="ld" onload="this.classList.remove(\'ld\')" src="images/'+encodeURI(x[0])+'" alt="'+x[1]+'" style="'+(x[5]?"object-position:"+x[5]:"")+'" loading="lazy" onerror="this.closest(\'.figs\').remove()"><figcaption>'+x[1]+"</figcaption></figure>";
 const grid=items=>{const f=document.createElement("div");f.className="figs n"+items.length;f.innerHTML=items.map(x=>fig(x)).join("");return f};
 const top=g("top"),mid=g("mid"),side=g("side");
 if(top.length&&an)an.after(grid(top));
 if(mid.length){const t=bl.length>2?bl[Math.floor(bl.length/2)-1]:bl[0];if(t)t.after(grid(mid));else sec.append(grid(mid))}
 const cand=[...sec.querySelectorAll("p")].filter(p=>p.textContent.length>120&&!p.closest(".figs,details")&&!p.classList.contains("src")&&!p.classList.contains("sub")),lone=[];
 side.forEach((x,i)=>{const p=cand[Math.min(i*2,cand.length-1)];
  if(!p){lone.push(x);return}
  const f=document.createElement("div");f.className="figs side"+(i%2?" l":"");f.style.setProperty("--w",Math.min(x[4],400)+"px");f.innerHTML=fig(x,1);p.parentElement.style.display="flow-root";p.before(f)});
 if(lone.length){const f=document.createElement("div");
  if(lone.length>1){f.className="figs row";f.innerHTML=lone.map(x=>fig(x,2)).join("")}
  else{f.className="figs side0";f.style.setProperty("--w",Math.min(lone[0][4],400)+"px");f.innerHTML=fig(lone[0],1)}
  const gr=sec.querySelector(":scope > .grid")||[...sec.children].find(c=>c.classList.contains("grid"));if(gr)gr.after(f);else sec.append(f)}}
addEventListener("hashchange",()=>PHOTO(location.hash.slice(1)));PHOTO(location.hash.slice(1));
