
function Obstacle(){
    this.height = Math.random()*20+6;
    this.width = Math.random()*5+2;
    this.elem = document.createElement('div');
    this.elem.classList.add('obstacle');
    this.elem.style.height = this.height  + "%";
    this.elem.style.width = this.width + "%";
    wrapperElem.appendChild(this.elem);
}

