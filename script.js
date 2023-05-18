//You can edit ALL of the code here

// function for level 100 - 300

function setup() {
  // const allEpisodes = getAllEpisodes();
  // makePageForEpisodes(allEpisodes);
}

window.onload = setup;

// Shwoing all epsiodes - Level 100
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");

  rootElem.innerHTML = "";

  // Display All episodes card on container. - Level 100
  let topContainer = document.createElement("div");
  topContainer.classList.add("top-container");
  rootElem.appendChild(topContainer);

  // looping through episode - create movieCard - Level 100
  for (let i = 0; i < episodeList.length; i++) {
    let movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    topContainer.appendChild(movieCard);

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
    if (episodeList[i].image) {
      episodeImage.src = episodeList[i].image.medium;
    }

    // Episode Summary container
    let summaryContainer = document.createElement("div");
    summaryContainer.classList.add("summary-container");
    movieCard.appendChild(summaryContainer);

    let episodeSummaryEl = document.createElement("p");
    summaryContainer.appendChild(episodeSummaryEl);
    episodeSummaryEl.innerHTML = episodeList[i].summary;
  }
}

// window.onload = setup;

// search for episode in search bar - Level 200
let allEpisodes = getAllEpisodes();

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

//creating select form - Dropdown menu for episode list - Level 300
let selectElm = document.querySelector("#episode-list");
let optionElm = document.createElement("option");
optionElm.innerText = "Show All Episodes...";
selectElm.appendChild(optionElm);

// show episode Name, card on main page when selected and hide other cards. - Level 300
selectElm.addEventListener("change", episodeDropDown);

function episodeDropDown() {
  let selectedEpisode = selectElm.value;
  const filterEpisodes = allEpisodes.filter((episode) => {
    if (episode.name.includes(selectedEpisode)) {
      return episode;
    }
  });

  document.getElementById("number").innerText = filterEpisodes.length;
  makePageForEpisodes(filterEpisodes);
}

//list all episodes of all shows in the format: "S01E01 - Winter is Coming". Level 400
function listAllEpisodes(allEpisodes) {
  if (selectElm) {
    selectElm.innerHTML = "";
  }
  allEpisodes.forEach((episode) => {
    let options = document.createElement("option");
    options.value = episode.name;

    options.innerText = `E${episode.season
      .toString()
      .padStart(2, "0")} - S${episode.number.toString().padStart(2, "0")} - ${
      episode.name
    }`;
    selectElm.appendChild(options);
  });
}

//Option list (dropdown menu) - Level 400
let showListElm = document.getElementById("show-list");
let showOptionElm = document.createElement("option");
showOptionElm.innerText = "Select Show from list";
showListElm.appendChild(showOptionElm);

// change Series in alphbetic order
const allShows = getAllShows();
allShows.sort(function (a, b) {
  return a.name.localeCompare(b.name);
});

// Displaying all Series list - Level 400.
function showAllShows() {
  allShows.forEach((show) => {
    let option = document.createElement("option");
    option.innerText = show.name;
    showListElm.appendChild(option);
  });
}

showAllShows();

// event listner for all Series from option dropwdown - Level 400

showListElm.addEventListener("change", selectAShow);
function selectAShow() {
  const showName = showListElm.value;
  const selectedShow = allShows.filter((show) => showName === show.name);
  const selectedShowId = selectedShow[0].id;

  // fetching all Series from tvmaze API - Level 400

  fetch(`https://api.tvmaze.com/shows/${selectedShowId}/episodes`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then((result) => {
      allEpisodes = result; // double check - make const - no global
      makePageForEpisodes(result);
      listAllEpisodes(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

// footer
const footerEle = document.getElementById("footer");
const paraElem = document.createElement("p");
paraElem.innerText =
  "The data has (originally) come from TVMaze.com, for link back to that site (or the specific episode on that site). See tvmaze.com/api#licensing. or click on link below";
footerEle.appendChild(paraElem);

const footerLink = document.createElement("a");
footerLink.href = "https://www.tvmaze.com/";

footerLink.innerText = "data from Tvmaze.com";
footerEle.appendChild(footerLink);
