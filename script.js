var calculateButton = document.getElementById("calculate");
var weightInput = document.getElementById("weight");
var heightInput = document.getElementById("height");
var resultElement = document.getElementById("result");

calculateButton.addEventListener("click", function() {
  var weight = parseFloat(weightInput.value);
  var height = parseFloat(heightInput.value) / 100;

  if (!isNaN(weight) && !isNaN(height) && height > 0) {
    var bmi = weight / (height * height);
    resultElement.textContent = "Your BMI is " + bmi.toFixed(2);
  } else {
    resultElement.textContent = "Please enter valid weight and height.";
  }
});
