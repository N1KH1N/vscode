var num=153
var orginal=num
var sum=0
var len=num.toString().length
while(num!=0){
    last=num%10
    sum=sum+(last**len)
    num=Math.floor(num/10)
}
console.log(sum);
if (orginal==num){
    console.log("Amstrong Number");
}
else{
    console.log("not a amstrong number");
}