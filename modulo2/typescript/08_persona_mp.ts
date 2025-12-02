class Tripulante {
  nombre: string
  edad: number
  nivel: string
  constructor(nombre: string, edad: number, nivel = "Junior"){ this.nombre = nombre; this.edad = edad; this.nivel = nivel }
  info(): string { return `${this.nombre} ${this.nivel} ${this.edad}` }
}
const t = new Tripulante("Ana",28)
console.log(t.info())
