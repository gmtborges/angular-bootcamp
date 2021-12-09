let apiURL = 'https://swapi.co/api/people/';
let xhr = new XMLHttpRequest;
xhr.open('GET', apiURL, true);
xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
xhr.send();
xhr.onload = function () {
    let xhrResponse =
        JSON.parse(xhr.responseText);
    console.log(xhrResponse);
}

fetch(apiURL, { headers: { 'Access-Control-Allow-Origin': '*' } })
    .then(response => response.json())
    .then(data => console.log(data));
