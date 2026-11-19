
const roleHeading = document.querySelector("h2");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        roleHeading.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        roleHeading.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentRole.length) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}


typeEffect();



const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const senderName = contactForm.querySelector('input[type="text"]').value;
    alert("Thank you, " + senderName + "! Your message has been sent to Noor Safeya Sultana.");

    contactForm.reset(); 
});



const emailItem = document.querySelector(".Contact-details div:first-child");
emailItem.style.cursor = "pointer";
emailItem.title = "Click to copy email";

emailItem.addEventListener("click", function () {
    navigator.clipboard.writeText("noorsafeya1@gmail.com");
    alert("Email copied: noorsafeya1@gmail.com");
});