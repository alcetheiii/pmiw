
//ACÁ ES DONDE EL ESTADO CAMBIA DE VALOR DEPENDIENDO DE LA SI LA VARIABLE
//SECTOR ES VERDADERA O NO!!
function mousePressed(){
  if(sector == true){
    estado++;
    sector = false;
  }
}

//se cargan tanto las imagenes como los textos (es la misma shit)
function cargarFondo(img, x, y, ancho, alto, alinea){
  imageMode(alinea);
  image(img, x, y, ancho, alto);
}

function cargarTexto(txt, x, y){
  text(txt, x, y);
}


//ACA se llaman a todas las escenas con CONDICIONALESSSS
function cargarEscena(){
  
  if(estado == 0){
    cargarFondo(fondos[0], 0,0, 640,480, RIGHT);
    //boton(textos[1], 0, 150, 420, 150, 50, 190, 450);
    //ESTE BOTON es el q se supone lleva a los creditos pero ya sabemos q paso
    
    botonReusable(textos[0], 0, 350, 420, 150, 50, 400, 450); 
  }
  else if(estado == 1){
    cargarFondo(fondos[1],0,0,640,480, RIGHT);
    botonReusable(textos[3], 1, 350, 420, 150, 50, 400, 450);
  }
  else if(estado == 2){
    cargarFondo(fondos[2],0,0,640,480, RIGHT);
  }
  else if(estado == 3){
    cargarFondo(fondos[3],0,0,640,480, RIGHT);
  }
  else if(estado == 4){
    cargarFondo(fondos[4],0,0,640,480, RIGHT);
  }
  else if(estado == 5){
    cargarFondo(fondos[5],0,0,640,480, RIGHT);
  }
  else if(estado == 6){
    cargarFondo(fondos[6],0,0,640,480, RIGHT);
  }
  else if(estado == 7){
    cargarFondo(fondos[7],0,0,640,480, RIGHT);
  }
  else if(estado == 8){
    cargarFondo(fondos[8],0,0,640,480, RIGHT);
  }
  else if(estado == 9){
    cargarFondo(fondos[9],0,0,640,480, RIGHT);
  }  
}


//FUNCION para los botones
function botonReusable (txt, est, x, y, ancho, alto, x2, y2){
  rect(x, y, ancho, alto);
  cargarTexto(txt, x2, y2);
  //let sector1;
  
    sector = (mouseX >= x && mouseX <= x+ancho && mouseY >= y && mouseY <= y+alto);
/*
  if(sector == mouseX >= x && mouseX <= x+ancho && mouseY >= y && mouseY <= y+alto ){
    sector = true;
  }else{
    sector = false;
  }
  */
}
