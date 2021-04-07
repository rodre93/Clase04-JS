alert("Funciones relacionadas")

const suma = (x,y) => x + y;
const resta = (x,y) => x - y;
const imp = x => x * 0.65;
const devImp = x => x * 0.35;

let precioProducto = parseInt(prompt("Ingrese valor producto en dolares"));
let precioEnvio = parseInt(prompt("Ingrese valor Envio"));

let precioMasimpuesto = suma(precioProducto, imp(precioProducto));

let precioFinal = suma(precioMasimpuesto, precioEnvio);

alert(precioFinal);

let devolucionImp = devImp(precioProducto);

alert("Si haces el tramite para la devolucion del impuesto PAIS, te devolveran " + devolucionImp + " dolares.");