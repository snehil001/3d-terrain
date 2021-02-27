var rows, cols;
var scl = 25;
var ang = 0;
var terrain = [];
var w = 3000;
var h = 900;
var flying = 0;
let font;

function preload(){
  font = loadFont('HARNGTON.ttf');
}

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);  

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
  let time = millis();
  if(time <= 2000){
    fill(0);
    textSize(30);
    textFont(font);
    text('Hi, XYZ', 0, -100);
  }else if(time <= 4000){
    fill(0);
    textSize(30);
    textFont(font);
    text('This is a gift for you', 0, 30);
  }else if(time <= 6000){
   fill(0);
   textSize(30);
   textFont(font);
   text('from', 0, 60);
   text('abc', 0, 90);
  }else{
    
    flying -= 0.1;
    var yoff = flying;
    for(var y = 0; y < rows; y++){
      var xoff = 0;
      for(var x = 0; x < cols; x++){
        terrain[x][y] = 
          map(noise(xoff, yoff), 0, 1, -120, 120);
        xoff += 0.1;
      }
      yoff += 0.1;
    }
    
    background(255);
    stroke(10);
    fill(50, 50, 200, 180);
    
    translate(0, 50);
    rotateX(PI/2.5);
    translate(-w/2, -h/2);    

    for(var y = 0; y < rows-1; y++){
      beginShape(TRIANGLE_STRIP);
      for(var x = 0; x < cols; x++){

        //rect(x*scl, y*scl, scl, scl);
        vertex(x*scl, y*scl, terrain[x][y]);
        vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
        
      } 
      endShape();
    }
  }
}

// function mousePressed() {
//   if (mouseX > 0 && mouseX < width
//    && mouseY > 0 && mouseY < height) {
//     let fs = fullscreen();
//     fullscreen(!fs);
//   }
// }