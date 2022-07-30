// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9f3184d9a1msh3ee4395a2c337d8p15e8f3jsnca8f5b605b6d',
// 		'X-RapidAPI-Host': 'burgers1.p.rapidapi.com'
// 	}
// };

// fetch('https://burgers1.p.rapidapi.com/burgers', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

async function getBurger(url,objOption){
	try{
		document.getElementById('main_container_container').innerHTML = 
		`<div id= "loading_containet" style="min-height: 100vh;"><img src="https://c.tenor.com/QJNoPeq9WmUAAAAC/netflix-intro-netflix.gif" class="d-flex justify-content-center  align-items-center pt-5";"></div>`

		return await fetch(url,objOption)
	    .then(response => response.json())
		.then(response => response)
	}
	catch(eror){console.log(eror)}
	finally{document.getElementById('loading_containet').innerHTML =" "}
}
// getBurger(BurgersAPI,Boptions)

// (28) [{…}]
// 0:
// addresses: [{…}]
// description: "A mouth-watering honest beef burger"
// id: 0
// ingredients: (7) ['beef', 'american cheese', 'burger sauce', 'french mustard', 'pickes', 'onion', 'lettuce']
// name: "Tribute Burger"
// restaurant: "Honest Burgers"
// web: "www.honestburgers.co.uk"