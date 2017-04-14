var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	gradient = context.createLinearGradient(0, 0, canvas.width, 0);	//方向(x1, y1, x2, y2)

gradient.addColorStop(0, 'blue');
gradient.addColorStop(0.25, 'white');
gradient.addColorStop(0.5, 'purple');
gradient.addColorStop(0.75, 'red');
gradient.addColorStop(1, 'yellow');

context.fillStyle = gradient;
context.fillRect(0, 0, canvas.width, canvas.height);