let customers = document.getElementsByClassName('customer');
let count = customers.length;
let active = 0;
let width = customers[0].clientWidth; // Assuming all customers block have same width

let leftArrow = document.getElementById('left');
let rightArrow = document.getElementById('right');


let moveRight = () => {
    if(active < count - 1) active++;
    document.getElementById('customers').style.transform = `translate(-${active*width}px)`;
}
let moveLeft = () => {
    if(active > 0) active--;
    document.getElementById('customers').style.transform = `translate(-${active*width}px)`;
}

rightArrow.addEventListener('click',moveRight);
leftArrow.addEventListener('click', moveLeft);
