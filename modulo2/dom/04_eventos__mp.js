const formLlegada=document.getElementById("formLlegada")
const codigo=document.getElementById("codigo")
const hora=document.getElementById("hora")
const log=document.getElementById("log")
const exportLog=document.getElementById("exportLog")
const eventos=[]
formLlegada.addEventListener("submit",e=>{e.preventDefault();const o={codigo:codigo.value.trim().toUpperCase(),hora:hora.value,evento:"Aterrizaje registrado"};eventos.push(o);log.textContent=`Último: ${o.codigo} a las ${o.hora}`;formLlegada.reset()})
exportLog.onclick=function(){const blob=new Blob([JSON.stringify(eventos,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="log_llegadas__mp.json";document.body.appendChild(a);a.click();a.remove()}
