// DOM Elements
const quoteText = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.author');
const newQuoteButton = document.querySelector('.new');
const tweetButton = document.querySelector('.twitter-share-button');

// API URL
const apiUrl = 'http://api.quotable.io/random';

// Function to fetch a new quote
async function fetchQuote() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch the quote');
        }
        const data = await response.json();
        displayQuote(data);
    } catch (error) {
        console.error(error);
        quoteText.textContent = "Oops! Couldn't fetch a quote. Try again.";
        quoteAuthor.textContent = '';
    }
}

// Function to display the quote
function displayQuote(data) {
    quoteText.textContent = `"${data.content}"`; // Quotable API returns 'content'
    quoteAuthor.textContent = `- ${data.author}`; // Quotable API returns 'author'
    tweetButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${data.content}" - ${data.author}`)}`;
}


// Event Listener for New Quote Button
newQuoteButton.addEventListener('click', fetchQuote);

// Fetch an initial quote on page load
fetchQuote();
