//Tp3 comision 1
//Alex Sena
/*
Link del video: https://youtu.be/YFT4MxKjfkk

Cambios:
Removi Coinflip y agregue random() a cresult directamente
 */


let izqImagen;
let easing = 0.5;
let x, y;
let center = 200;
let cant = 2;
let tam;
let cresult = 0;

function preload(){
  izqImagen = loadImage("data/refimage.png");

}

function setup() {   
  cresult = random(0,2);
  print(cresult);
  createCanvas(800, 400);
  tam = 400/cant;
  x= 90.0;
  y= 10.0;
}

function draw() {
  //lado izquierdo
  background(105);
  image(izqImagen, 0, 0, 400, 400);

  //Lado derecho
  for (let i=0; i<cant; i++) {
    for (let j=0; j<cant; j++) {
      limites((400)+i*tam, (600)+i*tam, (0)+j*tam, (200)+j*tam, 7);
    }
  }
  circle(mouseX,mouseY,7);
}

function limites(comienzoX, finalX, comienzoY, finalY, secciones) {
  for (let i = 0; i<=12; i++) {
    let ease = i/22;
    if (cresult>1) {
      if (i%2===1) {
        fill(0);
      } else {
        fill(255);
      }
    } else {
      if (i%2===1) {
        fill(255);
      } else {
        fill(0);
      }
    }
    if (mouseX>=comienzoX && mouseX <= finalX && mouseY >= comienzoY && mouseY < finalY) {
      x = mouseX-(finalX-comienzoX)/2-comienzoX;
      y = mouseY-(finalY-comienzoY)/2-comienzoY;
    }
    quad(comienzoX+(x*ease)+(secciones*i), comienzoY+(y*ease)+(secciones*i), /**/finalX+(x*ease)-(secciones*i), comienzoY+(y*ease)+(secciones*i), /**/finalX+(x*ease)-(secciones*i), finalY+(y*ease)-(secciones*i), /**/comienzoX+(x*ease)+(secciones*i), finalY+(y*ease)-(secciones*i));
  }
}

function keyPressed() {
  mouseX = 0;
  mouseY = 0;
  x = 90;
  y = 10;
}
