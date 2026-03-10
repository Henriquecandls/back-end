const array =[];//const e uma constante mas nos objetos a constante e a 
                // referencia e os ito da memoria onde esta apontar quando delcaras uma funçao para saber a localizaçao este objeto esta localizado x posiçao de memoria e constante da posiçao de memoria
arr.push(() => console.log("Hello word 1"));
arr.push(() => console.log("Hello word 2"));
arr.push(() => console.log("Hello word 3"));//O  adiciona um novo elemento ao final de um array.
                                            //No teu caso, estás a adicionar funções dentro do array.

for(let i=0;i<array.length;i++){
    array[i]()
}
array.forEach(element =>{
element();
})