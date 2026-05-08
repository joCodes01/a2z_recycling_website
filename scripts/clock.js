// Get the time for the clock

function setTime() {
  const getNow = new Date();
  const time = getNow.toLocaleTimeString("en-AU", {
    timeZone: "Australia/Sydney",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  document.getElementById("clock").textContent = time;
}
setTime();
setInterval(setTime, 1000);
