const readlineSync = require("readline-sync");
const number = readlineSync.question("What is your number? ");

if (number>0 && number%2==0){
    console.log("El numero es positivo y par");
} else if (number>0 && !number%2==0){
    console.log("El numero es positivo e impar");
} else if (number==0){
    console.log("El numero es cero");
} else {
    console.log("El numero es negativo");
}
