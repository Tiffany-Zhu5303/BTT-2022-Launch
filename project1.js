let opacity1 = 255;
let opacity2 = 255;
let opacity3 = 255;
let opacity4 = 255;
let opacity5 = 255;

function setup() {
  createCanvas(600, 500); 
  noStroke(); 
  
}

function draw() {
  background(220); 
  // Lines
  strokeWeight(4)
  stroke(51)
  line(300, 0, 300, 500)

  stroke(51)
  line(0, 250, 600, 250)

  //-----------------------------------
  
  //Top left rectangle (Blue)
  fill(0, 35, 156)
  rect(0, 0, 300, 250)

  //Pokeball big circle (red)
  strokeWeight(7)
  fill(255, 6, 0)
  ellipse(150, 125, 200, 200)

  //Pokeball inner circlex`
  fill(255, 255, 255)
  ellipse(150, 125, 50, 50)

  fill(255, 255, 255)
  ellipse(150, 125, 25, 25)

  strokeWeight(10)
  stroke(51)
  line(53, 125, 120, 125)

  strokeWeight(10)
  stroke(51)
  line(178, 125, 248, 125)

  //-----------------------------------
  
  // Top right rectangle
  // Triforce
  fill(25, 96, 34)
  rect(300, 0, 300, 250)

  fill(252, 249, 95)
  triangle(450, 50, 400, 120, 500, 120) // top
  triangle(400, 120, 350, 190, 450, 190) // bottom left
  triangle(500, 120, 450, 190, 550, 190) // bottom right

  //-----------------------------------
  
  // Bottom left rectangle
  fill(252, 207, 242)
  rect(0, 250, 300, 250)

  //BTS Logo (Left side)
  //Upper Triangle
  noStroke()
  fill(164, 76, 211)
  triangle(110, 275, 110, 325, 145, 325)
  
  //Rectange
  noStroke()
  fill(164, 76, 211)
  rect(110, 325, 35, 100)
 
  //Bottom triangle
  noStroke()
  fill(164, 76, 211)
  triangle(110, 425, 145, 425, 110, 475)

  //BTS Logo (Right side)

  //Upper Triangle
  noStroke()
  fill(164, 76, 211)
  triangle(190, 275, 155, 325, 190, 325)
  
  //Rectange
  noStroke()
  fill(164, 76, 211)
  rect(155, 325, 35, 100)
  
  //Bottom triangle
  noStroke()
  fill(164, 76, 211)
  triangle(155, 425, 190, 425, 190, 475)

  //-----------------------------------

  // Bottom right rectangle
  // Music note
  fill(136, 0, 199)
  rect(300, 250, 300, 250)

  // Music note -> 
  //the two dots
  fill(0,0,0)
  ellipse(410, 410, 45, 35)
  fill(0,0,0)
  ellipse(480, 430, 45, 35)
  //two bars coming from the circle
  fill(0,0,0)
  rect(425, 345, 8, 65)
  fill(0,0,0)
  rect(495, 365, 8, 65)
  //the bar connecting the music note
  fill(0,0,0)
  quad(425, 320, 425, 350, 503, 370, 503, 340);

  // text(`x: ${round(mouseX)}, y: ${round(mouseY)}`, 10, 10) 

  //-----------------------------------
  //Color block cover

  //Top left
  fill(136, 0, 199, opacity1)
  rect(0,0,300,250)
  
  //Top right
  fill(252, 207, 242, opacity2)
  rect(300,0,300,250)

  //Bottom Left
  fill(25, 96, 34, opacity3)
  rect(0, 250, 300, 250)

  //Bottom right
  fill(0, 35, 156, opacity4)
  rect(300,250,300,250)

  //Instructions 
  fill(0, 0, 0, opacity5);

  textSize(50);
  textAlign(CENTER, CENTER)  
  text('Press on a block!', 300, 250)
  
}

function mousePressed() {
  if (mouseX < 300 && mouseY < 250){
    opacity1 -= 50;
  }
  else if (mouseX > 300 && mouseY < 250){
    opacity2 -= 50;
  }
  else if (mouseX < 300 && mouseY > 250){
    opacity3 -= 50;
  }
  else if (mouseX > 300 && mouseY > 250){
    opacity4 -= 50;
  } 
  opacity5 -= 50;
}