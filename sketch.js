var sea;
var ship;
var sea_img;
var ship_img;

function preload(){
sea_img = loadImage("sea.png");
ship_img = loadAnimation("ship-1.png", "ship-2.png");
}

function setup(){
  createCanvas(1000,1000);
 sea = createSprite(200, 200);
 sea.addAnimation("sea_img");
 ship = createSprite(200, 200);
 ship.addAnimation("ship_img");
 ship.scale=2.0;
}

function draw() {
  background("blue");
 
}