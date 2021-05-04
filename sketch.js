var hr; 
var sc; 
var mn;
var hrANGLE , scANGLE , mnANGLE;







function setup() {
  createCanvas(800,400);
 angleMode(DEGREES);

}

function draw() {
  background(0,0,0);  
  translate(200,200);
  rotate(-90)
  
  hr = hour();
  mn = minute();
  sc = second();
  scANGLE = map(sc,0,60,0,360);
  hrANGLE = map(hr%12,0,12,0,360);
  mnANGLE = map(mn,0,60,0,360);
  push()
  rotate(scANGLE)
  stroke("cyan")
  strokeWeight(3)
  line(0,0,100,00);
  pop()
  push()
rotate(mnANGLE)
stroke("orange")
strokeWeight(5)
line(0,0,75,0);
pop()
push()
rotate(hrANGLE)
stroke("pink")
strokeWeight(7)
line(0,0,50,0);
pop()

point(0,0);
strokeWeight(10);
noFill();
stroke("cyan");
arc(0,0,300,300,0,scANGLE);

stroke("orange");
arc(0,0,280,280,0,mnANGLE);




stroke("pink");
arc(0,0,260,260,0,hrANGLE);

}