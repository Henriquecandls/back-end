function calcula(num1,num2,operaçao)
{
    let res=0;
    switch(operaçao){
        case "+":
             res=num1+num2;
             break;

        case "-":
             res=num1-num2
             break;   

        case "/":
             res=num1/num2;
             break;

        case "*":
             res=num1*num2;
             break;
              case "**":
             res=num1**num2;
             break;
        default:
                console.log("A operaçao e invalida");
                break;

    }
    console.log("O resultado da operaçao e de "+ res);

}
calcula(34,45,"+");
calcula(34,45,"-");
calcula(34,45,"*");
calcula(34,45,"/");
calcula(34,45,"**");