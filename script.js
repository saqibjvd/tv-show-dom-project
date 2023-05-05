//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  console.log(episodeList);
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  // Part 1 - 100 episodes

  let topContainer = document.createElement("div");
  topContainer.classList.add("top-container");
  rootElem.appendChild(topContainer);

  // looping throuhg episode

  for (let i = 0; i < episodeList.length; i++) {
    let movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    topContainer.appendChild(movieCard); // hold image, tiitle , summary

    // Episode Tittle and episode number

    let episodeName = document.createElement("p");
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

//   topContainer.innerHTML = `
//  <h2>${episodeList[i].name} - S${episodeList[i].season
//     .toString()
//     .padStart(2, "0")}E${episodeList[i].number
//     .toString()
//     .padStart(2, "0")}</h2>
//  <img src="${episodeList[i].image.medium}">
//  <P>${episodeList[i].summary}</p>
//   `;
