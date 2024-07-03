
const newTweet = document.querySelector('.button-btn');
const blockquote = document.querySelector('.quote')
const author = document.querySelector('.author');
const tweet = document.querySelector('.tweetLink');

const api_url = 'https://api.quotable.io/random';

        newTweet.addEventListener('click', () => {
            
        const quoteGenerate = async(url) => {
            let response = await fetch(url);
            let data = await response.json();
            console.log(data)
            blockquote.innerHTML = data.content;
            author.innerHTML = data.author;

        }

        quoteGenerate(api_url);

})

tweet.addEventListener('click', () => {
    window.open( href="https://twitter.com/intent/tweet?text=" + blockquote.innerHTML + "-----by " + author.innerHTML, 'Tweet Window', 'width=600 height=300');
})