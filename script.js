const timeText = document.getElementById("timeText");
const dateText = document.getElementById("dateText");
const switchBtn = document.getElementById("timeFormat");

let is24Hours = false;

function pad(n) {
    return String(n).padStart(2, "0");
}

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Time
    if (is24Hours) {
        timeText.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    } else {
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        if (hours === 0) hours = 12;
        timeText.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
    }

    // Date
    dateText.textContent = now.toLocaleDateString(undefined, {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

// Button click (put this OUTSIDE updateClock)
switchBtn.addEventListener("click", () => {
    is24Hours = !is24Hours;
    switchBtn.textContent = is24Hours ? "Switch to 12-hour" : "Switch to 24-hour";
    updateClock();
});

// Start clock
updateClock();
setInterval(updateClock, 1000);
