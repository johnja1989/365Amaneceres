// Solicitar permiso para notificaciones
if ("Notification" in window && "serviceWorker" in navigator) {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      registerServiceWorker();
    }
  });
}

async function registerServiceWorker() {
  try {
    const reg = await navigator.serviceWorker.register("service-worker.js");
    console.log("SW registrado");
  } catch (err) {
    console.error("Error registrando SW:", err);
  }
}
