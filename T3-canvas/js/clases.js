function CJugador(posx, posy, des, ancho, alto){
	this.posx = posx;
	this.posy = posy;
	this.des = des;
	this.ancho = ancho;
	this.alto = alto;
	this.dir = 0;
}

CJugador.prototype.limites = function(canvas){
	if(this.posx < 0){ this.posx = canvas.width; }
	if(this.posx > canvas.width){ this.posx = 0; }
	if(this.posy < 0){ this.posy = canvas.height; }
	if(this.posy > canvas.height){ this.posy = 0; }
}

CJugador.prototype.mover = function(tecla, controles){
	if(tecla == controles[0]){ this.dir = 0;}
	if(tecla == controles[1]){ this.dir = 1;}
	if(tecla == controles[2]){ this.dir = 2;}
	if(tecla == controles[3]){ this.dir = 3;}

	if(this.dir == 0){ this.posy -= this.des; }
	if(this.dir == 1){ this.posy += this.des; }
	if(this.dir == 2){ this.posx += this.des; }
	if(this.dir == 3){ this.posx -= this.des; }
}

CJugador.prototype.dibujar = function(ctx){
	ctx.fillStyle = 'red';
	ctx.beginPath();
	ctx.arc(this.posx,this.posy,10,0,2*Math.PI);
	ctx.fill();
}