console.log(" ");
const readlineSync = require("readline-sync");
let cantidadJugadas = readlineSync.question("En cuantas jugadas desea terminar la partida? ");

console.log(" ");
console.log("La partida será al mejor de %s.",cantidadJugadas);
console.log(" ");

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
    var jugadaElegida = readlineSync.question("Que elijes? ");
    if(!(jugadaElegida=="Piedra"||jugadaElegida=="Papel"||jugadaElegida=="Tijeras")){
        console.log("Error, ingrese nuevamente: Piedra, Papel o Tijeras? ");
        jugadaElegida=readlineSync.question("Que elijes? ");
    }
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

//usar ciclo para invocar las funciones y almacenar los resultados
let i=1;
let empates = 0;
let victoriasUsuario = 0;
let victoriasCompu = 0;

while(i<=cantidadJugadas){
    let jugadaComputadora= obtenerJugadaComputadora();
    let jugadaUsuario = ObtenerJugadaUsuario();
    console.log(" ");
    let resultadoJuego = determinarGanador(jugadaUsuario, jugadaComputadora);
    console.log("La computadora eligio: %s.",jugadaComputadora);
    console.log("El usuario eligio: %s.",jugadaUsuario);
    console.log("El resultado fue: %s.",resultadoJuego);
    switch(resultadoJuego){
        case("Gana la computadora"):
            victoriasCompu+=1
            break;
        case("Gana el usuario"):
            victoriasUsuario+=1
            break;
        case("Empate"):
            empates+=1
            break;
        }
    if(victoriasCompu==(Math.floor(cantidadJugadas/2)+1)||victoriasUsuario==(Math.floor(cantidadJugadas/2)+1)){
        break;
    }
    console.log(" ");
    i++;
}

console.log(" ");
if(victoriasCompu>victoriasUsuario){
    console.log("Resultado Final: GANA LA COMPUTADORA")
} else if(victoriasUsuario>victoriasCompu){
    console.log("Resultado Final: GANA EL USUARIO")
} else {
    console.log("Resultado Final: EMPATE")
}



