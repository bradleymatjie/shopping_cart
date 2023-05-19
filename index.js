// shopping products
let products = [
  {
    id: 1,
    name: 'Good old C++',
    Ingredients: 'white rum, sugar, lime juice, soda water and mint.',
    img: './images/c++.jpg',
    price: 40,
  },
  {
    id: 2,
    name: 'JS On The Rocks',
    Ingredients: 'tequila, lime and sugar',
    img: './images/js.jpg',
    price: 40
  }
]


products.map(product => {
  let code = `<div class="product">
    <img src=${product.img} id="img" alt="product img">
    <div>
    <h2 id="name" class="product-name">${product.name}</h2>
    <h3 class="product-ingredients">${product.Ingredients}</h3>
    <div class="product-pricing">
      <p class="product-price" id="price">R${product.price}</p>
      <p class="product-id">Product Id: ${product.id}</p>
    </div>
      <button id="addToCart" class="product-toCart">Add to cart</button>
    </div>
    </div>
    </div>`;
  
    document.querySelector(".products-container").innerHTML = (code);
})