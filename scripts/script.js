// Sets an interval of 1 second
window.setInterval(function() {
    // Gets the current time
    var time = new Date();

    // Sets web elements to variables for manipulation
    var currentTimeLabel = document.getElementById("currentTimeP");
    var currentTimeCanvas = document.getElementById("clockCanvas");
    var ctx = currentTimeCanvas.getContext("2d");
    
    // Sets the time label to the current time
    currentTimeLabel.innerHTML = time.toLocaleTimeString();

    // Calculates the different angles for seconds, minutes and hours for the arcs.
    secondsAngle = (time.getSeconds() * 6) - 90;
    minutesAngle = (time.getMinutes() * 6) - 90;
    hoursAngle = (time.getHours() * 15) - 90;

    // Clears the canvas
    ctx.clearRect(0, 0, currentTimeCanvas.width, currentTimeCanvas.height);
    
    // Draws three separate arcs; seconds, minutes and hours (in that order)
    ctx.beginPath();
    ctx.arc(100, 75, 50, (-90 / 180) * Math.PI, (secondsAngle / 180) * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(100, 75, 45, (-90 / 180) * Math.PI, (minutesAngle / 180) * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(100, 75, 40, (-90 / 180) * Math.PI, (hoursAngle / 180) * Math.PI);
    ctx.stroke();

}, 1000);