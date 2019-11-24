/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov,direccion) {
  this.direccion= direccion;
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
}
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieCaminante;
ZombieConductor.prototype.mover = function (){
  
  if(this.rangoMov.hastaX<this.x+this.velocidad ||
    this.velocidad+this.x< this.rangoMov.desdeX ||
    this.rangoMov.hastaY<this.y+this.velocidad ||
    this.velocidad +this.y < this.rangoMov.desdeY) {
    this.velocidad *= -1;
  }
  if(this.direccion === 'v'){
    this.y += this.velocidad
  }else if(this.direccion === 'h'){
    this.x+= this.velocidad
  }
}
ZombieConductor.prototype.atacar = function (jugador) {
  jugador.perderVidas(jugador.vidas);
}
/* Completar metodos para el movimiento y el ataque */
