class Vida{
  constructor(x, y){
    this.x = x; 
    this.y = y; 
    this.vidaMax = 100; 
  }
  
//-------------------   MÉTODOS   ------------------------
  //dibuja la barra
  dibujar(){
    //barra roja (fondo de la barra)
  fill(255, 0, 0);
  rect(this.x, this.y, width, height);
  fill(0, 255, 0);
  rect(this.x, this.y, width * this.vidaMax/100, height);
  //se dibuja una barra con el ancho proporcional a la vida máxima
  }
  
  //actualiza el contenido de la barra
  bajaVida(c){
     this.vidaMax -= c; // la vida se reduce según el valor del parametro del fokin método
  }
}
