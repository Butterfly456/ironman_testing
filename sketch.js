var ironman;
var ironmanImg;
var fireball,fireballImg;


function preload(){
    ironmanImg = loadImage("ironman.png");
    fireballImg = loadImage("fireball.png");

}

function setup() {
    //creating all the sprites
    ironman = createSprite(640,750,10,10);
    ironman.addImage(ironmanImg);
    ironman.scale = 0.2;
}

function draw() {
    if(keyDown("right_arrow")){
        ironman.x += 5;
    }
    if(keyDown("up_arrow")){
        ironman.y -= 5;
    }
    if(keyDown("down_arrow")){
        ironman.y += 5;
    }
    if(keyDown("left_arrow")){
        ironman.x -= 5;
    }

    fireball = createSprite(ironman.x, ironman.y, 10,10);

    if (keyDown("a")) {
        fireball.addImage(fireballImg);
        fireball.scale = 0.1;
        fireball.velocityX = -6; 
    }
    if (keyDown("w")) {
        fireball.addImage(fireballImg);
        fireball.scale = 0.1;
        fireball.velocityY = -6;  
    }
    if (keyDown("s")) {
        fireball.addImage(fireballImg);
        fireball.scale = 0.1;
        fireball.velocityX = 6;  
    }
    if (keyDown("z")) {
        fireball.addImage(fireballImg);
        fireball.scale = 0.1;
        fireball.velocityY = 6;
    }
}