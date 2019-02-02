const arrowUp = document.querySelector('.arrow-up');
const arropDown = document.querySelector('.arrow-down');
const txt = document.querySelector('.amound-people p')

let i = 0;

const morePeople = () => {
    i++
    txt.textContent = i
}


const lessPeople = () => {
    if (i === 0) {
        return
    } else {
        i--
        txt.textContent = i
    }
}
arrowUp.addEventListener('click', morePeople);
arropDown.addEventListener('click', lessPeople);