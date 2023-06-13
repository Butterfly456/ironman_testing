var ironman;
var ironmanImg;

function preload(){
    ironmanImg = loadImage("ironman.png");
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
}