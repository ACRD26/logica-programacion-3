let entrada = prompt("Ingresa un número entero positivo:");
let numero = parseInt(entrada);

if (isNaN(numero) || numero < 0) {
    alert("Ingrese un numero entero positivo.");
    console.log("El numero ingresado no es valido");
} else {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i;
    }

    let resultado = "El factorial de " + numero + " es: " + factorial;
    alert(resultado);
    console.log(resultado);
}