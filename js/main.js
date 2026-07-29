var gameData = document.getElementById("gameData")
var MMORBG = document.getElementById("MMORBG")
var SHOOTER = document.getElementById("SHOOTER")
var SAILING = document.getElementById("SAILING")
var PERMADEATH = document.getElementById("PERMADEATH")
var SUPERHERO = document.getElementById("SUPERHERO")
var PIXEL = document.getElementById("PIXEL")
var detailsData = document.getElementById("detailsData")
var links = document.querySelectorAll(".nav-link");



const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "0d21fd365emsh5371cd03db34e19p1f1892jsn192399d5e540",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
  }
};



async function getGames(category = "mmorpg") {
  var response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
  var data = await response.json();
  displayGames(data);
 
}


getGames();

function displayGames(data){
    var cartona = "";
    for (let i = 0; i < data.length; i++) {
        
        cartona += ` <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="card game-card h-100">

                    <img onclick="getGameDetails(${data[i].id})" src="${data[i].thumbnail}" class="card-img-top" alt="Game">

                    <div class="card-body">

                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h5 class="card-title text-white mb-0">${data[i].title}</h5>
                            <span class="badge bg-info">Free</span>
                        </div>

                        <p class="card-text text-secondary">
                         ${data[i].short_description}
                        </p>

                        <div class="d-flex justify-content-between mt-3">
                            <span class="badge bg-dark">${data[i].genre}</span>
                            <span class="badge bg-dark">${data[i].platform}</span>
                        </div>

                    </div>

                </div>
            </div>`
    }
      gameData.innerHTML = cartona;

}



MMORBG.addEventListener("click", function (e) {
    e.preventDefault();
    getGames("mmorpg");
});

SHOOTER.addEventListener("click", function (e) {
    e.preventDefault();
    getGames("shooter");
     console.log("Shooter Click");
});

SAILING.addEventListener("click", function (e) {
    e.preventDefault();
    getGames("sailing");
});

PERMADEATH.addEventListener("click", function (e) {
    e.preventDefault();
    getGames("permadeath");
});

SUPERHERO.addEventListener("click", function (e) {
    e.preventDefault();
    getGames("superhero");

});

PIXEL.addEventListener("click", function (e) {
    e.preventDefault();
    getGames("pixel");
});




async function getGameDetails(id){
    var response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
    var data = await response.json();

    displayDetails(data);

       document.getElementById("games").classList.add("d-none");
    document.getElementById("details").classList.remove("d-none");

}

function displayDetails(data){
     var cartona =` 

     <div class="d-flex justify-content-end mb-4">
    <button class="btn btn-danger" onclick="closeDetails()">
        <i class="fa-solid fa-xmark"></i> Close
    </button>
</div>
    <div class="row align-items-center">

        <div class="col-md-4">
            <img src="${data.thumbnail}" class="w-100 rounded">
        </div>

        <div class="col-md-8 text-white">

            <h2>${data.title}</h2>

            <p><span class="badge bg-info">Category</span> ${data.genre}</p>

            <p><span class="badge bg-info">Platform</span> ${data.platform}</p>

            <p><span class="badge bg-info">Status</span> ${data.status}</p>

            <p>${data.description}</p>

            <a href="${data.game_url}" target="_blank" class="btn btn-outline-warning">
                Show Game
            </a>

        </div>

    </div>`

       detailsData.innerHTML = cartona;
}



function closeDetails(){

    document.getElementById("details").classList.add("d-none");

    document.getElementById("games").classList.remove("d-none");

}




links.forEach(function(link){
    link.addEventListener("click", function(){

        links.forEach(function(item){
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});




