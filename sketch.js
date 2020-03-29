const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bird, slingshot;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
    world = engine.world;

    ground=new Ground(400,600,800,5);
    ground1=new Ground(630,300,250,10);
    box=new Box(500,585,30,30);
    box1=new Box(530,585,30,30);
    box2=new Box(560,585,30,30);
    box3=new Box(590,585,30,30);
    box4=new Box(620,585,30,30);
    box5=new Box(650,585,30,30);
    box6=new Box(680,585,30,30);
    box7=new Box(710,585,30,30);
    box8=new Box(740,585,30,30);
    box9=new Box(515,555,30,30);
    box10=new Box(545,555,30,30);
    box11=new Box(575,555,30,30);
    box12=new Box(605,555,30,30);
    box13=new Box(635,555,30,30);
    box14=new Box(665,555,30,30);
    box15=new Box(695,555,30,30);
    box16=new Box(725,555,30,30);
    box17=new Box(530,525,30,30);
    box18=new Box(560,525,30,30);
    box19=new Box(590,525,30,30);
    box20=new Box(620,525,30,30);
    box21=new Box(650,525,30,30);
    box22=new Box(680,525,30,30);
    box23=new Box(710,525,30,30);
    box24=new Box(545,495,30,30);
    box25=new Box(575,495,30,30);
    box26=new Box(605,495,30,30);
    box27=new Box(635,495,30,30);
    box28=new Box(665,495,30,30);
    box29=new Box(695,495,30,30);
    box30=new Box(560,465,30,30);
    box31=new Box(590,465,30,30);
    box32=new Box(620,465,30,30);
    box33=new Box(650,465,30,30);
    box34=new Box(680,465,30,30);
    
    box35=new Box(550,280,30,30);
    box36=new Box(580,280,30,30);
    box37=new Box(610,280,30,30);
    box38=new Box(640,280,30,30);
    box39=new Box(670,280,30,30);
    box40=new Box(700,280,30,30);
    box41=new Box(565,250,30,30);
    box42=new Box(595,250,30,30);
    box43=new Box(625,250,30,30);
    box44=new Box(655,250,30,30);
    box45=new Box(685,250,30,30);
    box46=new Box(580,220,30,30);
    box47=new Box(610,220,30,30);
    box48=new Box(640,220,30,30);
    box49=new Box(670,220,30,30);
    box50=new Box(595,190,30,30);
    box51=new Box(625,190,30,30);
    box52=new Box(655,190,30,30);
    box53=new Box(610,160,30,30);
    box54=new Box(640,160,30,30);
    box55=new Box(625,130,30,30);

    ball = new Ball(150,400);
    slingshot = new SlingShot(ball.body,{x:150, y:400});
}

function draw() {
  background(0); 
  Engine.update(engine); 
  ground.display();
  ground1.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();
  box41.display();
  box42.display();
  box43.display();
  box44.display();
  box45.display();
  box46.display();
  box47.display();
  box48.display();
  box49.display();
  box50.display();
  box51.display();
  box52.display();
  box53.display();
  box54.display();
  box55.display();
  ball.display();
  slingshot.display();

  drawSprites();
}

function mouseDragged(){
  //if (gameState!=="launched"){
     Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
//  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      ball.trajectory=[];
      Matter.Body.setPosition(ball.body,{x:150,y:400});
      slingshot.attach(ball.body);
  }
}