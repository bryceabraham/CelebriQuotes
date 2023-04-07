const quoteContainer = document.getElementById("quote-container");
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const pictureElement = document.getElementById("picture");
const newQuoteButton = document.getElementById("new-quote");

async function getQuotes() {
    const response = await fetch("quotes.json");
    const quotes = await response.json();
    return quotes;
}

function getRandomQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote(quoteObj) {
    quoteElement.textContent = quoteObj.quote;
    authorElement.textContent = `- ${quoteObj.author}`;
    pictureElement.src = quoteObj.image;
    pictureElement.alt = `Picture of ${quoteObj.author}`;
}

async function loadQuote() {
    const quotes = await getQuotes();
    const randomQuote = getRandomQuote(quotes);
    displayQuote(randomQuote);
}

newQuoteButton.addEventListener("click", loadQuote);

// Load an initial quote on page load
loadQuote();
