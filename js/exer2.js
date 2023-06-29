let cantidad = parseInt(prompt("Introduce la cantidad:"));
let min = parseInt(prompt("Introduce el valor mínimo:"));
let max = parseInt(prompt("Intorduce el valor máximo:"));

const generarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

for(let i = 0; i < cantidad; i++){
    console.log(generarNumeroAleatorio(min, max)+"\n");
}