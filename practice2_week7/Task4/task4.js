function whosBuying() {
    let names = ["Aidana", "Bekbolat", "Mariya", "Aleksandr", "Diana"];
    let randomIndex = Math.floor(Math.random() * names.length);
    document.getElementById("lunchBuyer").innerText = names[randomIndex] + " is going to buy lunch today.";
}
