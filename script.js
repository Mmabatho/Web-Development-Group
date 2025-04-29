// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Counter Animation
const counters = document.querySelectorAll('.counter-number');
const speed = 200;

function animateCounters() {
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let count = 0;
        const increment = Math.ceil(target / speed);
        
        const updateCount = () => {
            if (count < target) {
                count += increment;
                if (count > target) count = target;
                counter.textContent = count;
                setTimeout(updateCount, 10);
            }
        };
        
        updateCount();
    });
}

// Trigger counter animation when in viewport
const counterSection = document.querySelector('.counter-row');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (counterSection) {
    observer.observe(counterSection);
}

// Navbar scroll behavior
const navbar = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = 'none';
    }
});
// HIGHLIGHT: Change the text array here to modify what gets typed
const textArray = ["Web Designer", "Web Developer", "Photographer", "Freelancer"];

// Portfolio hover effect
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const overlay = item.querySelector('.portfolio-overlay');
        overlay.style.opacity = '1';
    });
    
    item.addEventListener('mouseleave', () => {
        const overlay = item.querySelector('.portfolio-overlay');
        overlay.style.opacity = '0';
    });
});