const imgElement = document.querySelector("img");
const quoteElement = document.getElementById("quote");

const imgs = ["img1.webp", "img2.webp", "img3.webp"];
const img = imgs[Math.floor(Math.random() * imgs.length)];
imgElement.src = `imgs/${img}`;

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.kanye.rest/")
        .then(data => data.json())
        .then(quote => {
            quoteElement.textContent = `"${quote.quote}"`;
        })
});