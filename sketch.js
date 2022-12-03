var bg ,bgimg ;
var boy ,boyimg;
var monster ,monsterimg;

function preload() {
    bgimg =  loadImage("bg.jpg");
    boyimg = loadImage("zeus.png");
    monsterimg = loadImage("monstergrp_2.jpg")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = createSprite( displayWidth/2, displayHeight/3,300 ,40);  
    bg.addImage(bgimg)
    bg.scale = 2.5;
    bg.velocityX = -3;
    boy = createSprite (displayWidth/9, displayHeight-100,20 ,20)
    boy.addImage(boyimg)
    boy.scale = 0.5;
    
}
function draw() {
  background(0);
   
    // if(bg.x<0){
    //     bg.x = 200;
    // }
    createmonster();
    drawSprites();

}
function createmonster(){
 monster = createSprite(random(1000,2500 ),random(500, 900) ,20 ,20)  
 monster.addImage(monsterimg)
 monster.velocityX = -3;
}