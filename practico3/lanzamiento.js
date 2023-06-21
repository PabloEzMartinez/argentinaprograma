let cuentaRegresiva = [];

for (let i=10; i>=0; i--){
    if(i==10){
        cuentaRegresiva.push("Cuenta regresiva de 10");
    } else if(i==0){
        cuentaRegresiva.push("Lanzamiento!");
    } else {
        cuentaRegresiva.push(i);
    }
}

for(let i=0; i<cuentaRegresiva.length; i++){
    console.log(cuentaRegresiva[i])
}



