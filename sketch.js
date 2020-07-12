const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var particles =[];
var plinkos =[];
var divisions =[];

var divisionHeight=300;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
   rectMode(CENTER);

  
/*   for(var k = 0;k <=width;k = k+80)
   {
       divisions.push(new Divisions(k, height-divisionHeight/2, 10,divisionHeight));
   }
   for(var k = 0;k <=divisions.length; k++)
   {
      divisions[k].display();
   }*/  
 
    
    
   ground = new Ground(240,780,800,10);
particle1 = new Particle(200,200,20);

   
}


function draw(){
    background(255,255,255);
    Engine.update(engine);
   
        if(frameCount%60===0){
          //  console.log(frameCount);
        particles.push(new Particle(random(width/2-10,width/2+10),10,10));
        }      
    //  console.log(particles.length);
    ground.display();
particle1.display();
for(var j = 0;j <=particles.length; j++)
{
console.log("hello");
    particles[j].display();
}  
//drawSprites();
}


