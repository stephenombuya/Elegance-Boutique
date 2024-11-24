// Select DOM elements
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');

// Dark/Light Mode Toggle
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);

    // Update toggle button icon
    themeToggle.textContent = newTheme === 'light' ? '🌙' : '☀️';

    // Optional: Save theme preference in local storage
    localStorage.setItem('theme', newTheme);
});

// Load saved theme preference
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'light' ? '🌙' : '☀️';
});

// Contact Form Submission
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission

    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Simulate sending message
    alert(`Message Sent!`);

    // Clear form
    contactForm.reset();
});

// Newsletter Subscription
newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = newsletterForm.querySelector('input[type="email"]').value;

    // Simulate subscription process
    alert(`Thank you for subscribing with us ${email}`);

    // Clear input
    newsletterForm.reset();
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth',
            });
        }
    });
});

// Dynamically set the current year in the footer
const yearElement = document.getElementById('current-year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

