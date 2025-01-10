class Meteor {

    constructor(roto, segmenter, radius, pos, vel) {
      this.position = pos;
      this.velocity = vel;
      this.roto = roto;
      this.segmenter = segmenter;
      this.radius = radius * random(0.85, 1.15);
      this.form = [];
      for (let i = 0; i < segmenter; i++) {
        this.form.push(random(0.7, 1.2));
      }
    }
  
    update() {
      this.position.add(this.velocity.limit(5));
      this.kollisionKant();
    }
  
    drawMeteor() {
      strokeWeight(4);
      fill(204, 68, 31,150);
      stroke(50, 50, 65);
      push();
      translate(this.position.x, this.position.y);
      rotate(frameCount/this.roto);
      
      let angle = PI*2/this.segmenter;
      let a = 0;
      beginShape();
      for (let j=0; j < this.segmenter; j++) {
        a += angle;
        let sx = cos(a) * this.radius * this.form[j];
        let sy = sin(a) * this.radius * this.form[j];
        vertex(sx, sy);
      }
      endShape(CLOSE);
      
      pop();
      noStroke();
    }
  
    kollisionKant() { //adjusted 10 to radius/2
      if (this.position.x - this.radius/2 < 0) {
        this.velocity.x *= -1;
        this.position.x = this.radius/2;
      } else if (this.position.x + this.radius/2 > width) {
        this.velocity.x *= -1;
        this.position.x = width-this.radius/2;
      } else if (this.position.y - this.radius/2 < 0) {
        this.velocity.y *= -1;
        this.position.y = this.radius/2;
      } else if (this.position.y + this.radius/2 > height) {
        this.velocity.y *= -1;
        this.position.y = height-this.radius/2;
      }
    }
  }
  