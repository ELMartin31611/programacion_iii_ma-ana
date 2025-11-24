class Vuelo {
    constructor(codigo, destino, estado) {
        this.codigo = codigo;
        this.destino = destino;
        this.estado = estado;
    }

    mostrarInfo() {
        console.log("Vuelo " + this.codigo + " hacia " + this.destino + " está " + this.estado);
    }
}

const vuelo1 = new Vuelo("AC120", "Madrid", "En horario");
vuelo1.mostrarInfo();
