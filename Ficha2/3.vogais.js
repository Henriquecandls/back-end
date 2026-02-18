function contaVogais(frase) {
    let vogais = "aeiouAEIOUáéíóúÁÉÍÓÚ";
    let contador = 0;
    for (let letra of frase) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

let frase = "Hoje e domingo";
console.log("A frase: " + frase);
console.log("Contém " + contaVogais(frase) + " vogais.");