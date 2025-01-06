function updateClock() {
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const currentDate = new Date();

    let h = currentDate.getHours();
    let m = currentDate.getMinutes();
    let s = currentDate.getSeconds();

    // Format hours, minutes, and seconds to always show two digits
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately on page load
updateClock();
