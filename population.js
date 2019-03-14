function Population(size){
    this.playerArray = []
    this.popsize = size
    this.matingpool = []
    for(var i = 0 ; i<size; i++){
        var d = new Dna();
        d.random();
        var p = new Player(d);
        this.playerArray.push(p);
        p.play();
    }

    this.nextGen = function(){
        //populate matingpool
        for(var i = 0; i<this.popsize; i++){
            // quite processing heavy but that's ok
            for(var j = 0; j < Math.floor(this.playerArray[i].score/10); j++){
                this.matingpool.push(this.playerArray[i].dna);
            }
        }

        //current players can be discarded
        this.playerArray = [];

        for(var i = 0; i<this.popsize; i++){
            dna1 = this.matingpool[Math.floor(Math.random()*this.matingpool.length)];
            dna2 = this.matingpool[Math.floor(Math.random()*this.matingpool.length)];
            console.log(dna1);
            dna1.crossover(dna2);
            var p = new Player(dna1);
            this.playerArray.push(p);
            p.play();
        }

        this.matingpool = [];
        clean();
        this.periodicCheckStart();
    }

    //check every seconds for life
    this.periodicCheckStart = function(){
        var iid = setInterval(function(self){
            life = false
            for(var i = 0; i< self.popsize; i++){
                if(self.playerArray[i].score == 0){
                    life = true;
                    break;
                }
            }
            if(life == false){
                this.gen += 1
                generationElem = document.getElementById("generation")
                generationElem.textContent = "Generation: "+gen
                self.nextGen();
                clearInterval(iid)
            }
            console.log(life);
        }, 1000, this)
    }
}