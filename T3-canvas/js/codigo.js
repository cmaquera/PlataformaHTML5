window.addEventListener('load', init, false);

window.addEventListener('keydown', function(evento){
	tecla =  evento.which;
}, false);

var controles = [38,40,39,37,13];

var canvas = null;
var ctx = null;

var posx = 10;
var posy = 10;
var des = 5;

var jugador =  null;

var tecla=null;
var pausa = false;

function dibujar(ctx){
	//limpiar el canvas
	ctx.fillStyle = '#fff'; 
	ctx.fillRect(0, 0, canvas.width, canvas.height); 
	 
	//ctx.fillRect(posx, posy, 20, 20);
	//dibujar al jugador
	jugador.dibujar(ctx);

	//mostrar la tecla seleccionada
	ctx.fillStyle = '#000';
	ctx.font="10px Arial";
	ctx.fillText('Tecla : ' + tecla + '  Dirección : ' + jugador.dir, 0, 15);

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
	
	dibujar(ctx);
}

function actividad(){
	var aux = null;
	if(pausa){
		//direccionamiento y movimiento
		jugador.mover(tecla, controles);
		aux = tecla;
		//limites
		jugador.limites(canvas);
	}
	//control
	if(tecla == controles[4]){ 
		pausa = !pausa;
		tecla = null;	
	}
}

function correr(){
	setTimeout(correr, 50);
	
	actividad();
}

function init(){
	canvas =  document.getElementById("micanvas");
	ctx =  canvas.getContext('2d');

	jugador  =  new CJugador(posx, posy, des, 20,20);
	console.log(jugador.posx);

	correr();
	redibujar();
	
}

window.requestAnimationFrame = (function (){ 
	return window.requestAnimationFrame || 
	window.mozRequestAnimationFrame || 
	window.webkitRequestAnimationFrame || 
	function (callback){ 
		window.setTimeout(callback, 17); 
	}; 
}());