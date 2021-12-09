let apiURL = 'https://swapi.co/api/people/';
let xhr = new XMLHttpRequest;
xhr.open('GET', apiURL, true);
xhr.send();
xhr.onload = function () {
    let xhrResponse =
        JSON.parse(xhr.responseText);
    console.log(xhrResponse);
}

fetch(apiURL)
    .then(response => response.json())
    .then(data => console.log(data));
