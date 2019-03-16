obstaclesArray = []
count = 0
gen = 0
var GRAPH =0

function play(){
    wrapperElem = document.getElementById("wrapper")
    counterElem = document.getElementById("counter")
    ext_iid = setInterval(function(){
        var o = new Obstacle();
        o.index = obstaclesArray.push(o);
        o.iid = setInterval(function(){
                o.step();
                if(o.left < 10 - o.width){
                    clearInterval(o.iid);
                    wrapperElem.removeChild(o.elem);
                    obstaclesArray.shift();
                    obstaclesArray[0].elem.classList.add('target');
                }

                if(o.left < 10){
                    count += 1;
                }
            counterElem.textContent = Math.floor(count);
        }, 10)
    }, 2500);

    pop = new Population(350);
    pop.periodicCheckStart();

    GRAPH = new Graph(); 
}

function clean(){
    count = 0;
    for(var i = 0; i<obstaclesArray.length; i++){
        wrapperElem.removeChild(obstaclesArray[i].elem);
        clearInterval(obstaclesArray[i].iid);
    }
    obstaclesArray = [];
}
