let array = [];

//funcion para rellenar mediante push un array
const rellenarArrayPrompt = (array) => {
    for(let i = 0; i < 10; i++){
        let numero = prompt(`Inserta valor de la posición ${i}`);
        if (Number(numero)){                                                                //si el valor es un numero
            array.push(parseFloat(numero));
            console.log(`Ha insertado el valor ${numero} en la posicion ${i}`);
        } else {                                                                            //si no es un numero, se intorduce 0 por defecto
            array.push(0);
            console.log(`Se ha introducido por defecto el valor ${0} en la posicion ${i}`);
        }
    }
}

//funcion para mostrar un array
const mostrarArray = (array) => {
    console.log(array);
}

//programa principal
rellenarArrayPrompt(array);
mostrarArray(array);

