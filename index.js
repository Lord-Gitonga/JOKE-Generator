const myJokes = document.getElementById('joke')
const btn = document.getElementById('btn')
const jokeUrl = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas';

function displayJokes () {
    myJokes.classList.remove('fade');
    fetch(jokeUrl)
    .then(resp=>resp.json())
    .then(data => {
        myJokes.textContent = data.joke;
        myJokes.classList.add('fade')
    });
}
btn.addEventListener('click', displayJokes);
displayJokes();