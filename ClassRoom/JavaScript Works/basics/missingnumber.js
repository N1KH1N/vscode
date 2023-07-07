6
// ! ||--------------------------------------------------------------------------------||
// ! ||                 find the smallest +ve missing number from array                ||
// ! ||--------------------------------------------------------------------------------||

var flag=0
for(var i=0;i<arr.length;i++){
    if (arr[0]!=1){
        console.log(1,"missing");
    }
    else if(arr[i+1]-arr[i]>1){
        console.log(arr[i]+1,"is missing");
        flag=1
        break
    }
}

if (flag==0){
    console.log(arr[i-1]+1,'is missing');
}

