const searchBar = document.getElementById("search-bar");
const gameIcons = document.querySelectorAll("#game-icons li");

searchBar.addEventListener("input", (event) => {
    const searchText = event.target.value.toLowerCase();

    gameIcons.forEach((gameIcon, index) => {
        const gameName = gameIcon.querySelector("img").alt.toLowerCase();
        if (gameName.includes(searchText)) {
            gameIcon.classList.remove("hidden");
            gameIcon.style.order = -1;
            for (let i = 0; i < index; i++) {
                gameIcons[i].style.order = i;
            }
        } else {
            gameIcon.classList.add("hidden");
        }
    });
});