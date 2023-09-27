<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spread Practice</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1>Spread Practice</h1>
    
    
        <div id="progress-bar-container">
            <div id="progress-bar"></div>
            <div id="timer">00:00</div>
        </div>
    <div id="progress-container">
        <div>
            <label for="timer-input">Set Timer (seconds):</label>
            <input type="number" id="timer-input" value="300">
        </div>
        <button onclick="startTimer()">Start</button>
        <button onclick="stopTimer()">Stop</button>
    </div>
    
    
    
    <div id="display-text" contenteditable="true"></div>
    
    <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2>Timer Ended!</h2>
            <p>Your timer has finished.</p>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
