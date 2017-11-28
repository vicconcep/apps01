var x = 400;
var y = 400;
var diameter = 75;

function setup() {
  createCanvas(800, 800);
}

function draw() {
	background(0);
  
	//1
	fill(15,213,235)
	ellipse(x, y, diameter)
	if (keyCode === UP_ARROW) {
		y = y - 10;
	} else if (keyCode === DOWN_ARROW) {
		y = y + 10;
	}	
	if (keyCode === LEFT_ARROW) {
		x = x - 10;
	} else if (keyCode === RIGHT_ARROW) {
		x = x + 10;
	}	
	
	 if (y < 0) {
    y = 0;
  }
	if (y>800){
		y= 800;
	}
	if (x < 0) {
    x = 0;
  }
	if (x>800){
		x= 800;
	}
	
}