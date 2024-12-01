class Controlador {
  constructor() {
    this.estado = 0;
    this.fondo = new Fondo();
    this.boton = new Boton();
  }

  //----------------metodos----------------------

  // Dibuja la escena actual y sus botones
  dibujar() {
    this.fondo.dibujarEscena();
    if (this.estado === 0) {
      this.boton.botonJugar();
    } else if (this.estado === 1) {
      this.boton.botonVolver();
      this.boton.botonSiguiente();
    } else if (this.estado === 2) {
      //llamamos al juego
    } else if (this.estado === 3) {
      this.boton.botonReiniciar();
    } else if (this.estado === 4) {
      this.boton.botonReiniciar();
    }
  }

  click() {
    sBoton.play();
    if (this.estado === 0 && this.boton.colision()) {
      this.estado = 1;
    } else if (this.estado === 1 && this.boton.colision()) {
      this.estado = 2;
    } else if (this.estado === 3 && this.boton.colision()) {
      this.estado = 3;
    } else if (this.estado === 4 && this.boton.colision()) {
      this.estado = 4;
    }
  }
}
