var tummysize=34
var buttocksize=36

var bmi=tummysize/buttocksize
var gender="female"

if (gender=="female"){
    if (bmi<=0.80){
        console.log(bmi,",",gender,",Health Risk:Low",",Body Shape:Pear");
    }
    else if(bmi>=0.81 && bmi<=0.85){
        console.log(bmi,",",gender,",Health Risk:Moderate",",Body Shape:Avocado");
    }
    else if(bmi>=0.85){
        console.log(bmi,",",gender,",Health Risk:High",",Body Shape:Apple");
    }
}

else if(gender=="male"){
    if (bmi<=0.95){
        console.log(bmi,",",gender,",Health Risk:Low",",Body Shape:Pear");
    }
    else if(bmi>=0.96 && bmi<=1.0){
        console.log(bmi,",",gender,",Health Risk:Moderate",",Body Shape:Avocado");
    }
    else if(bmi>1.0){
        console.log(bmi,",",gender,",Health Risk:High",",Body Shape:Apple");
    }
}