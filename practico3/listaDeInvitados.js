let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let rechazados = [];
let invitados = [];

for(let i=0; i<personas.length;i++){
    if(personas[i]=="Jose"){
       rechazados.push(personas[i]);
    } else if(personas[i]=="Sofia"){
        rechazados.push(personas[i]);
    } else {
        invitados.push(personas[i]);
    }
}

console.log("La lista de invitados admitidos es:");
for(let i=0; i<invitados.length; i++){
    console.log(invitados[i]);
}

console.log(" ");

console.log("La lista de invitados rechazados es:");
for(let i=0; i<rechazados.length;i++){
    console.log(rechazados[i]);
}

console.log(" ");

//extra//

let listaOrdenadaInvitados = invitados.sort();
let listaOrdenadaRechazados = rechazados.sort();

console.log("La lista ordenada de invitados admitidos es:");
for(let i=0; i<listaOrdenadaInvitados.length;i++){
    console.log(listaOrdenadaInvitados[i]);
}

console.log(" ");

console.log("La lista ordenada de invitados rechazados es:");
for(let i=0; i<listaOrdenadaRechazados.length; i++){
    console.log(listaOrdenadaRechazados[i]);
}

console.log(" ");


