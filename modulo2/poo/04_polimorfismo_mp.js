class Aeronave {
    despegar() {
        return "Aeronave despegando";
    }
}

class Avion extends Aeronave {
    despegar() {
        return "Avión tomando pista y despegando";
    }
}

class Helicoptero extends Aeronave {
    despegar() {
        return "Helicóptero elevándose verticalmente";
    }
}

const a1 = new Avion();
const a2 = new Helicoptero();

console.log(a1.despegar());
console.log(a2.despegar());
