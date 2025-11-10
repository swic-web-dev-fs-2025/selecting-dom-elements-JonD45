import "./style.css";

document.querySelector("#app").innerHTML = `
  <h1 class="text-3xl font-bold underline">
    Hello Vite!
  </h1>
`;

//Select the main header by ID and log it.
const mainHeader = document.querySelector("#main-header");
console.log(mainHeader);

//Select all links inside .navbar using querySelectorAll and log how many there are.
const navLinks = document.querySelectorAll(".navbar a");
console.log(`Number of navigation links: ${navLinks.length}`);

// ⭐ Select internal links (those starting with /) and append " [internal]" to their text.


const internalLinks = document.querySelectorAll('a[href^="/"]');
internalLinks.forEach(link => {
  link.textContent += " [internal]";
});

// Select all required inputs and add a yellow outline (style.outline = "2px solid gold").
const requiredInputs = document.querySelectorAll("input[required]");
requiredInputs.forEach(input => {
  input.style.outline = "2px solid gold";
});
// Select all .card elements, loop through them, and add a data-viewed="true" attribute to each.
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.setAttribute("data-viewed", "true");
});
//Select the product with data-product-id="2" and change its price to "$24.99".
const productB = document.querySelector('[data-product-id="2"] .price');
productB.textContent = "$24.99";