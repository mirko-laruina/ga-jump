
function init(){
    wrapperElem = document.getElementById("wrapper")

    ext_iid = setInterval(function(){
        var o = new Obstacle();
        var iid = setInterval(function(){
                o.step();
                if(o.left < -50){
                    clearInterval(iid);
                    wrapperElem.removeChild(o.elem);
                }
        }, 10)
    }, 2000);
}
