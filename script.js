//You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  rootElem.innerHTML = "";

  // Part 1 -  All 100 episodes showing.

  let topContainer = document.createElement("div");
  topContainer.classList.add("top-container");
  rootElem.appendChild(topContainer);

  // looping throuhg episode

  for (let i = 0; i < episodeList.length; i++) {
    let movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    topContainer.appendChild(movieCard); // hold image, tiitle , summary

    // Episode Tittle and episode number

    let titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    movieCard.appendChild(titleContainer);

    let episodeName = document.createElement("h3");
    movieCard.appendChild(episodeName);
    episodeName.innerHTML = `${episodeList[i].name} - S${episodeList[i].season
      .toString()
      .padStart(2, "0")}E${episodeList[i].number.toString().padStart(2, "0")}`;

    // Episode image container

    let imageContainer = document.createElement("div");
    imageContainer.classList.add("img-container");
    movieCard.appendChild(imageContainer);

    let episodeImage = document.createElement("img");
    imageContainer.appendChild(episodeImage);
    episodeImage.src = episodeList[i].image.medium;

    // Episode Summary

    let summaryContainer = document.createElement("div");
    summaryContainer.classList.add("summary-container");
    movieCard.appendChild(summaryContainer);

    let episodeSummaryEl = document.createElement("p");
    summaryContainer.appendChild(episodeSummaryEl);
    episodeSummaryEl.innerHTML = episodeList[i].summary;
  }
}

window.onload = setup;

// level 200
// live search

const allEpisodes = getAllEpisodes();

const searchEle = document.getElementById("userInput");
searchEle.addEventListener("input", searchEpisode);

function searchEpisode() {
  const searchInput = searchEle.value.toLowerCase();
  const filterEpisodes = allEpisodes.filter((episode) => {
    if (
      episode.name.toLowerCase().includes(searchInput) ||
      episode.summary.toLowerCase().includes(searchInput)
    ) {
      return episode;
    }
  });

  document.getElementById("number").innerText = filterEpisodes.length;
  makePageForEpisodes(filterEpisodes);
}

// footer

const footerEle = document.getElementById("footer");
const footerLink = document.createElement("a");
footerLink.href = "https://www.tvmaze.com/";

footerLink.innerText = "data from Tvmaze.com";
footerEle.appendChild(footerLink);

//   topContainer.innerHTML = `
//  <h2>${episodeList[i].name} - S${episodeList[i].season
//     .toString()
//     .padStart(2, "0")}E${episodeList[i].number
//     .toString()
//     .padStart(2, "0")}</h2>
//  <img src="${episodeList[i].image.medium}">
//  <P>${episodeList[i].summary}</p>
//   `;
