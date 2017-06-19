var scl = 13;
var cellaut;
var button;
var cls_button;
var glidergun_button;
var random_button;
var play = false;
var speedSlider;

function setup() {
	createCanvas(601, 601);
	button = createButton('Start/Stop');
	button.mousePressed(toggle);
	cls_button = createButton('Clear');
	cls_button.mousePressed(cls);
	random_button = createButton('Random');
	random_button.mousePressed(randcellaut);
	glidergun_button = createButton('create GospelGliderGun');
	glidergun_button.mousePressed(glidergun);
	speedSlider = createSlider(1, 60, 5, 1);

	cellaut = new CellularAutomata(scl);

	/*cellaut.setCell(23, 23, true);
	cellaut.setCell(22, 23, true);
	cellaut.setCell(21, 23, true);
	cellaut.setCell(23, 22, true);
	cellaut.setCell(22, 21, true);
	cellaut.setCell(1, 0, true);
	cellaut.setCell(1, 1, true);
	cellaut.setCell(1, 2, true);*/

	//cellaut.setRandomValues();
	//cellaut.createGospelGliderGun();
	cellaut.show();
	frameRate(20);
}

function draw() {
	cellaut.show();
	if(play) {
		cellaut.nextGeneration();
	}
	/*if(cellaut.gencount == 10) {
		noLoop();
	}*/
	frameRate(speedSlider.value());
}

function mousePressed() {
	if(mouseX < width && mouseY < height) {
		var x = floor(mouseX/cellaut.cellsize);
		var y = floor(mouseY/cellaut.cellsize);
		if(cellaut.cellValue(x, y)) {
			cellaut.setCell(x, y, false);
		} else {
			cellaut.setCell(x, y, true);
		}
	}
}

/*function mouseDragged() {
	if(!play && mouseX < width && mouseY < height) {
		var x = floor(mouseX/cellaut.cellsize);
		var y = floor(mouseY/cellaut.cellsize);
		if(cellaut.cellValue(x, y)) {
			cellaut.setCell(x, y, false);
		} else {
			cellaut.setCell(x, y, true);
		}
	}
}*/

function randcellaut() {
	cellaut.clear();
	cellaut.setRandomValues();
	play = false;
}

function glidergun() {
	cellaut.createGospelGliderGun();
	play = false;
}

function cls() {
	cellaut.clear();
	play = false;
}

function toggle() {
	if(play) {
		play = false;
	} else {
		play = true;
	}
}