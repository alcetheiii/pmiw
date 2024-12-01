//alex sena 

//carga las imagenes
let imagenes = [];
//para llamar a la clase controlador en setup
let control ;
//sonidos
let sboton;


function preload(){
 for(let i=0; i<5; i++){
   imagenes[i] = loadImage("data/fondo"+i+".png");
 }
 sBoton = loadSound("data/boton.mp3");

}

function setup(){
createCanvas(640,480);

//remover esto
imageMode(RIGHT);
textSize(20);
//

control = new Controlador();
}

function draw(){
 control.dibujar();
}

function mousePressed(){
  control.click();
}
