// Arrays
//  []
//no lenght limit
// same and different types of value
// mutable
// duplicates allowed



// var expenses=[4,5,16,23,48]

// for (let exp of expenses){
//     console.log(exp);
// } 


var ar1=[2,3,4,5,6]
var arr2=[3,4,7,8,9]
var p1=0,p2=0;
var counter=0


// for(let n1 of arr2){
//     for(let n2 of arr2){
//         if(n1==n2){
//             console.log(n1);
//         }
//         counter++
//     }
// }

while(p1 < ar1.length && p2 < arr2.length){
    if(ar1[p1]==arr2[p2]){
        console.log("common element",ar1[p1]);
        p1++
        p2++
    }
    else if(ar1[p1]>arr2[p2]){
        p2++
    }
    else if(ar1[p1]<arr2[p2]){
        p1++
    }
    counter++
}

console.log(counter);