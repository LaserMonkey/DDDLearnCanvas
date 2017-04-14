var canvas = document.getElementById('canvas'),
	readout = document.getElementById('readout'),
	context = canvas.getContext('2d');

function windowToCanvas(canvas, x, y) {
	var bbox = canvas.getBoundingClientRect();
	return {
		x: x - bbox.left,
		y: y - bbox.top
	}
}
function updateReadout(x, y) {
	readout.innerText = '(' + x.toFixed(0) + ', ' + y.toFixed(0) + ')';
}
function drawBackground() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.strokeStyle = 'gray';
	context.lineWidth = 0.5;
}
function drawGuidelines(x, y) {
	context.strokeStyle = 'rgba(0, 0, 230, 0.8);';
	context.lineWidth = 0.5;
	drawVerticalLine(x);
	drawHorizontalLine(y);
}
function drawVerticalLine(x) {
	context.beginPath();
	context.moveTo(x + 0.5, 0);
	context.lineTo(x + 0.5, context.canvas.height);
	context.stroke();
}
function drawHorizontalLine(y) {
	context.beginPath();
	context.moveTo(0, y + 0.5);
	context.lineTo(context.canvas.width, y + 0.5);
	context.stroke();
}

canvas.onmousemove = function(e) {
	var loc = windowToCanvas(canvas, e.clientX, e.clientY);
	drawBackground();
	drawGuidelines(loc.x, loc.y);
	updateReadout(loc.x, loc.y);
	drawBackgroundLine();
}

function drawBackgroundLine() {
	for(var x = 0; x < context.canvas.width; x = x + 20) {
		context.beginPath();
		context.moveTo(x, 0);
		context.lineTo(x, context.canvas.height);
		context.lineWidth = 0.5;
		context.strokeStyle = 'lightgray';
		context.stroke();
	}
	for(var y = 0; y < context.canvas.height; y = y + 20) {
		context.beginPath();
		context.moveTo(0, y);
		context.lineTo(context.canvas.width, y);
		context.lineWidth = 0.5;
		context.strokeStyle = 'lightgray';
		context.stroke();
	}
}

drawBackgroundLine();