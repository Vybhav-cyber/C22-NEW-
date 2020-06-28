var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var preloadflag = 0, setupflag = 0, keypressedflag = 0;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	console.log("Entered preload");
	preloadflag = 1;
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	console.log("Left preload");
}

function setup() {
	console.log("Entered setup");
	createCanvas(700, 700);
	rectMode(CENTER);
	setupflag = 1;

	packageSprite=createSprite(width/2, 80, 10,10); 
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
//	packageSprite.velocityY = 0;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  console.log("Exit setup()");
}


function draw() {
  rectMode(CENTER);
  if (preloadflag === 0) preload();
  if (setupflag === 0) setup();
  background(0);
//  packageSprite.x= packageBody.position.x 
packageSprite.y= packageBody.position.y 
packageSprite.velocityX= 0;
packageSprite.velocityY= 0;	
  if (keypressedflag === 0) keyPressed();  
  drawSprites();
}

function keyPressed() {
 
	console.log("Entered keyPressed()");
		
	if (keyCode === DOWN_ARROW && keypressedflag != 2) {

			keypressedflag = keypressedflag + 1;
		Matter.Body.setStatic(packageBody,false);
		Matter.Body.setInertia(packageBody,25);
		Matter.Body.setMass(packageBody,10);

	//	Matter.Body.setVelocity(packageBody, 5)
    	console.log("Exit kepPressed()")
	
		
	}
}



