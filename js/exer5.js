const decimalToBinario = (numero) => {
    if (numero === 0)                                         //tratamos el caso mas simple
        return "0";

    if (numero === 1) 
        return "1";                                                   // devuelve cadena de texto i no enteros poque es más facil de concaternar 

    let resto = numero % 2;
    let cociente = Math.floor(numero / 2);

    return decimalToBinario(cociente) + resto;                 // llamamos recursivamente la misma funcion añadiendo en cada llamada el resto (de derecha a izquierda)
}                                                              // hasta llegar al caso simple

let numero = prompt("Introduce un numero");

alert("El binario es: " + decimalToBinario(numero));