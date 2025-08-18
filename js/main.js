// Modo oscuro
const themeToggle = document.getElementById("theme-toggle");
const darkModeStyle = document.getElementById("dark-mode-style");

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  darkModeStyle.disabled = !isDark;
  localStorage.setItem("dark-mode", isDark);
});

// Cargar tema guardado
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
  darkModeStyle.disabled = false;
}

// Actualizar progreso
function updateProgress() {
  const currentDay = parseInt(localStorage.getItem("currentDay") || "1");
  const progress = (currentDay / 365) * 100;
  document.getElementById("progress-fill").style.width = `${progress}%`;
  document.getElementById("progress-text").textContent = `${Math.round(
    progress
  )}%`;
}
