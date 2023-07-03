
function obtenerJugadaComputadora(){
    let jugadaCompu = Math.round(Math.random())+Math.round(Math.random());
    switch(jugadaCompu){
        case 0:
            jugadaCompu = "Piedra"
            break;
        case 1:
            jugadaCompu = "Papel"
            break;
        case 2:
            jugadaCompu = "Tijeras"
            break;
    }
    return jugadaCompu;
}


function ObtenerJugadaUsuario(){
    const readlineSync = require("readline-sync");
    const jugadaElegida = readlineSync.question("Que elijes? ");
    return jugadaElegida;
}



//implementar reglas del juego
function determinarGanador(jugada1, jugada2){
    if(jugada1==jugada2){
        resultado = "Empate";
    } else {
        if(jugada1=="Piedra"&&jugada2=="Papel"){
            resultado = "Gana la computadora";
        } else if(jugada1=="Piedra"&&jugada2=="Tijeras"){
            resultado = "Gana el usuario";
        } else if(jugada1=="Papel"&&jugada2=="Piedra"){
            resultado = "Gana el usuario";
        } else if(jugada1=="Papel"&&jugada2=="Tijeras"){
            resultado = "Gana la computadora";
        } else if(jugada1=="Tijeras"&&jugada2=="Piedra"){
            resultado = "Gana la computadora";
        } else if(jugada1=="Tijeras"&&jugada2=="Papel"){
            resultado = "Gana el usuario";
        }
    }
    return resultado;
}


let jugadaComputadora= obtenerJugadaComputadora();
let jugadaUsuario = ObtenerJugadaUsuario();
let resultadoJuego = determinarGanador(jugadaUsuario, jugadaComputadora);

console.log("La computadora eligio: %s.",jugadaComputadora);
console.log("El usuario eligio: %s.",jugadaUsuario);
console.log("El resultado fue: %s.",resultadoJuego);


