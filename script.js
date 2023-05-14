//You can edit ALL of the code here

// function for level 100 - 300

// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

// Level 350
function setup() {
  fetch("https://api.tvmaze.com/shows/82/episodes")
    .then(function (response) {
      return response.json();
    })
    .then((result) => {
      makePageForEpisodes(result);
    });
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  rootElem.innerHTML = "";

  // Part 1 -  Level 100 all episodes showing.
  let topContainer = document.createElement("div");
  topContainer.classList.add("top-container");
  rootElem.appendChild(topContainer);

  // looping through episode
  for (let i = 0; i < episodeList.length; i++) {
    let movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    topContainer.appendChild(movieCard);

    // Episode Tittle and episode number .....
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
// search for episode in search bar
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

// level 300
// creating select form - Dropdown menu for episode list
let selectElm = document.querySelector("#episode-list");
let optionElm = document.createElement("option");
optionElm.innerText = "All Episodes.";
selectElm.appendChild(optionElm);

// list all episodes in the format: "S01E01 - Winter is Coming"
allEpisodes.forEach((episode) => {
  let options = document.createElement("option");
  options.value = episode.name;
  options.innerText = `${episode.season
    .toString()
    .padStart(2, "0")}E${episode.number.toString().padStart(2, "0")} - ${
    episode.name
  }`;
  selectElm.appendChild(options);
});

// take user directly to episode in the list when selected from dropdown menu.
// Bonus: if you prefer, when the select is used, ONLY show the selected episode. If you do this, be sure to provide a way for the user to see all episodes again.
selectElm.addEventListener("change", searchDropDown);

function searchDropDown() {
  let selectedEpisode = selectElm.value;

  const filterEpisodes = allEpisodes.filter((episode) => {
    if (
      episode.name.includes(
        selectedEpisode || episode.summary.includes(selectedEpisode)
      )
    ) {
      return episode;
    } else if (selectedEpisode == optionElm.innerText) {
      return allEpisodes;
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

//.......OTHER CODE EXAMPLE.........

//   topContainer.innerHTML = `
//  <h2>${episodeList[i].name} - S${episodeList[i].season
//     .toString()
//     .padStart(2, "0")}E${episodeList[i].number
//     .toString()
//     .padStart(2, "0")}</h2>
//  <img src="${episodeList[i].image.medium}">
//  <P>${episodeList[i].summary}</p>
//   `;
