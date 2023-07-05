const valorLibra = 0.86;
const valorDolar = 1.28611;
const valorYen = 129.852;

//Funcion para convertir de euros a X
const euroConversor = (euros, moneda) => {
    switch(moneda){
        case 1:
            alert(`${euros} euros son ${euros*valorDolar} dólares`);
            break;
        case 2:
            alert(`${euros} euros son ${euros*valorYen} yenes`);
            break;
        case 3:
            alert(`${euros} euros son ${euros*valorLibra} libras`);
            break;
        default:
            alert("Opción no válida");
            break;
    }
}

//programa principal
const euros = parseFloat(prompt("Introduce euros a convertir"));
if (Number(euros)){
    let moneda = parseInt(prompt("Introduce el numero correspondiente a la moneda a la qual desea convertir: \n1. Dólares\n2. Yenes\n3. Libras"));
    if (moneda > 0 && moneda < 4){
        euroConversor(euros, moneda);
    } else{
        alert("Opción no válida");
    }

} else {
    alert("Debe insertar un numero");
}






