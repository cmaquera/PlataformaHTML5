window.addEventListener('load', init, false);

var canvas = null;
var ctx = null;

var posx = 10;
var posy = 10;
var desx = 2;
var desy = 2;

function dibujar(ctx){
	ctx.fillStyle = '#fff'; 
	ctx.fillRect(0, 0, canvas.width, canvas.height); 
	 
	//ctx.fillRect(posx, posy, 20, 20);
	ctx.fillStyle = 'red';
	ctx.beginPath();
	ctx.arc(posx,posy,10,0,2*Math.PI);
	ctx.fill();

}

function actividad(){
	posx+=desx;
	posy+=desy;
	if(posx > canvas.width){
		desx = -desx;
	}
	if(posx < 0){
		desx = -desx;
	}
	if(posy > canvas.height){
		desy = -desy;
	}
	if(posy < 0){
		desy = -desy;
	}
}

function run(){
	window.requestAnimationFrame(run);
	
	actividad();
	dibujar(ctx);
}

function init(){
	canvas =  document.getElementById("micanvas");
	ctx =  canvas.getContext('2d');

	run();
}

window.requestAnimationFrame = (function (){ 
	return window.requestAnimationFrame || 
	window.mozRequestAnimationFrame || 
	window.webkitRequestAnimationFrame || 
	function (callback){ 
		window.setTimeout(callback, 17); 
	}; 
}());