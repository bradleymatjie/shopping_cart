// shopping products
let products = [
  {
    id: 'js101d',
    name: 'Good old C++',
    Ingredients: 'white rum, sugar, lime juice, soda water and mint.',
    img: './images/c++.jpg',
    price: 87.50
  },
  {
    id: 'js203d',
    name: 'JS On The Rocks',
    Ingredients: 'tequila, lime and sugar',
    img: './images/js.jpg',
    price: 73.20
  },
  {
    id: 'js306d',
    name: 'Soft Function',
    Ingredients: 'tequila, Lemon, Seasonal Tea',
    img: './images/function.jpg',
    price: 64.87
  },
  {
    id: 'js404d',
    name: '404 Aftermath',
    Ingredients: 'Tangueray Gin, Proscecco, Lemon, Seasonal Tea',
    img: './images/404.jpg',
    price: 91.90
  },
  {
    id: 'js503d',
    name: 'Syntax Error',
    Ingredients: 'tequila, lime sugar, Prescocco, sugar',
    img: './images/yellow-cocktail.webp',
    price: 95.50
  }
];

// Shopping Cart
let numOfItems = document.getElementById("numOfItems");
let selectedProducts = [];

numOfItems.innerHTML = selectedProducts.length;

// Function to add a product to the cart
function addToCart(product) {
  selectedProducts.push(product);
  console.log("Selected Products:", selectedProducts);
  updateCart();
  numOfItems.innerHTML = selectedProducts.length;
}

// Function to update the cart display
function updateCart() {
  let cartContainer = document.querySelector(".cart-container");
  cartContainer.innerHTML = "";

  selectedProducts.map(item => {
    let cartItem = `
      <div class="cart-item">
        <img src=${item.img} alt="cart item">
        <div>
          <h2 class="price">${item.price}</h2>
          <h3 class="name">${item.name}</h3>
          <p class="ingredients">${item.Ingredients}</p>
        </div>
        <div class="quantity">
          <label for="numofItem">Quantity</label>
          <input type="number" name="numofItem" id="quantity">
        </div>
        <div class="remove-button">
          Remove
        </div>
      </div>`;

    cartContainer.innerHTML += cartItem;
  });
}

// DISPLAYING THE PRODUCTS IN THE BROWSER
products.map(product => {
  let item = `
    <div class="product">
      <img src=${product.img} id="img" alt="product img">
      <div>
        <h2 id="name" class="product-name">${product.name}</h2>
        <h3 class="product-ingredients">${product.Ingredients}</h3>
        <div class="product-pricing">
          <p class="product-price" id="price">R${product.price}</p>
          <p class="product-id">Product Id: ${product.id}</p>
        </div>
        <button class="product-toCart">Add to cart</button>
      </div>
    </div>`;

  document.querySelector(".products-container").innerHTML += item;
});

// Add event listeners to the "Add to cart" buttons
let addToCartButtons = document.querySelectorAll(".product-toCart");
addToCartButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    addToCart(products[index]);
  });
});
