const readlineSync = require("readline-sync");
const age = readlineSync.question("What is your age? ");

if (age>=18){
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

