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


function Ajax(type, url, data, success, failed){
    // ����ajax����
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
 
    var type = type.toUpperCase();
    // �����������
    var random = Math.random();
 
    if(typeof data == 'object'){
        var str = '';
        for(var key in data){
            str += key+'='+data[key]+'&';
        }
        data = str.replace(/&$/, '');
    }
 
    if(type == 'GET'){
        if(data){
            xhr.open('GET', url + '?' + data, true);
        } else {
            xhr.open('GET', url + '?t=' + random, true);
        }
        xhr.send();
 
    } else if(type == 'POST'){
        xhr.open('POST', url, true);
        // �����Ҫ�� html �������� POST ���ݣ���ʹ�� setRequestHeader() ������ http ͷ��
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }
 
    // ������������
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                success(xhr.responseText);
            } else {
                if(failed){
                    failed(xhr.status);
                }
            }
        }
    }
}