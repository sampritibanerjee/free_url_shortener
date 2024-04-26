let btn = document.getElementById("shorten");

btn.addEventListener('click', short);

// not working 
// async function short() { 
//     let longURL = document.getElementById("longurl").value;
//     let shortURL = document.getElementById("shorturl");

//     const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
//     const data = await result.json();

//     shortURL.value = data.result.short_link;
// }

async function short() {
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longURL)}`);

    if (response.ok) {
        const data = await response.text();
        shortURL.value = data;
    } else {
        console.error('Failed to shorten URL:', response.statusText);
    }
}

let newURL = document.getElementById("shorturl");
let coptButton = document.getElementById("copy");

coptButton.onclick = () => {
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}
