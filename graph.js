function Graph(xVar, yVar, elemId){
	this.height = 200
	this.width  = 400

	this.lines = []
	this.linesN = 0

	this.values = []
	this.values[0] = 0

	this.maxVal = 0;

	this.elem = document.getElementById(elemId)
	this.elem.classList.add('graph')

	var xAxis = this.newLine(0, 0, 0, 200)
	xAxis.style.stroke = "rgb(0,0,0)"
	xAxis.style.strokeWidth = "4"

	var yAxis = this.newLine(0, 200, 400, 200)
	yAxis.style.stroke = "rgb(0,0,0)"
	yAxis.style.strokeWidth = "4"
}



Graph.prototype.newLine = function(_x1, _y1, _x2, _y2){
	var line_ = document.createElementNS('http://www.w3.org/2000/svg','line');
	line_.setAttribute("x1", _x1);
	line_.setAttribute("y1", _y1);
	line_.setAttribute("x2", _x2);
	line_.setAttribute("y2", _y2);
	line_.style.stroke = "rgb(170,0,0)"
	line_.style.strokeWidth = "2"
	this.elem.appendChild(line_);
	return line_
}



Graph.prototype.addLine = function(_y){
	var oldX = 40 * this.linesN
	var oldY = 200 - this.values[this.linesN];
	var newX = 40 * (this.linesN+1)
	var newY = this.height - _y;

	var newLine = this.newLine(oldX, oldY, newX, newY);

	this.lines.push(newLine)
	this.linesN++;

	this.values[this.linesN] = _y;
}

Graph.prototype.clean = function(){
	for(var i = 0; i < this.lines.length; i++){
		this.lines[i].remove()
	}
	this.linesN = 0; //??*/
	this.values = []
}

Graph.prototype.addValue = function(_y, addOnly){
	//Elimino tutte le vecchie linee
	for (var i = 0; i<this.lines.length; i++) {
	    this.lines[i].remove() 
	}

	if(_y > this.maxVal){
		this.maxVal = _y;
	}

	this.values.push(_y)
	this.linesN++;
	if(!addOnly)
		this.draw();
}

Graph.prototype.addBatchValue = function(_batch){
	for(var i = 0; i<_batch.length; i++){
		this.addValue(_batch[i], true);
	}
	this.draw();
}

Graph.prototype.draw = function(){
	for (var i = 1; i < this.values.length; i++) {
		var step = this.width / (this.values.length - 1)

		var oldX = step * (i - 1)
		var oldY = (1 - this.values[i-1] / this.maxVal) * this.height;
		var newX = step * i
		var newY = (1 - this.values[i] / this.maxVal) * this.height;

		var newLine = this.newLine(oldX, oldY, newX, newY);

		this.lines.push(newLine)
	}
}