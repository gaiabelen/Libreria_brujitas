let Prouctos = ["Lapicera borrable","Tijera para zurdos","Regla de madera","Sacapuntas","Caja de lapices de colores"];


console.log("FOR NORMAL")


for(  let i= 2   ; i< Prouctos.length ; i++){
    console.log("Indice "+i + "producto:" + Prouctos[i])
}

let productoEliminado = Prouctos.pop()

console.log("El producto eliminado es: " + productoEliminado);

console.log("-".repeat(36))

for( prod of Prouctos ){
    console.log(prod);
}
