class Escena {
  //coloca la escena en pantalla para 
  cargarEscena(img) {
    image(img, 0, 0, width, height);
  }
  
  dibujarEscena(imgFondo, escena) {
    this.cargarEscena(imagenes[imgFondo]);

    if (escena === 1) {
      this.menu();
    } else if (escena === 2) {
      this.instrucciones();
    } else if (escena === 3) {
      this.victoria();
    } else if (escena === 4) {
      this.derrota();
    }
  }


  menu() {
    this.dibujarEscena(3, 0);
  }

  instrucciones() {
    this.dibujarEscena(4, 1);
  }

  derrota() {
    this.dibujarEscena(1, 3);
  }

  victoria() {
    this.dibujarEscena(2, 4);
  }
}
