const estado=document.getElementById("estado")
const panel=document.getElementById("panel-estado")
const texto=document.getElementById("texto-estado")
const btnDownload=document.getElementById("btnDownload")
estado.addEventListener("change",()=>{
  const v=estado.value
  panel.className="panel"
  if(v==="Programado") panel.classList.add("estado-programado")
  if(v==="En vuelo") panel.classList.add("estado-envuelo")
  if(v==="Retrasado") panel.classList.add("estado-retrasado")
  if(v==="Cancelado") panel.classList.add("estado-cancelado")
  texto.textContent=v
})
btnDownload.onclick=function(){
  const blob=new Blob([JSON.stringify({estado:texto.textContent},null,2)],{type:"application/json"})
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="estado_vuelo__mp.json";document.body.appendChild(a);a.click();a.remove()
}
