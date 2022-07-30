let video = document.getElementById("myVideo");  
function sound(){
    return video.muted ? video.muted = false: video.muted = true
}  

function loadPage(event,container = document.getElementById("main_container")){
    container.innerHTML = 
        event.preventDefault()
    let href = event.target.getAttribute('href')
    let links = {
        '/PAGES/page1/page1.html':/PAGES/page1/page1.html,
        '/PAGES/MOVIES/page2.html':/PAGES/MOVIES/page3.html,
        '/PAGES/MOVIES/page3.html':/PAGES/MOVIES/page3.html,
    }
    console.log(links[href]())
    mainContent.innerHTML = links[href]()
}

document.getElementById("home_page")
document.getElementById("movie_page")
document.getElementById("food_page")