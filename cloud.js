document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        document.getElementById('formMessage').textContent = 'Please fill in all fields.';
        document.getElementById('formMessage').style.color = 'red';
        return;
    }

    // Simulate a successful submission
    document.getElementById('formMessage').textContent = 'Form submitted successfully!';
    document.getElementById('formMessage').style.color = 'green';

    // Reset form
    this.reset();
});
