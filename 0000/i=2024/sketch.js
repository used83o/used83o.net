let v = 3;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noCursor();
	
	mouseX = width / 2;
	mouseY = height / 2;
}

function draw() {
	randomSeed(2024);
	textFont('Courier New', 16);
	background(20);
	
	for (i = 2024; i > 0; i--){
		let x24 = width / 2 + map(mouseX, 0, width, random(-i / v), random(i / v)) + map(sin(frameCount * random(0.05)), -1, 1, -5, 5);
		let y24 = height / 2 + map(mouseY, 0, height, random(-i / v), random(i / v)) + map(sin(frameCount * random(0.05)), -1, 1, -5, 5);
		
		// rotate(i);
		fill(map(i, 1, 2024, 240, 20));
		text(random(["2", "0", "2", "4"]), x24, y24);
	}
}