let boatX=250;
let boatY=350;
let skiX=boatX+650;
let skiY=350;
let classifier;
let label = 'Say Left or Right to avoid falling rocks.';
let ropex;
let ropey;
let modelText = "model.json";
let xa;
let y3;
var xpos = -100;
var xpos1 = -100;
var xpos2 = -100;
var xpos3 = -100;
var xpos4 = -100;
var xpos5 = -100;
var xpos6 = -100;
var xpos7 = -100;
var xpos8 = -100;
var xpos9 = -100;
var xpos10 = -100;
var xpos11 = -100;
var nums = [-50];
var cnv;
var score = 0;
let damage = 0;

var ypos = -1500;
var ypos1 = -200;



function preload(){
  boat = loadImage('images/boat.png');
  ski = loadImage('images/ski.png');
  rock = loadImage('images/rock.png');
  drink = loadImage('images/drink.png');
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Tsvkg5vQM/'+modelText);
}
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
function setup() {
  // put setup code here
    cnv = createCanvas(1480, 700);
    cnv.style("z-index", "-1");
    centerCanvas();

    setInterval(point, 1000);
    classifyAudio();
}
function classifyAudio(){
  classifier.classify(gotResults);
}
function gotResults(error, results){
  if (error){
    console.error(error);
    return;
  }
  label = results[0].label;
  //console.log(results[0]);
}
function draw() {
  // put drawing code here

  background(55, 119, 255);

   // Draw the label in the canvas
  fill(255);
  textSize(25);
  textAlign(CENTER, CENTER);
  text("score:" + score, width*0.66, height/10);
  text("damage:" + damage + "%", width*0.5, height/10);



  boatXConstrained = constrain(boatX, 100, 800)
  skiYConstrained = constrain(skiY, 50, 650)
  text(label, boatXConstrained, (boatY-100));

  skiX_1 = boatX+650

  skiX_1Constrained = constrain(skiX_1, 650, 1400)

  lineX = boatX+600
  lineXConstrained = constrain(lineX, 600, 1350)


  if (label === 'left'){//(keyIsDown(LEFT_ARROW)) {
    boatX -= 8;
  }else if (label === 'right') {
      boatX += 8;
  }

  if (keyIsDown(UP_ARROW)) {
    skiY -= 5;
  }else if (keyIsDown(DOWN_ARROW)) {
    skiY += 5;
  }

  imageMode(CENTER);
  image(boat, boatXConstrained, boatY, 200, 100);
  image(ski, skiX_1Constrained, skiYConstrained, 100, 100);
  strokeWeight(2.5);
  line(boatXConstrained+75,boatY-25,lineXConstrained,skiYConstrained-28);

  if (boatX > 801){
    boatX = boatX-2
  } else if (boatX < 99){
    boatX = boatX+2
  }

  if (skiY > 651){
    skiY = skiY-2
  } else if (skiY < 49){
    skiY = skiY+2
  }

      ypos = ypos+2;
      if (ypos > height + 300)
      { ypos = -50;
      }
      for (var ya = 0; ya<1; ya++){
        image(rock, 100, (ypos-nums[ya]), 50, 50);
      }







   xpos = xpos + 6;
     if(xpos > width+2400)
     { xpos = -100;
     }
     for (var xa = 0; xa<1; xa++){
       image(drink, (xpos-nums[xa]), 150, 40, 50);
}
  xpos1 = xpos1 + 6;
      if(xpos1 > width+2900)
      {
        xpos1 = -100;
      }
      for (var xb = 0; xb<1; xb++){
        image(drink, (xpos1-nums[xb]), 100, 40, 50);
  }
      xpos2 = xpos2 + 6;
          if(xpos2 > width+2600)
          {
            xpos2 = -100;
          }
          for (var xc = 0; xc<1; xc++){
            image(drink, (xpos2-nums[xc]), 400, 40, 50);
    }
        xpos3 = xpos3 + 6;
          if(xpos3 > width+5000)
          {
            xpos3 = -100;
          }
          for (var xd = 0; xd<1; xd++){
      image(drink, (xpos3-nums[xd]), 250, 40, 50);
    }
        xpos4 = xpos4 + 6;
          if(xpos4 > width+2000)
          {
            xpos4 = -100;
          }
          for (var xe = 0; xe<1; xe++){
      image(drink, (xpos4-nums[xe]), 350, 40, 50);
    }
        xpos5 = xpos5 + 6;
          if(xpos5 > width+3000)
          {
            xpos5 = -100;
          }
          for (var xf = 0; xf<1; xf++){
      image(drink, (xpos5-nums[xf]), 550, 40, 50);
    }
        xpos6 = xpos6 + 6;
          if(xpos6 > width+3500)
          {
            xpos6 = -100;
          }
          for (var xg = 0; xg<1; xg++){
      image(drink, (xpos6-nums[xg]), 650, 40, 50);
    }
        xpos7 = xpos7 + 6;
          if(xpos7 > width+4600)
          {
            xpos7 = -100;
          }
          for (var xh = 0; xh<1; xh++){
      image(drink, (xpos7-nums[xh]), 200, 40, 50);
    }
        xpos8 = xpos8 + 6;
          if(xpos8 > width+3200)
          {
            xpos8 = -100;
          }
          for (var xi = 0; xi<1; xi++){
      image(drink, (xpos8-nums[xi]), 500, 40, 50);
    }
        xpos9 = xpos9 + 6;
          if(xpos9 > width+1500)
          {
            xpos9 = -100;
          }
          for (var xj = 0; xj<1; xj++){
      image(drink, (xpos9-nums[xj]), 300, 40, 50);
    }
        xpos10 = xpos10 + 6;
          if(xpos10 > width+4000)
          {
            xpos10 = -100;
          }
          for (var xk = 0; xk<1; xk++){
      image(drink, (xpos10-nums[xk]), 600, 40, 50);
    }
        xpos11 = xpos11 + 6;
          if(xpos11 > width+4800)
          {
            xpos11 = -100;
          }
          for (var xl = 0; xl<1; xl++){
      image(drink, (xpos11-nums[xl]), 450, 40, 50);
    }






    let d = int(dist(skiX_1Constrained, skiYConstrained, xpos, 150));
//console.log(d);
    if (d < 55){
      score = score+1;
      xpos = width+50
    }
    //console.log(score);
    let z = int(dist(skiX_1Constrained, skiYConstrained, xpos1, 100));

    if (z < 55){
      score = score+1;
      xpos1 = width+50
    }

    let q = int(dist(skiX_1Constrained, skiYConstrained, xpos2, 400));

    if (q < 55){
      score = score+1;
      xpos2 = width+50
    }

    let r = int(dist(skiX_1Constrained, skiYConstrained, xpos3, 250));

    if (r < 55){
      score = score+1;
      xpos3 = width+60
    }

    let t = int(dist(skiX_1Constrained, skiYConstrained, xpos4, 350));

    if (t < 55){
      score = score+1;
      xpos4 = width+70
    }

    let u = int(dist(skiX_1Constrained, skiYConstrained, xpos5, 550));

    if (u < 55){
      score = score+1;
      xpos5 = width+60
    }

    let s = int(dist(skiX_1Constrained, skiYConstrained, xpos6, 650));

    if (s < 55){
      score = score+1;
      xpos6 = width+50
    }

    let c = int(dist(skiX_1Constrained, skiYConstrained, xpos7, 200));

    if (c < 55){
      score = score+1;
      xpos7 = width+100
    }

    let g = int(dist(skiX_1Constrained, skiYConstrained, xpos8, 500));

    if (g < 55){
      score = score+1;
      xpos8 = width+100
    }

    let n = int(dist(skiX_1Constrained, skiYConstrained, xpos9, 300));

    if (n < 55){
      score = score+1;
      xpos9 = width+100
    }

    let m = int(dist(skiX_1Constrained, skiYConstrained, xpos10, 600));

    if (m < 55){
      score = score+1;
      xpos10 = width+100
    }

    let l = int(dist(skiX_1Constrained, skiYConstrained, xpos11, 450));

    if (l < 55){
      score = score+1;
      xpos11 = width+100
    }





    let w = int(dist(boatXConstrained, boatY, 100, ypos));
    if (w <55){
      damage = damage+25
      ypos = height +575

    }



      if (damage >= 100){
        gameOver()
      }

function gameOver(){
    background(0,0,255);
    text("You took too much damage! Refresh to play again.", width/2, height/2);
}


}


function windowResized(){
  centerCanvas();
}
