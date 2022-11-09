const typedTextSpan = document.querySelector("#dropdown input");

const textArray = [
    "Try 'Unites Kingdom'",
    "Try 'United States of America'",
    "Try 'Bonaire, Sint Eustatius and Saba'",
    "Try 'United Arab Emirate'",
    "Try 'British Indian Ocean Territory'",
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

const typedTextSpan2 = document.querySelector("#dropdown-2 input");

const textArray2 = [
    "Try 'France'",
    "Try 'India'",
    "Try 'Bangladesh'",
    "Try 'Pakistan'",
    "Try 'Canada'",
];
const typingDelay2 = 200;
const erasingDelay2 = 100;
const newTextDelay2 = 2000; // Delay between current and next text
let textArrayIndex2 = 0;
let charIndex2 = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.placeholder +=
            textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }

}
function type2() {
    if (charIndex2 < textArray2[textArrayIndex2].length) {
        typedTextSpan2.placeholder +=
            textArray2[textArrayIndex2].charAt(charIndex2);
        charIndex2++;
        setTimeout(type2, typingDelay2);
    } else {
        setTimeout(erase2, newTextDelay2);
    }

}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.placeholder = textArray[textArrayIndex].substring(
            0,
            charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }

}
function erase2() {
    if (charIndex2 > 0) {
        typedTextSpan2.placeholder = textArray2[textArrayIndex2].substring(
            0,
            charIndex2 - 1
        );
        charIndex2--;
        setTimeout(erase2, erasingDelay2);
    } else {
        textArrayIndex2++;
        if (textArrayIndex2 >= textArray2.length) textArrayIndex2 = 0;
        setTimeout(type2, typingDelay2 + 1100);
    }

}

document.addEventListener("DOMContentLoaded", function () {
    // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
    if (textArray2.length) setTimeout(type2, newTextDelay2 + 250);
});