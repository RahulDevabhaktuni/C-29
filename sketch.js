const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16
var ground, stand
function preload(){

}
function setup(){
var canvas = createCanvas(1600, 1200)
engine = Engine.create();
world = engine.world;

    ground = new Ground(800, 20, 1200, 40);
    stand = new Ground(600, 700, 700, 20);
    block1 = new Block(600, 690, 100, 100);
    block2 = new Block(700, 690, 100, 100);
    block3 = new Block(800, 690, 100, 100);
    block4 = new Block(900, 690, 100, 100);
    block5 = new Block(1000, 690, 100, 100);
    block6 = new Block(1100, 690, 100, 100);
    block7 = new Block(1200, 690, 100, 100);
    block8 = new Block(700, 590, 100, 100);
    block9 = new Block(800, 590, 100, 100);
    block10 = new Block(900, 590, 100, 100);
    block11 = new Block(1000, 590, 100, 100);
    block12 = new Block(1100, 590, 100, 100);
    block13 = new Block(800, 490, 100, 100);
    block14 = new Block(900, 490, 100, 100);
    block15 = new Block(1000, 490, 100, 100);
    block16 = new Block(900, 390, 100, 100);
 
}
function draw(){
    Engine.update(engine);
ground.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
}