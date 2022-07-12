let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let jugador = prompt("Ingrese si es jugador SI/NO");
let edad = parseInt(prompt("Ingrese su edad. "));
let cuota_activo = 4950;
let cuota_cadete = 3100;
let cuota_menores = 2700;
let cuota_dep_menores = 650;
let cuota_dep_cadetes = 850;
let costo_tercer_tiempo = 2000;
let soc_activo = "SOCIO ACTIVO";
let soc_cadete = "SOCIO CADETE MAYOR"
let soc_menor = "SOCIO CADETE MENOR"

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

console.log("Nombre: ", nombre);
console.log("Apellido: ", apellido)
console.log("Jugador: ", jugador);
console.log("Edad: ", edad);

console.log("Categoria: ", categoria_social(edad));
console.log("Cuota social: ", costo_social(edad));
console.log("Cuota deportiva: " , costo_deportivo(edad));
console.log("Costo total: " , costo_social(edad) + costo_deportivo(edad));
console.log("Costo tercer tiempo (Mensual): " , tercer_tiempo(jugador == 'SI'));

