let btn_compra = document.querySelectorAll(".botonCompra");

console.log (btn_compra);

for ( let boton of btn_compra){
    boton.addEventListener( "click" , agregar_a_carrito);
}

function agregar_a_carrito(e){
    console.log("El evento esta en:" , e.target);
}
