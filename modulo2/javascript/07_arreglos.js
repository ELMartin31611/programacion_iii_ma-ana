console.log("Arrays o Arreglos");
let numeros =[10,5,26,9];
let arrayVacio = new Array();
let arrayVacio2= [];

console.log("arreglos de numeros original", numeros);
console.log(arrayVacio);
console.log(arrayVacio2);


console.log("Acceso a los elementos de array");
console.log(numeros[0]);
console.log(numeros[3]);

console.log("modificar elementos del array");
numeros[0]=100
console.log(numeros);


console.log("agregar elemento al array");
numeros.push(500);
console.log(numeros);

console.log("agregar elemento al inicio del array");
numeros.unshift(500);
console.log(numeros);

console.log("eliminar el ultimo elemento al inicio del array");
numeros.pop();
console.log(numeros);


console.log("eliminar el primer elemnto del array");
numeros.shift();
console.log(numeros);

console.log("eIteracion de array del array");

let indice=0
console.log("Iteracion con while");
while(indice<numeros.length){
    console.log("valor", indice,"es",numeros[indice]);
    indice++;
}

console.log("Iteracion con for");

for(let i=0; i<numeros.length;i++){
    console.log(numeros[i]);
}

console.log("Iteracion con for... of");
for(let valor of numeros){
    console.log(valor);

}

console.log("Iteracion con for Each");
numeros.forEach(function(valor,indice){
    console.log(indice,valor);
});
