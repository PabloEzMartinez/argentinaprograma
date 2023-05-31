let jugador1 = {nombre: "J", posicion: "arco", edad: "23"};
let jugador2 = {nombre: "P", posicion: "defensa", edad: "22"};
let jugador3 = {nombre: "T", posicion: "mediocampo", edad: "21"};
let jugador4 = {nombre: "L", posicion: "mediocampo", edad: "22"};
let jugador5 = {nombre: "TM", posicion: "delantero", edad: "20"};
let equipo1 = [jugador1, jugador2, jugador3, jugador4, jugador5];
let torneo = {equipo1, equipo2, equipo3, equipo4, equipo5, equipo6, equipo7, equipo8};


let jugador6 = {nombre: "M", posicion: "delantero", edad: "24"};
let jugador7 = {nombre: "LT", posicion: "defensa", edad: "25"};
equipo1[5] = jugador6;
equipo1[6] = jugador7;

console.log(jugador1);
console.log(equipo1);
