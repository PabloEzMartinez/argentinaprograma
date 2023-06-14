const readlineSync = require("readline-sync");
const mesIngresado = readlineSync.question("Ingrese un numero del 1 al 12: ");

let meses = [{mes: "enero", dias: 31}, {mes: "febrero", dias: 28}, {mes: "marzo", dias: 31}, {mes: "abril", dias: 30}, {mes: "mayo", dias: 31}, {mes: "junio", dias: 30}, {mes: "julio", dias: 31}, {mes: "agosto", dias: 31}, {mes: "septiembre", dias: 30}, {mes: "octubre", dias: 31}, {mes: "noviembre", dias: 31}, {mes: "diciembre", dias: 31}];

console.log("La cantidad de dias del mes de "+ meses[mesIngresado-1].mes + " es " + meses[mesIngresado-1].dias + ".");

