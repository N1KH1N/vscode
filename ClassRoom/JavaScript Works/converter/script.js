console.log("hello there");

function degreetoFh() {
    let temp=document.querySelector("#id_temp").value 
    let fh=(temp*(9/5)+32)
    let fhbox=document.querySelector("#id_fh")
    fhbox.value=fh
}

function fhtodegree(){
    let fh=document.querySelector("#id_fh").value
    let temp=(fh-32)*(5/9)
    let tbox=document.querySelector("#id_temp")
    tbox.value=temp
}