var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	image = new Image();

image.src = './img/011.png';
image.onload = function(e) {

	context.shadowColor = 'rgba(0, 0, 0, 0.7)';
	context.shadowOffsetX = 1;
	context.shadowOffsetY = 1;
	context.shadowBlur = 2;
	context.drawImage(image, 50, 50);

	context.shadowColor = 'rgba(0, 0, 0, 0.7)';
	context.shadowOffsetX = 4;
	context.shadowOffsetY = 4;
	context.shadowBlur = 5;
	context.drawImage(image, 50, 150);

	context.shadowColor = 'rgba(0, 0, 0, 0.7)';
	context.shadowOffsetX = 1;
	context.shadowOffsetY = 1;
	context.shadowBlur = 2;
	context.drawImage(image, 50, 250);

	context.shadowColor = 'rgba(0, 0, 0, 0.7)';
	context.shadowOffsetX = 4;
	context.shadowOffsetY = 4;
	context.shadowBlur = 5;
	context.strokeRect(50, 350, 80, 80);

	context.shadowColor = 'rgba(0, 0, 0, 0.7)';
	context.shadowOffsetX = 1;
	context.shadowOffsetY = 1;
	context.shadowBlur = 2;
	context.strokeRect(50, 450, 80, 80);

}
