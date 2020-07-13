const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var particles =[];
var plinkos =[];
var divisions =[];

var divisionHeight=200;

function setup(){
    var canvas = createCanvas(580,800);
    engine = Engine.create();
    world = engine.world;
   rectMode(CENTER);

   ground = new Ground(240,780,800,10);

 for(var k = 10;k <=width;k = k+70)
   {
       divisions.push(new Divisions(k,673, 10,divisionHeight));
   }
 
   for (var a = 40; a<=width;a=a+50){
    plinkos.push(new Plinko(a,75,15));
      }  
    for (var b = 20; b<=width-10;b=b+50){
      plinkos.push(new Plinko(b,125,15));
      }  
    for (var c = 40; c<=width;c=c+50){
        plinkos.push(new Plinko(c,175,15));
      }  
      for (var d = 20; d<=width;d=d+50){
        plinkos.push(new Plinko(d,225,15));
      }
      for (var e = 40; e<=width;e=e+50){
        plinkos.push(new Plinko(e,275,15));
      }
      for (var f = 20; f<=width;f=f+50){
        plinkos.push(new Plinko(f,325,15));
      }
              
}


function draw(){
    background(0);
    Engine.update(engine);
   
     
    ground.display();

if(frameCount%55===0){  
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); 
   } 
   
  for (var j=0;j<particles.length; j=j+1) {
    particles[j].display();
  } 


for (var e=0;e<plinkos.length; e=e+1) {
    plinkos[e].display();
  } 
  for (var d=0;d<divisions.length; d=d+1) {
    divisions[d].display();
  } 

}