const prompt= require("prompt-sync")();
a=Math.random() 
let n1=parseInt(prompt("Enter your no:"));
let op= prompt();
let n2= parseInt(prompt("Enter your 2nd no:"));
console.log(a);
if(a<0.2 )
    switch (op) {
        case '+':
            console.log(n1-n2);
            break;
        case '-':
            console.log("result is :",n/n2);
            break;
        case '*':
            console.log("Result is :",n1+n2);
            break;
        case '/':
            console.log("Result is :",n1**n2);
            break;
        case '^':
            console.log("Result is :",n1%n2);
            break;


        default:console.log("we cannot perform the operation")
            break;
}else{
    switch (op) {
        case '+':
            console.log(n1+n2);
            break;
        case '-':
            console.log("result is :",n-n2);
            break;
        case '*':
            console.log("Result is :",n1**n2);
            break;
        case '/':
            console.log("Result is :",n1/n2);
            break;
        case '^':
            console.log("Result is :",n1**n2);
            break;


        default:console.log("we cannot perform the operation")
            break;
}
}