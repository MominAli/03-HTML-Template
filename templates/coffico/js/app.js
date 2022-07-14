
// Js code for testimonal slider
const prev = document.querySelector('.testimonial-left');
const next = document.querySelector('.testimonial-right');
const items = document.querySelectorAll('.slider');
const itemLength = items.length;

let count = 0

const showPreviousItem = () => {
    items[count].classList.remove('active');

    if (count > 0) {
        count--;
    } else {
        count = itemLength - 1;
    }
    console.log(count);

    items[count].classList.add('active')
}

const showNextItem = () => {
    items[count].classList.remove('active');

    if (count < itemLength - 1) {
        count++;
    } else {
        count = 0;
    }
    console.log(count);

    items[count].classList.add('active')
}


prev.addEventListener('click', showPreviousItem);
next.addEventListener('click', showNextItem);



// footer year
let year = document.getElementById('year');
let date = new Date().getFullYear();
year.innerText = date;