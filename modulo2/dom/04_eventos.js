let parrafo= null;
document.getElementById('crear').addEventListener('click',()=>{
    parrafo= document.createElement('p');
    parrafo.textContent="Parrafo dinamico desde javascript";
    document.getElementById('contenedor').appendChild(parrafo);
    
});

document.getElementById('eliminar').addEventListener('click',()=>{
    if(parrafo) parrafo.remove();
});

function saludar(){
    alert("hola desde una funcion");

}


document.getElementById('parrafo')
    .addEventListener('dbclick',()=>{
    alert("Se hizo doble click en el parrafo");
});


document.getElementById('nombre')
    .addEventListener('input',(e)=>{
    console.log("escribiendo",e.target.value);
});