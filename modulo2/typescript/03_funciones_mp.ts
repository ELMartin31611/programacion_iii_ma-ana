function calcularAsientosLibres(capacidad: number, ocupados: number): number { return capacidad - ocupados }
function formateaVuelo(codigo: string, origen: string, destino: string): string { return `${codigo} ${origen}→${destino}` }
console.log(calcularAsientosLibres(180,120))
console.log(formateaVuelo("AV101","Quito","Guayaquil"))
