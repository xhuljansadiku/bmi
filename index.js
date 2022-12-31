function bmiCalculator() {
    let bmi = weight / (height) * 2;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    console.log(bmiCalculator)
    document.getElementById('output').innerHTML = bmi
    document.write('Your BMI is : + bmi')
}



/* 
function bmiCalculator() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value


document.getElementById("output").innerHTML = ;
}

{

   
  let weight = document.getElementById('weight').value
  let height = document.getElementById('height').value
  let bmi = (weight /  (height)* 2);

  document.write('Your BMI is : + bmi')

  document.getElementById('heading').innerHTML = 'Your BMI is :'
  document.getElementById('bmi-output').innerHTML = bmi




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

*/




/*
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