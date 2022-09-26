const searchContainer = document.querySelector(".search-input");
const searchInput = document.querySelector("#search");
const autoCompleteContainer = document.querySelector(".autocom-box");
const resultContainer = document.querySelector("results-container");
let inputVal;
const listSearch = document.querySelector("#browsers");
const showResults = (data) => {
  if (data.length > 0) {
    listSearch.innerHTML = ``;
    data.forEach((e) => {
      listSearch.innerHTML += `<option value="${e.first_name}">`;
    });
    return;
  }
};

const searchFun = () => {
  fetch(`/search?q=${searchInput.value}`)
    .then((response) => response.json())
    .then((data) => {
      showResults(data);
    })
    .catch(console.log);
};

searchInput.oninput = searchFun;
