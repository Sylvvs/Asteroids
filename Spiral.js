class Spiral {
    constructor(pos, vinkel, vel){
        this.initialPosition = createVector(pos.x,pos.y)
        this.position = createVector(pos.x, pos.y);
        this.radius = 7;
        this.life = 250;
        this.t = 0
        this.a = 6
        this.b = 0
    }
    update(){
        this.position.x = this.a * this.t * cos(this.t + this.b) + this.initialPosition.x
        this.position.y = this. a * this.t * sin(this.t + this.b) + this.initialPosition.y
        this.t = (250 - this.life)/6
        this.life--
    }
    drawKugle(){
      fill(255,70,30);
      noStroke();
      circle(this.position.x, this.position.y, this.radius);
    }

}