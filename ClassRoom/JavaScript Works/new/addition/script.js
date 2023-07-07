
function add(){
    let num01=document.querySelector("#num1").value
    let num02=document.querySelector("#num2").value
    let addnum=Number(num01)+Number(num02)
    let resnum=document.querySelector("#res")
    resnum.value=addnum
}

function sub(){
    let num01=document.querySelector("#num1").value
    let num02=document.querySelector("#num2").value
    let subnum=Number(num01)-Number(num02)
    let resnum=document.querySelector("#res")
    resnum.value=subnum
}

function mul(){
    let num01=document.querySelector("#num1").value
    let num02=document.querySelector("#num2").value
    let mulnum=Number(num01)*Number(num02)
    let resnum=document.querySelector("#res")
    resnum.value=mulnum
}