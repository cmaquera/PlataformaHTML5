window.addEventListener('load', init, false);

window.addEventListener('keydown', function(evento){
	tecla =  evento.which;
}, false);

var arriba = 38;
var abajo = 40;
var derecha = 39;
var izquierda = 37;
var enter = 13;

var canvas = null;
var ctx = null;

var posx = 10;
var posy = 10;
var desx = 5;
var desy = 5;

var tecla=null;
var pausa = false;
var dir = 0; //direccion

function dibujar(ctx){
	//limpiar el canvas
	ctx.fillStyle = '#fff'; 
	ctx.fillRect(0, 0, canvas.width, canvas.height); 
	 
	//ctx.fillRect(posx, posy, 20, 20);
	//dibujar el circulo
	ctx.fillStyle = 'red';
	ctx.beginPath();
	ctx.arc(posx,posy,10,0,2*Math.PI);
	ctx.fill();

	//mostrar la tecla seleccionada
	ctx.fillStyle = '#000';
	ctx.font="10px Arial";
	ctx.fillText('Tecla : ' + tecla, 0, 15);

	//pausa interface
	if(!pausa){
		ctx.textAlign = 'center';
		ctx.font="30px Arial"; 
		ctx.fillText('PAUSA', 300, 200); 
		ctx.textAlign = 'left';
	}
	
}

function redibujar(){
	window.requestAnimationFrame(redibujar);
	console.log('redibujar');
	dibujar(ctx);
}

function actividad(){
	if(pausa){
		//direccionamiento
		if(tecla == arriba){	dir = 0;}
		if(tecla == abajo){	dir = 1;}
		if(tecla == derecha){	dir = 2;}
		if(tecla == izquierda){	dir = 3;}

		//movimiento
		if(dir == 0){ posy -= desy; }
		if(dir == 1){ posy += desy; }
		if(dir == 2){ posx += desx; }
		if(dir == 3){ posx -= desx; }

		//limites
		if(posx < 0){ posx = canvas.width; }
		if(posx > canvas.width){ posx = 0; }
		if(posy < 0){ posy = canvas.height; }
		if(posy > canvas.height){ posy = 0; }

	}
	console.log('actividad');
	//control
	if(tecla == enter){ 
		pausa = !pausa; 
		tecla = null;
	}
}

function correr(){
	setTimeout(correr, 50);
	console.log('correr');
	actividad();
}

function init(){
	canvas =  document.getElementById("micanvas");
	ctx =  canvas.getContext('2d');

	correr();
	redibujar();
	console.log('init');
}

window.requestAnimationFrame = (function (){ 
	return window.requestAnimationFrame || 
	window.mozRequestAnimationFrame || 
	window.webkitRequestAnimationFrame || 
	function (callback){ 
		window.setTimeout(callback, 17); 
	}; 
}());