var arr=[1,2,3,4,7,5,8,9]

// var evensq=arr.filter(n=>n%2==0).map(n=>n**2)
// console.log(evensq);

var sum=arr.reduce((n1,n2)=>n1+n2)
console.log(sum);


var product=arr.reduce((n1,n2)=>n1*n2)
console.log(product);


var great=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(great);



