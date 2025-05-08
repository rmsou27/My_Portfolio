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

    // Show or hide the Back to Top button based on scroll position
    window.onscroll = function () {
        const backToTopButton = document.getElementById('back-to-top');
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    // Scroll to the top of the page when the button is clicked
    window.scrollToTop = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});
