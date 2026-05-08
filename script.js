// Scroll Animation
const hiddenElements = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    hiddenElements.forEach((el) => {

        const position = el.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            el.classList.add("show");
        }

    });

});

// Typing Effect
const text = "Computer Engineering Student";
let index = 0;

function typeEffect(){

    const typing = document.getElementById("typing");

    if(index < text.length){
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect,100);
    }

}

window.onload = typeEffect;