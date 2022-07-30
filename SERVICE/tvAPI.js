const options3 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f3184d9a1msh3ee4395a2c337d8p15e8f3jsnca8f5b605b6d',
		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
	}
};

fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1', options3)
	.then(response => response.json())
	// .then(response => console.log(response.results))
	.catch(err => console.error(err));

// (50) [{…}]
// 0:
// genre: (3) ['Action', 'Adventure', 'Animation']
// imageurl: ['https://m.media-amazon.com/images/M/MV5BNzY3YTUwYT…eQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL_.jpg']
// imdbid: "tt9580138"
// imdbrating: 7.4
// released: 2020
// synopsis: "Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones."
// title: "Mortal Kombat Legends: Scorpion's Revenge"
// type: "movie"