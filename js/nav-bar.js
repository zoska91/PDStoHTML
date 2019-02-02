const bar = document.querySelector('.bar');

const navToggle = () => {

    const barLines = [...document.querySelectorAll('.bar-line')];

    const nav = document.querySelector('.nav-bar');

    barLines.forEach(line => {
        line.classList.toggle('bar-line-on')
    });

    nav.classList.toggle('nav-bar-on')

}

bar.addEventListener('click', navToggle)