
var wall,thichness;
var bullet,speed,weight;


function setup() {
  createCanvas(1500,800);

  thickness = random(22,85)

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(350, 350, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);

  wall = createSprite (1400,350,thickness,height/2);
  wall.shapeColor = color(255);
}

function draw() {
  background(0);  
  drawSprites();
  
  

  if (hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 + weight * speed * speed/(thickness * thickness * thickness);
    if(damage > 10) {
      wall.shapeColor = color(255,0,0);
    }
    if(damage > 10) {
      wall.shapeColor = color(0,255,0);
    }
  }
}

function hasCollided(ubullet,uwall) {
  bulletRightEdge = ubullet.x + ubullet.width;
  wallLeftEdge = uwall.x;
  if (bulletRightEdge >= wallLeftEdge) {
   return true;
  }
  return false;
}








  
