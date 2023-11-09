class Particula {
  // usamos varibales que vienen desde fuera -x -y
  constructor(_x, _y) {
    // aremos que se muevan con un control externo
    this.pos = createVector(_x, _y);
    // variable de tiempo de vida
    this.ls = Math.ceil(random(10, 200));
    // ls = lifespan, cada particula tiene la posibilidad de vivir entre 10 y 200 frames
    // -----------------
    // Faltaria la vareable boleana que es verdadero o falso
    this.alive = true;
    // lado = la distancia que se mueve el cuadradito = side
    this.side = Math.ceil(random(3, 15));
    this.color = random(0, 100, 0, 100, 0, 100);
  }
  update() {
    // generamos un numero aleatorio -- define la direccion en la que se mueve el objeto
    this.r = random(100);
    // ¿COMO DEFINIMOS DONDE SE MUEVE LA PARTICULA?
    //   No podemos usar swith

    //   switch(this.r){
    //     // caso 1
    //     case
    //   }

    // si el numero es menor que 0.25
    if (this.r < 25) {
      // caso 1 se mueve hacia arriba
      this.pos.y -= this.side;
    } else if (this.r < 50) {
      this.pos.x += this.side;
      //   es decir que se mueve hacia la derecha
    } else if (this.r < 75) {
      this.pos.y += this.side;
      // se mueve hacia abajo
    } else {
      this.pos.x -= this.side;
      // se meve hacia la izquierda
    }

    // agregamo la pregunta para eliminar las particulas muertas
    this.ls += 0.01;
    if (this.ls <= 0) {
      this.alive = false;
      console.long();
    }
  }

  display() {
    // dibujamos un cadro con posicion x, y  y el sida que es el lado.
    fill(this.color);
    square(this.pos.x, this.pos.y, this.side);
  }
}
