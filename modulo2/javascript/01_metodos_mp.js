const vuelo = {
  codigo: "AV101",
  origen: "Quito",
  destino: "Guayaquil",
  hora: "08:30",
  pasajeros: 120,
  capacidad: 180,
  resumen() {
    return this.codigo + " " + this.origen + "→" + this.destino + " " + this.hora + " (" + this.pasajeros + "/" + this.capacidad + ")";
  },
  agregarPasajeros(n) {
    this.pasajeros += n;
    if (this.pasajeros > this.capacidad) {
      this.pasajeros = this.capacidad;
    }
    return this.pasajeros;
  }
};

console.log(vuelo.resumen());
console.log(vuelo.agregarPasajeros(5));
console.log(vuelo.resumen());
