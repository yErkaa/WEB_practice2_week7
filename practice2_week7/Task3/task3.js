function calculateBMI() {
    let weight = document.getElementById("weightInput").value;
    let height = document.getElementById("heightInput").value;
    let bmi = weight / (height * height);
    let message = "";

    if (bmi < 18.5) {
        message = `Your BMI is ${bmi.toFixed(2)}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = `Your BMI is ${bmi.toFixed(2)}, so you have a normal weight.`;
    } else {
        message = `Your BMI is ${bmi.toFixed(2)}, so you are overweight.`;
    }

    document.getElementById("bmiResult").innerText = message;
}
