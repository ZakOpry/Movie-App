const button = document.querySelector(".button")

async function buttonPress(){
const input = document.querySelector(".input").value 
const key = '5efce0a4&s='
const omdbUrl = 'http://www.omdbapi.com/?apikey=' + key + input
const movie = await fetch(omdbUrl);
const movieJson = await movie.json();
const movieCard = document.querySelector('.movie-cards')
movieCard.innerHTML = ""

for (const info of movieJson.Search){
    
    const title = document.createElement("p")
    title.className = "movieTitle"
    const poster = document.createElement("img")
    const container = document.createElement("div")
    container.className = "images"
    title.innerHTML = info.Title
    poster.src = info.Poster
    container.append(title, poster)
    movieCard.append(container)
    
}

   
}


button.addEventListener("click", buttonPress)