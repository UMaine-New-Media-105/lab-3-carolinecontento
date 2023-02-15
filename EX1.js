function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  if (mouseX < 100) {
   noStroke();
    fill("white");
    ellipse(50, 50, 100);
    rect( 30, 50, 100);
  } else if (mouseX >= 100 && mouseX < 300){
    noStroke();
    rect(50, 60, 100);
    rect(100, 80, 100);
    fill("lightgreen");
  } else if (mouseX >= 300 && mouseX < 500) {
    triangle( 50, 400, 200, 100, 90, 90);
    triangle( 20, 200, 200, 100, 90, 90);
    noStroke();
    fill("lightpink");
  }
  
}
