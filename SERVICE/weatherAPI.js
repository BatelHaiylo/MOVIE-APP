// Get 16 days weather forecast data - worldwide - geographical coordinates…

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f3184d9a1msh3ee4395a2c337d8p15e8f3jsnca8f5b605b6d',
		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
	}
};

fetch('https://forecast9.p.rapidapi.com/', options)
	.then(response => response.json())
	// .then(response => console.log(response))
	.catch(err => console.error(err));

// {}
// documentation: "https://tapi.wetter.com/v2.3/documentation/index.html"
// title: "wetter.com REST API"
// version: "2.3"