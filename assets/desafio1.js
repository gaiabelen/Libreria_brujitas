const nombreProducto = "lapiceras" 

const precioUnitario = 7;

let cantidadDeseada = prompt("indique la cantidad desada de " + nombreProducto + " quiere comprar:")
alert("usted va a comprar " + cantidadDeseada + " unidades")

let costoTotal = cantidadDeseada * precioUnitario

alert("el precio total seria: " + costoTotal)