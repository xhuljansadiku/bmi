var weightInput = document.querySelector(".weight");
var heightInput = document.querySelector(".height");
var calculateBtn = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, height;

calculateBtn.addEventListener("click", ()=>{

  height = heightInput.value;
  weight = weightInput.value;
  BMI = (weight / Math.pow( (height/100), 2 )).toFixed(1);

  result.innerHTML = BMI;


  if(BMI < 18.5){
    statement.innerText = "You are Underweight 😒";    
  }else if((BMI > 18.5) && (BMI < 24.9)){ 
    statement.innerText = "Your are in Normal Weight 😍";
  }else if((BMI > 25) && (BMI < 29.9 )){
    statement.innerText = "You are Overweight, you need to go on a diet! 😮";
  }else{
    statement.innerText = "Your are Obese, you have to lose some weight quick! 😱";
}
});
 

//reset btn i must to fix

