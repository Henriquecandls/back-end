function multiplos() {
    for (let i = 1; i <= 20; i++) {
        if (i % 5 == 0)
            console.log(i + " ");
    }
}
function multiplos2() {
    for (let i = 5; i <= 20; i+=5) {
           console.log(i + " ");5
   }
}
multiplos2();
multiplos();