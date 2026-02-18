function factorial(n) {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i; 
    }
    return factorial; 
}

let valor = factorial(5); 
console.log("O factorial de 5 é: " + valor);
function factorial_recursiva (n)
{
    if(n==1)
        return 1;
    return n* factorial_recursiva(n-1);
}
 valor = factorial_recursiva(5); 
console.log("O factorial de 5 é: " + valor);