var context = document.getElementById('canvas').getContext('2d'),
	glasspane = document.getElementById('glasspane'),
	startButton = document.getElementById('startButton'),
	paused = false;

startButton.onclick = function(e) {
	e.preventDefault();
	startButton.innerHTML = paused ? 'Start' : 'Stop';
	paused = !paused;
}

glasspane.onmousedown = function(e) {
	e.preventDefault();
}