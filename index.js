const welcome = document.getElementById("welcome");
const home = document.getElementById("home");
const cart = document.getElementById("cart");
const form = document.querySelector("form");
const userEmail = document.getElementById("usermail");
const formActive = document.getElementById("formActive");
const numOfItems = document.getElementById("numOfItems");

const collection = [];

numOfItems.innerHTML = `${collection.length}`; 

form.style.display = "none";

form.addEventListener("submit", (event) => {
  event.preventDefault();
})

formActive.addEventListener("click", () => {
  form.style.display = "flex";
})

home.style.display = "none";
cart.style.display = "none";

function homeFunc() {
  home.style.display = "flex";
  cart.style.display = "none";
  welcome.style.display = "none";
}

function cartFunc() {
  home.style.display = "none";
  cart.style.display = "flex";
  welcome.style.display = "none";
}

function userInfo() {
  homeFunc();
  user = {
    name: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  }

  document.getElementById("usermail").innerHTML = `${user.email}`;
  document.getElementById("userName").innerHTML = `Welcome ${user.name}`;
}