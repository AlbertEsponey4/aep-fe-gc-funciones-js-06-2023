const areaCirculo = (radio) => {
    return (radio*radio)*Math.PI;
}

const areaTriangulo = (base, altura) => {
    return (base*altura)/2;
}

const areaCuadrado = (lado) => {
    return lado*lado;
}

let opcion = prompt("Que area desea calcular?\n1.Quadrado\n2.Triangulo\n3.Círculo");
switch(parseInt(opcion)){
    case 1:
        let lado = prompt("Introduce el lado del quadrado");
        alert("La area es: " + areaCuadrado(lado));
        break;
        
    case 2:
        let base = prompt("Introduce la base");
        let altura = prompt("Introduce la altura");
        alert("La area es: " + areaTriangulo(base, altura));
        break;

    case 3: 
        let radio = prompt("Introduce el radio del círculo")
        alert("La area es: " + areaCirculo(radio));
        break;

    default:
        alert("opción no váida");
        break;
}