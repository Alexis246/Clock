var seconds, minutes, hours;
var secondsAngle, minutesAngle, hoursAngle;
function setup() {
  createCanvas(600,600);
}

function draw() {
  background("orange");  
  drawSprites();

  angleMode(DEGREES);

  strokeWeight(10);
  translate(300,300);
  rotate(-90);

  seconds = second();
  secondsAngle = map(seconds,0,60,0,360);
  stroke("red");
  fill("red");
  arc(0,0,400,400,0,secondsAngle,PIE);
  noFill();
  minutes = minute();
  minutesAngle = map(minutes,0,60,0,360);
  stroke("yellow");
  arc(0,0,430,430,0,minutesAngle,OPEN);
  hours = hour();
  hoursAngle = map(hours,0,24,0,360);
  stroke("blue");
  arc(0,0,460,460,0,hoursAngle,OPEN);

  rotate(minutesAngle);
  stroke("yellow");
  line(0,0,150,0)
  rotate(hoursAngle-minutesAngle);
  stroke("blue");
  line(0,0,75,0);
}