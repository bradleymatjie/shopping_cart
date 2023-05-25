// shopping products
let products = [
  {
    id: 'js101d',
    name: 'Mongo jito',
    Ingredients: 'white rum, soda water and mint.',
    img: './images/pexels-denys-gromov-12419165.jpg',
    price: 100
  },
  {
    id: 'js203d',
    name: 'Try Catch Danger',
    Ingredients: 'tequila, strawberries and sugar',
    img: './images/pexels-denys-gromov-8375239.jpg',
    price: 180
  },
  {
    id: 'js306d',
    name: 'Binary & Tonic',
    Ingredients: 'tequila, Grapes, gin',
    img: './images/pexels-timur-weber-8679593.jpg',
    price: 250
  },
  {
    id: 'js404d',
    name: '404 Aftermath',
    Ingredients: 'Tangueray Gin, Proscecco, Lemon',
    img: './images/404.jpg',
    price: 120
  },
  {
    id: 'js503d',
    name: 'Syntax Error',
    Ingredients: 'tequila, lime sugar, Prescocco',
    img: './images/pexels-𝘽𝙡𝙪𝙚-𝘼𝙧𝙖𝙪𝙯-16806422.jpg',
    price: 550
  },
  {
    id: 'js404d',
    name: 'Soft Function',
    Ingredients: 'Tangueray Gin, Proscecco, Peach',
    img: './images/pexels-arina-krasnikova-7377107.jpg',
    price: 350
  },
  {
    id: 'js404d',
    name: 'Camel case Coldbrew',
    Ingredients: 'Tangueray Gin, Proscecco, Lemon',
    img: './images/pexels-denys-gromov-8375105.jpg',
    price: 450
  },
  {
    id: 'js404d',
    name: 'MEAN Margarita',
    Ingredients: 'Vodka, Ice, Tequila',
    img: './images/pexels-kim-van-vuuren-1590154.jpg',
    price: 900
  },
];





// Shopping Cart
let numOfItems = document.getElementById("numOfItems");
let selectedProducts = [];

numOfItems.innerHTML = selectedProducts.length;

// Function to add a product to the cart
function addToCart(product) {
  selectedProducts.push(product);
  updateCart();
  numOfItems.innerHTML = selectedProducts.length;
}

// remove items from Cart
function removeFromCart(productId) {
  selectedProducts = selectedProducts.filter(product => product.id !== productId);
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
        <div class="remove-button" onclick="removeFromCart('${item.id}')">
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
