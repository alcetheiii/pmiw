//Alex Sena 119144/8
//Gabriel Vega 119164/3
/*
Debido a mal calculo de tiempo, no llegamos a completar el trabajo, aun asi, queremos mostrar nuestros avances, las correcciones de la parte 1 estan hechas
disculpamos la molestia -alex
*/

//carga las imagenes
let imagenes = [];
//para llamar a la clase controlador en setup
let control;
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
imageMode(RIGHT)
textSize(20);
control = new Controlador();
}

function draw(){
 control.correr();
}

function mousePressed(){
  control.click();
}
