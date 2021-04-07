const suma = (x,y) => x + y;
const imp = x => x * 0.65;

let precioProducto = parseInt(prompt("Ingrese valor producto"));
let precioEnvio = parseInt(prompt("Ingrese valor Envio"));

let precioMasimpuesto = suma(precioProducto, imp(precioProducto));

let precioFinal = suma(precioMasimpuesto, precioEnvio);

alert(precioFinal);