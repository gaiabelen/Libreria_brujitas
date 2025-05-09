let nombreProducto = "tijeras"; 
let precioUnitario = 1000;
let cantidadDeseada = prompt("cuantas unidades necesitas:");

let precioFinal = precioUnitario * cantidadDeseada;

if (cantidadDeseada >= 5) {
    precioFinal = precioFinal * 0.9;
}

alert("el costo a pagar por " + cantidadDeseada + " " + nombreProducto + " es $" + precioFinal);