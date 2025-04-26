document.addEventListener('DOMContentLoaded', function() {
    // Typewriter Effect
    const animatedText = document.getElementById('animated-text');
    const texts = ["VocalMed Pharmacy", "Smart Inventory", "Better Management"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            animatedText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            animatedText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before typing next word
        }
        
        setTimeout(typeWriter, typingSpeed);
    }
    
    // Initialize typewriter effect after a short delay
    setTimeout(typeWriter, 1000);
    
    // Reviews Carousel
    const reviewsData = [
        {
            name: "Sarah Johnson",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            review: "VocalMed has transformed how we manage our pharmacy. The inventory tracking is a game-changer!"
        },
        {
            name: "Michael Chen",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 4,
            review: "Excellent customer support and intuitive interface. Highly recommended for small pharmacies."
        },
        {
            name: "Emily Rodriguez",
            avatar: "https://randomuser.me/api/portraits/women/63.jpg",
            rating: 5,
            review: "The mobile app integration is seamless. I can check stock levels from anywhere."
        },
        {
            name: "David Kim",
            avatar: "https://randomuser.me/api/portraits/men/75.jpg",
            rating: 5,
            review: "Reduced our medication errors by 80%. The barcode scanning is incredibly accurate."
        },
        {
            name: "Lisa Patel",
            avatar: "https://randomuser.me/api/portraits/women/25.jpg",
            rating: 4,
            review: "The reporting features save me hours every week. Great value for the price."
        },
        {
            name: "James Wilson",
            avatar: "https://randomuser.me/api/portraits/men/55.jpg",
            rating: 5,
            review: "Best pharmacy software I've used in 15 years of practice. The team listens to feedback."
        },
        {
            name: "Olivia Martinez",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: 5,
            review: "Implementation was smooth and the training was excellent. Our staff adapted quickly."
        },
        {
            name: "Robert Taylor",
            avatar: "https://randomuser.me/api/portraits/men/81.jpg",
            rating: 4,
            review: "The automatic expiration alerts have prevented several potential issues. Very reliable."
        },
        {
            name: "Sophia Lee",
            avatar: "https://randomuser.me/api/portraits/women/90.jpg",
            rating: 5,
            review: "Customer service is responsive and knowledgeable. The software just works."
        },
        {
            name: "Daniel Brown",
            avatar: "https://randomuser.me/api/portraits/men/22.jpg",
            rating: 5,
            review: "The integration with our EHR system was flawless. Huge time saver for our practice."
        }
    ];
    
    const reviewsTrack = document.querySelector('.reviews-track');
    
    // Duplicate reviews for infinite loop
    const duplicatedReviews = [...reviewsData, ...reviewsData];
    
    duplicatedReviews.forEach((review, index) => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.style.setProperty('--delay', index % reviewsData.length);
        
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += i < review.rating ? '★' : '☆';
        }
        
        reviewCard.innerHTML = `
            <img src="${review.avatar}" alt="${review.name}" class="user-avatar">
            <div class="stars">${stars}</div>
            <p class="review-text">"${review.review}"</p>
            <p class="user-name">- ${review.name}</p>
        `;
        
        reviewsTrack.appendChild(reviewCard);
    });
    
    // Scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section-title, .review-card, .feedback-container').forEach(el => {
        observer.observe(el);
    });
    
    // Form submission
    const feedbackForm = document.querySelector('.feedback-form');
    
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const mood = document.getElementById('mood').value;
        
        // Here you would typically send the data to a server
        console.log({ name, email, message, mood });
        
        // Show success message
        alert('Thank you for your feedback! We appreciate your input.');
        
        // Reset form
        feedbackForm.reset();
    });
});