function degreetofn(){
    let temp=document.querySelector("#id_temp").value
    let fh=(temp*(9/5))+32
    let fhbox=document.querySelector("#id_fh")
    fhbox.value=fh.toFixed(2)
}

function fhtodegree(){
    let temp=document.querySelector("#id_fh").value
    let degree=temp-32*5/9
    let degreebox=document.querySelector("#id_temp")
    degreebox.value=degree.toFixed(2)
}