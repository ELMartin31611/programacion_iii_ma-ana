console.log("Funciones");

console.log("Forma Clasica")

function saludar(){
    console.log("Hola desde una funcion clasica");
}
saludar();

console.log("Forma con parametros y retorno")

function sumar(a,b){
    return a+b;
}

let resultado= sumar(5,6)
console.log("la suma es", resultado);



console.log("funcion flecha")

const resta= (a,b)=>{
    return a-b;
}

let resultadores= resta(16,6)
console.log("la suma es", resultadores);


console.log("Funcion retorno directo")

const cuadrado =x =>x*x;

console.log("cuadrado de 5: ", cuadrado(5));


console.log("Funcion con parametros por defecto");

function saludar(nombre, saludo="Hola"){
    return saludo +" " +nombre;

}
let saludo1=saludar("Martin");
let saludo2=saludar("Martin", "Buenos dias");
console.log(saludo1);
console.log(saludo2);


function tri(base,altura){
    return ((base*altura)/2);
}

let resultadoa= tri(5,6)
console.log("el area es", resultadoa);


