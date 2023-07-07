function add(n1,n2){
    return n1+n2
}

function cube(n){
    return n**3
}

console.log(add(24,63));

function sub(n1,n2){
    // return n1>n2 ? n1-n2 : n2-n1
    if(n1>n2){
        return n1-n2
    }
    else{
        return n2-n1
    }
}



console.log(sub(5,10));