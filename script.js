// HEADING
let heading = document.querySelector('h1');

function hovering() {
    let h = document.querySelector('h1')
    h.textContent = 'Stop hovering over me'
}

heading.addEventListener('mouseover', hovering)


function doneHovering() {
    let h = document.querySelector('h1')
    h.textContent = "HI! I'm Faiza Salami"
}

heading.addEventListener('mouseleave', doneHovering)

//IMAGES
let images = document.querySelectorAll('img')

function enlargeImage(event) {

    let image = event.target;
    image.style.transform = 'scale(1.5)';
    image.style.transition = 'transform 0.25s ease';
}

function backToNormal(event) {
    let image = event.target;
    image.style.transform = 'scale(1)';
}

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', enlargeImage)
    images[i].addEventListener('mouseleave', backToNormal)
}

