
console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "SUNIL HAS ASSIGNED NEW TASK TO RAJDIP",
    icon: "https://picsum.photos/200",
  });
});