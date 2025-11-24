const codigoVuelo=document.getElementById("codigoVuelo")
const buscarBtn=document.getElementById("buscarBtn")
const resultado=document.getElementById("resultado")
const descargar=document.getElementById("descargar")
const db=[{codigo:"AV101",origen:"Quito",destino:"Guayaquil",hora:"08:30",estado:"Programado"},{codigo:"RT204",origen:"Guayaquil",destino:"Cuenca",hora:"09:15",estado:"Retrasado"}]
buscarBtn.onclick=function(){
  const q=codigoVuelo.value.trim().toUpperCase()
  const found=db.find(v=>v.codigo===q)
  resultado.textContent=found? `${found.codigo} ${found.origen}→${found.destino} ${found.hora} ${found.estado}` : "Vuelo no encontrado"
}
descargar.onclick=function(){
  const data={busqueda:codigoVuelo.value,result:resultado.textContent}
  const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"})
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="busqueda_vuelo__mp.json";document.body.appendChild(a);a.click();a.remove()
}
