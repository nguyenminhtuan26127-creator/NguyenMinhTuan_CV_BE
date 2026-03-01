const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const buttonToggleTheme = $("#themeToggle");
console.log(buttonToggleTheme);

const bodyEl = $("body");
console.log(bodyEl);


let theme = localStorage.getItem("theme") || "light";

if (theme === "light") {
    bodyEl.classList.add("dark-mode");
    buttonToggleTheme.textContent = "☀";
} else {
    bodyEl.classList.remove("dark-mode");
    buttonToggleTheme.textContent = "🌙";
}

buttonToggleTheme.addEventListener("click", () => {
    bodyEl.classList.toggle("dark-mode");

    const isLight = bodyEl.classList.contains("dark-mode");

    theme = isLight ? "light" : "dark";

    localStorage.setItem("theme", theme);

    buttonToggleTheme.textContent = isLight ? "☀" : "🌙";
});