// Function to calculate BMI
function calculateBMI() {
    var w = parseFloat(document.getElementById("Weight").value);
    var h = parseFloat(document.getElementById("Height").value);
    var resultArea = document.getElementById("result");

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        resultArea.innerHTML = '<span style="color:red;">Please enter valid positive numbers.</span>';
        return;
    }

    var BMI = w / (h * h);
    var category = '';
    var cssClass = '';

    if (BMI < 18.5) {
        category = 'Underweight';
        cssClass = 'bmi-underweight';
    } else if (BMI >= 18.5 && BMI < 25) {
        category = 'Normal';
        cssClass = 'bmi-normal';
    } else if (BMI >= 25 && BMI < 30) {
        category = 'Overweight';
        cssClass = 'bmi-overweight';
    } else {
        category = 'Obese';
        cssClass = 'bmi-obese';
    }

    resultArea.innerHTML = `Your BMI is ${BMI.toFixed(2)} — You are in the <span class="${cssClass}">${category}</span> range.`;
}

// Function to reset the form and clear the results
function resetForm() {
    document.getElementById("Weight").value = '';
    document.getElementById("Height").value = '';
    document.getElementById("result").innerHTML = '';
}
