const listaServicios=document.getElementById("listaServicios")
const carrito=document.getElementById("carrito")
const exportServicios=document.getElementById("exportServicios")
const servicios=[{id:1,nombre:"Combustible Jet A1",precio:1200},{id:2,nombre:"Mantenimiento rápido",precio:850},{id:3,nombre:"Servicio de pista",precio:300}]
let cart=[]
function renderServicios(){
  listaServicios.innerHTML=""
  servicios.forEach(s=>{const d=document.createElement("div");d.className="serv";d.innerHTML=`<strong>${s.nombre}</strong> - ${s.precio} USD <button data-id="${s.id}">Agregar</button>`;listaServicios.appendChild(d)})
  document.querySelectorAll("#listaServicios button").forEach(b=>b.onclick=function(){const id=Number(this.dataset.id);const s=servicios.find(x=>x.id===id);cart.push(s);renderCarrito()})
}
function renderCarrito(){carrito.innerHTML="";cart.forEach((c,i)=>{const li=document.createElement("li");li.textContent=`${c.nombre} - ${c.precio} USD `;const btn=document.createElement("button");btn.textContent="Quitar";btn.onclick=function(){cart.splice(i,1);renderCarrito()};li.appendChild(btn);carrito.appendChild(li)})}
exportServicios.onclick=function(){const blob=new Blob([JSON.stringify(cart,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="carrito_servicios__mp.json";document.body.appendChild(a);a.click();a.remove()}
renderServicios()
