let temperatura=35;

if (temperatura>30){
    console.log("Hace calor");
}

let password="pass123";
if(password==="pass12345"){
    console.log("Usuario logueado");
} else{
    console.log("Acceso denegado");
}

let nota=7;
if (nota>=9){
    console.log("Sobresaliente");
}
    else if(nota>=6) {
        console.log("Aprobado");
}
    else{
        console.log("Reprobado");
}


let edad=20;
let tiene_licencia=true;
if(edad>=18 && tiene_licencia){
    console.log("Puede Conducir");
}else if (edad >= 18 && !tiene_licencia) {
    console.log("Necesita Licencia para conducir");
}else {
    console.log("Es menor de edad");
}

//Estructura Switch
let dia="lunes";
switch(dia){
    case"lunes":
     console.log("Inicio de semana");
    break;
    case "viernes":
     console.log("Ultimo dia laboral");
    break;
    default:
        console.log("Dia Normal");
}