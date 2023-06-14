const readlineSync = require("readline-sync");
const number = readlineSync.question("What is your number? ");

if (number===0){
    console.log("El numero es cero");
} else if (number>0){
    console.log("El numero es positivo");
} else {
    console.log("El numero es negativo");
}
