class Puerta {
  private numero: string
  public abierto: boolean
  constructor(numero: string){ this.numero = numero; this.abierto = false }
  abrir(){ this.abierto = true }
  estado(): string { return `${this.numero} ${this.abierto? "abierta":"cerrada"}` }
}
const p = new Puerta("A3")
p.abrir()
console.log(p.estado())
