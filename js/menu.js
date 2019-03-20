const slide = ()=> {

    const svg = document.querySelector('svg');
    const nav = document.querySelector('nav');

    svg.addEventListener('click', ()=> {
        nav.classList.toggle('show');
    });
}

slide();