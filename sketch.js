const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
const Constraint = Matter.Constraint;
var world,engine;

var canvasmouse, mConstraint;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;

function setup() {
  createCanvas(windowWidth/2,windowHeight/2);
  engine = Engine.create();
  world = engine.world;

  canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  
  options={
    mouse:canvasmouse
  }

  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

  pendulum1 = new Pendulum(windowWidth/4+120, 340, "white");
  pendulum2 = new Pendulum(windowWidth/4, 340, "white");
  pendulum3 = new Pendulum(windowWidth/4-60, 340, "white");
  pendulum4 = new Pendulum(windowWidth/4-120, 340, "white");
  pendulum5 = new Pendulum(windowWidth/4+60, 340, "white");

  sling1 = new Sling({x:windowWidth/4+120,y:0},pendulum1);
  sling2 = new Sling({x:windowWidth/4,y:0},pendulum2);
  sling3 = new Sling({x:windowWidth/4-60,y:0},pendulum3);
  sling4 = new Sling({x:windowWidth/4-120,y:0},pendulum4);
  sling5 = new Sling({x:windowWidth/4+60,y:0},pendulum5);

}

function draw() {
  background("black");

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  Engine.update(engine);

  mouseDragged();

}

function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body,{x:mouseX, y:mouseY});
}