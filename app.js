// Header part logic 
function toggleMenu() {
    var menu = document.querySelector(".right ul");
    menu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Simulating form submission
        console.log("Form Submitted:", { name, email, message });
        alert("Your message has been sent successfully!");

        // Reset form fields
        form.reset();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});