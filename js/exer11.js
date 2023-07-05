//numeros aleatorios del 0 al 9 para que no sean numeros demasiado grandes.
const rellenarArray = (array, tam) => {
    let numero;
    for(let i = 0; i < tam; i++){
        numero = Math.floor(Math.random() * 10);
        array.push(numero);
    }   
}

const vaciarArray = (array) => {
    array.length = 0;
}

const multiplicaArrays = (array1, array2, tam) => {
    let resultado = [];
    for(let i = 0; i < tam; i++){
        resultado[i] = array1[1]*array2[i];
    }
    return resultado;
}
let array1 = [];
let array2 = [];

let tamaño = parseInt(prompt("Introduce tamaño del array"));

//relleno array 1
rellenarArray(array1, tamaño);

//array 2 apunta al 1
array2 = array1;
console.log("ANTES de reasignar valores al array 2:");
console.log(array1);
console.log(array2);
console.log("----------------------");

//asigno valores nuevos al array 2 (que en realidad son el mismo porque apuntan al mismo espacio de memoria)
vaciarArray(array2);
rellenarArray(array2, tamaño);

let arrayResultado = multiplicaArrays(array1, array2, tamaño);

console.log("DESPUES de reasignar valores al array 2:");
console.log(array1);
console.log(array2);
console.log("Array reultado de multiplicarlos");
console.log(arrayResultado);