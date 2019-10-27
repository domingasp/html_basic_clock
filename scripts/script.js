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

    // Calculates the different angles for seconds, minutes, hours, days and months for the arcs.
    secondsAngle = (time.getSeconds() * 6) - 90;
    minutesAngle = (time.getMinutes() * 6) - 90;
    hoursAngle = (time.getHours() * 15) - 90;

    daysAngle = (time.getDate() * 12) - 90;
    if (time.getMonth() == 1 || time.getMonth() == 3 || time.getMonth() == 5 || time.getMonth() == 7 || time.getMonth() == 8 || time.getMonth() == 10 || time.getMonth() == 12) {
        daysAngle = (time.getDate() * 11.6) - 90;
    } else if (time.getMonth() == 2) {
        daysAngle = (time.getDate() * 12.8) - 90;
    }

    monthsAngle = ((time.getMonth() + 1) * 30) - 90;

    // Clears the canvas
    ctx.clearRect(0, 0, currentTimeCanvas.width, currentTimeCanvas.height);
    
    // Draws multiple separate arcs; seconds, minutes, hours, days and months (in that order)
    ctx.beginPath();
    ctx.arc(100, 75, 50, (-90 / 180) * Math.PI, (secondsAngle / 180) * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(100, 75, 45, (-90 / 180) * Math.PI, (minutesAngle / 180) * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(100, 75, 40, (-90 / 180) * Math.PI, (hoursAngle / 180) * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(100, 75, 35, (-90 / 180) * Math.PI, (daysAngle / 180) * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(100, 75, 30, (-90 / 180) * Math.PI, (monthsAngle / 180) * Math.PI);
    ctx.stroke();

}, 1000);