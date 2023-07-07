var pattern="ABCDDB"
var wc={}
    for(let c of pattern){

        if(c in wc){
        console.log(c,"is the first recursive element");
        break
    }
        else{
            wc[c]=1
        }

    }

// console.log(wc);