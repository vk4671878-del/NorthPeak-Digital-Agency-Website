// Contact Form Validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields.");
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("🎉 Thank you! Your message has been sent successfully.");

    form.reset();
});

// Navbar Shadow on Scroll

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 20) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Fade-in Animation

const cards = document.querySelectorAll(".card, .price-card, .testimonial-box");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});

// Loading Screen

window.addEventListener("load", function(){

    setTimeout(function(){

        document.getElementById("loader").style.opacity = "0";
        document.getElementById("loader").style.visibility = "hidden";

    },1500);

});

/*
Typing Animation
*/

const words = [

"Web Development",

"UI / UX Design",

"E-Commerce",

"SEO Services",

"Digital Marketing"

];

let wordIndex = 0;
let letterIndex = 0;

const typing = document.getElementById("typing");

function type(){

if(letterIndex < words[wordIndex].length){

typing.textContent += words[wordIndex].charAt(letterIndex);

letterIndex++;

setTimeout(type,100);

}
else{

setTimeout(erase,1800);

}

}

function erase(){

if(letterIndex>0){

typing.textContent=words[wordIndex].substring(0,letterIndex-1);

letterIndex--;

setTimeout(erase,50);

}
else{

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

setTimeout(type,300);

}

}

type();
