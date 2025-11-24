let aeropuerto = {
  nombre: "Mariscal Sucre",
  codigo: "UIO",
  pistas: 3,
  vuelosActivos: 5,
  resumen: function () {
    return this.nombre + " (" + this.codigo + ") Pistas:" + this.pistas + " Activos:" + this.vuelosActivos;
  },
  agregarVuelo: function () {
    this.vuelosActivos = this.vuelosActivos + 1;
    return this.vuelosActivos;
  }
};

console.log(aeropuerto.resumen());
console.log(aeropuerto.agregarVuelo());
console.log(aeropuerto.resumen());
