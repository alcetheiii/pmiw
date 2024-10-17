
let fondos = [];
let textos = [];
let opciones = [];

let estado;
let num;

let sector;

function preload(){
   //para cargar todas las imagenes de una usando iteracion 
 for(let i=0; i<9; i++){
   fondos[i] = loadImage("data/fondo"+i+".jpg");
 }

 //para cargar todos los textos de una usando iteracion
 for(let i=0; i<4; i++){
   textos[i] = loadStrings("data/texto"+i+".txt");
 }
}

function setup() {
  createCanvas(640, 480);
  estado = 0;
  num = 0;
  textSize(20);
}

function draw() {
    print(mouseX+"/"+mouseY+" |estás dentro: "+sector+" estado:"+estado);
    
    cargarEscena();
    
}

//Probablemente esto se pueda reducir con un for
function mousePressed(){
  print("mousepressed det");
  if(estado===3)
  {
    print("Estado Det");
    clickbtn(width/2,height/2,60,60,4);
    clickbtn();
  }
}
