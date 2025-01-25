class Emitter {
    constructor(colorArray, size) {
        this.colorArray = colorArray;
        this.particleSize = size;
        this.particles = [];
    }

    spawnParticle(num, angle, pos) {
        for (let i = 0; i < num; i++) {
            this.particles.push(new Particle(this.colorArray[0], { ...pos }, angle, this.particleSize));
        }
    }

    update() {
        this.particles = this.particles.filter(particle => {
            particle.update();
            if (particle.colorProgress < this.colorArray.length - 1) {
                const nextColorIndex = particle.colorProgress + 1;
                particle.color = lerpColor(
                    this.colorArray[particle.colorProgress],
                    this.colorArray[nextColorIndex],
                    particle.colorTimer
                );
                if (particle.colorTimer >= 1) {
                    particle.colorTimer = 0;
                    particle.colorProgress++;
                }
            }
            return particle.lifetime < 30;
        });
        this.draw();
    }

    draw() {
        this.particles.forEach(particle => particle.draw());
    }
}

class Particle {
    constructor(initialColor, pos, angle, size) {
        this.color = initialColor;
        this.position = { x: pos.x, y: pos.y };
        this.angle = angle + random(-4,4);
        this.size = size;
        this.speed = 0.3;
        this.friction = 0.01;
        this.lifetime = 0;
        this.colorProgress = 0;
        this.colorTimer = 0;
    }

    update() {
        this.position.x += this.speed * Math.cos(this.angle);
        this.position.y += this.speed * Math.sin(this.angle);
        this.speed = Math.max(this.speed - this.friction, 0);
        this.lifetime++;
        this.colorTimer = Math.min(this.colorTimer + 0.1, 1);
    }

    draw() {
        push();
        fill(this.color);
        noStroke();
        translate(this.position.x,this.position.y)
        scale(1*(this.lifetime*0.1))
        circle(0,0, this.size);
        pop();
    }
}
