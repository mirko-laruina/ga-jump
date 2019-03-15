function Dna(){
    this.genes = []

    this.random = function(){
        for(var i = 0; i<19; i++){
            this.genes[i] = Math.random()*200;
        }
    }

    //not as it should
    this.crossover = function(mate){
        var mid = Math.random()*this.genes.length;
        for(var i = 0; i<mid; i++){
            this.genes[i] = mate.genes[i];
        }
        /*this.singleCross(this.distanceWeight, mate.distanceWeight)
        this.singleCross(this.heightWeight, mate.heightWeight)
        this.singleCross(this.widthWeight, mate.widthWeight)
        this.singleCross(this.amplituteDistWeight, mate.amplituteDistWeight)
        this.singleCross(this.amplituteHeightWeight, mate.amplituteHeightWeight)
        this.singleCross(this.amplituteWidthWeight, mate.amplituteWidthWeight)
        this.singleCross(this.durationDistWeight, mate.durationDistWeight)
        this.singleCross(this.durationHeightWeight, mate.durationHeightWeight)
        this.singleCross(this.durationWidthWeight, mate.durationWidthWeight)
        this.singleCross(this.jumpThreshold, mate.jumpThreshold)*/
    }

    this.singleCross = function(var1, var2){
        if(Math.random() < 0.05){
            //mutuation
            return Math.random()*200;
        }

        retvalue = (var1+var2)/2;
        retvalue += retvalue*(Math.random()-0.5)/20
        return retvalue
    }
}