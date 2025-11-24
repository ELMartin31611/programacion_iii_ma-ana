const btn=document.getElementById("cambiar-estilo")
const panel=document.getElementById("panel-vuelo")
const dbtn=document.getElementById("descargar-estilo")
btn.onclick=function(){document.body.style.background="#0b1220";document.body.style.color="#e6f0ff";panel.style.background="#071226";panel.style.boxShadow="0 6px 20px rgba(0,0,0,0.6)"}
dbtn.onclick=function(){const config={fondo:document.body.style.background,color:document.body.style.color,panel:panel.style.background};const blob=new Blob([JSON.stringify(config,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="config_estilo__mp.json";document.body.appendChild(a);a.click();a.remove()}
