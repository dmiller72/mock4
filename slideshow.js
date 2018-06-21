let customers = document.getElementById('customers');
let leftArrow = document.getElementById('left');
let rightArrow = document.getElementById('right');


let moveRight = ()=>{
    customers.style.transform = 'translate(-952px)';
}
let moveLeft = ()=>{
    customers.style.transform = 'translate(952px)';
}


rightArrow.addEventListener('click',moveRight);
leftArrow.addEventListener('click', moveLeft); 

