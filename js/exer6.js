let numeroString = prompt("Introduce un numero");

const numeroDigitos = (numero) => {return numero.length};

if (Number(numeroString) % 1 == 0)                                //si el resto de didvidrlo entre 1 es 0, es entero      
    alert("Numero de dígitos: " + numeroDigitos(numeroString));
else
    alert("No es entero");