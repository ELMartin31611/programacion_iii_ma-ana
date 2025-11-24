class Empleado {
    constructor(nombre, turno) {
        this.nombre = nombre;
        this.turno = turno;
    }

    presentarse() {
        console.log(this.nombre + " trabaja en turno " + this.turno);
    }
}

class Piloto extends Empleado {
    iniciarVuelo(codigo) {
        console.log(this.nombre + " está iniciando el vuelo " + codigo);
    }
}

class Controlador extends Empleado {
    autorizarAterrizaje(codigo) {
        console.log("Aterrizaje autorizado para " + codigo);
    }
}

const p1 = new Piloto("Carlos", "mañana");
p1.presentarse();
p1.iniciarVuelo("LA530");

const c1 = new Controlador("María", "noche");
c1.presentarse();
c1.autorizarAterrizaje("UX200");
