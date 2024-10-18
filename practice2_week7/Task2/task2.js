function lifeInWeeks() {
    let age = document.getElementById("ageInput").value;
    let yearsLeft = 90 - age;
    let daysLeft = yearsLeft * 365;
    let weeksLeft = yearsLeft * 52;
    let monthsLeft = yearsLeft * 12;
    document.getElementById("result").innerText = `You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`;
}
