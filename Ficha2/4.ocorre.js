function letraOcorre(frase, letra) {
    let contador = 0; 
    for (let letraFrase of frase) {
        if (letraFrase.toLowerCase() === letra.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}

let frase = "Hoje é domingo";
let letra = "o";
console.log(`A letra '${letra}' aparece ${letraOcorre(frase, letra)} vezes na frase.`);