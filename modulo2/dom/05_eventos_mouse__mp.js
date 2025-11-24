const tarjeta=document.getElementById("tarjeta-vuelo")
const codigoTarjeta=document.getElementById("codigoTarjeta")
const detalleTarjeta=document.getElementById("detalleTarjeta")
const desc=document.getElementById("desc")
tarjeta.addEventListener("mouseover",()=>{tarjeta.style.transform="scale(1.03)";tarjeta.style.boxShadow="0 6px 18px rgba(0,0,0,0.08)"})
tarjeta.addEventListener("mouseout",()=>{tarjeta.style.transform="scale(1)";tarjeta.style.boxShadow="none"})
tarjeta.addEventListener("click",()=>{codigoTarjeta.textContent="RT204";detalleTarjeta.textContent="Guayaquil → Cuenca 09:15"})
desc.onclick=function(){
  const data={codigo:codigoTarjeta.textContent,detalle:detalleTarjeta.textContent}
  const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"})
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="tarjeta_vuelo__mp.json";document.body.appendChild(a);a.click();a.remove()
}
