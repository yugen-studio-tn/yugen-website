// Contact Form Handler
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = {};

        // Convert FormData to object
        for (let [key, value] of formData.entries()) {
            if (key === 'services') {
                if (!data[key]) data[key] = [];
                data[key].push(value);
            } else {
                data[key] = value;
            }
        }

        // Show loading state
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'SENDING...';
        submitBtn.disabled = true;

        try {
            // Web3Forms API Endpoint
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // Success
                formMessage.textContent = '✓ Message sent successfully! We\'ll get back to you within 24 hours.';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Error
            formMessage.textContent = '✗ Something went wrong. Please try again or email us directly.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
        } finally {
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    });
});
