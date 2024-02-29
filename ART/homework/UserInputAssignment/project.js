let canvas;

let aboxX;
let aboxY;
let varFootprint = 96000

let coffeeButton;
let coffeePic;
let coffee;
let coffeeTransition = false;

let meatButton;
let meatPic;
let food;
let meatTransition = false;

let payButton;
let payPic;
let pay;
let payTransition = false;

//3 option spacing
let aX;
let aY;
let bX;
let bY;
let cX;
let cY;

//2option spacing
let oneX;
let oneY;
let twoX;
let twoY;

let deBaVar = 255;
let decreaseSwitch = false;
let increaseSwitch = false;

let loseText=false;
let winText=true;

let noteMeat=false;
let noteCoffee=false;
let notePay=true;

let returnAction=false;






function preload(){
  coffee = loadImage('images/coffee.png');
  food = loadImage('images/food.png');
  pay = loadImage('images/money.png');
  steak = loadImage('images/meat.png');
  veggie = loadImage('images/vegetables.png');
  mug = loadImage('images/mugCoffee.png');
  cup = loadImage('images/dispCoffee.png');
  tote = loadImage('images/tote.png');
  plastic = loadImage('images/plastic.png');
  recycle = loadImage('images/Recycle.png');
}

function setup() {
  // put setup code here
  aX = windowWidth*0.2;
  aY = windowHeight*0.25;
  bX = windowWidth*0.45;
  bY = windowHeight*0.25;
  cX = windowWidth*0.7;
  cY = windowHeight*0.25;
  aboxX = windowWidth*.5;
  aboxY = 60;
  oneX = windowWidth*.3;
  oneY = windowHeight*.33;
  twoX = windowWidth*.6;
  twoY = windowHeight*.33;


  background(255);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  textAlign(CENTER);
  textSize(25);
  stroke(0);
  fill(25,250,225);

  text('The average household produces 48 metric tons of CO2/year (96000 lbs/year)', aboxX, aboxY-25);

  //DOM ELEMENTS
  coffeeButton = createButton("at the coffee shop.");
  coffeeButton.style('z-index', '1');
  coffeeButton.addClass("button1");
  coffeeButton.position(aX, aY);
  coffeeButton.mousePressed(coffeeFunction);
  image(coffee, aX-50, aY+50, 250, 275);

  meatButton = createButton("At the grocery store.")
  meatButton.style('z-index', '1');
  meatButton.class("button1");
  meatButton.position(bX, bY);
  meatButton.mousePressed(meatFunction);
  image(food, bX-50, bY+50, 250, 275);

  payButton = createButton("During your commute.")
  payButton.style('z-index', '1');
  payButton.class("button1");
  payButton.position(cX, cY);
  payButton.mousePressed(payFunction);
  image(pay, cX-50, cY+50, 250, 275);






}

function draw() {
  text('Reduce your carbon footprint: '+  varFootprint  + ' lbs/year', aboxX, aboxY);
print(varFootprint)
print(deBaVar)

  if (deBaVar<=75){
    loseText = true;
  }

if (deBaVar==435&&noteCoffee==true){
  background("green")
  removeElements();
  aChoicebutton.hide();
  bChoicebutton.hide();
  image(recycle, bX, bY-20, 150, 150);
  text('Victory, You have reduced your carbon footprint!', windowWidth/2, windowHeight/2)
}
if (deBaVar==435&&noteMeat==true){
  background("green")
  removeElements();
  cChoicebutton.hide();
  dChoicebutton.hide();
  image(recycle, bX, bY-20, 150, 150);
  text('Victory, You have reduced your carbon footprint enough!', windowWidth/2, windowHeight/2)
}
if (deBaVar==435&&notePay==true){
  background("green")
  removeElements();
  eChoicebutton.hide();
  fChoicebutton.hide();
  image(recycle, bX, bY-20, 150, 150);
  text('Victory, You have reduced your carbon footprint!', windowWidth/2, windowHeight/2)
}



  if (loseText == true && noteCoffee == true){

      aChoicebutton.hide();
      bChoicebutton.hide();
      background(255, 0, 0);
      removeElements();

    fill('black');
    text('The enviroment is in shambles as a direct result of your waste.', aboxX, aboxY+50);
    text('GAME OVER', aboxX, aboxY+100)



  }
    if (loseText == true && noteMeat == true){

        cChoicebutton.hide();
        dChoicebutton.hide();
        background(255, 0, 0);
removeElements();

      fill('black');
      text('The enviroment is in shambles as a direct result of your waste.', aboxX, aboxY+50);
      text('GAME OVER', aboxX, aboxY+100)

    }

      if (loseText == true && notePay == true){

            eChoicebutton.hide();
            fChoicebutton.hide();
            background(255, 0, 0);
removeElements();

        fill('black');
        text('The enviroment is in shambles as a direct result of your waste.', aboxX, aboxY+50);
        text('GAME OVER', aboxX, aboxY+100)

      }



}

function coffeeFunction(){
  noteCoffee=true;
  noteMeat=false;
  notePay=false;
  coffeeButton.hide();
  meatButton.hide();
  payButton.hide();
  background(255, 255, deBaVar);
    aChoicebutton = createButton("Reusable Cup")
    aChoicebutton.style('z-index', '2');
    aChoicebutton.class('button3');
    aChoicebutton.position(oneX, oneY);
    aChoicebutton.mousePressed(decreaseSwitchFunction)
    image(mug, oneX, oneY+60, 200, 200);
      bChoicebutton = createButton("Disposable Cup")
      bChoicebutton.style('z-index', '2');
      bChoicebutton.class('button2');
      bChoicebutton.position(twoX, twoY);
      bChoicebutton.mousePressed(increaseSwitchFunction)
      image(cup, twoX, twoY+60, 200, 200);

}

function meatFunction(){
    noteMeat=true;
    notePay=false;
    noteCoffee=false;

    coffeeButton.hide();
    meatButton.hide();
    payButton.hide();
    background(255, 255, deBaVar);
      cChoicebutton = createButton("Fruits & Vegetables")
      cChoicebutton.style('z-index', '2');
      cChoicebutton.class('button3');
      cChoicebutton.position(oneX, oneY);
      cChoicebutton.mousePressed(decreaseSwitchFunction)
      image(veggie, oneX, oneY+60, 200, 200);
        dChoicebutton = createButton("Red Meat")
        dChoicebutton.style('z-index', '2');
        dChoicebutton.class('button2');
        dChoicebutton.position(twoX, twoY);
        dChoicebutton.mousePressed(increaseSwitchFunction)
          image(steak, twoX, twoY+60, 200, 200);

}

function payFunction(){
  notePay=true;
  noteCoffee=false;
  noteMeat=false;

    coffeeButton.hide();
    meatButton.hide();
    payButton.hide();
    background(255, 255, deBaVar);
      eChoicebutton = createButton("Reusable Bag")
      eChoicebutton.style('z-index', '2');
      eChoicebutton.class('button3');
      eChoicebutton.position(oneX, oneY);
      eChoicebutton.mousePressed(decreaseSwitchFunction)
      image(tote, oneX, oneY+60, 200, 200);
        fChoicebutton = createButton("Disposable Bag")
        fChoicebutton.style('z-index', '2');
        fChoicebutton.class('button2');
        fChoicebutton.position(twoX, twoY);
        fChoicebutton.mousePressed(increaseSwitchFunction)
          image(plastic, twoX, twoY+60, 200, 200);

}

function decreaseSwitchFunction(){
       let decreaseSwitch = true;

       if (decreaseSwitch==true && noteCoffee==true){
         varFootprint=varFootprint-100
         deBaVar=deBaVar+60
         background(255, 255, deBaVar);
         text('Choosing a reusable coffee cup every time can save you hundreds of pounds of CO2 output per year!', aboxX, aboxY+30)
         returnButton = createButton('Return')
         returnButton.style('z-index', '2');
         returnButton.class('button1')
         returnButton.position(bX, bY-20);
         returnButton.mousePressed(returnFunction)


       }
       if (decreaseSwitch==true && noteMeat==true){
         varFootprint=varFootprint-100
         deBaVar=deBaVar+60
         background(255, 255, deBaVar);
         text('Choosing alternatives to red meat greatly reduces your carbon footprint!', aboxX, aboxY+30)
         returnButton = createButton('Return')
         returnButton.style('z-index', '2');
         returnButton.class('button1')
         returnButton.position(bX, bY-20);
         returnButton.mousePressed(returnFunction)


       }
       if (decreaseSwitch==true && notePay==true){
         varFootprint=varFootprint-100
         deBaVar=deBaVar+60
         background(255, 255, deBaVar);
         text('Reusable bags create a lot less waste than disposable bags!', aboxX, aboxY+30)
         returnButton = createButton('Return')
         returnButton.style('z-index', '2');
         returnButton.class('button1')
         returnButton.position(bX, bY-20);
         returnButton.mousePressed(returnFunction)


       }




}

function increaseSwitchFunction(){
      let increaseSwitch = true;


      if (increaseSwitch==true && noteCoffee==true){
        varFootprint=varFootprint+100
        deBaVar=deBaVar-60
        background(255, 255, deBaVar)
        text('Using disposable coffee cups increases your carbon footprint!', aboxX, aboxY+30)
        returnButton = createButton('Return')
        returnButton.style('z-index', '2');
        returnButton.class('button1')
        returnButton.position(bX, bY-20);
        returnButton.mousePressed(returnFunction)


      }
      if (increaseSwitch==true && noteMeat==true){
        varFootprint=varFootprint+100
        deBaVar=deBaVar-60
        background(255, 255, deBaVar)
        text('Red meat is very enviromentally costly to produce', aboxX, aboxY+30)
        returnButton = createButton('Return')
        returnButton.style('z-index', '2');
        returnButton.class('button1')
        returnButton.position(bX, bY-20);
        returnButton.mousePressed(returnFunction)


      }
      if (increaseSwitch==true && notePay==true){
        varFootprint=varFootprint+100
        deBaVar=deBaVar-60
        background(255, 255, deBaVar)
        text('Disposable bags are wasteful!', aboxX, aboxY+30)
        returnButton = createButton('Return')
        returnButton.style('z-index', '2');
        returnButton.class('button1')
        returnButton.position(bX, bY-20);
        returnButton.mousePressed(returnFunction)

      }


}

function returnFunction(){
  returnAction=true
if (returnAction==true && noteCoffee==true){
  returnButton.hide();
  aChoicebutton.hide();
  bChoicebutton.hide();
  meatButton.show();
  payButton.show();
  coffeeButton.show();

    image(food, bX-50, bY+50, 250, 275);
      image(pay, cX-50, cY+50, 250, 275);
        image(coffee, aX-50, aY+50, 250, 275);
}

if (returnAction==true && noteMeat==true){
  returnButton.hide();
  cChoicebutton.hide();
  dChoicebutton.hide();
  meatButton.show();
  payButton.show();
  coffeeButton.show();

    image(food, bX-50, bY+50, 250, 275);
      image(pay, cX-50, cY+50, 250, 275);
        image(coffee, aX-50, aY+50, 250, 275);
}

if (returnAction==true && notePay==true){
  returnButton.hide();
  eChoicebutton.hide();
  fChoicebutton.hide();
  meatButton.show();
  payButton.show();
  coffeeButton.show();

    image(food, bX-50, bY+50, 250, 275);
      image(pay, cX-50, cY+50, 250, 275);
        image(coffee, aX-50, aY+50, 250, 275);
}

  }










function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
