//funcion para rellenar un array
const rellenarArray = (array, tam) => {
    let numero;
    for(let i = 0; i < tam; i++){
        numero = Math.floor(Math.random() * 301);
        array.push(numero);
    }   
}

//funcion que devuelve un array con los numeros acabados en el digito pasado por parametro que pertenecen al array pasado por parametro
const guardarNumerosAcabadosPor = (array, digito) => {
    let resultado = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] % 10 === digito)                           //cualquier numero dividio entre 10 da de residuo la ultima cifra
            resultado.push(array[i]);
    }
    return resultado;
}

let array300 = [];
let tamaño = parseInt(prompt("Introduce tamaño del array"));
let digito = parseInt(prompt("Introduce el digito por el cual deben acabar los numeros del array que quieres guardar"));
let arrayReusltado = [];

//si es un digito válido y ambos son numeros, se ejecutara 
if (Number(tamaño) && Number(digito) && digito >=0 && digito < 10){
    rellenarArray(array300, tamaño);
    arrayReusltado = guardarNumerosAcabadosPor(array300, digito);

    //mostramos por pantalla los dos arrays
    console.log(array300);
    console.log(arrayReusltado);
}
