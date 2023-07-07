var arr=[4,6,3,5,7,8]

// arr.push(25)
// console.log(arr);
// push -->  add element to the last 
// pop -->  removes last element from array 
// incldes -->  checks for the element in array 
// arr.pop()
// console.log(arr);
// console.log(arr.includes(5));


// Push(),pop(),includes()
// Map(),filter(),reduce(),some(),forEach(),sort()

// var arr=[2,3,4,5,6,8]
// var cubes=arr.map(n=>n**3)
// console.log(cubes);

// num>5 num+1 : num<5 num-1 num=5 5
var num=arr.map(n=>n>5?n+1:n<5?n-1:n)
console.log(num);

var even=arr.filter(n=>n%2==0)
console.log(even);

