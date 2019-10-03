/* Interactive slaf protrait with variables 

*/
var x = 200;
var y = 150;
var faceSize = 200;


function setup() {
	createCanvas(1000, 800);
}

function draw() {
	background("lightblue");
    circle (300, 200, 100);
	ellipse(x, y, 100);
    arc(200, 200, 100, 100, 0, PI);
    rect(500, 50, 100, 100);

	// default
	ellipse(50, 50, 50);
    rect(50, 50, 100, 100);
}

// self portrait
function setup() {
	createCanvas(640, 360);
}

function draw() {
	background("white");
	noStroke();
	
	// face
	fill("lightpink");
	ellipse(200, 150, faceSize, faceSize/1);
    


	
	// ears
	fill("whiote");
	ellipse(150, 150, 40, 40);
	ellipse(250, 150, 40, 40);
    
    fill("gray");
	ellipse(150, 150, 20, 20);
    ellipse(250, 150, 20, 20);
    
   //Adding highlights to the eyes
fill (eye_white);
circle (187, 245, 12);
circle (288, 245, 12);
ellipse (235, 347, 12, 5);
ellipse (235, 335, 10, 5);
    
    // lips
  
  stroke('#f28865');
  arc(200, 150, 150, 100, .9, PI-.9);
  noStroke();
    
    
    
    background(148, 251, 255); // RGB

// face
fill(255, 255, 0);
ellipse(202, 208, 300, 300);

// eyes
fill(1, 1, 1);
ellipse(157, 151, 40, 40);
ellipse(304, 142, 40, 40);

// mouth
ellipse(257, 240, 120, 136);

    
    
    
    
}