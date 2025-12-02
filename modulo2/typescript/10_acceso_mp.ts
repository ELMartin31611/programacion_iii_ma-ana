class Registro {
  private entradas: string[] = []
  add(e: string){ this.entradas.push(e) }
  getUltima(): string | null { return this.entradas.length ? this.entradas[this.entradas.length - 1] : null }
}
const r = new Registro()
r.add("AV101 aterrizó")
console.log(r.getUltima())
