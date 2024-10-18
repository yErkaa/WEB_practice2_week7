function fibonacciGenerator() {
    let n = document.getElementById("numInput").value;
    let fibArray = [0, 1];

    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }

    document.getElementById("fibonacciResult").innerText = fibArray.slice(0, n).join(", ");
}
