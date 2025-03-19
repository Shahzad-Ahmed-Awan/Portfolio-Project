// Select the single elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Debug: Check if elements are selected correctly
console.log(menuIcon, navbar, navLinks);

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
};

menuIcon.addEventListener('click', () => {
    // Debug: Check if click event is triggered
    console.log('Menu icon clicked');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});


//Lab 12 Requirements

// Show alert message when the page loads
window.onload = function () {
    alert("Welcome to my portfolio! Feel free to explore.");
};

// Change the color of the "Contact" button when clicked
document.addEventListener("DOMContentLoaded", function () {
    let contactButton = document.querySelector(".btn-group .btn");

    if (contactButton) {
        contactButton.addEventListener("click", function () {
            this.style.backgroundColor = "#FFDD44"; // Yellow neon shade
            this.style.color = "black"; // Ensure text remains readable
        });
    }
});

// Form validation
document.addEventListener("DOMContentLoaded", function () {
    let contactForm = document.querySelector(".contact form");

    if (!contactForm) {
        console.log("Form not found! Check your HTML structure.");
        return;
    }

    console.log("Form found! Adding validation...");
    
    contactForm.addEventListener("submit", function (event) {
        let name = contactForm.querySelector('input[placeholder="Full Name"]').value.trim();
        let email = contactForm.querySelector('input[placeholder="Email"]').value.trim();
        let phone = contactForm.querySelector('input[placeholder="Phone Number"]').value.trim();
        let subject = contactForm.querySelector('input[placeholder="Subject"]').value.trim();
        let message = contactForm.querySelector('textarea').value.trim();

        if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
            alert("Please fill in all the fields.");
            event.preventDefault(); // Stop form submission
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        } else if (!/^\d{11}$/.test(phone)) {  
            alert("Please enter a valid 11-digit phone number.");
            event.preventDefault();
        } else {
            //  Success Message when form is valid
            alert("Your message has been sent successfully!");
            console.log("Form is valid! Ready for submission.");
        }
    });
});