//Create variables here
var dog;
var happydog,database,food,foodStock;
var feed, addfood,FeedTime,lastFed,foofObj;

function preload()
{
  //load images here
  dogImage = loadImage("Dog.png");
  hdog = loadImage("happydog.png");
  milk = loadImage("Milk.png");
}

function setup() {
  createCanvas(1000, 1000);

  database = firebase.database();
  
  dog = createSprite(500,400,5,5);
  dog.addImage(dogImage);

  var foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  feed = createButton("Feed the Fudge");
  feed.position(800,950);
  //feed.mousePressed(feedDog);

  addfood = createButton("Add Food");
  addfood.position(820,895);
 // addfood.mousePressed(addFoods);

}

function draw() {  
   background(190,1,90);
  
   textSize(20);
   fill("yellow");
   stroke("black");
   text("PRESS UP ARROW KEY TO FEED OUR CUTE DOG FUDGE MILK",200,800)
   
   //food.display();

  drawSprites();
}

function readStock(data){
  food = data.val();
}

function writeStock(x){
  if(x <= 0){
    x = 0;
  } 
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

function feedDog(){
  dog.addImage(hdog);

  foodObj.updateFoodStock(foodObj.getFoodStock() - 1);
  database.ref('/').update({
    Food : foodObj.getFoodStock(),
    FeedTime : hour()
  })
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:food
  })
}
