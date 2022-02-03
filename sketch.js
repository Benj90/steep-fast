  function setup()
{
  createCanvas(600, 500);
  background(255);

  stroke(255);
  fill(0,0,0);
ellipse(width/2+50,height/2-45,400,400);

stroke(255);
  fill(255,100,0);
ellipse(width/2+30,height/2-45,400,400);


  const w = width * 0.3;
  const h = height * 0.5;

  stroke(30);
  strokeWeight(width*0.1);
  strokeCap(SQUARE);
  noFill();
  translate(width/2, height/2);
  beginShape();
    vertex(-w-10, 0+10)
    bezierVertex(-w, -h*2, w, h, w+35, 0-100);
  endShape();

  noLoop();

  stroke(50,50,255);
  strokeWeight(width*0.1);
  strokeCap(SQUARE);
  noFill();
  translate(width/12-53, height/4-70);
  beginShape();
    vertex(-w-11, 0+10)
    bezierVertex(-w+10, -h*2, w+15, h, w+65, 0-164);
  endShape();

  noLoop();


 stroke(0,0,0);
  strokeWeight(width*0.1);
  strokeCap(SQUARE);
  noFill();
  translate(width/12-53, height/4-70);
  beginShape();
    vertex(-w-13, 0+10)
    bezierVertex(-w+10, -h*2, w+15, h, w+95, 0-229);
  endShape();

  noLoop();
  
}