//tenemos una tabla de las temperaturas medias por mes
//de los doce meses en grados Fahrenheit; 
//cómo hacemos para calcular el promedio anual en Celsius?

let enero = 12;
let feb = 30;
let marzo = 40;
let abril = 90;
let mayo = 76;
let junio = 50;
let julio = 45;
let agosto = 65;
let sept = 50;
let octub = 43;
let noviembre = 40;
let diciembre = 32;
let tabla12Meses = [enero, feb, marzo, abril, mayo, junio, julio, agosto, sept, octub, noviembre, diciembre];
let sumatoriaGrados = 0;
sumatoriaGrados + tabla12Meses[0];
sumatoriaGrados + tabla12Meses[1];
sumatoriaGrados + tabla12Meses[2];
sumatoriaGrados + tabla12Meses[3];
sumatoriaGrados + tabla12Meses[4];
sumatoriaGrados + tabla12Meses[5];
sumatoriaGrados + tabla12Meses[6];
sumatoriaGrados + tabla12Meses[7];
sumatoriaGrados + tabla12Meses[8];
sumatoriaGrados + tabla12Meses[9];
sumatoriaGrados + tabla12Meses[10];
sumatoriaGrados + tabla12Meses[11];
let promedioFah = sumatoriaGrados/12;

let promedioCel = (promedioFah-32)*5/9;

console.log("promedio equivale a "+promedioCel);

