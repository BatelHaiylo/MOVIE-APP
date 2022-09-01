function changeMainContent(value){
    switch(value){
        case "home":
            home()
            break;
            
        default: {
            home()
        } 
        


    }
    
}

console.log(localStorage.getItem('page'))
window.addEventListener("load",() => {
    AlternatingPages(localStorage.getItem("page"))
})