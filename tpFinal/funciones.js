
//se cargan tanto las imagenes como los textos
function cargarFondo(img, x, y, ancho, alto, alinea){
  imageMode(alinea);
  image(img, x, y, ancho, alto);
}

function cargarTexto(txt, x, y){
  text(txt, x, y);
}

//Funcion que intenta hacer lo que el siguiente comentario tiene pero con un for en vez de mil condicionales
function cargarEscena(){
  for(let i = 0;i<9;i++){
    if(estado === i){
      cargarFondo(fondos[i],0,0,640,480,RIGHT);
    }
    if(OpcionesEnEscena !== ""){
      dibBoton();
    }
  }
}

//Funcion Cargar escena, con condicionales a la larga
/*
function cargarEscena(){
  
  if(estado === 0){
    cargarFondo(fondos[0], 0,0, 640,480, RIGHT);
    //boton(textos[1], 0, 150, 420, 150, 50, 190, 450);
  }
  else if(estado === 1){
    cargarFondo(fondos[1],0,0,640,480, RIGHT);
  }
  else if(estado === 2){
    cargarFondo(fondos[2],0,0,640,480, RIGHT);
  }
  else if(estado === 3){
    cargarFondo(fondos[3],0,0,640,480, RIGHT);
    Dibboton(width/4,height/2,"hola");
  }
  else if(estado === 4){
    cargarFondo(fondos[4],0,0,640,480, RIGHT);
    //dibboton();
  }
  else if(estado === 5){
    cargarFondo(fondos[5],0,0,640,480, RIGHT);
  }
  else if(estado === 6){
    cargarFondo(fondos[6],0,0,640,480, RIGHT);
    //dibboton();
  }
  else if(estado === 7){
    cargarFondo(fondos[7],0,0,640,480, RIGHT);
  }
  else if(estado === 8){
    cargarFondo(fondos[8],0,0,640,480, RIGHT);
  }
  else if(estado === 9){
    cargarFondo(fondos[9],0,0,640,480, RIGHT);
  }  
}
*/

//FUNCION para los botones (Es basicamente lo que hicieron el martes, pero mas bonito)

//porcion visual de el boton
function Dibboton(x,y,txt)
  {
    push();
    rectMode(CENTER);
    rect(x,y,60);
    textAlign(CENTER);
    text(txt,x,y);
    pop();
  }
//los if de los mousepressed pero hecho boton
function clickbtn(bx,cy,cal,can,target)
  {
    if(detectbtn(bx,cy,cal,can)){
      estado = target;
    }
  }

//porcion funcional del boton
function detectbtn(cx,cy,al,an)
  {
    return mouseX > cx && mouseX < cx+an && mouseY > cy && mouseY < cy+al;
  }
