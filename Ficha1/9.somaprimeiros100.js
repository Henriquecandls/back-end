function soma_primeiros(n){
    let soma = 0;
    for (let i = 0; i <= n; i++) {
        soma += i;
    }
    console.log(n, soma);
}

function soma_primeiros2(n) {
    let soma = (n * (n + 1)) / 2;
    console.log("este é o 2", n, soma);
}

// Chamadas das funções
soma_primeiros(100);
soma_primeiros2(100);
