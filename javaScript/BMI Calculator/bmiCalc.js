//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

var weight=prompt("enter your weight in kgs")
var height=prompt("enter your height in meters")

function bmiCalculator(weight,height){
    
    return weight/(height*height);
 } 
    
// If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
    
    var bmi = bmiCalculator(weight, height); 
    
    // bmi should equal 20 when it's rounded to the nearest whole number.
alert("your BMI is "+bmi);