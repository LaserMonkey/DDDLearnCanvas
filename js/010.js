var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	gradient = context.createRadialGradient(canvas.width / 2, canvas.height, 50, canvas.width / 2, 0, 400);	//方向(x1, y1, r, x2, y2, r)

gradient.addColorStop(0, 'blue');
gradient.addColorStop(0.25, 'white');
gradient.addColorStop(0.5, 'purple');
gradient.addColorStop(0.75, 'red');
gradient.addColorStop(1, 'yellow');

context.fillStyle = gradient;
context.fillRect(0, 0, canvas.width, canvas.height);
context.fill();