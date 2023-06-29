let numero = prompt("Introduce un numero");

const esPrimo = (numero) => {
    let esPrimo = true

    if (numero === 2) esPrimo = false;           //controlo el caso del numero 2 por separado porque no va a entrar en el while
    
    let i = 2;
    while(i < numero && esPrimo === true){        //Si se puede dividir por ningun numero entre algun numero entre 2 i numero-1, es primo sera false
        if (numero % i === 0)
            esPrimo = false
        i++
    }
    return esPrimo;
}

if (esPrimo(parseInt(numero))) alert("Es un numero primo");
else alert("NO es un numero primo");