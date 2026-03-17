class Spiral {
    constructor(pos, vinkel, vel){
        this.initialPosition = createVector(pos.x,pos.y)
        this.position = createVector(pos.x, pos.y);
        this.velocity = createVector(0,0);
        this.initialVelocity = vel;
        this.kugleVinkel = vinkel;
        this.radius = 7;
        this.accel = 8;
        this.life = 500;
        this.t = 0
    }
    update(){
        this.position.x = this.t * cos(this.t) + this.initialPosition.x
        this.position.y = this.t * sin(this.t) + this.initialPosition.y
        this.t = (500 - this.life)/4
        this.life--
    }
    drawKugle(){
      fill(255,70,30);
      noStroke();
      circle(this.position.x, this.position.y, this.radius);
    }

}