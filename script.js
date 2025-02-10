// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from actually submitting (for demo purposes)

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation check (just an example)
    if(name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
    } else {
        alert("Please fill out all fields.");
    }

    // Clear form fields after submission
    document.getElementById("contact-form").reset();
});
