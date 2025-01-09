'use strict';

// adicionando Event on multiple element

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

//Preloading
const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
    loadingElement.classList.add("loaded");
    this.document.body.classList.remove("active");
});

// Mobile nav toggle

const [navTogglers, navLinks, navbar, overley] = [
    document.querySelectorAll("[data-nav-toggler]"),
    document.querySelectorAll("[data-nav-link]"),
    document.querySelector("[data-navbar]"),
    document.querySelector("[data-overlay]")
];

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNav);

const closeNav = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("active");
}

addEventOnElements(navLinks, "click", closeNav);


// Header

const header = document.querySelector("[data-header]");

const activeElementOnScroll = function () {
    if (window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

window.addEventListener("scroll", activeElementOnScroll);


/* text animation efeito hero section*/

const letterBoxes = document.querySelectorAll("[data-letter-effect]");

let activeLetterBoxesIndex = 0;
let lastActiveLetterBoxIndex = 0;
let totalLetterBoxDelay = 0;

const setLetterEffect = function () {
    // loop throush all letter boxes
    for (let i = 0; i < letterBoxes.length; i++) {
        // set initial animation delay
        let letterAnimationDelay = 0;

        // get all character from the current letter box
        const letters = letterBoxes[i].textContent.trim();
        // remove all character from the current letter box
        letterBoxes[i].textContent = "";

        // loop through all letters
        for (let j = 0; j < letters.length; j++) {

            // create span
            const span = document.createElement("span");

            // set animation delay on span
            span.style.animationDelay = `${letterAnimationDelay}`;

            // set th "in" class on the span, if current letter box is active
            // otherwise class is "out"
            if (i === activeLetterBoxesIndex) {
                span.classList.add("in");
            } else {
                span.classList.add("out");
            }

            // pass current letter into span
            span.textContent = letters[j];

            //add space class on span, when current letter contain space
            if (letters[j] === "") span.classList.add("space");

            // pass the span on current letter box
            letterBoxes[i].appendChild(span);

            // skip letterAnimationDelay when loop is in the last index
        }
    }
}