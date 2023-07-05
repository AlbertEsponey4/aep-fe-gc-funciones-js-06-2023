//rescatado del ejericio 3
const esPrimo = (numero) => {
    let isPrimo = true
    if (numero === 2) isPrimo = false;           //controlo el caso del numero 2 por separado porque no va a entrar en el while
    
    let i = 2;
    while(i < numero && isPrimo === true){        //Si se puede dividir por ningun numero entre algun numero entre 2 i numero-1, es primo sera false
        if (numero % i === 0)
            isPrimo = false
        i++
    }
    return isPrimo;
}

const hayAlmenosUnPrimo = (min, max) => {
    for(let i = min; i <= max; i++){       //i empieza a contar desdel numero minimo y hasta el máximo.
        if(esPrimo(i)){
            return true;                        // devolvemos true en cuanto i sea primo
        }
    }
    return false;
}

//rellena array si hay almenos algun numero primo en el rango. Si se ha podido rellenar, da true. En caso contrario da false.
const rellenarArrayPrimos = (array, tam, max, min) => {
    if(hayAlmenosUnPrimo(min, max)){
        let numero;
        for(let i = 0; i < tam; i++){
            numero = Math.floor(Math.random() * (max - min + 1)) + min; 
            if (esPrimo(numero)){
                array.push(numero);
            } else{                                                       //decremento el i para que no cuente esa iteración
                i--;
            }
        }
        return true;
    }
alert("No hay numeros primos entre el rango que has introducido");
return false;
}

const primoMaximo = (array) => {
    return Math.max(...array); // ... para que coja todos los valores del array
}

//programa principal
const array = [];
const tam = parseInt(prompt("Introduce TAMAÑO del array"));
const min = parseInt(prompt("Introduce primo MÍNIMO del array"));
const max = parseInt(prompt("Introduce primo MÁXIMO del array"));


if(max > min && rellenarArrayPrimos(array, tam, max, min)){  //si el maximo es mas grande que el minimo y si la funcion da true(ha podido rellenar el array), mostramos el array
    console.log(array);
    console.log("El numero más grande es: "+primoMaximo(array));
} else {
    alert("Assegurate que el numero máximo sea mayor que el mínimo")
}
