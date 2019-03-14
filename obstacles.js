STEP_SIZE = 0.2;

function Obstacle(){
    this.height = Math.random()*20+6;
    this.width = Math.random()*5+2;
    this.elem = document.createElement('div');
    this.elem.classList.add('obstacle');
    this.elem.style.height = this.height  + "%";
    this.elem.style.width = this.width + "%";
    this.left = 100;
    this.elem.style.left = this.left + '%';
    wrapperElem.appendChild(this.elem);
    this.step = stepObstacle;
}

function stepObstacle(){
    this.left -= STEP_SIZE;
    this.elem.style.left = this.left + '%';
}
