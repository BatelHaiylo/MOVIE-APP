class Movies {
    constructor(url,objOption) {
        this.url = url
        this.objOption = objOption
    }
  
    async getMovie(){
        try{
          document.getElementById('movie_page').innerHTML = 
          `<div id= "loading_containet" style="min-height: 100vh;"><img src="https://c.tenor.com/QJNoPeq9WmUAAAAC/netflix-intro-netflix.gif" class="d-flex justify-content-center  align-items-center pt-5";"></div>`
            return await fetch(`${this.url},${this.objOption}`)
            .then(data => data.json())
        } catch(error){this.error(error)}
        finally{ document.getElementById('loading_containet').innerHTML =" "}
    }
  
    async addToPage(elementId = 'movie_page',result='<div class="row container-fluid">') {
        let movies = await this.getMovie() 
        movies.forEach((movie) => {
          if(index % 3 == 0) {result += '</div><div class="row container-fluid">'}
            result += this.template(movie)
        });
      document.getElementById(elementId).innerHTML = result
    }
  
    error(err) {
        console.log(err)
    }

    template(movie) {
        let {genre,imageurl,imdbrating,released,synopsis,title} = movie
        return `
            <div class="card col-sm-10 col-md-4 g-4" id="${title}">
              <img id="proudect_img" src="${imageurl}" class="card-img-top h-50">
              <div class="card-body">
                <h3 class="card-title">${title}</h3>
                <h5 class="card-title">${genre}</h5>
                <h5 class="card-title">${synopsis}</h5>
                <span class="card-title">${released}  ${imdbrating}</span><br><br>
                <button onclick="deleteMovies('${title}')" class="btn btn-dark">delete</button>
              </div>
            </div>
        `
    }
    static print(url,objOption,elementId='movie_page') {
        let someMovie = new Movies(url,objOption)
        someMovie.addToPage(elementId)
    }

    async deleteMovie(id){
      try{
        let response = await fetch(`${MoviesApi}/${id}`,{
          method: 'DELETE',
          headers: {'Content-type': 'application/json;'}
        })
    
        if(response.status <= 299) 
          document.getElementById(id).remove()
        else document.getElementById('errors').innerHTML = 'Something wrong on deleting'
    } catch(error){this.error(error)
    }finally{}
    }
  
  }
  
  const MoviesApi = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1'
  const Moptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9f3184d9a1msh3ee4395a2c337d8p15e8f3jsnca8f5b605b6d',
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
  };
  function movies(event) {
    event.preventDefault()
    return Movies.print(MoviesApi,Moptions)
  }
      