class Food{
    constructor(){ }
    var = foodStock;
    var = lastFed;

    getFoodStock(){

    }

    updateFoodStock(){

    }

    deductFood(){
        
    }

    display(){
        var x = 80, y = 100;

        imageMode(CENTER);
        image(milk,720,220,70,70);

        if(this.foodStock != 0){
            for(var i = 0; i < this.foodStock; i++){
                if(i % 10 == 0){
                    x = 80;
                    y = y+50;
                }
            }
        }
        fill("white");
        textSize(15);
        if(lastFed >= 12){
            test("Last Feed : " + lastFed % 12 + " PM ", 350,30);
         }
         else if(lastFed == 0){
             text("Last Feed : 12 AM",350,30);
         }
         else{
            text("Last Fed : " + lastFed +" AM ",350,30);
         }
    }
}