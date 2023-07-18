var quotes = ["The best revenge is massive success", "Do not take life too seriously. You will not get out alive.","You miss 100% of the shots you don't take.","It's not what happens to you, but how you react to it that matters.","Do not take life too seriously. You will not get out alive.","The best revenge is massive success.","Resentment is like drinking poison and waiting for your enemies to die."];
var author = ["--Epictetus", "--Elbert Hubbard", "--Frank Sinatra", "--Wayne Gretzy", "--Nelson Mandela","--George gamil","--ahmed ali"];
function addNewQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);

    document.getElementById('quote').innerHTML = quotes[randomNumber];
    document.getElementById('author').innerHTML = author[randomNumber];
}
