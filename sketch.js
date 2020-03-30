const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var steve;
var steveFace;

//var bird2,bird3;


function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    //GetBackgroundImg();
    steveFace=loadImage("Steve with gun.png");
}

function setup(){
    var canvas = createCanvas(displayWidth-30,displayHeight-30);
    steve= createSprite(displayWidth/2,displayHeight/2,70,70);
     steve.addImage(steveFace);
     steve.scale=0.15;
    
}

function draw(){
    background("blue");   
     steve.display();
}


function spawnZombie(){
   if(frameCount%60==0){
     var gombi=createSprite(200,300);
     var rand=Math.round(random(1,2))
   }

}

 
