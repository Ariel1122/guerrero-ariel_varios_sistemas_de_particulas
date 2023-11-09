class Sistema {
  constructor() {
    // aqui contruimos el arrai de particulas
    this.pos = createVector(width / 2, height / 2);
    this.ps = [];
    this.t = random(100);
  }

  // necesitamos actualizar la posicion del sistema de particulas con metodos
  update() {
    this.t += 0.01;
    // actilizamos la posicion, pasamos en tiempo t, lo mapeamos y trnamosformamos

    // 1. actualixacion de posicion
    this.pos.x = map(noise(this.t), 0, 1, 0, width);
    this.pos.y = map(noise(this.t + 10), 0, 1, 0, height);

    // 2 agregamos particulas y las empujamos al array (push)
    this.p = new Particula(this.pos.x, this.pos.y);
    this.ps.push(this.p);

    // todoas ya tienen programada la muerte, ahora verificamos las muertas y cuales salen del array

    // forloop para el array que se llama ps
    for (let i = 0; i < this.ps.length; i++) {
      // como revisamos cada elemento del array-ps, si no esta alive.
      // el signo de adniracion para preguntas negativas!
      if (!this.ps[i].alive) {
        this.p.splice(i, 1); //i es el indice de la particula muerta, la vamos eliminando con el 1
      }
    }
  }

  display() {
    for (let i = 0; i < this.ps.length; i++) {
      this.ps[i].update();
      this.ps[i].display();
    }
  }
}
