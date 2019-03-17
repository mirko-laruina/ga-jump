idCounter = 0;

function Player(dna){
    this.elem = document.createElement('div');
    this.elem.classList.add('player');
    this.elem.setAttribute('id', idCounter++);
    this.posY = 0
    this.dna = dna
    this.score = -1
    this.elem.style.backgroundColor = 'rgb(' + Math.random()*255 +
                                        ',' + Math.random()*255 +
                                        ',' + Math.random()*255 +
                                        ')';
    wrapperElem.appendChild(this.elem);

    this.jump = function(amplitude, duration){
        if(this.jumping) return;
        //something really simple
        this.jumping = true;
        var up = true;
        var iid = setInterval(function(self){
            if(self.posY < amplitude && up){
                self.posY += amplitude/duration;
            }
            else {
                self.posY -= amplitude/duration;
                up = false;
            }

            if(self.posY <= 0){
                clearInterval(iid);
                self.jumping = false;
                self.posY = 0;
            }

            self.elem.style.bottom = 15 + self.posY + '%';
        }, 10, this);
    }

    this.play = function(){
        var iid = setInterval(function(self){
            target = obstaclesArray[0]
            if(target == undefined){
                return;
            }

            distanceX = target.left - 13;
            if(distanceX < 0
                && self.posY < target.height){
               // console.log(self.posY, target.height);
                self.die()
                clearInterval(iid);
            }

            //take action
            //obstacle distance, height, width -> jump amplitude & duration
            coefficient =  self.getCoefficient(distanceX, target.height, target.width, 0)

            if(coefficient > self.dna.genes[0]*300)
            {
                amplitude = self.getCoefficient(distanceX, target.height, target.width, 1)
                duration = self.getCoefficient(distanceX, target.height, target.width, 2)

                if(amplitude > 40) amplitude = 40;
                if(duration > 200) duration = 200;
                self.jump(amplitude, duration/2);
            }


        }, 100, this)
    }

    this.getCoefficient = function(distance, width, height, base){
        var i = base*6+1;
        var genes = this.dna.genes;
        //return  distance*genes[i++] +
        return  height*genes[i++] +
                width*genes[i++] +
                genes[i++]/distance + 
                genes[i++]/height + 
                genes[i]/width
    }

    this.die = function(){
        this.score = count;
        wrapperElem.removeChild(this.elem)
    }
}