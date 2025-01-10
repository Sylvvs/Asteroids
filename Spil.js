class Spil {
    constructor(){
      this.round = 0;

      this.meteorer = [];

      this.skibet = new Skib(this.meteorer);

      this.BG = new BG();

      this.startRound()
    }

    startRound() {
      this.round++
      this.spawnMeteors()
    }

    spawnMeteors() {
      for(let i = 0; i < floor(2.4**this.round); i++){
        this.meteorer.push(new Meteor(random(-500,500), 12, random(10,30), 
        createVector(random(100,width/2), random(100,height-100)), createVector(random(-1,1), random(-1,1)))); 
      }
    }
    
    update() {
      this.skibet.update();
      for(let m of this.meteorer){
        m.update();
      }
      if (this.meteorer.length < 1) {
        this.startRound()
      }
    }
    
    drawSpil(){
      this.BG.draw();
      if(this.skibet.life > 0)
      this.skibet.drawSkib();
      else{
        strokeWeight(4);
        textSize(120);
        text("GAME OVER", width/2-300, height/2);
      }
      for(let m of this.meteorer){
        m.drawMeteor();
      }

      let tileSize = 64;
      for (let i = 1; i <= 3; i++) {
        let imageYOffset = tileSize*2; // Tomt hjerte yPos
        let imageXOffset = tileSize*11; // Hjerter xPos
        if (this.skibet.life >= i*2) imageYOffset = tileSize*4; // Fyldt hjerte yPos
        if (this.skibet.life == i*2 - 1) imageYOffset = tileSize*3; // Halvtødelagt hjerte yPos
        image(tilemap,50*(i-1)+14, 10, tileSize,tileSize,imageXOffset,imageYOffset,tileSize,tileSize)
      }

      textSize(24);
      fill(255)
      text("Ammo: " + this.skibet.skudCounter, 40, height-80);
      text("Meteorer: " + this.meteorer.length, 40, height-40);
    }
  }
  