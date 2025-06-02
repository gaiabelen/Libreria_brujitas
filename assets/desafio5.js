let nombre = "Gaia"

const producto = {
    Nombre: "camiseta",
    Precio: 250,
    cantidadDisponible: 50,
}

producto.Nombre = "zapatillas";
producto.categoria = "calzado";

delete producto.cantidadDisponible
console.log(producto)
