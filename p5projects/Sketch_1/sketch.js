
//items in setup load once
function setup() {
  createCanvas(windowWidth, windowHeight);
  print(windowWidth); //prints (value) to console

  rectMode(CENTER);
}


//items in draw loop at 60 fps
function draw() { //open curly bracket starts draw function
  background('white');
  fill('maroon');

  print(mouseX);

  stroke('yellow');
  strokeWeight(10); //makes the point 10px in size
  point(150, 150);

  stroke('gold');
  strokeWeight(30);
  line(0, 0, 500, 200);

  //place ellipse at middle of screen using 'width/2, height/2'
  stroke('grey');
  fill(10, 130, 65, 200); //fill ellipse color
  ellipse(width/2, height/2, 100, 400);

  //random chooses a value between low and high (0-255 in this ex.)
  stroke(random(255), random(255), random(255));
  fill(10, 130, 65, 200, 120); //fill ellipse color
  ellipse(600,400, 400);

  noStroke(); //removes outline until another stroke is encountered
  fill('maroon'); //fill rectangle color
  rect(0, 0, 50, 60);

  strokeWeight(5);
  stroke('red')
  fill(255, 50, 220, 170); //fill triangle color
  triangle(50, 300, 175, 10, 250, 500)


  stroke('blue')
  arc(width/2, height/2, 500, 500, 45, 90, PIE)
  arc(width/2, height/2, 500, 500, -90, -45, PIE)






} //close curly bracket ends draw function
