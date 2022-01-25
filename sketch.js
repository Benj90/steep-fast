function setup() {
createCanvas(800,800);

}

function draw() {
	background(0,0,0);

fill(235,250,200);
	rectMode(CENTER);
rect(width+-400, height+-400, 800, 300);

stroke(255,255,255);

	beginShape();
vertex(46,60);
quadraticVertex(419,119,472,200);
bezierVertex(430,360,150,100,147,350);
endShape(CLOSE);


beginShape();
fill(255,0,0);
   vertex(46, 60);
  quadraticVertex(319, 219, 372, 101);
  bezierVertex(430, 360, 150, 100, 128, 295);
endShape(CLOSE);

beginShape();
fill(75,0,255);
vertex(width/2-200,height-100);
quadraticVertex(419,119,472,200);
bezierVertex(430,360,150,100,147,350);
endShape(CLOSE);


beginShape();
fill(255,75,0);
vertex(width/2-100,height-100);
quadraticVertex(419,119,472,200);
bezierVertex(430,360,150,100,147,350);
endShape(CLOSE);

//front feather
beginShape();
fill(100,200,0);
vertex(width/2,height-100);
quadraticVertex(419,119,472,200);
bezierVertex(430,360,150,100,147,350);
endShape(CLOSE);

//top hat
beginShape();
fill(0,75,255);
   vertex(46, 60);
  quadraticVertex(319, 219, 372, 101);
  bezierVertex(430, 360, 10, 10, 128, 295);
endShape(CLOSE);

//lower beak
	beginShape();
	fill(255,200,0);
vertex(width/2,height/2);
quadraticVertex(419,119,472,200);
bezierVertex(430,360,150,100,147,350);
endShape(CLOSE);

//upper beak
beginShape();
	fill(255,200,0);
vertex(width/2+15,height/2);
quadraticVertex(400,119,472,200);
bezierVertex(430,360,150,100,147,300);
endShape(CLOSE);

//head
	beginShape();
	fill(0,25,75);
vertex(width/4-32,height/2);
quadraticVertex(419,119,472,200);
bezierVertex(430,360,150,100,147,350);
endShape(CLOSE);

//outer eye
beginShape();
fill(255,255,255);
const size = width*.05;
ellipse(250, 300, size, size);
endShape(CLOSE)

//inner eye
fill(0,0,0);
ellipse(250,300,25,25);
}