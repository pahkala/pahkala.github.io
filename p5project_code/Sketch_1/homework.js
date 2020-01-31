
//items in setup load once
function setup() {
  createCanvas(windowWidth, windowHeight);
  print(windowWidth, windowHeight);


}

//items in draw loop at 60 fps
function draw() { //open curly bracket starts draw function
  background('#e6f9ff');
  //print(mouseY);
  //print(mouseX);
  //place object at middle of screen using 'width/2, height/2'


//triangle line 0
  noStroke();
  fill('#ee98ba');
  triangle(-40, 10, 10, -110, 60,10);
  triangle(60, 10, 110, -110, 160,10);
  triangle(160, 10, 210, -110, 260,10);
  triangle(260, 10, 310, -110, 360,10);
  triangle(360, 10, 410, -110, 460,10);
  triangle(460, 10, 510, -110, 560,10);
  triangle(560, 10, 610, -110, 660,10);
  triangle(660, 10, 710, -110, 760,10);
  triangle(760, 10, 810, -110, 860,10);
  triangle(860, 10, 910, -110, 960,10);
  triangle(960, 10, 1010, -110, 1060,10);
  triangle(1060, 10, 1110, -110, 1160,10);
  triangle(1160, 10, 1210, -110, 1260,10);
  triangle(1260, 10, 1310, -110, 1360,10);
  triangle(1360, 10, 1410, -110, 1460,10);
  triangle(1460, 10, 1510, -110, 1560,10);
  triangle(1560, 10, 1610, -110, 1660,10);
  triangle(1660, 10, 1710, -110, 1760,10);
  triangle(1760, 10, 1810, -110, 1860,10);
  triangle(1860, 10, 1910, -110, 1960,10);

//triangle line 1
  fill('#f085af');
  triangle(-90, 130, -40, 10, 10,130);
  triangle(10, 130, 60, 10, 110,130);
  triangle(110, 130, 160, 10, 210,130);
  triangle(210, 130, 260, 10, 310,130);
  triangle(310, 130, 360, 10, 410,130);
  triangle(410, 130, 460, 10, 510,130);
  triangle(510, 130, 560, 10, 610,130);
  triangle(610, 130, 660, 10, 710,130);
  triangle(710, 130, 760, 10, 810,130);
  triangle(810, 130, 860, 10, 910,130);
  triangle(910, 130, 960, 10, 1010,130);
  triangle(1010, 130, 1060, 10, 1110,130);
  triangle(1110, 130, 1160, 10, 1210,130);
  triangle(1210, 130, 1260, 10, 1310,130);
  triangle(1310, 130, 1360, 10, 1410,130);
  triangle(1410, 130, 1460, 10, 1510,130);
  triangle(1510, 130, 1560, 10, 1610,130);
  triangle(1610, 130, 1660, 10, 1710,130);
  triangle(1710, 130, 1760, 10, 1810,130);
  triangle(1810, 130, 1860, 10, 1910,130);
  triangle(1910, 130, 1960, 10, 2010,130);

//triangle line 2
  fill('#f272a5');
  triangle(-40, 250, 10, 130, 60,250);
  triangle(60, 250, 110, 130, 160,250);
  triangle(160, 250, 210, 130, 260,250);
  triangle(260, 250, 310, 130, 360,250);
  triangle(360, 250, 410, 130, 460,250);
  triangle(460, 250, 510, 130, 560,250);
  triangle(560, 250, 610, 130, 660,250);
  triangle(660, 250, 710, 130, 760,250);
  triangle(760, 250, 810, 130, 860,250);
  triangle(860, 250, 910, 130, 960,250);
  triangle(960, 250, 1010, 130, 1060,250);
  triangle(1060, 250, 1110, 130, 1160,250);
  triangle(1160, 250, 1210, 130, 1260,250);
  triangle(1260, 250, 1310, 130, 1360,250);
  triangle(1360, 250, 1410, 130, 1460,250);
  triangle(1460, 250, 1510, 130, 1560,250);
  triangle(1560, 250, 1610, 130, 1660,250);
  triangle(1660, 250, 1710, 130, 1760,250);
  triangle(1760, 250, 1810, 130, 1860,250);
  triangle(1860, 250, 1910, 130, 1960,250);

//triangle line 3
  fill('#f45f9a');
  triangle(-90, 360, -40, 250, 10,360);
  triangle(10, 360, 60, 250, 110,360);
  triangle(110, 360, 160, 250, 210,360);
  triangle(210, 360, 260, 250, 310,360);
  triangle(310, 360, 360, 250, 410,360);
  triangle(410, 360, 460, 250, 510,360);
  triangle(510, 360, 560, 250, 610,360);
  triangle(610, 360, 660, 250, 710,360);
  triangle(710, 360, 760, 250, 810,360);
  triangle(810, 360, 860, 250, 910,360);
  triangle(910, 360, 960, 250, 1010,360);
  triangle(1010, 360, 1060, 250, 1110,360);
  triangle(1110, 360, 1160, 250, 1210,360);
  triangle(1210, 360, 1260, 250, 1310,360);
  triangle(1310, 360, 1360, 250, 1410,360);
  triangle(1410, 360, 1460, 250, 1510,360);
  triangle(1510, 360, 1560, 250, 1610,360);
  triangle(1610, 360, 1660, 250, 1710,360);
  triangle(1710, 360, 1760, 250, 1810,360);
  triangle(1810, 360, 1860, 250, 1910,360);
  triangle(1910, 360, 1960, 250, 2010,360);

//triangle line 4
  fill('#f64c90');
  triangle(-40, 480, 10, 360, 60,480);
  triangle(60, 480, 110, 360, 160,480);
  triangle(160, 480, 210, 360, 260,480);
  triangle(260, 480, 310, 360, 360,480);
  triangle(360, 480, 410, 360, 460,480);
  triangle(460, 480, 510, 360, 560,480);
  triangle(560, 480, 610, 360, 660,480);
  triangle(660, 480, 710, 360, 760,480);
  triangle(760, 480, 810, 360, 860,480);
  triangle(860, 480, 910, 360, 960,480);
  triangle(960, 480, 1010, 360, 1060,480);
  triangle(1060, 480, 1110, 360, 1160,480);
  triangle(1160, 480, 1210, 360, 1260,480);
  triangle(1260, 480, 1310, 360, 1360,480);
  triangle(1360, 480, 1410, 360, 1460,480);
  triangle(1460, 480, 1510, 360, 1560,480);
  triangle(1560, 480, 1610, 360, 1660,480);
  triangle(1660, 480, 1710, 360, 1760,480);
  triangle(1760, 480, 1810, 360, 1860,480);
  triangle(1860, 480, 1910, 360, 1960,480);

//triangle line 5
  fill('#f83985');
  triangle(-90, 600, -40, 480, 10,600);
  triangle(10, 600, 60, 480, 110,600);
  triangle(110, 600, 160, 480, 210,600);
  triangle(210, 600, 260, 480, 310,600);
  triangle(310, 600, 360, 480, 410,600);
  triangle(410, 600, 460, 480, 510,600);
  triangle(510, 600, 560, 480, 610,600);
  triangle(610, 600, 660, 480, 710,600);
  triangle(710, 600, 760, 480, 810,600);
  triangle(810, 600, 860, 480, 910,600);
  triangle(910, 600, 960, 480, 1010,600);
  triangle(1010, 600, 1060, 480, 1110,600);
  triangle(1110, 600, 1160, 480, 1210,600);
  triangle(1210, 600, 1260, 480, 1310,600);
  triangle(1310, 600, 1360, 480, 1410,600);
  triangle(1410, 600, 1460, 480, 1510,600);
  triangle(1510, 600, 1560, 480, 1610,600);
  triangle(1610, 600, 1660, 480, 1710,600);
  triangle(1710, 600, 1760, 480, 1810,600);
  triangle(1810, 600, 1860, 480, 1910,600);
  triangle(1910, 600, 1960, 480, 2010,600);

//triangle line 6
  fill('#fa267b');
  triangle(-40, 720, 10, 600, 60,720);
  triangle(60, 720, 110, 600, 160,720);
  triangle(160, 720, 210, 600, 260,720);
  triangle(260, 720, 310, 600, 360,720);
  triangle(360, 720, 410, 600, 460,720);
  triangle(460, 720, 510, 600, 560,720);
  triangle(560, 720, 610, 600, 660,720);
  triangle(660, 720, 710, 600, 760,720);
  triangle(760, 720, 810, 600, 860,720);
  triangle(860, 720, 910, 600, 960,720);
  triangle(960, 720, 1010, 600, 1060,720);
  triangle(1060, 720, 1110, 600, 1160,720);
  triangle(1160, 720, 1210, 600, 1260,720);
  triangle(1260, 720, 1310, 600, 1360,720);
  triangle(1360, 720, 1410, 600, 1460,720);
  triangle(1460, 720, 1510, 600, 1560,720);
  triangle(1560, 720, 1610, 600, 1660,720);
  triangle(1660, 720, 1710, 600, 1760,720);
  triangle(1760, 720, 1810, 600, 1860,720);
  triangle(1860, 720, 1910, 600, 1960,720);
  triangle(1960, 720, 2010, 600, 2060,720);

//triangle line 7
  fill('#fc1370');
  triangle(-90, 840, -40, 720, 10,840);
  triangle(10, 840, 60, 720, 110,840);
  triangle(110, 840, 160, 720, 210,840);
  triangle(210, 840, 260, 720, 310,840);
  triangle(310, 840, 360, 720, 410,840);
  triangle(410, 840, 460, 720, 510,840);
  triangle(510, 840, 560, 720, 610,840);
  triangle(610, 840, 660, 720, 710,840);
  triangle(710, 840, 760, 720, 810,840);
  triangle(810, 840, 860, 720, 910,840);
  triangle(910, 840, 960, 720, 1010,840);
  triangle(1010, 840, 1060, 720, 1110,840);
  triangle(1110, 840, 1160, 720, 1210,840);
  triangle(1210, 840, 1260, 720, 1310,840);
  triangle(1310, 840, 1360, 720, 1410,840);
  triangle(1410, 840, 1460, 720, 1510,840);
  triangle(1510, 840, 1560, 720, 1610, 840);
  triangle(1610, 840, 1660, 720, 1710, 840);
  triangle(1710, 840, 1760, 720, 1810, 840);
  triangle(1810, 840, 1860, 720, 1910, 840);
  triangle(1910, 840, 1960, 720, 2010, 840);


//triangle line 8
  fill('#ff0066');
  triangle(-40, 960, 10, 840, 60,960);
  triangle(60, 960, 110, 840, 160,960);
  triangle(160, 960, 210, 840, 260,960);
  triangle(260, 960, 310, 840, 360,960);
  triangle(360, 960, 410, 840, 460,960);
  triangle(460, 960, 510, 840, 560,960);
  triangle(560, 960, 610, 840, 660,960);
  triangle(660, 960, 710, 840, 760,960);
  triangle(760, 960, 810, 840, 860,960);
  triangle(860, 960, 910, 840, 960,960);
  triangle(960, 960, 1010, 840, 1060,960);
  triangle(1060, 960, 1110, 840, 1160,960);
  triangle(1160, 960, 1210, 840, 1260,960);
  triangle(1260, 960, 1310, 840, 1360,960);
  triangle(1360, 960, 1410, 840, 1460,960);
  triangle(1460, 960, 1510, 840, 1560,960);
  triangle(1560, 960, 1610, 840, 1660, 960);
  triangle(1660, 960, 1710, 840, 1760, 960);
  triangle(1760, 960, 1810, 840, 1860, 960);
  triangle(1860, 960, 1910, 840, 1960, 960);
  triangle(1960, 960, 2010, 840, 2060, 960);


//overlay
  strokeWeight(30);
  stroke('black');
  noFill();
  circle(width/2, height/2, 500);

  rectMode(CENTER);
  rect(width/2, height/2, 500, 500);

  strokeWeight(4);
  stroke('white')
  circle(width/2, height/2, 500);




  print(mouseIsPressed);

















}

function keyTyped(){
    if(key === 's'){
      save("homeworkSketch.png")

    }
  }
