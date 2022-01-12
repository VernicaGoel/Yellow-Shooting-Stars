
let t = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill("yellow");
}

function draw() {
  background(10, 10); 
  
  for (let x = 0; x <= width; x = x + 100) {
    for (let y = 0; y <= height; y = y + 100) {
      
      const xAngle = map(mouseX, 0, width, 5 * PI, 10 * PI, true);
      const yAngle = map(mouseY, 0, height, 5 * PI, 10 * PI, true);
      
      const angle = xAngle * (x / width) + yAngle * (y / height);

      const aX = x + 15 * cos(2 * PI * t + angle);
      const bY = y + 15 * tan(2 * PI * t + angle);

      ellipse(aX, bY, 5); 
    }
  }

  t = t + 0.001; 
}
