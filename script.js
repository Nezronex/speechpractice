// script.js

let timerInterval;
let startTime;
let remainingTime = 300; // Initial timer value in seconds

function updateProgressBar() {
    const percentage = ((totalTime - remainingTime) / totalTime) * 100;
    document.getElementById("progress-bar").style.width = percentage + "%";
}

function startTimer() {
    const timerInput = parseInt(document.getElementById("timer-input").value, 10);
    if (timerInput >= 0) {
        totalTime = timerInput; // Assign the input value to totalTime
        startTime = new Date().getTime();
        clearInterval(timerInterval);
        timerInterval = setInterval(function() {
            const now = new Date().getTime();
            const elapsedTime = now - startTime;
            remainingTime = Math.max(totalTime - Math.floor(elapsedTime / 1000), 0);
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            document.getElementById("timer").innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            updateProgressBar();
            if (remainingTime <= 0) {
                stopTimer();
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    document.getElementById("timer").innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById("progress-bar").style.width = "0%";
    const textInput = document.getElementById("display-text").innerText;

    // The popup will only appear when the timer naturally reaches zero.
    if (remainingTime <= 0) {
        const modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
