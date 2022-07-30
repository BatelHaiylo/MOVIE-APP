const options5 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f3184d9a1msh3ee4395a2c337d8p15e8f3jsnca8f5b605b6d',
		'X-RapidAPI-Host': 'cocktails3.p.rapidapi.com'
	}
};

fetch('https://cocktails3.p.rapidapi.com/random', options5)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	// body: Array(1)
	// 0:
	// ingredients: Array(10)
	// 0: "1 (750 milliliter) bottle rose wine "
	// 1: "1 (750 milliliter) bottle Burgundy wine "
	// 2: "1 (46 fluid ounce) can pineapple juice (such as Dole®) "
	// 3: "1 (2 liter) bottle fruit punch (such as Hawaiian Punch®) "
	// 4: "1 lemon, juiced "
	// 5: "1 lime, juiced "
	// 6: "1 orange, juiced "
	// 7: "1 lemon, thinly sliced "
	// 8: "1 lime, thinly sliced "
	// 9: "1 orange, thinly sliced "
	// name: "wedding sangria"