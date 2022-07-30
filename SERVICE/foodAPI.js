const options4 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f3184d9a1msh3ee4395a2c337d8p15e8f3jsnca8f5b605b6d',
		'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
	}
};

fetch('https://pizza-and-desserts.p.rapidapi.com/desserts', options4)
	.then(response => response.json())
	// .then(response => console.log(response))
	.catch(err => console.error(err));