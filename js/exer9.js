let array = [];

const rellenarArray = (array, tam) => {
    let numero;
    for(let i = 0; i < tam; i++){
        numero = Math.floor(Math.random() * 10);
        array.push(numero);
    }   
}

const mostrarArraySuma = (array) => {
    console.log(array + "\n");
    let suma = 0;
    for(let numero of array){
        suma += numero;
    }
    console.log("La suma de los valores del array es:" + suma);
}

let tam = parseInt(prompt("Introduce tamaño del array"));

if(Number.isInteger(tam)){
    rellenarArray(array, tam);
    mostrarArraySuma(array);

} else {
    alert("El valor introducido no es un numero entero");
}