// Dynamic Footer Year
let year = document.getElementById('year');
let date = new Date().getFullYear();
year.innerText = date;

// Mobile Navigation Toggle
const nav = document.querySelector('nav')
const navLi = document.querySelectorAll('.nav-li_s')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
        nav.classList.toggle('active')
})

// this is code is for mobile navigation : after clicking any nav items removing .active makes navbar close
navLi.forEach((li) => {
        li.addEventListener('click', () => {
                nav.classList.remove('active')
        })
})

// JS code for Accordian
const accordianToggle = document.querySelectorAll('.accordian_toggle_button')
const accordianItem = document.querySelectorAll('.accordian-item')
console.log(accordianToggle)

accordianToggle.forEach((toggleBtn, index) => {

        toggleBtn.addEventListener('click', () => {
                accordianItem[index].classList.toggle('active')
        })
})