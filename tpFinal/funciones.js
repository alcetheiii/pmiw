//se cargan tanto las imagenes como los textos (es la misma shit)
function cargarFondo(img, x, y, ancho, alto, alinea){
  imageMode(alinea);
  image(img, x, y, ancho, alto);
}
//esta función se usa dentro y fuera de los botones
function cargarTexto(txt, x, y){
  push()
  fill(255,255,255);
  text(txt, x, y,600);
  noFill();
  pop()
}
//ACA se llaman a todas las escenas con CONDICIONALESSSS
function cargarEscena(){
  if(estado == 0){
    pruebaEscenaLite(fondos[0], 0, 0, 640, 480, 0, -100, 0, textos[1], 20, 420, 150, 50, textos[2], 470, 420, 150, 50, 0,-100,0,0,0)
  }
  else if(estado == -1){
    pruebaEscenaLite(fondos[14], 0, 0, 640, 480, 0, -100, 0, textos[0], 250, 420, 150, 50, 0,-100,0,0,0,0,-100,0,0,0)    
  }
  else if(estado == 1){
    pruebaEscenaLite(fondos[1], 0, 0, 640, 480, textos[9], 50, 200, textos[0], 20, 420, 150, 50, textos[2], 470, 420, 150, 50,0,-100,0,0,0)
  }
  else if(estado == 2){
    pruebaEscenaLite(fondos[2], 0, 0, 640, 480, textos[10], 50, 200, textos[0], 20, 420, 150, 50, textos[2], 470, 420, 150, 50, 0,-100,0,0,0)
  }
  else if(estado == 3){
    pruebaEscenaLite(fondos[3], 0, 0, 640, 480, textos[11], 50, 200, textos[3], 20, 420, 150, 50, textos[4], 250, 420, 150, 50, textos[5], 470, 420, 150, 50)
  }//OPCIONES DEL DESTINO DE LA LEJANA
  else if(estado == 4){
    pruebaEscenaLite(fondos[4], 0, 0, 640, 480, textos[12], 50, 200, textos[2], 250, 420, 150, 50, 0,-100,0,0,0,0,-100,0,0,0 )
  }
  //aca hay q poner 3 opciones en donde si abandona la boda o no
  else if(estado == 5){
    pruebaEscenaLite(fondos[5], 0, 0, 640, 480, textos[13], 50, 200, textos[7], 20, 420, 150, 50, textos[8], 470, 420, 150, 50,0, -100,0,0,0)
  }
  else if(estado == 6){
    pruebaEscenaLite(fondos[6], 0, 0, 640, 480, textos[14], 50, 200, textos[2], 250, 420, 150, 50, 0,-100,0,0,0,0,-100,0,0,0)
  }
  else if(estado == 7){
    pruebaEscenaLite(fondos[7], 0, 0, 640, 480, textos[15], 50, 200, textos[0], 20, 420, 150, 50, textos[2], 470, 420, 150, 50,0, -100,0,0,0)
  }
  else if(estado == 8){
    pruebaEscenaLite(fondos[8], 0, 0, 640, 480, textos[16], 50, 200, textos[0], 250, 420, 150, 50,0,-100,0,0,0,0,-100,0,0,0)
  }
  else if(estado == 9){
    pruebaEscenaLite(fondos[9], 0, 0, 640, 480, textos[17], 50, 200, textos[0], 250, 420, 150, 50,0,-100,0,0,0,0,-100,0,0,0)
  }
  else if(estado == 10){
    pruebaEscenaLite(fondos[10], 0, 0, 640, 480, textos[18], 50, 200, textos[0], 250, 420, 150, 50,0,-100,0,0,0,0,-100,0,0,0)
  }//INICIO FINAL DE MINIJUEGO
  else if(estado == 11){
    pruebaEscenaLite(fondos[11], 0, 0, 640, 480, textos[19], 50, 200, textos[0], 20, 420, 150, 50, textos[2], 470, 420, 150, 50, 0,-100,0,0,0)
  }
  else if(estado == 12){
    pruebaEscenaLite(fondos[12], 0, 0, 640, 480, textos[20], 50, 200, textos[0], 250, 420, 150, 50,0,-100,0,0,0,0,-100,0,0,0)
  }//FIN DE LORE MINIJUEGO
  //SI ELIGE ABANDONAR LA BODA
  else if(estado == 13){
    pruebaEscenaLite(fondos[13], 0, 0, 640, 480, 0,-100, 0, textos[0], 250, 420, 150, 50,0,-100,0,0,0,0,-100,0,0,0)
  }
  else if(estado == 14){
    pruebaEscenaLite(fondos[15], 0, 0, 640, 480, textos[23], 50, 200, textos[21], 20, 420, 150, 50, textos[22], 470, 420, 150, 50,0,-100,0,0,0)
  }
}
//RETORNA el valor de sector, sectoriza la zona
function sector(sx, sy, sancho, salto) {
  return mouseX > sx && mouseX < sx+sancho && mouseY > sy && mouseY < sy+salto;
}
//para hacer que al clickear el sector se AUMENTE la variable ESTADO
function clickbtn(bx,by,bal,ban,target){
    if(sector(bx,by,bal,ban)){
      estado = target;
    }
  }
//para DIBUJAR el boton
function boton(x, y, ancho, alto, txt){
  if (sector(x, y, ancho, alto)){
    fill(0, 0, 0);
  } else {
    fill(150, 155, 255);
  }
    rect(x,y,ancho,alto);
    push()
    textAlign(CENTER);
    fill(255,255,255);
    text(txt,x+(ancho/2),y+(alto/2)+5);
    noFill();
    pop()
}



//ACA se identifica el sector para los respectivos botones de cada escena
function mousePressed(){
 if(estado == 0){
   clickbtn(20, 420, 150, 50, -1)
   clickbtn(470, 420, 150, 50, 1)
 }else if(estado == -1){
   clickbtn(250, 420, 150, 50, 0)
 }else if(estado == 1){
   clickbtn(20, 420, 150, 50, 0)
   clickbtn(470, 420, 150, 50, 2)
 }else if(estado == 2){
   clickbtn(20, 420, 150, 50, 1)
   clickbtn(470, 420, 150, 50, 14)
 }else if(estado == 3){
   clickbtn(20, 420, 150, 50, 4)
   clickbtn(250, 420, 150, 50, 4)
   clickbtn(470, 420, 150, 50, 4)
 }else if(estado == 4){
  clickbtn(250, 420, 150, 50, 5)
 }else if(estado == 5){
   clickbtn(20, 420, 150, 50, 13)
   clickbtn(470, 420, 150, 50, 6)
 }else if(estado == 6){
   clickbtn(250, 420, 150, 50, 7)
 }else if(estado == 7){
   clickbtn(20, 420, 150, 50, 6)
   clickbtn(470, 420, 150, 50, 8)
 }else if(estado == 8){
   clickbtn(250, 420, 150, 50, 0)
 }else if(estado == 9){
   clickbtn(250, 420, 150, 50, 0)
 }else if(estado == 10){
   clickbtn(250, 420, 150, 50, 0)
 }else if(estado == 11){
   clickbtn(20, 420, 150, 50, 0)
   clickbtn(470, 420, 150, 50, 12)
 }else if(estado == 12){
   clickbtn(250, 420, 150, 50, 0)
 }else if(estado == 13){
   clickbtn(250, 420, 150, 50, 0)
 }else if(estado == 14){
   clickbtn(20, 420, 150, 50, 11)
   clickbtn(470, 420, 150, 50, 4)
 }
}
function pruebaEscenaLite(img, x, y, an, al, txt, x2, y2, txt2, x3, y3, an2, al2, txt3, x4, y4, an3, al3, txt4, x5, y5, an4, al4){
    cargarFondo(img, x, y, an, al)
    cargarTexto(txt, x2, y2)
    boton(x3, y3, an2, al2, txt2)
    boton(x4, y4, an3, al3, txt3)
    boton(x5, y5, an4, al4, txt4)
}
