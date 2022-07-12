let cuota_activo = 4950;
let cuota_cadete = 3100;
let cuota_menores = 2700;
let cuota_dep_menores = 650;
let cuota_dep_cadetes = 850;
let costo_tercer_tiempo = 2000;
let soc_activo = "SOCIO ACTIVO";
let soc_cadete = "SOCIO CADETE MAYOR";
let soc_menor = "SOCIO CADETE MENOR";


class Socio {
    constructor(nombre, apellido, jugador, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.jugador = jugador;
        this.edad = edad;
    }
}

let lista_socio = [];

for (let i = 0; i < 3; i++) {

    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    let jugador = prompt("Ingrese SI/NO: ");
    let edad = prompt("Ingrese su edad:");

    let nuevo_socio = new Socio(nombre, apellido, jugador, edad);

    lista_socio.push(nuevo_socio);

}

console.log(lista_socio);

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

for (let socio of lista_socio) {

    console.log("Nombre:", socio.nombre);
    console.log("Apellido:", socio.apellido);
    console.log("Jugador:", socio.jugador)
    console.log("Edad: ", socio.edad);
    console.log("Categoria: ", categoria_social(socio.edad));
    console.log("Cuota social: ", costo_social(socio.edad));
    console.log("Cuota deportiva: " , costo_deportivo(socio.edad));
    console.log("Costo total: " , costo_social(socio.edad) + costo_deportivo(socio.edad));
    console.log(<--------------------------------------->);
    

}




