// const BurgerApi = 'https://burgers1.p.rapidapi.com/burgers'
// const Boptions = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9f3184d9a1msh3ee4395a2c337d8p15e8f3jsnca8f5b605b6d',
// 		'X-RapidAPI-Host': 'burgers1.p.rapidapi.com'
// 	}
// };

function aBurger(event) {
    event.preventDefault()
    Movies.print(BurgerApi,Boptions,'main_container')
}

async function addToPage(elementId = 'main_container',result='<div class="row container-fluid">') {
  let movies = await this.getMovie() 
  movies.forEach((movie,index) => {
    if(index % 3 == 0) {result += '</div><div class="row container-fluid">'}
    product.picture =`${burgersPicturesArr[index] ? burgersPicturesArr[index] : burgersPicturesArr[0]}`
      result += this.template(movie,index)
  });
document.getElementById(elementId).innerHTML = result
}

function template(burger){
    let {description,id,name,} = movie
    let rndCard = document.getElementById("rnd_burger_card")
    return rndCard.innerHTML=`
        <div class="card col-sm-10 col-md-4 g-4" id="${id}">
          <img id="proudect_img" src="${picture}" class="card-img-top h-50">
          <div class="card-body">
            <h3 class="card-title">${name}</h3>
            <h5 class="card-title">${description}</h5>
            <button class="btn btn-dark">
                <a href="https://www.tabitorder.com/?orgName=Burgers%20Bar#/start">ORDER</a>
            </button>
          </div>
        </div>
    `
}

const burgersPicturesArr= [
  "https://multitenant.vmos-static.com/cdn-cgi/image/fit=cover,width=640/https://media-multitenant.vmos-static.com/media/v1/media?entityUUID=38730e68-d4c4-4be2-b26b-0339cd77288b&scope=grid",
  "https://multitenant.vmos-static.com/cdn-cgi/image/fit=cover,width=640/https://media-multitenant.vmos-static.com/media/v1/media?entityUUID=25447c77-35dd-4e80-9182-e238ea408ff6&scope=grid",
  "https://multitenant.vmos-static.com/cdn-cgi/image/fit=cover,width=640/https://media-multitenant.vmos-static.com/media/v1/media?entityUUID=99cccbc9-a5b6-47ae-a016-29666aca8a00&scope=grid",
  "https://multitenant.vmos-static.com/cdn-cgi/image/fit=cover,width=640/https://media-multitenant.vmos-static.com/media/v1/media?entityUUID=e52eaf3f-025a-4e03-855e-61755234edd7&scope=grid",
  "https://multitenant.vmos-static.com/cdn-cgi/image/fit=cover,width=640/https://media-multitenant.vmos-static.com/media/v1/media?entityUUID=49d1712a-7fa2-4a82-81a7-6cda3ebf2f0a&scope=grid",
  "https://multitenant.vmos-static.com/cdn-cgi/image/fit=cover,width=640/https://media-multitenant.vmos-static.com/media/v1/media?entityUUID=d25ee789-513a-47af-b4eb-5a13bec73d10&scope=grid",
  "https://multitenant.vmos-static.com/cdn-cgi/image/fit=cover,width=640/https://media-multitenant.vmos-static.com/media/v1/media?entityUUID=591c4595-7048-496f-87ea-380711b2f975&scope=grid",
  "https://multitenant.vmos-static.com/cdn-cgi/image/fit=cover,width=640/https://media-multitenant.vmos-static.com/media/v1/media?entityUUID=2eecc848-7f1e-43bc-af92-2bc4fbe2b39d&scope=grid",
  "https://multitenant.vmos-static.com/cdn-cgi/image/fit=cover,width=640/https://media-multitenant.vmos-static.com/media/v1/media?entityUUID=96ae4d9b-cb1a-4bb8-84bc-b29c6b334ac1&scope=grid",
  "https://multitenant.vmos-static.com/cdn-cgi/image/fit=cover,width=640/https://media-multitenant.vmos-static.com/media/v1/media?entityUUID=cca3ea06-2b92-4d9b-8275-c4c8f36d0c1b&scope=grid",
  "https://multitenant.vmos-static.com/cdn-cgi/image/fit=cover,width=640/https://media-multitenant.vmos-static.com/media/v1/media?entityUUID=1edf7c65-7143-4e10-8d29-9dfd90efcf35&scope=grid",
  "https://multitenant.vmos-static.com/cdn-cgi/image/fit=cover,width=640/https://media-multitenant.vmos-static.com/media/v1/media?entityUUID=cf470c58-092a-483c-9bcf-0e4c08308101&scope=grid",
  "https://multitenant.vmos-static.com/cdn-cgi/image/fit=cover,width=640/https://media-multitenant.vmos-static.com/media/v1/media?entityUUID=9bf0eabb-03a8-4360-8392-6ffeb61ee08f&scope=grid",
]
  