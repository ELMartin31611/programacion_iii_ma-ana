function crearVuelo(codigo, origen, destino, hora) {
  return {
    codigo: codigo,
    origen: origen,
    destino: destino,
    hora: hora,
    estado: "Programado"
  };
}

function mostrarVuelo(v) {
  return v.codigo + " " + v.origen + "→" + v.destino + " " + v.hora + " " + v.estado;
}

let nuevo = crearVuelo("NZ410", "Quito", "Bogotá", "14:20");

console.log(mostrarVuelo(nuevo));
