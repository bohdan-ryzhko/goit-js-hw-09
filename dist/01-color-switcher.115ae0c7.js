function e(){return"#"+(Math.random().toString(16)+"000000").substring(2,8)}const t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]"),n=document.querySelector(".hex-color"),r=document.body;let a=null;d.disabled=!0,t.addEventListener("click",(function(t){d.disabled&&(t.currentTarget.disabled=!0,d.disabled=!1),a=setInterval((()=>{r.style.backgroundColor=e(),n.textContent=e()}),1e3)})),d.addEventListener("click",(function(e){t.disabled&&(e.currentTarget.disabled=!0,t.disabled=!1),clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.115ae0c7.js.map