const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const twitterButton = document.getElementById('twitter');
const nextButton = document.getElementById('new-quote');
const authorText = document.getElementById('author');


let apiQuote = [];



function newQuote(){
    // display random quote from array
   const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
   console.log(quote); 

//    fetch quote on function call
    
    if (quote.author==null) {
        authorText.textContent = "Anonymous"
    } else {
        authorText.textContent = quote.author;
    }

    // quote length styling....
    if (quote.text.length>=110) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuote = await response.json();
        newQuote();
    }catch(error){

    }
}

// on load
getQuotes();

// Tweeet quote

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank')
}

// event listeners

nextButton.addEventListener('click',getQuotes);
twitterButton.addEventListener('click',tweetQuote);