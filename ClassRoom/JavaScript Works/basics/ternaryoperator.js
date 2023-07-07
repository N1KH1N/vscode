
                // ! ||--------------------------------------------------------------------------------||
                // ! ||                                TERNARY OPERATOR                                ||
                // ! ||--------------------------------------------------------------------------------||

var num=10

// if(num % 2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

console.log(num%2==0 ? "even":"odd");

console.log(num>0 ? "+ve":"-ve");
console.log(num>0 ? "+ve":num<0 ? "-ve" : "zero");

// var n1=10;
// var n2=20;

// console.log(n1>n2 ? "n1 is greater":n2, "is greater");

var n1=5
// console.log(n1>5 ? n1+1 : n1-1);
console.log(n1>5 ? n1+1 : n1<5 ? n1-5 :n1);

function maxoftwo(n1,n2){
    return n1>n2 ? n1 : n2>n1 ? n2 : equal
}
console.log(maxoftwo(26,25));

function oddoreven(n){
    return n%2==0?"even" :"odd"
}
console.log(oddoreven(5));