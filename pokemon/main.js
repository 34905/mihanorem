const pokemonImage = document.getElementById("js--pokemon-image")
let randomNumber = Math.floor(Math.random() * 1010 + 1);


let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function(response){
        return response.json();
    })
    .then(function(realData){
        pokemonImage.src = realData.sprites.front_default;
    });
    const catchButton = document.getElementById("js--catch-button");
    const pokemonText = document.getElementById("js--pokemon-text");
    let pokemonGamePlayed = false;
    catchButton.onclick = function(){
        if (pokemonGamePlayed === false){
        let catchNumber = Math.floor(Math.random() * 2);
        if(catchNumber === 0){
           pokemonText.innerText = "Pokemon fled!"
        }
        else{
            pokemonText.innerText = "Pokemon Caught!"
        }
        pokemonGamePlayed = true;
    }
}
const nameText = document.getElementById("js--name")
const inputField = document.getElementById("js--input");

    inputField.onkeyup = function (event) {
        if (event.keyCode === 13) {
            let name = inputField.value;
           /api call naar age/
        let age = fetch("https://api.agify.io/?name=" + name)
        .then(function(response) {
            return response.json();
        })
        .then(function(echteData) {
          nameText.innerText = echteData.age;

        });
        }

}
const movieImg = document.getElementById("js--movie-img");
const desc = document.getElementById("js--desc");

fetch("https://api.tvmaze.com/search/shows?q=Castlevania")
.then(function(response){
    return response.json();
})
.then(function(realData){
    const show = realData[0].show;
    desc.innerHTML = show.summary;
    movieImg.src = show.image.medium;
    movieImg.alt = show.name;
});