let reflections = [];
let affirmations = [];

// Cargar datos
Promise.all([
  fetch("assets/data/reflections.json").then((r) => r.json()),
  fetch("assets/data/affirmations.json").then((r) => r.json()),
])
  .then(([refData, affData]) => {
    reflections = refData;
    affirmations = affData;
    loadDailyContent(getCurrentDay());
  })
  .catch((err) => console.error("Error al cargar datos:", err));

// Calcular día del año
function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

// Obtener día actual (almacenado o automático)
function getCurrentDay() {
  return parseInt(localStorage.getItem("currentDay") || getDayOfYear());
}

// Cargar contenido del día
function loadDailyContent(day) {
  if (day < 1) day = 1;
  if (day > 365) day = 365;

  const reflection = reflections[day - 1] || "Hoy elijo crecer.";
  const affirmation = affirmations[day - 1] || "Soy paz. Soy fuerza. Soy amor.";

  document.getElementById("day-number").textContent = day;
  document.getElementById("daily-reflection").textContent = reflection;
  document.getElementById("daily-affirmation").textContent = affirmation;
  document.getElementById("date-today").textContent =
    new Date().toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  localStorage.setItem("currentDay", day);
  updateProgress();
}

// Navegación
document.getElementById("prev-day").addEventListener("click", () => {
  const current = parseInt(
    localStorage.getItem("currentDay") || getDayOfYear()
  );
  if (current > 1) loadDailyContent(current - 1);
});

document.getElementById("next-day").addEventListener("click", () => {
  const current = parseInt(
    localStorage.getItem("currentDay") || getDayOfYear()
  );
  if (current < 365) loadDailyContent(current + 1);
});
