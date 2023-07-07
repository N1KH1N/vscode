// ! ||--------------------------------------------------------------------------------||
// ! ||                                 ARROW FUNCTION                                 ||
// ! ||--------------------------------------------------------------------------------||


var add=(n1,n2)=>n1+n2
var sub=(n1,n2)=>n1-n2
var div=(n1,n2)=>n1/n2

console.log(add(6,2));
console.log(sub(6,2));
console.log(div(6,2));

var smartsub=(n1,n2)=>n1>n2?n1-n2:n2-n1
var oddeven=(n)=>n%2==0?"even":"odd"

console.log(oddeven(6));
console.log(smartsub(2,8));