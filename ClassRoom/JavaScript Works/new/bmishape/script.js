function calculator(){
    let tummy=id_tummy.value
    let buttock=id_buttock.value
    let gender=id_gen.value
    let bmi=tummy/buttock
    bmi=bmi.toFixed(2)
    let result={tummy:tummy,buttock:buttock,bmi:bmi,}

    if(gender=="Male"){
        if(bmi<=0.95){
            result.healthrisk="Low"
            result.bshape="Pear"
        }
        else if(bmi>=0.96 && bmi<=1.0){
            result.healthrisk="Moderate"
            result.bshape="Avocado"
        }
        else if(bmi>1.0){
            result.healthrisk="High"
            result.bshape="Apple"
        }
    }
    else if(gender=="Female"){
        if(bmi<=0.80){
            result.healthrisk="Low"
            result.bshape="Pear"
        }
        else if(bmi>=0.81 && bmi<=0.85){
            result.healthrisk="Moderate"
            result.bshape="Avocado"
        }
        else if(bmi>0.85){
            result.healthrisk="High"
            result.bshape="Apple"
        }
    }
    finalresult(result)
}

function finalresult(result){
    console.log(result);

    let htmldata=`<div class="card border-info mb-3" style="max-width: 100%;">
    <div class="card-header"><strong>${result.healthrisk}</strong></div>
    <div class="card-body">
      <h5 class="card-title text-success">${result.bshape}</h5>
      <div class="card-text mt-1">Tummy Size : <strong>${result.tummy}</strong></div>
      <div class="card-text">Buttock Size : <strong>${result.buttock}</strong></div>
      <div class="card-text">BMI : <strong>${result.bmi}</strong></div>

    </div>`
    
    document.querySelector("#id_result").innerHTML=htmldata
}