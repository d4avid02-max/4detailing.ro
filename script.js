// script.js

// Smooth Scrolling
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

// WhatsApp Integration
const sendWhatsAppMessage = (message) => {
    const phoneNumber = '+1234567890'; // Replace with your WhatsApp number
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};

// Animations
const animateOnScroll = () => {
    const animatedElements = document.querySelectorAll('.animate');
    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, options);

    animatedElements.forEach(element => {
        observer.observe(element);
    });
};

// Gallery Lightbox Functionality
const openLightbox = (imageSrc) => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightbox.style.display = 'block';
    lightboxImage.src = imageSrc;
};

const closeLightbox = () => {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
};

// Event Listeners for Gallery
document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener('click', (event) => {
        openLightbox(event.target.src);
    });
});

document.getElementById('lightbox').addEventListener('click', closeLightbox);

// Initialize Smooth Scroll and Animations
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});