/* ===== Barre de progression du défilement ===== */
addEventListener("scroll",()=>{$("pgb").style.width=(scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100)+"%"});
