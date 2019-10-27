window.setInterval(function() {
    var time = new Date();

    var currentTimeLabel = document.getElementById("currentTimeP");
    currentTimeLabel.innerHTML = time.toLocaleTimeString()

}, 1000);