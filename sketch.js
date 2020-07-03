const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground

var plinkos=[];
var particles=[];
var divisions=[];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 // createSprite(400, 200, 50, 50);


  ground =new Ground(240,790,480,20);


}

function draw() {
  background(0);  
  Engine.update(engine);
  //drawSprites();
var divisionHeight=300;

for (var k = 0; k <= 480; k=k+80) {
  divisions.push(new Division(k,800-divisionHeight/2,10,divisionHeight));
}

for (var j = 40;j <= 480;j = j+50 ) {
  plinkos.push(new Plinko(j,75,10));
}

for (var j = 15 ; j <= 470 ; j =j+50 ){
  plinkos.push(new Plinko(j,175,10));
} 

if (frameCount%90===0){
  particles.push(new Particle(random(230,250),50,10));
}


for (var k = 0 ; k < divisions.length ; k++ ) {
  divisions[k].display();
}


for (var j = 0;j<plinkos.length;j++ ) {
  plinkos[j].display();
}


for (var j = 0;j<particles.length;j++ ) {
  particles[j].display();
}



  ground.display();
}