// Registration Page Form button
let button = document.querySelector('.button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    let rect = button.getBoundingClientRect()
    let x = e.clientX  - rect.left
    let y = e.clientY - rect.top
    //let x = e.clientX - e.target.offsetLeft;
    //let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement('span');
    ripples.classList.add('ripples')
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    button.appendChild(ripples)

    setTimeout(() => {ripples.remove()}, 500)
})