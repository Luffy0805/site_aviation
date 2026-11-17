/* ===== Plans : tracé du porte-avions, balayage laser ===== */
if(!RM){
 const cp=document.getElementById("cplan"),src=document.getElementById("cpland");
 if(cp&&src){const g=document.createElementNS(NS,"g");[...src.children].forEach(c=>{if(c.tagName!="defs")g.append(c.cloneNode(true))});cp.querySelector("use").replaceWith(g);
  const els=[...g.querySelectorAll("path,circle,ellipse,text")];els.forEach((e,i)=>{const d=(i/els.length*1.3).toFixed(2)+"s";e.style.setProperty("--d",d);const st=e.getAttribute("stroke"),fo=e.getAttribute("fill-opacity");if(fo)e.style.setProperty("--fo",fo);
   if(e.tagName=="text"||e.hasAttribute("stroke-dasharray")||!st||st=="none"){e.classList.add("fd")}else{e.setAttribute("pathLength","1");e.classList.add("dr")}});
  cp.classList.add("draw");cp.querySelectorAll("g[data-i]").forEach((e,i)=>e.style.setProperty("--k",i));
  FX.add(cp,()=>{cp.classList.add("go");clearTimeout(cp._t);cp._t=setTimeout(()=>g.setAttribute("filter","url(#cglow)"),3700)},()=>{cp.classList.remove("go");clearTimeout(cp._t);g.removeAttribute("filter")},"p")}
 document.querySelectorAll(".plan.bp svg[id$=plan]").forEach(sv=>{if(sv.id=="cplan")return;sv.classList.add("scan");const pl=sv.closest(".plan");
  FX.add(pl,()=>{sv.classList.add("go");pl.querySelectorAll(".scl").forEach(x=>x.remove());const l=document.createElement("div");l.className="scl";pl.append(l);const a=l.animate([{left:"0%"},{left:"100%"}],{duration:1900,easing:"cubic-bezier(.5,0,.2,1)"});a.onfinish=()=>l.remove()},()=>{sv.classList.remove("go");pl.querySelectorAll(".scl").forEach(x=>x.remove())})})}
