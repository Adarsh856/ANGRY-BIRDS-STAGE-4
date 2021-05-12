const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird1, bird2, bird1Img, bird2Img, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    bird1Img = "sprites/bird.png";
    bird2Img = "sprites/bird2.png";
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird1 = new Bird(100,100,bird1Img);
    bird2 = new Bird(100,100,bird2Img);

    sling1 = new Sling(bird1.body,{x:200,y:50});
    sling2 = new Sling(bird2.body,{x:200,y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird1.display();
    bird2.display();
    platform.display();
    sling1.display();
    sling2.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird1.body, {x:mouseX, y:mouseY});
    Matter.Body.setPosition(bird2.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling1.fly();
    sling2.fly(); 
}