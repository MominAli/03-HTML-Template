
// Mobile Navigation Toggle
const nav = document.querySelector('nav')
const navLi = document.querySelectorAll('.nav_lists')
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


// scroll-activated sticky navigation

const handleScroll = () => {
        const navbar = document.querySelector('.navbar')
        let lastScroll = 0
        window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset

                if (currentScroll <= 0) {
                        navbar.classList.remove('scroll-up')
                }
                if (currentScroll > lastScroll && !navbar.classList.contains("scroll-down")) {
                        navbar.classList.add('scroll-down')
                        navbar.classList.remove('scroll-up')
                }
                if (currentScroll < lastScroll && navbar.classList.contains("scroll-down")) {
                        navbar.classList.add('scroll-up')
                        navbar.classList.remove('scroll-down')
                }

                lastScroll = currentScroll
        })
}
handleScroll()



// Back to top button
let backtotop = document.querySelector('.back-to-top')
window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
                backtotop.classList.add('active')
        } else {
                backtotop.classList.remove('active')
        }
})

// Dynamic Footer Year
let year = document.getElementById('year');
let date = new Date().getFullYear();
year.innerText = date;