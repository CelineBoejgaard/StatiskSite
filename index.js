const container = document.querySelector(".grid_1-6");
const endpoint = "https://kea-alt-del.dk/t7/api/categories";

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then(showData);
}

function showData(data) {
  console.log(data);
  let markup = "";
  data.forEach(
    (element) =>
      (markup += `<a href="productliste.html?category=${element.category}">${element.category}</a>`),
  );
  container.innerHTML = markup;
}

getData();
