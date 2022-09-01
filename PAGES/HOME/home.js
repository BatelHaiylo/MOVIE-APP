let video = document.getElementById("myVideo");  
function sound(){
    return video.muted ? video.muted = false: video.muted = true
}  

// function loadPage(event){
//     document.getElementById("main_container").innerHTML = 
//         event.preventDefault()
//     let href = event.target.getAttribute('href')
//     let links = {
//         '/SERVICE/CLASStv.js':movies(event),
//         '/PAGES/BURGERS/food.html':aBurger(event),
//         '/PAGES/MOVIES/page3.html':/PAGES/MOVIES/page3.html,
//     }
//     console.log(links[href]())
//     mainContent.innerHTML = links[href]()
// }

// document.getElementById("home_page")
// document.getElementById("movie_page")
// document.getElementById("food_page")

