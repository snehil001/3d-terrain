var rows, cols;
var scl = 25;
var ang = 0;
var terrain = [];
var w = 3000;
var h = 900;
var flying = 0;
let font;

function preload(){
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
  textFont(font);
  fill(145, 206, 235);
  textSize(30);
  if(time <= 360){
  	background(0);
    text('Hi XYZ,', 0, -100);
	  if(time > 120){
	    text('I have a gift for you!', 0, -30);
	    if(time > 240){
	      text('From,', 0, 50);
	      text('ABC', 0, 80);
	    }
    }
	}else if(time <= 480){
	    textSize(50);
	    background(0);
	    text('3D Terrain', 0, 0);
  }else{
    
    background(0);
    
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


    translate(0, 50);
    rotateX(PI/2.6);
    translate(-w/2, -h/2);
    

    fill(145, 206, 235, 100); //#91ceeb
    stroke(145, 206, 235);

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

function touchEnded() {
  if(isLooping()){
    noLoop();
  }else{
    loop();
  }
  console.log('Touched');
  return false;
}