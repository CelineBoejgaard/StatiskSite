const kategori = new URLSearchParams(window.location.search).get("category");

const container = document.querySelector(".galleri");
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${kategori}`;

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}
function showData(json) {
  let markup = "";
  json.forEach((product) => {
    console.log(product);
    markup += `
      <article>
        <a href="product.html">
         
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
            alt=""
          />
          <h2>${product.productdisplayname}</h2>
          <p><span>${product.brandname}</span></p>
          <p>pris:  <span>${product.price}</span></p>
        </a>
      </article>`;
  });
  container.innerHTML = markup;
}
getData();
