const cuerpo=document.getElementById("cuerpo")
const filtro=document.getElementById("filtro")
const btnFiltro=document.getElementById("btnFiltro")
const formVuelo=document.getElementById("formVuelo")
const codigoV=document.getElementById("codigoV")
const origenV=document.getElementById("origenV")
const destinoV=document.getElementById("destinoV")
const horaV=document.getElementById("horaV")
const estadoV=document.getElementById("estadoV")
const idx=document.getElementById("idx")
const limpiar=document.getElementById("limpiar")
const exportData=document.getElementById("exportData")
let vuelos=[{codigo:"AV101",origen:"Quito",destino:"Guayaquil",hora:"08:30",estado:"Programado"},{codigo:"RT204",origen:"Guayaquil",destino:"Cuenca",hora:"09:15",estado:"Retrasado"}]
function render(q=""){
  cuerpo.innerHTML=""
  vuelos.forEach((v,i)=>{
    const text=(v.codigo+" "+v.origen+" "+v.destino+" "+v.estado).toLowerCase()
    if(q && !text.includes(q.toLowerCase())) return
    const tr=document.createElement("tr")
    tr.innerHTML=`<td>${v.codigo}</td><td>${v.origen}</td><td>${v.destino}</td><td>${v.hora}</td><td>${v.estado}</td><td><button data-i="${i}" class="edit">Editar</button> <button data-i="${i}" class="del">Borrar</button></td>`
    cuerpo.appendChild(tr)
  })
  document.querySelectorAll(".edit").forEach(b=>b.onclick=function(){const i=Number(this.dataset.i);const v=vuelos[i];codigoV.value=v.codigo;origenV.value=v.origen;destinoV.value=v.destino;horaV.value=v.hora;estadoV.value=v.estado;idx.value=i})
  document.querySelectorAll(".del").forEach(b=>b.onclick=function(){const i=Number(this.dataset.i);vuelos.splice(i,1);render(filtro.value)})
}
formVuelo.addEventListener("submit",e=>{e.preventDefault();const data={codigo:codigoV.value.trim().toUpperCase(),origen:origenV.value.trim(),destino:destinoV.value.trim(),hora:horaV.value,estado:estadoV.value};if(idx.value){vuelos[Number(idx.value)]=data}else{vuelos.push(data)}formVuelo.reset();idx.value="";render(filtro.value)})
limpiar.onclick=function(){formVuelo.reset();idx.value=""}
btnFiltro.onclick=function(){render(filtro.value)}
exportData.onclick=function(){const blob=new Blob([JSON.stringify(vuelos,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="vuelos_lista__mp.json";document.body.appendChild(a);a.click();a.remove()}
render()
