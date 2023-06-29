const factorial = (numero) => {
    if (numero === 0 || numero === 1) 
        return 1;
    else 
        return numero*factorial(numero-1);      //funcion recursiva que se llama a si misma.
}

let numero = prompt("Introduce un numero");

alert("El factorial es: " + factorial(numero));