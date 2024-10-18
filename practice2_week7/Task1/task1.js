function greetUser() {
    let name = document.getElementById("nameInput").value;
    let formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    document.getElementById("greeting").innerText = "Hello " + formattedName;
}
