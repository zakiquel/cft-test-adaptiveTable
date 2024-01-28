const article = [
  {
    film: "Film",
    year: "Year",
    director: "Film director",
    genre: "Film genre",
    rating: "Film rating",
  },
];

const myData = [
  {
    film: "Alien(1979)",
    year: "1979",
    director: "Ridley Scott",
    genre: "Horror, science fiction",
    rating: "8.1",
  },
  {
    film: "Amadeus",
    year: "1984",
    director: "Milos Forman",
    genre: "Drama, biography",
    rating: "8.2",
  },
  {
    film: "Wasteland",
    year: "1973",
    director: "Terrence Malick",
    genre: "Action, drama",
    rating: "7.6",
  },
  {
    film: "Casablanca",
    year: "1942",
    director: "Michael Curtiz",
    genre: "Drama, melodrama",
    rating: "8",
  },
];

const tableArticle = document.getElementById("article");
const tableRows = document.getElementById("myData");
const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");

const buildArticle = (cell) => {
  tableArticle.innerHTML += `<div class="column first">
                                <div class="cell article">${cell.film}</div>
                                <div class="cell article">${cell.year}</div>
                                <div class="cell article">${cell.director}</div>
                                <div class="cell article">${cell.genre}</div>
                                <div class="cell article">${cell.rating}</div>
                              </div>`;
};

const buildTable = (cell) => {
  tableRows.innerHTML += `<div class="column">     
                            <div class="cell" id="first" data-label="Film">${cell.film}</div>
                            <div class="cell" data-label="Year">${cell.year}</div>
                            <div class="cell" data-label="Director">${cell.director}</div>
                            <div class="cell" data-label="Genre">${cell.genre}</div>
                            <div class="cell" data-label="Rating">${cell.rating}</div>
                          </div>`;
};

const removeColor = (item) => {
  item.forEach((e) => {
    e.classList.remove("matched");
  });
};

article.forEach(buildArticle);
myData.forEach(buildTable);

const formHandler = (event) => {
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  const firstColumn = document.querySelectorAll("#first");
  let inputText = searchInput.value.toString().toLowerCase();
  let count = 0;

  if (inputText === "") return;

  removeColor(firstColumn);
  searchInput.value = "";

  for (i = 0; i < firstColumn.length; i++) {
    if (
      firstColumn[i].textContent.toString().toLowerCase().includes(inputText)
    ) {
      firstColumn[i].classList.add("matched");
      count++;
    }
  }

  if (count == 0) {
    info.innerHTML = "Nothing is found";
  } else {
    info.innerHTML = "Number of matches found: " + count.toString();
  }
  document.getElementById("return").style.display = "block";
};

searchForm.addEventListener("submit", formHandler);

function remove() {
  document.getElementById("info").innerHTML = "";
  document.getElementById("return").style.display = "none";
  const firstColumn = document.querySelectorAll("#first");
  removeColor(firstColumn);
}
