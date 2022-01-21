const btnMobile = document.getElementById('btn-mobile');

function toogleMenu() {

    const nav = document.getElementById('nav');
    nav.classList.toogle('active');

}

btnMobile.addEventListener('click', toggleMenu);