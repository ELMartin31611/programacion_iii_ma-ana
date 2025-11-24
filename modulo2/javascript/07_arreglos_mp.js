let lista = [
  { codigo: "AV101", pasajeros: 120 },
  { codigo: "RT204", pasajeros: 45 },
  { codigo: "FL330", pasajeros: 98 }
];

let total = 0;

for (let i = 0; i < lista.length; i++) {
  total = total + lista[i].pasajeros;
}

let mayor = lista[0];

for (let i = 1; i < lista.length; i++) {
  if (lista[i].pasajeros > mayor.pasajeros) {
    mayor = lista[i];
  }
}

let codigos = [];

for (let i = 0; i < lista.length; i++) {
  codigos.push(lista[i].codigo);
}

console.log(total);
console.log(mayor.codigo);
console.log(codigos);
