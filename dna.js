function Dna(){
    this.genes = []

    for(var i = 0; i<19; i++)
        this.genes.push(Math.random()*200);

    this.crossover = function(dna1, dna2){
        if(dna1 != undefined && dna2 != undefined){
            if(Math.random() < 0.01){
                for(var i = 0; i<19; i++)
                this.genes.push(Math.random()*200);
                return;
            }

            var mid = Math.random()*dna1.genes.length;
            for(var i = 0; i<mid; i++){
                this.genes[i] = dna1.genes[i];
            }
            for(var i = mid; i<dna1.genes.length; i++){
                this.genes[i] = dna2.genes[i];
            }
/*
            for(var i = 0; i<dna1.genes.length; i++){
                this.genes[i] = (dna1.genes[i]+dna2.genes[i])/2
            }*/

            for(var i = 0; i<this.genes.length; i++){
                this.genes[i] += (Math.random()-0.5)*this.genes[i]/10
            }
        }
    }
}