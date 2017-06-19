function CellularAutomata(size) {
	this.size = floor((width-1)/size);
	this.cellsize = size;
	this.board = [];
	for(var i=0; i<this.size; i++) {
		for(var j=0; j<this.size; j++) {
			this.board[i*(this.size)+j] = false;
		}
	}

	this.gencount = 1;

	this.setRandomValues = function() {
		for(var i=0; i<this.size; i++) {
			for(var j=0; j<this.size; j++) {
				this.board[i*(this.size)+j] = round(random(0,3)) == 0 ? true : false;
			}
		}
	}

	this.clear = function() {
		for(var i=0; i<this.size; i++) {
			for(var j=0; j<this.size; j++) {
				this.board[i*(this.size)+j] = false;
			}
		}
	}

	this.show = function() {
		stroke(0);
		strokeWeight(1);
		for(var i=0; i<this.size; i++) {
			for(var j=0; j<this.size; j++) {
				if(this.board[i*(this.size)+j]) {
					fill(0);
				} else {
					fill(255);
				}
				rect(i*this.cellsize, j*this.cellsize, this.cellsize, this.cellsize);
			}
		}
	}

	this.cellValue = function(x, y) {
		if(x<0 || x>=this.size || y<0 || y>=this.size) {
			return false;
		}
		if(this.board[x*(this.size) + y] == true) {
			return true;
		} else {
			return false;
		}
	}

	this.setCell = function(x, y, newcell) {
		this.board[x*(this.size) + y] = newcell;
	}

	this.numofNeighbors = function(x, y) {
		var sum = 0;
		if(this.cellValue(x-1, y-1)) sum++;
		if(this.cellValue(x, y-1)) sum++;
		if(this.cellValue(x+1, y-1)) sum++;
		if(this.cellValue(x-1, y)) sum++;
		if(this.cellValue(x+1, y)) sum++;
		if(this.cellValue(x-1, y+1)) sum++;
		if(this.cellValue(x, y+1)) sum++;
		if(this.cellValue(x+1, y+1)) sum++;
		return sum;
	}

	this.nextGeneration = function() {
		var newgeneration = [];
		for(var i=0; i<this.size; i++) {
			for(var j=0; j<this.size; j++) {
				if(this.board[i*(this.size)+j]) {
					if(this.numofNeighbors(i, j) != 2 && this.numofNeighbors(i, j) != 3) {
						newgeneration[i*(this.size)+j] = false;
					} else {
						newgeneration[i*(this.size)+j] = true;
					}
				}
				if(!this.board[i*(this.size)+j]) {
					if(this.numofNeighbors(i, j) == 3) {
						newgeneration[i*(this.size)+j] = true;
					} else {
						newgeneration[i*(this.size)+j] = false;
					}
				}
			}
		}
		this.board = newgeneration;
		this.gencount++;
	}

	this.createGospelGliderGun = function() {
		this.clear();
		this.setCell(1,5,true);
		this.setCell(2,5,true);
		this.setCell(1,6,true);
		this.setCell(2,6,true);
		this.setCell(25,1,true);
		this.setCell(25,2,true);
		this.setCell(25,6,true);
		this.setCell(25,7,true);
		this.setCell(23,2,true);
		this.setCell(23,6,true);
		this.setCell(22,3,true);
		this.setCell(22,4,true);
		this.setCell(22,5,true);
		this.setCell(21,3,true);
		this.setCell(21,4,true);
		this.setCell(21,5,true);
		this.setCell(36,3,true);
		this.setCell(36,4,true);
		this.setCell(35,3,true);
		this.setCell(35,4,true);
		this.setCell(18,6,true);
		this.setCell(17,5,true);
		this.setCell(17,6,true);
		this.setCell(17,7,true);
		this.setCell(16,4,true);
		this.setCell(16,8,true);
		this.setCell(15,6,true);
		this.setCell(14,3,true);
		this.setCell(14,9,true);
		this.setCell(13,3,true);
		this.setCell(13,9,true);
		this.setCell(12,4,true);
		this.setCell(12,8,true);
		this.setCell(11,5,true);
		this.setCell(11,6,true);
		this.setCell(11,7,true);
	}
}