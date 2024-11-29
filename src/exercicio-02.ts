
let somatorio = 0;
let pares = 2;

do {
    somatorio += pares;
    pares += 2;
} while (pares <= 500);


console.log("A soma dos números pares de 1 a 500 é: " + somatorio);