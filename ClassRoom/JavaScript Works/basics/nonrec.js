var pattern="AABBCDDE"

var wc={}
for(let c of pattern){
    c in wc ? wc[c]+=1: wc[c]=1
}

for (let k in wc){

    if(wc[k]==1){
        console.log(k,"is non recursive");
    }
}