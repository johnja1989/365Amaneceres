const playButton = document.getElementById("play-affirmation");

playButton.addEventListener("click", () => {
  const affirmation = document.getElementById("daily-affirmation").textContent;
  speak(affirmation);
});

function speak(text) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    utterance.rate = 0.95;
    utterance.pitch = 1.1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Tu navegador no soporta audio. Usa Chrome o Edge.");
  }
}
