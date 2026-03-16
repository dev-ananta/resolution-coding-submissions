const button = document.getElementById("darkModeToggle")
if (localStorage.getItem("darkmode") === "on") {
    document.body.classList.add("dark-mode")
    button.textContent = "☀️"
}

button.onclick = function() {
    document.body.classList.toggle("dark-mode")

    if (document.body.classList.contains("dark-mode")){
        localStorage.setItem("darkmode", "on")
        button.textContent = "☀️"
    } else {
        localStorage.setItem("darkmode", "off")
        button.textContent = "🌙"
    }
}