function Player(dna){
    this.elem = document.createElement('div');
    this.elem.classList.add('player');
    this.posY = 0
    this.dna = dna
    this.score = 0
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
                console.log(self.posY, target.height);
                self.die()
                clearInterval(iid);
            }

            //take action
            //obstacle distance, height, width -> jump amplitude & duration
            coefficient = distanceX*self.dna['distanceWeight'] +
                            target.height*self.dna['heightWeight'] +
                            target.width*self.dna['widthWeight']

                            if(coefficient > self.dna['jumpThreshold']*2)
            {
                amplitude = distanceX*self.dna['amplituteDistWeight']
                            + target.height*self.dna['amplituteHeightWeight']
                            + target.width*self.dna['amplituteWidthWeight']
                duration = distanceX*self.dna['durationDistWeight']
                            + target.height*self.dna['durationHeightWeight']
                            + target.width*self.dna['durationWidthWeight']

                amplitude = amplitude/300
                duration = duration/70
                self.jump(amplitude, duration);
            }


        }, 100, this)
    }

    this.die = function(){
        this.score = count;
        wrapperElem.removeChild(this.elem)
    }
}