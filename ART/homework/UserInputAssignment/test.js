let img;

function preload(){
  img = loadImage('images/coffee.png')
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background("grey");
  image(img, 100, 100, 100, 100);

}

function draw(){
}
