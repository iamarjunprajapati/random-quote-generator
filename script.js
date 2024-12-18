let url = 'https://dummyjson.com/quotes/random';
let randomQuote = document.querySelector('#random-quote');

async function getQuote() {
    fetch(url)
        .then(res => {
            return res.json();
        }).then(data => {
            console.log(data.quote);
            randomQuote.innerText = data.quote;
        }).catch(error => {
            console.log('some erro occured :', error);
        })
}