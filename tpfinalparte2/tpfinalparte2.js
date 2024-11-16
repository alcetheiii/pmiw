let imagenes = [];
let j = new juego();

function preload(){
 for(let i=0; i<4; i++){
   imagenes[i] = loadImage("data/fondo"+i+".png");
 }
}

function setup(){
createCanvas(640,480);
}

function draw(){
  j.dibujarjuego();
}

function mousePressed(){
}
