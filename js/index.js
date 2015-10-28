var vid = document.getElementById("bg_video"),
pauseButton = document.getElementById("vidpause");

pauseButton.addEventListener("click", function() {
    var pauseglyph = '<span class="glyphicon glyphicon-pause"></span>';
    var playglyph = '<span class="glyphicon glyphicon-play"></span>';
	if (vid.paused) {
vid.play();
		pauseButton.innerHTML = pauseglyph;
	} else {
        vid.pause();
        pauseButton.innerHTML = playglyph;
	}
})
