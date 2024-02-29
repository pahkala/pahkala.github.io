//Music: https://www.bensound.com (bensound-goinghigher.mp3)

//object that stores our image
let mousepic;
//score variable
let score = 0;

//initial image s
let mousepicX;
let mousepicY;

let mousepicXspeed;
let mousepicYspeed;



//boolean can be either true or false
//declarations for added text between certain scores
let wow = false;
let dang = false;
let thatisalot = false;
let morepls = false;
let gosh = false;
let holycow = false;
let exclaim = false;
let veryverygood = false;
let greatwork = false;
let wowagain = false;
//declaration for endgame
let victory = false;
let endScreen = false;
let mouseRandomizer = false;
let stopRandomizer = false;


//to check mouse clicked variable
let scoreClick;
//to load before code executes
function preload(){
  // image is loaded in the object
  mousepic = loadImage("images/mousepic.png");

  soundFormats("mp3");
  mySound = loadSound("audio/upliftingsong.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  mySound.setVolume(0.25);
  mySound.loop();

  mousepicX = windowWidth/2
  mousepicY = windowHeight/2




}


function draw() {
  background(60, 210, 180);
  imageMode(CENTER);


  image(mousepic, mousepicX, mousepicY, 300, 300);


  //typography and text add:
  textSize(25);
  textAlign(CENTER);
  fill("black");
  text("Click Counter", width/2, 40);//Text requires text & X & Y value
  textSize(18)
  text("How many clicks can you get?", width/2, 70)
  fill("black");
  textSize(25)
  text(score, width/2, 100);
  print(score);
  //print(mousepicX);
  //print(mousepicY);



  if (score > 9){
    wow = true;
  }
  if (wow == true){
    //trigger this custom function
    wowadd();
  }

  if (score > 19){
    dang = true
  }
  if (dang == true){
    //trigger this custom function
    dangadd();
  }

  if (score > 29){
    thatisalot = true;

  }
  if (thatisalot == true){
    //trigger this custom function
    thatisalotadd();
  }

  if (score >= 39){
    morepls = true
  }
  if (morepls == true){
    //trigger this custom function
    moreplsadd();
  }

  if (score >= 40){
    for(var a=0; a<width+10; a+=80){
      for(var b=0; b<height+10; b+=80){
      image(mousepic, a, b, 80, 80)
      }
    }
  }

        if (score >= 46){
            for(var a=0; a<width+10; a+=120){
              for(var b=0; b<height+10; b+=120){
              image(mousepic, a, b, 120, 120)
              }
            }

        }

                  if (score >= 49){
                      for(var a=0; a<width+10; a+=160){
                        for(var b=0; b<height+10; b+=160){
                        image(mousepic, a, b, 160, 160)
                        }
                      }

                  }



  if (score > 49){
    gosh = true;
    stopRandomizer = true;
  }
  if (gosh == true){
    //trigger this custom function
    goshadd();
    stopRandom();
  }

  if (score > 59){
    holycow = true
  }
  if (holycow == true){
    //trigger this custom function
    holycowadd();
  }

  if (score > 69){
    exclaim = true
  }
  if (exclaim == true){
    //trigger this custom function
    exclaimadd();
  }

  if (score > 79){
    greatwork = true
  }


  if (score > 89){
    veryverygood = true
  }
  if (veryverygood == true){
    //trigger this custom function
    veryverygoodadd();
  }


  if (score == 100){
    endScreen = true;
  }

  if (score > 109){
    endscreen = false;
  }

  if(endScreen == true){
    endScreenFunction();
  }

  if (score == 110){
    victory = true;
  }

  if(victory == true){
    //trigger this custom function
    actualVictory();
  }
}

function mouseClicked(){
  if (score++);

}

function mouseRandom(){

for(var a=0; a<width+10; a+=40){
  for(var b=0; b<height+10; b+=40){
  image(mousepic, a, b, 40, 40)
}
}
}

function stopRandom(){
  background(60, 210, 180);
  imageMode(CENTER);
  image(mousepic, mousepicX, mousepicY, 300, 300);
  textSize(25);
  textAlign(CENTER);
  fill("black");
  text("Click Counter", width/2, 40);//Text requires text & X & Y value
  textSize(18)
  text("How many clicks can you get?", width/2, 70)
  fill("black");
  textSize(25)
  text(score, width/2, 100);
}

function endScreenFunction(){
  textAlign(CENTER);
  background(60, 210, 180);
  text("All those clicks, do you feel satisfied?", width/2, height/2);
}


function actualVictory(){
  frameRate(5);
  background(random(255), random(255), random(255));
  textAlign(CENTER);
  text("You did it the most, good job. You have truly acheived victory", width/2, height/2);
}

function wowadd(){
  textAlign(RIGHT);
  fill('white')
  text("wow", width/2-120, height/2-120);
}

function dangadd(){
  text("dang", width/2-150, height/2-40)
}

function thatisalotadd(){
  text("that is a lot", width/2-150, height/2+40)
}

function moreplsadd(){
  text("more pls", width/2-120, height/2+120)
}

function goshadd(){
  textAlign(CENTER);
  text("gosh", width/2+120, height/2+120)
}

function holycowadd(){
  textAlign(LEFT)
  text("holy cow", width/2+150, height/2+40)
}

function exclaimadd(){
  text("!!!!", width/2+150, height/2-40)
}

function greatworkadd(){
  text("great work", width/2+150, height/2-40)
}

function veryverygoodadd(){
  text("very very good", width/2+120, height/2-120)
}








function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
