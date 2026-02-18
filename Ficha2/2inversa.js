function inverteString(string){
    let stringFinal = string.split("").reverse().join("");
    console.log(stringFinal);
}

function invertePalavradastring(string){
    let stringFinal = string.split(" ").map(
        (palavra) => palavra.split("").reverse().join("")
    ).join(" ");
    console.log(stringFinal);
}

inverteString("Hoje e domingo");
invertePalavradastring("Hoje e domingo");