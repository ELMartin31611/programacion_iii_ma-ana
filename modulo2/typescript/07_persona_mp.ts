class Empleado {
  nombre: string
  puesto: string
  constructor(nombre: string, puesto: string){ this.nombre = nombre; this.puesto = puesto }
  presentarse(): string { return `${this.nombre} - ${this.puesto}` }
}
const e = new Empleado("Carlos","Piloto")
console.log(e.presentarse())
