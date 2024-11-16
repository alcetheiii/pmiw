//esta clase no deberia existir
class Boton {
  constructor(x, y, ancho, alto, txt, escena) { //optimizar esto
    this.x = x;         
    this.y = y;             
    this.ancho = ancho;       
    this.alto = alto;    
    this.txt = txt;         
    this.escena = escena;   
  }

//-------------------   MÉTODOS   ------------------------

//dibuja el boton
dibujar(){
  //highlight
  if (this.sector()){
    fill(0, 0, 0);
  } else {
    fill(150, 155, 255);
  }
    rect(this.x, this.y, this.ancho, this.alto);
    
    //dibuja el boton
    push()
    textAlign(CENTER);
    fill(255,255,255);
    text(this.txt, this.x + (this.ancho / 2), this.y + (this.alto / 2)+5);
    noFill();
    pop()
}

//nuestra colision succede aca, tal vez sea mejor usar el otro
colision(){
  return mouseX > this.x && mouseX < this.x + this.ancho && mouseY > this.y && mouseY < this.y + this.alto;
}

//este es raro hace algo si algo se la colision es correcta, es mejor simplemente dejar colision por si solo
clic(){
  if (this.colision()){
  return this.accion; // Devuelve la acción asociada al botón (cambia de estado)
  }
 return null;
 }
}
