var rows, cols;
var scl = 25;
var ang = 0;
var terrain = [];
var w = 3000;
var h = 900;
var flying = 0;
let font;

function preload(){
  // font = loadFont('HARNGTON.ttf');
  font = loadFont('mirror 82_v2.otf');
}

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);  
  background(0);
  cols = w / scl;
  rows = h / scl;
  for(var x = 0; x < cols; x++){
    terrain[x] = [];
    for(var y = 0; y < rows; y++){
      terrain[x][y] = 0;
    }
  }  
}

function draw(){

  let time = frameCount;
  textAlign(CENTER);
  fill(145, 206, 235);
  textFont(font);
  textSize(30);
  if(time <= 480){
  	background(0);
    text('Hi, XYZ', 0, -100);
	  if(time > 120 && time <= 360){
	    text('This is a gift for you', 0, -30);
	    if(time > 240 && time <= 360){
	      text('from', 0, 50);
	      text('abc', 0, 80);
	    }
	  }else if(time > 360 && time <= 480){
	    textSize(50);
	    background(0);
	    text('3D Terrain', 0, 0);
	  }
  }else{
    
    flying -= 0.08;
    var yoff = flying;
    for(var y = 0; y < rows; y++){
      var xoff = 0;
      for(var x = 0; x < cols; x++){
        terrain[x][y] = 
          map(noise(xoff, yoff), 0, 1, -100, 100);
        xoff += 0.1;
      }
      yoff += 0.1;
    }
    
    background(0);
    stroke(10);
    fill(145, 206, 235, 200);
    
    translate(0, 50);
    rotateX(PI/2.6);
    translate(-w/2, -h/2);
    
    stroke(20)
    for(var y = 0; y < rows-1; y++){
      beginShape(TRIANGLE_STRIP);
      for(var x = 0; x < cols; x++){

        vertex(x*scl, y*scl, terrain[x][y]);
        vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
        
      } 
      endShape();
    }
  }
}

function mouseReleased() {
  if(isLooping()){
  	noLoop();
  }else{
  	loop();
  }
  console.log('Mouse is pressed');
  return false;
}