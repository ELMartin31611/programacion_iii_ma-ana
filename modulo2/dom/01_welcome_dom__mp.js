const titulo=document.getElementById("titulo")
const subtitulo=document.getElementById("subtitulo")
const btnCambiar=document.getElementById("btnCambiar")
const btnExport=document.getElementById("btnExport")
const vuelosIniciales=[{codigo:"AV101",origen:"Quito",destino:"Guayaquil",hora:"08:30",estado:"Programado"},{codigo:"RT204",origen:"Guayaquil",destino:"Cuenca",hora:"09:15",estado:"Retrasado"}]
btnCambiar.onclick=function(){titulo.textContent="Control de Vuelos Activado";subtitulo.textContent="Monitoreo en tiempo real — __mp"}
btnExport.onclick=function(){const blob=new Blob([JSON.stringify(vuelosIniciales,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="vuelos__mp.json";document.body.appendChild(a);a.click();a.remove()}
