class producto {
    constructor(nombre, valor) {
        this.nombre = nombre;
        this.valor = valor;
    }
}

const producto1 = new producto("Aerosol", 1000);
const producto2 = new producto("Difusor", 1100);
const producto3 = new producto("Textil", 900);
console.log(producto1, producto2, producto3)

producto.valor = parseInt(producto.valor)


let producto1Parceado = parseInt(1000)
let producto2Parceado = parseInt(1100)
let producto3Parceado = parseInt(900)

alert("¿Hola, como estas? comenzaremos con la seleccion de tu compra")

let nombre = prompt("¿Cual es tu nombre?");
alert("bienvenido/a  " + nombre)
console.log("Bienvenido/a " + nombre);

alert("q producto estas buscando?")

let opcion = prompt("Marca el producto que desea solicitar: Aerosol Difusor Textil o S para salir")
while (opcion != "S") {
    switch (opcion) {
        case 1:
            opcion = "Aerosol"
            break;
        case 2:
            opcion = "Difusor";
            break;
        case 3:
            opcion = "textil";
            break;
        case 4:
        default:
            "Salir"
            break;
    }
    opcionFragancia = prompt("Que Fragancia estas buscando? Limon, Rosa, Coco, Violeta, Vainilla")
    break
} console.log(opcion)

cantidad = prompt("Q cantidad deseas");
let cantidadParseada = parseInt(cantidad);
console.log(cantidad)

let mail = prompt("Indiquenos su e-mail")
console.log(mail)

alert("Su pedido es: " + opcion + " " + opcionFragancia + " " + cantidad)
alert("A la brevedad enviaremos un mail con la confirmacion y el prespuesto a: " + mail + " Gracias por su compra, hasta la proxima")
