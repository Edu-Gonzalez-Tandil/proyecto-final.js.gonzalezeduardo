//Datos fijos de los costos del club y sus categorias
let cuota_activo = 4950;
let cuota_cadete = 3100;
let cuota_menores = 2700;
let cuota_dep_menores = 650;
let cuota_dep_cadetes = 850;
let costo_tercer_tiempo = 2000;
let soc_activo = "SOCIO ACTIVO";
let soc_cadete = "SOCIO CADETE MAYOR";
let soc_menor = "SOCIO CADETE MENOR";

//Simulo base de datos del sistema
//Storage

let base_datos = []

function nuevo_registro (){

    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let dni = document.getElementById("DNI")
    let edad = document.getElementById("edad");
    let jugador = document.getElementById("select_jugador");
    let obra_social = document.getElementById("obra_social");
    let nuevo_socio = {"Nombre": nombre.value , "Apellido": apellido.value , "DNI": dni.value , "Edad": edad.value};

    base_datos.push(nuevo_socio);

    let base_datosJSON = JSON.stringify(base_datos);
    localStorage.setItem("Nuevos registros" , base_datosJSON);

    let mi_base_datos = localStorage.getItem("Nuevos registros");
    console.log ( JSON.parse (mi_base_datos));

    

}

let boton = document.getElementById("boton_enviar");
boton.addEventListener("click", nuevo_registro);

console.log(base_datos);

function consultar_socio(base_datos) {
    
    return base_datos.ndoc == 36559841
}

let resultado_busqueda = base_datos.find(consultar_socio);
console.log ("El DNI ingresado ya esta registrado en nuestra base de datos" , resultado_busqueda);


formulario.addEventListener("submit" , function tomar_datos(e){

    e.preventDefault();
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let dni = document.getElementById("DNI")
    let edad = document.getElementById("edad");
    let jugador = document.getElementById("select_jugador");
    let obra_social = document.getElementById("obra_social");

    console.log("Nombre: " , nombre.value);
    console.log("Apellido: " , apellido.value);
    console.log("DNI: " , dni.value);
    console.log("Edad: " , edad.value);
    console.log("Jugador: ", jugador.value);
    console.log("Obra social: " , obra_social.value);
    console.log("Categoria social: ", categoria_social(edad.value));
    console.log("Cuota social: " , costo_social(edad.value));
    console.log("Cuota deportiva: " , costo_deportivo(edad.value));

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu regristro se completo con exito! Bienvenido a la familia verde!',
        showConfirmButton: false,
        timer: 1500

      })

})

function categoria_social(edad) {

    if (edad > 1, edad <= 11) {
        return soc_menor;
    }
    else if (edad >= 12 && (edad < 18)) {
        return soc_cadete;
    }
    else if (edad >= 18) {
        return soc_activo;
    }
}

function costo_social(edad) {

    if (edad > 1 && (edad <= 11)) {
        return cuota_menores;
    }

    else if (edad >= 12 && (edad < 18)) {
        return cuota_cadete;
    }

    else if (edad >= 18) {
        return cuota_activo;
    }
}

function costo_deportivo(edad) {

    if (edad > 1 && (edad <= 11)) {
        return cuota_dep_menores;
    }

    else if (edad >= 12 && (edad < 18)) {
        return cuota_dep_cadetes;
    }

    else if (edad >= 18) {
        return " (Sin costo deportivo)";
    }
}


formulario.addEventListener("submit" , function(){

    let edad = document.getElementById("edad");
    
    costo_social(edad);

    let li = document.createElement("li");
    li.innerHTML = `<span>${costo_deportivo.value} </span>`;

    li.append(li);

})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Tandil&appid=9885ae2e08b2f82172b6ceaad0a6640d")
    .then(response => response.json())
    .then( data => console.log(data))



