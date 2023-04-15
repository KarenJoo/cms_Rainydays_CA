const apiBase = "http://karenjo.local";
const wooCommerceBase = "/wp-json/wc/store";
const productBase = "/products";
const pagesBase = "/wp-json/wp/v2/pages";

const fullPagesURL = apiBase + pagesBase;
const fullProductURL = "http://karenjo.local/wp-json/wc/store/products";

async function getProducts(products) {
  try {
    const response = await fetch(fullProductURL);
    const products = await response.json();

    return products;
  } catch (error) {
    console.log(error);
  }
}

function createProductHTML(product) {
  const container = document.querySelector(".product-container");
  const productContainer = document.createElement("div");
  productContainer.classList.add("product");
  productContainer.id = product.id;

  const title = document.createElement("h2");
  title.innerText = product.name;
  productContainer.append(title);

  console.log(product.title);

  for (let i = 0; i < product.images.length; i++) {
    const img = document.createElement("img");
    const imgData = product.images[i];
    img.src = imgData.src;
    img.alt = imgData.alt;

    productContainer.append(img);
  }

  container.append(productContainer);
}

function createProductsHTML(products) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    createProductHTML(product);
  }
}

async function productPage() {
  const products = await getProducts();
  createProductsHTML(products);
}

productPage();
