function saludar(params) {
    console.log("Hola Rodri")
}

saludar();

//let resultado = 10;

/**
 * 
 * @param {Int} pNumero1 
 * @param {Int} pNumero2 
 * @param {String} pOperation 
 * @returns 
 */

function calculadora(pNumero1, pNumero2, pOperation) {
    let resultado = 0;
    switch (pOperation) {
        case "+":
            resultado = pNumero1 + pNumero2;
            break;
    
        case "-":
            resultado = pNumero1 - pNumero2;
            break;
        
            default:
            break;
    }

    return resultado;
}

let numero1 = parseInt(prompt("Ingrese Numero 1"));
let numero2 = parseInt(prompt("Ingrese Numero 2"));
let operacion = prompt("Ingrese Operacion : + o -");

alert(calculadora(numero1,numero2, operacion));

for (let index = 0; index < 50; index++) {
    saludar;
}


const suma = (x,y) => x + y;
const imp = x => x * 0.65;

alert(suma(2,3));

let precioProducto = parseInt(prompt("Ingrese valor producto"));
let precioEnvio = parseInt(prompt("Ingrese valor Envio"));

let precioMasimpuesto = suma(precioProducto, imp(precioProducto));

let precioFinal = suma(precioMasimpuesto, precioEnvio);

alert(precioFinal);