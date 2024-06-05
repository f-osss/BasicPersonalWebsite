let heading = document.querySelector('h1');

function hovering() {
    let h = document.querySelector('h1')
    h.textContent = 'Stop hovering over me'
}

heading.addEventListener('mouseover', hovering)


function doneHovering(){
    let h = document.querySelector('h1')
    h.textContent = "HI! I'm Faiza Salami"
}
heading.addEventListener('mouseleave',doneHovering)