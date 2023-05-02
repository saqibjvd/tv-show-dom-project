//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  // MOVIE CARD - Display episode, Name  - part 1 (100 episodes)

  for (let i = 0; i < episodeList.length; i++) {
    let topContainer = document.createElement("div");
    topContainer.classList.add("top-container");
    rootElem.appendChild(topContainer);

    let movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    topContainer.appendChild(movieCard);

    let episodeName = document.createElement("p");
    movieCard.appendChild(episodeName);
    episodeName.innerText = episodeList[i].name;
  }

  console.log(episodeList);
}

window.onload = setup;
