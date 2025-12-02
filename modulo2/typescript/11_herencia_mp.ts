class EmpleadoBase {
  nombre: string
  constructor(nombre: string){ this.nombre = nombre }
  trabajar(): string { return `${this.nombre} trabaja` }
}
class Piloto extends EmpleadoBase {
  licencia: string
  constructor(nombre: string, licencia: string){ super(nombre); this.licencia = licencia }
  volar(codigo: string): string { return `${this.nombre} volando ${codigo}` }
}
const pil = new Piloto("Luis","ABC123")
console.log(pil.trabajar())
console.log(pil.volar("AV101"))
