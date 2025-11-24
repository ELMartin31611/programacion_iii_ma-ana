class PuertaEmbarque {
    constructor(numero, vuelo) {
        this.numero = numero;
        this.vuelo = vuelo;
    }

    asignarVuelo(nuevoVuelo) {
        this.vuelo = nuevoVuelo;
    }

    abrirPuerta() {
        console.log("La puerta " + this.numero + " está abierta para el vuelo " + this.vuelo);
    }

    cerrarPuerta() {
        console.log("La puerta " + this.numero + " está cerrada");
    }
}

const puerta = new PuertaEmbarque("A3", "AR908");
puerta.abrirPuerta();
puerta.cerrarPuerta();
puerta.asignarVuelo("IB300");
puerta.abrirPuerta();
