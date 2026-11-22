
    // Initialize EmailJS
    emailjs.init({
        publicKey: "ADn_NVjqTyhOEKBtu"
    });

    // Contact Form Submission
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        console.log("Form submitted!");
        event.preventDefault();

        emailjs.sendForm(
            "service_olgfzve",
            "template_ilzoknz",
            this
        ).then(
            function() {
                alert("Message sent successfully!");
                document.getElementById("contact-form").reset();
            },
            function(error) {
                alert("Failed to send message. Please try again.");
                console.log("EmailJS Error:", error);
            }
        );
    });
console.log("JavaScript file connected successfully!");
console.log("Contact form found:",
document.getElementById("contact-form"));
