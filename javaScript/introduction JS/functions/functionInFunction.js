function getMilk(amount,priceOfBottle) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    console.log("buy " + noOfBottles(amount,priceOfBottle)+ " milk");

    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return change(amount,priceOfBottle)
  }

function noOfBottles(totalamount,priceOfBottle){
 return Math.floor(totalamount / priceOfBottle)
}
function change(totalamount,priceOfBottle){
    return totalamount % priceOfBottle;
}

console.log("hello, here is your "+getMilk(5,1.5)+" change")