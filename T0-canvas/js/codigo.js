window.addEventListener('load', init, false);

var canvas = null;
var ctx = null;

function dibujar(ctx){
	ctx.fillStyle = '#000'; 
	ctx.fillRect(50, 50, 100, 100); 
}

function init(){
	canvas =  document.getElementById("micanvas");
	ctx =  canvas.getContext('2d');

	dibujar(ctx);
}





