const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f3184d9a1msh3ee4395a2c337d8p15e8f3jsnca8f5b605b6d',
		'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
	}
};

fetch('https://movies-app1.p.rapidapi.com/api/genres', options2)
	.then(response => response.json())
	// .then(response => console.log(response.results))
	.catch(err => console.error(err));

// (18) [{…}]
// 0:
// name: "Acción"
// uuid: "accion"

