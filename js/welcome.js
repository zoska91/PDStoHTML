const welcome = document.querySelector('.welcome');
const closeWelcomeBtn = document.querySelector('.close');


const close = () => {
    welcome.classList.add('hidden');
    console.log('ok')
}

closeWelcomeBtn.addEventListener('click', close)