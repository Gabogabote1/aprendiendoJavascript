function sumar(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

let numeroUno = prompt("Ingrese primer número");
let numeroDos = prompt("Ingrese segundo número");

let resultado = sumar(numeroUno, numeroDos);

console.log("El total es: " + resultado);