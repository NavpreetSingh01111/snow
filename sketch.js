var bg,snow1;
function preload(){
bg = loadImage("snow2.jpg")

}

function setup() {
  createCanvas(800,400);
 
snow1 = new snow(100,200,50,50)

}

function draw() {
  background(bg);  
  snow1.display();
 drawSprites();
}