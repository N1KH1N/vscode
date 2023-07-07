var num=123
var result=""

while(num!=0){
    let lastdigit=num%10
    result=result+lastdigit
    num=Math.floor(num/10)
}

console.log(result);