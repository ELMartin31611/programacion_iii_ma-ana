function procesarPago(monto) {
  if (typeof monto !== "number" || isNaN(monto)) {
    throw "Monto inválido";
  }
  if (monto <= 0) {
    throw "Monto debe ser mayor a cero";
  }
  return "Pago procesado " + monto + " USD";
}

try {
  console.log(procesarPago(200));
  console.log(procesarPago("cincuenta"));
} catch (e) {
  console.log("Error:", e);
} finally {
  console.log("Fin del proceso");
}
