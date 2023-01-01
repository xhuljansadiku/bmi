var heightInput = document.querySelector(".height");
var weightInput = document.querySelector(".weight");
var calculateBtn = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, height;

calculateBtn.addEventListener("click", ()=>{

  height = heightInput.value;
  weight = weightInput.value;
  BMI = weight/(height**2);
  result.innerHTML = BMI;if(BMI < 18.5){
    statement.innerText = "Your BMI falls within the underweight range";    
}else if((BMI > 18.5) && (BMI < 24.9)){
    statement.innerText = "Your BMI falls within the normal or healthy weight range";
}else if((BMI > 25) && (BMI < 29.9 )){
    statement.innerText = "Your BMI falls within the overweight range";
}else{
    statement.innerText = "Your BMI falls within the obese range";
}
});


/*
var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{
    
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "Your BMI falls within the underweight range";    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        statement.innerText = "Your BMI falls within the normal or healthy weight range";
    }else if((BMI > 25) && (BMI < 29.9 )){
        statement.innerText = "Your BMI falls within the overweight range";
    }else{
        statement.innerText = "Your BMI falls within the obese range";
    }
});


function bmiCalculator(weight, height) {
  var bmi = weight /  (height * height);

if (bmi< 18.5) {
  result = "Underweight"
}else if (bmi >= 18.5 && bmi < 24.9) {
  result = "Normal weight"
}else if (bmi >= 25 && bmi < 29.9) {
  result = "Overweight [ Lose some Kg :) ]"
}else {
  result = "Obesity [ Immediately lose Kg :) ]" 
}
return bmi; 
}

var bmi = Math.round(bmiCalculator(10, 1.76));
console.log(bmi)
alert("Your BMI is " + bmi + " and you are " +  result)
*/