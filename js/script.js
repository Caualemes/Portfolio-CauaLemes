//* Scroll Smooth //*

const menuLinks = document.querySelectorAll('.header a[href^="#"]')

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth",
    });
}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 59
    nativeScroll(distanceFromTheTop);
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection)
});

//* Dark Mode //*

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('light-mode')
})

//* fade scroll //*

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.hide-main', 
{
    duration: 1200,
    delay: 100
})

revelar.reveal('.hide-projects', 
    {
        duration: 1200,
    })

revelar.reveal('.hide-about', 
    {
        duration: 1200,
    })