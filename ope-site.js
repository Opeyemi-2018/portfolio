let navBar = document.querySelector(".nav-bar");
let openBtn = document.querySelector(".open");
let closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", ()=>{
    navBar.classList.add("active")
})

closeBtn.addEventListener("click", ()=>{
    navBar.classList.remove("active")
})

/*-------------js for sticky navbar---------------*/

window.addEventListener("scroll", ()=>{
    let header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

/*-------------scroll reveal ----------------*/

const sr = ScrollReveal ({
    distance: "45px",
    duration: 2700,
    reset: true
});

sr.reveal(".home-content h3", {delay:350, origin: "left"})
sr.reveal(".home-content h2", {delay:350, origin: "right"})
sr.reveal(".home-content p", {delay:350, origin: "left"})
sr.reveal(".service-col", {delay:350, origin: "bottom"})
sr.reveal(".about-col p" , {delay:350, origin: "right"})
sr.reveal(".about-col img", {delay:350, origin: "left"})
sr.reveal(".testimonial", {delay:350, origin: "top"})
/*------------------testimonial--------------------------*/

let testimonials = [
    {
        name: "Micheal Ikiebe",
        photo: "images/micheal.jpg",
        text: "I have been able to grow my business with his help of software, he's very hardworking",
    },

    {
        name: "Ilesanmi Victor",
        photo: "images/ilesanmi.jpg",
        text: "I have been able to grow my business with his help of software, he's very hardworking",
    },

    {
        name: "Johnpaul",
        photo: "images/j-p.jpg",
        text: "I have been able to grow my business with his help of software, he's very hardworking",
    },

    {
        name: "Ifakorede Victor",
        photo: "images/victor.jpg",
        text: "I have been able to grow my business with his help of software, he's very hardworking",
    },

];

let imgEl = document.querySelector(".img");
let textEl = document.querySelector(".text");
let userNameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    let {name,photo,text} = testimonials[idx];
    imgEl.src = photo;
    textEl.innerText = text;
    userNameEl.innerText = name;
    idx ++

    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(() =>{
        updateTestimonial()
    }, 2000)
}

/*-------------------smoooth scroll-----------------------*/

var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 1000,
    speedAsDuration: true
})