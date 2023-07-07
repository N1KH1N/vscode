var arr=[2,3,4,5]
var sum=8
var counter=0

var p1=0;
var p2=arr.length-1
while (p1<p2){
    let cursum=arr[p1]+arr[p2]
    if(sum==cursum){
        console.log(arr[p1],arr[p2]);
        break
    }
    else if(sum>cursum){
        p1++
    }
    else if(sum <cursum){
        p2--
    }
    counter++
}



// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j < arr.length;j++){
//         let cursum=arr[i]+arr[j]
        // if (cursum==sum){
//             console.log(arr[i],arr[j]);
//         }
//         counter++
//     }
// }
// console.log(counter);
 