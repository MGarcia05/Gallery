baguetteBox.run('.photo-gallery');

document.getElementById('search').addEventListener('keyup', capedCrusader);
let thumbnails = document.getElementsByTagName('img');

function capedCrusader() {
    let userInput = document.getElementById('search').value.toLowerCase();
    let links = document.querySelectorAll('a[data-caption]');
    for (let i = 0; i < links.length; i++) {
        let captions = links[i].getAttribute('data-caption');
        captions = captions.toLowerCase();
        if (captions.includes(userInput)) {
            thumbnails[i].parentNode.style.display = '';
        } else {
            thumbnails[i].parentNode.style.display = 'none';
        }
    }
}
