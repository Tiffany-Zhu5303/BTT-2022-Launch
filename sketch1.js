// Group 1 member names: 

function setup() {
  createCanvas(600, 500); // Sizes the canvas, making width = 600 and height = 500
  noStroke(); // Setting to draw our shapes without outlines
}

function draw() {
  background(220); // Paints the canvas a nice, neutral grey
  // Shows mouse position, just to be helpful.
  fill(0, 0, 0) // Change color to black for text
  text(`x: ${round(mouseX)}, y: ${round(mouseY)}`, 10, 10) 

  // Challenge 1:
  // // Yellow circle code (top left)
  // fill(251, 255, 18)
  // ellipse(50, 50, 50, 50)
  
  // // Red circle code (top right)
  // fill(255, 22, 18)
  // ellipse(550, 50, 50)

  // // Green circle code (bottom left)
  // fill(124, 249, 82)
  // ellipse(50, 450, 50, 50)
  
  // // Blue circle code (bottom right)
  // fill(53, 86, 252)
  // ellipse(550, 450, 50)
  
  //--------------------------------------------------
  
  // Challenge 2:
  // Yellow circle code (top left)
  // fill(251, 255, 18)
  // rect(0, 0, 300, 250)
  
  // // Red circle code (top right)
  // fill(255, 22, 18)
  // rect(300, 0, 300, 250)

  // // // Green circle code (bottom left)
  // fill(124, 249, 82)
  // rect(0, 250, 300, 250)
  
  // // // Blue circle code (bottom right)
  // fill(53, 86, 252)
  // rect(300, 250, 300, 250)

  //--------------------------------------------------

  // Challenge 3:
  // big red triangle
  // fill(252, 83, 83)
  // triangle(300, 0, 0, 500, 600, 500)

  //--------------------------------------------------
  
  // Challenge 3:
  //Top triangle
  // fill(252, 83, 83)
  // triangle(300, 0, 150, 250, 450, 250)

  // //Bottom left triangle
  // fill(252, 83, 83)
  // triangle(150, 250, 0, 500, 300, 500)
  
  // //Bottom right triangle
  // fill(252, 83, 83)
  // triangle(450, 250, 300, 500, 600, 500)

  //--------------------------------------------------
  //Roof (triangle)
  // fill(184, 4, 4)
  // triangle(300, 50, 150, 200, 450, 200)
  
  // // Left side (rectangle)
  // fill(184, 4, 4)
  // rect(150, 200, 100, 300)
  
  // // Right side (rectangle)
  // fill(184, 4, 4)
  // rect(350, 200, 100, 300)
  
  // // Middle (rectangle)
  // fill(184, 4, 4)
  // rect(250, 200, 100, 150)
  
}

