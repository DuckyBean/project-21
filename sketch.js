var bullet, wall, thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);


  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);


  bullet = createSprite(50,200,75,25);
  bullet.shapeColor = "white";
  

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);

  bullet.velocityX = speed;

}

function draw() {
  background("black");  
  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;
    var dmg = (0.5 * weight * speed * speed)/ (thickness*thickness*thickness) ;
    if(dmg > 10) {
      bullet.shapeColor = rgb(0,255,0);
    }

    if(dmg < 10) {
      bullet.shapeColor = "red";
    }
  }
  
  console.log(dmg);

  drawSprites();
}