//esto tendria que ser la clase juego
class Pantallas {
  constructor() {
    this.estado = 0;
    this.botones = []; // Array para almacenar los botones de la escena actual
  }

//----------------metodos----------------------

// Dibuja la escena actual y sus botones
dibujarPantalla() {
  //dibuja la pantalla en la que esta ahora mismo
}

// Maneja los clics del mouse en la escena actual
mousePresionado() {
}

//contiene las instrucciones de cada boton en la escena
setupEscena() {
  
    this.botones = []; // Limpiar los botones anteriores //deberia estar en un "actualizar botones "
    //Pantalla principal
    if (this.estado === 0){
      this.botones = [new Boton(20, 420, 150, 50, "siguiente", 1)];
    }else if (this.estado === 1){ //REGLAS
      this.botones= [new Boton(20, 420, 150, 50, "Entiendo", 2)];
    }else if (this.estado === 2){
    }else if (this.estado === 3) {
      this.botones= [new Boton(20, 420, 150, 50, "Reiniciar", 0)];//DERROTA  
    }else if (this.estado === 4) {
      this.botones= [new Boton(20, 420, 150, 50, "Reiniciar", 0)];//VICTORIA
    }
  }

}
