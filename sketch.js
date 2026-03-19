let spillet;
let c;

function preload() {
  tilemap = loadImage('assets/images/tilemap.png')
}

function setup() {
  c = createCanvas(windowWidth-20,windowHeight-20); // sætter canvas og beholder reference c dertil

  let x = (windowWidth - width)/ 2;
  let y = (windowHeight - height)/ 2;
  c.position(x, y);  // rykker canvas ind på midten
  select('body').style('background-color', '#FFFF5C');
  
  spillet = new Spil()
}

function draw() {
  //background(0);
  fill(0,0,0,100);
  strokeWeight(16);
  stroke(240,240,240);
  rect(0,0, width, height);
  spillet.update();
  spillet.drawSpil();
}

function keyReleased() {
  if (key == 'z' || key == "x" || key == "c") {
    spillet.skibet.skudKlar = true;
}
}
function mousePressed() {
 /* if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
    let fs = fullscreen();
    fullscreen(!fs);*/
  }


function windowResized() {
  resizeCanvas(windowWidth-100, windowHeight-100);
  let x = (windowWidth - width)/ 2;
  let y = (windowHeight - height)/ 2;
  c.position(x, y);  // rykker canvas ind på midten
}