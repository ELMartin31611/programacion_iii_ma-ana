const servSelect=document.getElementById("servSelect")
const cantidad=document.getElementById("cantidad")
const calcular=document.getElementById("calcular")
const total=document.getElementById("total")
const pagar=document.getElementById("pagar")
const servicios=[{id:1,nombre:"Combustible Jet A1",precio:1200},{id:2,nombre:"Mantenimiento rápido",precio:850},{id:3,nombre:"Servicio de pista",precio:300}]
servicios.forEach(s=>{const o=document.createElement("option");o.value=s.id;o.textContent=`${s.nombre} - ${s.precio} USD`;servSelect.appendChild(o)})
calcular.onclick=function(){const s=servicios.find(x=>x.id===Number(servSelect.value));const t=s.precio*Number(cantidad.value);total.textContent=`Total: ${t} USD`}
pagar.onclick=function(){const s=servicios.find(x=>x.id===Number(servSelect.value));const t=s.precio*Number(cantidad.value);const recibo={servicio:s.nombre,cantidad:Number(cantidad.value),total:t,fecha:new Date().toISOString()};const blob=new Blob([JSON.stringify(recibo,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="recibo__mp.json";document.body.appendChild(a);a.click();a.remove()}
