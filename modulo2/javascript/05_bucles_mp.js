let vuelos = [
  { codigo: "AV101", origen: "Quito", destino: "Cuenca", estado: "Programado" },
  { codigo: "RT204", origen: "Guayaquil", destino: "Quito", estado: "Retrasado" },
  { codigo: "FL330", origen: "Quito", destino: "Lima", estado: "En vuelo" }
];

for (let i = 0; i < vuelos.length; i++) {
  console.log(vuelos[i].codigo, vuelos[i].origen + "→" + vuelos[i].destino, vuelos[i].estado);
}

for (let v of vuelos) {
  if (v.estado === "Retrasado") {
    console.log("Atención:", v.codigo);
  }
}

vuelos.forEach(function (v) {
  console.log("ForEach:", v.codigo);
});
