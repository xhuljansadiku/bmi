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

  result.innerHTML = Math.round(BMI);

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
 

//reset btn i must to fix

