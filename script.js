// Typing animation
document.addEventListener('DOMContentLoaded', function() {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");
    
    const textArray = ["Web Designer", "Web Developer", "Photographer", "Freelancer"];
    const typingDelay = 200;
    const erasingDelay = 10;
    const newTextDelay = 100;
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }
    
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    mobileToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
        
        if (mobileToggle.querySelector('i').classList.contains('fa-bars')) {
            mobileToggle.querySelector('i').classList.remove('fa-bars');
            mobileToggle.querySelector('i').classList.add('fa-times');
        } else {
            mobileToggle.querySelector('i').classList.remove('fa-times');
            mobileToggle.querySelector('i').classList.add('fa-bars');
        }
    });
});

// Sticky header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('nav-fixed');
    } else {
        header.classList.remove('nav-fixed');
    }
});

// Theme switcher
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const themeSwitchIcon = themeSwitch.querySelector('i');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-theme');
        themeSwitchIcon.classList.remove('fa-moon');
        themeSwitchIcon.classList.add('fa-sun');
    }
    
    themeSwitch.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            themeSwitchIcon.classList.remove('fa-moon');
            themeSwitchIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeSwitchIcon.classList.remove('fa-sun');
            themeSwitchIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
});

// Back to top button
document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Counter animation
document.addEventListener('DOMContentLoaded', function() {
    $('.stat-number').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).attr('data-count')
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});


$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 1500,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            568: {
                items: 3,
                nav: false
            },
            768: {
                items: 4,
                nav: false
            }
        }
    })
 })

// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#' && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navHeight = document.querySelector('.main-header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navMenu = document.getElementById('nav-menu');
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        document.body.classList.remove('no-scroll');
                        const mobileToggle = document.getElementById('mobile-toggle');
                        mobileToggle.querySelector('i').classList.remove('fa-times');
                        mobileToggle.querySelector('i').classList.add('fa-bars');
                    }
                }
            }
        });
    });
});