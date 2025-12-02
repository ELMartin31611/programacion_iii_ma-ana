class Aeronave {
  despegar(): string { return "Aeronave despegando" }
}
class Avion extends Aeronave {
  despegar(): string { return "Avión despegando por pista" }
}
class Helicoptero extends Aeronave {
  despegar(): string { return "Helicóptero elevándose verticalmente" }
}
const lista: Aeronave[] = [new Avion(), new Helicoptero()]
for (const x of lista) console.log(x.despegar())
