let asientos = 180;
let vuelos = 12;
let totalAsientos = asientos * vuelos;

let ocupados = 135;
let porcentaje = Math.round((ocupados / asientos) * 100);

let minutos = 95;
let horas = (minutos / 60).toFixed(2);

console.log(totalAsientos);
console.log(porcentaje + "%");
console.log(horas + "h");
