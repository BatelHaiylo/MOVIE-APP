// @import  from 'CLASSburgers';

const rndFood = document.getElementById("rnd_burger_card")
const btnRndFood = document.getElementById("randomBurger")

function randomFoodChoice(){
    return Math.floor(Math.random()*29)
}

async function matchingCard(element = rndFood,result ='<div class="card col-sm-10 col-md-4 g-4" id="${id}">'){
  let rndNum = randomFoodChoice()
  let suggestion = await this.getBurger(BurgersAPI,Boptions)
    suggestion.forEach((burger,index) => {
      if(burger.id == rndNum)
      {result += template(burger) }
      burger.picture =`${burgersPicturesArr[index].id == rndNum ? burgersPicturesArr[index] : burgersPicturesArr[0]}`
      element.innerHTML = result
    });
}