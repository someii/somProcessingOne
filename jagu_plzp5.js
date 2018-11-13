function setup(){
createCanvas(720, 900);


background(162,213,255);

rectMode(CENTER);
ellipseMode(CENTER);

noStroke();

//mountine
fill(170, 191, 213);
triangle(0, 900, 300, 900, 0, 400);

fill(121, 150, 154);
triangle(-80, 900, 300, 900, 170, 400 );

fill(54, 149, 163);
triangle(30, 900, 400, 900,320, 440 );

fill(170, 191, 213);
triangle(180, 900, 560, 900, 440, 400);

fill(54, 149, 163);
triangle(500, 900, 800, 900, 660, 440 );

fill(121, 150, 154);
triangle(400, 900, 750, 900, 560, 450 );

//face
fill(255, 224, 140);
ellipse(360, 300, 500, 500);
  

//body
fill(0);
rect(360, 901, 420, 600, 300, 1000, 420, 1000);

//pocket
fill(213);
rect(460, 718, 84, 18);

stroke(213,213,213);
line(360,690,360,900);
  
  
//neck
noStroke();
fill(255);
triangle(400, 600, 320, 600, 360,700 );


}

function smile(){
  fill(255, 224, 140);
ellipse(360, 300, 500, 500);
//eyes
fill(255);
ellipse(320, 290, 50, 50);
ellipse(400, 290, 50, 50);

//pupils
fill(0);
ellipse(320, 290, 30, 30);
ellipse(400, 290, 30, 30);

//mouth
fill(255,0,0);
arc(360, 350, 80, 50, 0, 3.14);
line(60, 125, 140, 125);

}

function boring(){
  fill(255, 224, 140);
ellipse(360, 300, 500, 500);

fill(255);

//draw the eyes
ellipse(320, 290, 30, 20);
ellipse(400, 290, 30, 20);

//black
fill(0);

//draw the pupils
ellipse(320, 290, 30, 5);
ellipse(400, 290, 30, 5);


fill(255,0,0);

//draw the mouth

rect(360, 350, 30, 10, 5, 5, 5, 5);

}

function fool(){
  fill(255, 224, 140);
ellipse(360, 300, 500, 500);

//white
fill(255);

//draw the eyes
ellipse(320, 290, 50, 50);
ellipse(400, 290, 50, 50);

//black
fill(0);

//draw the pupils
ellipse(320, 275, 15, 15);
ellipse(410, 300, 15, 15);

//red
fill(255, 0, 0);

//draw the mouth
arc(360, 350, 50, 80, 0, 3.14);
line(60, 125, 140, 125);
}

function angry(){
  fill(255, 224, 140);
ellipse(360, 300, 500, 500);
//white
fill(255);

//draw the eyes
ellipse(320, 290, 30, 30);
ellipse(400, 290, 30, 30);

//black
fill(0);

rect(320, 290, 25, 2);
rect(400, 290, 25, 2);

//red
fill(255, 0, 0);

//draw the mouth
rect(360, 350, 30, 10, 5, 5, 5, 5);
}

function sad(){
  fill(255, 224, 140);
ellipse(360, 300, 500, 500);
//white
fill(255);

//draw the eyes

//black
fill(0);

rect(320, 280, 60, 2);
rect(400, 280, 60, 2);

fill(54, 255, 255);
rect(320, 310, 30, 60);
rect(400, 310, 30, 60);

//red
fill(255, 0, 0);

//draw the mouth
triangle(360, 480, 380, 490, 340, 490);
}

function shock(){
  fill(255, 224, 140);
ellipse(360, 300, 500, 500);
//white
fill(255);

//draw the eyes
ellipse(320,290, 30, 30);
ellipse(400, 290, 30, 30);

//black
fill(0);

//draw the pupils
ellipse(320, 290, 5, 5);
ellipse(400, 290, 5, 5);

//red
fill(255, 0, 0);

//draw the mouth
rect(360, 350, 20, 20);

}

function face(){
  //face
fill(255, 224, 140);
ellipse(360, 300, 500, 500);
  
}

function draw(){


  //float r = random(1,6);
  if (key=='a') fool();
  else if (key=='s') boring();
  else if (key=='d') angry();
  else if (key=='f') shock();
  else if (key=='g') sad();
  else if (key=='h') smile();
  else if (key=='z') face();
}

/*
function touchStarted(){
rectMode(CENTER);
ellipseMode(CENTER);


  float emoticon = random(1,6);
  if (emoticon==1) fool();
  else if (emoticon==2) boring();
  else if (emoticon==3) angry();
  else if (emoticon==4) shock();
  else if (emoticon==5) sad();

}
*/
