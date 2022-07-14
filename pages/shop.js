const categorias = [

    {
        id: 1,
        name: "Camiseta Hockey Niño",
        precio: "4500",
    },
    {
        id:2,
        name: "Camiseta Rugby Niño",
        precio: 6200,
    },
    {
        id:3,
        name: "Shor Rugby Adulto",
        precio: 3800,
    }

]

let menu = "Bienvenido a la tienda virtual del VERDE\n 1 - selecciona un producto\n 2 - mostrar carrito\n 3 - eliminar producto\n 0 - salir\n";

function añadir_producto(){
   
    console.log("Se agrega el producto");

}

function mostra_carrito(){
   
    console.log("Este es su carrito");

}

function eliminar_producto(){
   
    console.log("Se elmino un producto");

}







while(true)
{
    let option = parseInt(prompt(menu));
    switch(option)
    {
        case 1:
        añadir_producto();
        break;

        case 2:
        mostra_carrito();
        break;

        case 3:
        eliminar_producto();
        break;

        case 0:
        alert("Gracias por acceder a nuestra Web, hasta pronto!");
        break;

        default:
        break;
    }
    if(option == 0)
    {
        break;
    }
}