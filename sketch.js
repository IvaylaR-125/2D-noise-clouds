var inc = 0.02;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
}

function draw() {
  
  var yoff = 0;
  
  loadPixels();
  for(var y = 0; y < width; y++){
    var xoff = 0;
    for(var x = 0; x < width; x++){
      var index = (x + y * width) * 4;
      var r = noise(xoff, yoff) * 255;
      pixels[index + 0] = r;  //red
      pixels[index + 1] = r;  //green
      pixels[index + 2] = r;  //blue
      pixels[index + 3] = 255;  //alpha
      xoff += inc;
    }
    yoff +=inc;
  }
  updatePixels();
  noLoop();
}