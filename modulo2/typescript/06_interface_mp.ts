interface IServicio { nombre: string; precio: number; activo?: boolean }
const s1: IServicio = { nombre: "Combustible", precio: 1200 }
const s2: IServicio = { nombre: "Pista", precio: 300, activo: true }
console.log(s1, s2)
