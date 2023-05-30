// shopping products
let products = [
  {
    id: 'js101d',
    name: 'Mongo jito',
    Ingredients: 'white rum, soda water and mint.',
    img: './images/pexels-denys-gromov-12419165.jpg',
    quantity: 1,
    price: 1000
    },
  {
    id: 'js203d',
    name: 'Try Catch Danger',
    Ingredients: 'tequila, strawberries and sugar',
    img: './images/pexels-denys-gromov-8375239.jpg',
    quantity: 1,
    price: 1800
  },
  {
    id: 'js306d',
    name: 'Binary Bubbly',
    Ingredients: 'tequila, Grapes, gin',
    img: './images/pexels-kristina-paukshtite-1280364.jpg',
    quantity: 1,
    price: 2500

  },
  {
    id: 'js404d',
    name: '404 Aftermath',
    Ingredients: 'Tangueray Gin, Proscecco, Lemon',
    img: './images/404.jpg',
    quantity: 1,
    price: 1200
  },
  {
    id: 'js306d',
    name: 'Python tonic',
    Ingredients: 'gin, tonic and cranberry',
    img: './images/COCKTAIL.jpeg',
    quantity: 1,
    price: 9500
  },
  {
    id: 'js306d',
    name: 'Binary & Tonic',
    Ingredients: 'tequila, Grapes, gin',
    img: './images/pexels-timur-weber-8679593.jpg',
    quantity: 1,
    price: 2500
  },
  {
    id: 'js503d',
    name: 'Syntax Error',
    Ingredients: 'tequila, lime sugar, Prescocco',
    img: './images/pexels-𝘽𝙡𝙪𝙚-𝘼𝙧𝙖𝙪𝙯-16806422.jpg',
    quantity: 1,
    price: 5500
  },
  {
    id: 'js404d',
    name: 'Soft Function',
    Ingredients: 'Tangueray Gin, Proscecco, Peach',
    img: './images/pexels-arina-krasnikova-7377107.jpg',
    quantity: 1,
    price: 3500
  },
  {
    id: 'js404d',
    name: 'Camel case Coldbrew',
    Ingredients: 'Tangueray Gin, Proscecco, Lemon',
    img: './images/pexels-denys-gromov-8375105.jpg',
    quantity: 1,
    price: 4500
  },
  {
    id: 'js404d',
    name: 'MEAN Margarita',
    Ingredients: 'Vodka, Ice, Tequila',
    img: './images/pexels-kim-van-vuuren-1590154.jpg',
    quantity: 1,
    price: 1900
  },
  {
    id: 'js404d',
    name: 'Ruby On Railz',
    Ingredients: 'Vodka, Strawberry and Tequila',
    img: './images/pexels-jacob-thomas-6060953.jpg',
    quantity: 1,
    price: 1500
  },
  {
    id: 'js404d',
    name: 'Back-end Drama',
    Ingredients: 'Vodka, Strawberry and Tequila',
    img: './images/pexels-roman-odintsov-6422054.jpg',
    quantity: 1,
    price: 1590
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

function increment(productId) {
  const product = selectedProducts.find(item => item.id == productId);
  product.quantity++;
  console.log(selectedProducts);
  updateCart();
}

function decrement(productId) {
  const product = selectedProducts.find(item => item.id == productId);
  console.log(selectedProducts);
  if (product.quantity > 1) {
    product.quantity--;
    updateCart();
  }
}
// Function to update the cart display
// ...

function updateCart() {
  let cartContainer = document.querySelector(".cart-container");
  cartContainer.innerHTML = "";

  let subtotal = 0; // Initialize subtotal

  selectedProducts.map(item => {
    // Multiply price by quantity
    let totalPrice = item.price * item.quantity;
    subtotal += totalPrice; // Add totalPrice to the subtotal

    let cartItem = `
      <div class="cart-item">
        <img src=${item.img} alt="cart item">
        <div>
          <h2 class="price">R${totalPrice}</h2>
          <h3 class="name">${item.name}</h3>
          <p class="ingredients">${item.Ingredients}</p>
        </div>
        <div class="quantity">
          <span class="subtract" onclick="decrement('${item.id}')">-</span>
          <h2 id="totprice">${item.quantity}</h2>
          <span class="add" onclick="increment('${item.id}')">+</span>
        </div>
        <div class="remove-button" onclick="removeFromCart('${item.id}')">
          Remove
        </div>
      </div>`;

    cartContainer.innerHTML += cartItem;
  });

  // Update subtotal
  let subtotalElement = document.getElementById("subtotal");
  subtotalElement.innerHTML = `R${subtotal}`;

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


function calculateSubtotal() {
  let subtotal = selectedProducts.reduce((total, product) => {
    return total + product.price;
  }, 0);

  let subtotalElement = document.getElementById("subtotal");
  subtotalElement.innerHTML = `R${subtotal}`;
}

const form = document.querySelector(".login_container-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("username").value;
  document.querySelector(".login").innerHTML = user;
})
