const frutas = [];

const fruta = prompt('Feria Market -- Que fruta desea comprar' );
frutas.push(fruta);

while(confirm("Desea agregar algo mas al carrito")){
    const fruta = prompt("que fruta desea comprar");
    frutas.push(fruta);
}
console.log('Compraste: ');
for (const fruta of frutas) {
console.log(fruta)
}