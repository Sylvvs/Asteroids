class BG {
    constructor() {
        this.stars = [];
        for (let i = 0; i < 100; i++) {
            this.stars.push(new Star())
        }
    }

    draw() {
        for (let i = 0; i < this.stars.length; i++) {
            this.stars[i].draw()
        }
    }
}

class Star {
    constructor() {
        this.position = createVector(random(0,width),random(0,height));
        this.rotation = random(0,2*PI);
        this.rotationSpeed = random(-0.02,0.02)
        this.intialRotationSpeed = this.rotationSpeed;
        this.shiningTimer = 500;
        this.shine = undefined;
        this.shiningAnimTime = 150;
        this.opacity = floor(random(50,256));
        this.size = random(0.8,1.2)
    }


    draw() {
        if (this.shine != undefined) {
            this.shine.draw();
            if (this.shine.lifetime > 200) this.shine = undefined;
        }
        if (floor(random(0,10000))==5) this.shiningTimer = 0;
        this.intialRotationSpeed = this.rotationSpeed;
        push(); 
        strokeWeight(2)
        stroke(255,255,255,this.opacity)
        translate(this.position.x, this.position.y);
        rotate(this.rotation)
        scale(this.size)
        if (this.shiningTimer < this.shiningAnimTime) this.shiningAnimtion()
        this.rotation += this.rotationSpeed;
  
        let angle = PI*2/8;
        let a = 0;
        beginShape();
        for (let j=0; j < 8; j++) {
            a += angle;
            let form = (j % 2) ? 0.5 : 1.5;
            let sx = cos(a) * 0.01 * form;
            let sy = sin(a) * 0.01 * form;
            vertex(sx, sy);
        }
        endShape(CLOSE);
        pop();
    }

    shiningAnimtion() {
        this.rotationSpeed*2;
        if (this.shiningTimer < this.shiningAnimTime/2) scale(1+this.shiningTimer*0.025)
        if (this.shiningTimer > this.shiningAnimTime/2) scale(1+(this.shiningAnimTime-this.shiningTimer)*0.025)
        if (this.shiningTimer == this.shiningAnimTime/2) this.shine = new Shine(this.position, this.rotation, this.rotationSpeed, this.opacity, this.size);
        this.shiningTimer++
    }
}

class Shine {
    constructor(position, rotation, rotationSpeed, opacity, size) {
        this.position = position;
        this.rotation = rotation;
        this.rotationSpeed = rotationSpeed;
        this.lifetime = 0;
        this.opacity = opacity;
        this.size = size;
    }

    draw() {
        push();
        strokeWeight(2)
        translate(this.position.x, this.position.y);
        rotate(this.rotation)
        scale(1+(this.lifetime*0.01)+(75*0.025))
        scale(this.size)
        let col = color(255,255,255,this.opacity-55-((this.lifetime**0.5)*14)*(this.opacity/255))
        stroke(col)
        this.rotation += this.rotationSpeed;
  
        let angle = PI*2/8;
        let a = 0;
        beginShape();
        for (let j=0; j < 8; j++) {
            a += angle;
            let form = (j % 2) ? 0.5 : 1.5;
            let sx = cos(a) * 0.01 * form;
            let sy = sin(a) * 0.01 * form;
            vertex(sx, sy);
        }
        endShape(CLOSE);
        pop();
        this.lifetime++
    }

}