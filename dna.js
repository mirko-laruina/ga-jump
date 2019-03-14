function Dna(){
    this.distanceWeight;
    this.heightWeight;
    this.widthWeight;
    this.amplituteDistWeight;
    this.amplituteHeightWeight;
    this.amplituteWidthWeight;
    this.durationDistWeight;
    this.durationHeightWeight;
    this.durationWidthWeight;
    this.jumpThreshold;

    this.random = function(){
        this.distanceWeight = Math.random()*200;
        this.heightWeight = Math.random()*200;
        this.widthWeight = Math.random()*200;
        this.amplituteDistWeight = Math.random()*200;
        this.amplituteHeightWeight = Math.random()*200;
        this.amplituteWidthWeight = Math.random()*200;
        this.durationDistWeight = Math.random()*200;
        this.durationHeightWeight = Math.random()*200;
        this.durationWidthWeight = Math.random()*200;
        this.jumpThreshold = Math.random()*200;
    }

    //not as it should
    this.crossover = function(mate){
        this.singleCross(this.distanceWeight, mate.distanceWeight)
        this.singleCross(this.heightWeight, mate.heightWeight)
        this.singleCross(this.widthWeight, mate.widthWeight)
        this.singleCross(this.amplituteDistWeight, mate.amplituteDistWeight)
        this.singleCross(this.amplituteHeightWeight, mate.amplituteHeightWeight)
        this.singleCross(this.amplituteWidthWeight, mate.amplituteWidthWeight)
        this.singleCross(this.durationDistWeight, mate.durationDistWeight)
        this.singleCross(this.durationHeightWeight, mate.durationHeightWeight)
        this.singleCross(this.durationWidthWeight, mate.durationWidthWeight)
        this.singleCross(this.jumpThreshold, mate.jumpThreshold)
    }

    this.singleCross = function(var1, var2){
        if(Math.random < 0.05){
            //mutuation
            return Math.random()*200;
        }
        return (var1+var2)/2
    }
}