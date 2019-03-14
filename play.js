function init(){
    wrapperElem = document.getElementById("wrapper")

    o = new Obstacle();
    setInterval(function(){
            o.step();
    }, 10)
}
