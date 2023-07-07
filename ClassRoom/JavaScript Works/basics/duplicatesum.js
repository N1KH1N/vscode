var arr=[1,2,4,4,5]
var duplicate=[]
var missing=[]
// missing+duplicate

for (var i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            console.log("duplicate : ",arr[j]);
            duplicate=arr[j]
        }
    }
}

for (var k=0;k<arr.length;k++){
    if(arr[0]!=1){
        console.log(1,"is missing");
    }
    else if(arr[k+1]-arr[k]>1){
        console.log(arr[k]+1,"is missing");
        missing=arr[k]+1
        break
    }
}

console.log("sum =",duplicate+missing); 