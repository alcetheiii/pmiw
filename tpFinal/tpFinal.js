/*
Gabriel Vega 119164/3
Alex sena 119144/8
Comisión 1
video:
*/

let fondos = [];
let textos = [];

let estado;

function preload(){
   //para cargar todas las imagenes de una usando iteracion 
 for(let i=0; i<16; i++){
   fondos[i] = loadImage("data/fondos/fondo"+i+".jpg");
 }
 //para cargar todos los textos de una usando iteracion
 for(let i=0; i<24; i++){
   textos[i] = loadStrings("data/textos/texto"+i+".txt");
 }
}

function setup() {
  createCanvas(640, 480);
  imageMode(RIGHT)
  estado = 0;
  textSize(20);
}

function draw() {
    print(mouseX+"/"+mouseY+" estado: "+estado);  
    cargarEscena();
}
 /* 
function mousePressed(){
  for(let i=0; i<15; i++){
    if(estado == i){
      //clickbtn(20, 420, 100, 50, i--)
      clickbtn(470, 420, 100, 50, i++)
    }
  }
}
*/
