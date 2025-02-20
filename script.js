const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Developer", "Designer", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentWord = words[wordIndex];
    let currentChars = currentWord.slice(0, charIndex);
    typedText.textContent = currentChars;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        if (!isDeleting) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); // Pause before deleting
        } else {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Update word index only when deleting is done
            setTimeout(typeEffect, 1000); // Pause before typing next word
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500); // Delay start
});
