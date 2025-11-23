
const apiUrl = "https://www.omdbapi.com/";
const apiKey = "aba882a2";

let movieList = document.getElementById("movieList");


document.getElementById("searchMovie").addEventListener("click", async () => {

    let movieName = document.getElementById("movieTitle").value.trim();
    let searchError = document.getElementById("searchError");

    searchError.innerText = "";

    if(movieName === "") return alert("Morate uneti ime filma");

    let response = await callOMDbApi("s="+movieName);

    if(response.Response === "False") {
        movieList.innerText = "";
        searchError.innerText = response.Error;
    } else {

        movieList.innerText = "";

        for(let movie of response["Search"] ) {

            searchMovies(movie);
        }
    }

});

function searchMovies(movie) {


    let movieHolder = document.createElement("div");
    movieHolder.classList = "movieHolder"

    let movieTitle = document.createElement("h3");
    movieTitle.innerText = movie.Title;

    let moviePoster = document.createElement("img");
    moviePoster.setAttribute("src", movie.Poster);

    let movieType = document.createElement("p");
    movieType.innerText = movie.Type;

    let movieYear = document.createElement("p");
    movieYear.innerText = movie.Year;

    movieHolder.append(movieTitle, moviePoster, movieType, movieYear);
    movieList.append(movieHolder);


}

async function callOMDbApi(params) {
    const url = apiUrl+"?apikey="+apiKey+"&"+params;

    const response = await fetch(url);
    return await response.json();

}
