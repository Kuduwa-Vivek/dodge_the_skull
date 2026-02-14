// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all rule sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Create falling bones effect
    createFallingBones();


});

// Add hover sound effect simulation (visual feedback)
document.querySelectorAll('.rule-section').forEach(section => {
    section.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    section.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add typing effect to important text (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Smooth scroll behavior
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

// Create falling bones effect
function createFallingBones() {
    const bonesContainer = document.querySelector('.bones-container');
    if (!bonesContainer) {
        console.error('Bones container not found');
        return;
    }

    const boneEmojis = ['🦴'];
    const numBones = 20; // Number of bones falling

    // Create bones immediately
    for (let i = 0; i < numBones; i++) {
        const bone = document.createElement('div');
        bone.className = 'bone';
        bone.textContent = '🦴';
        
        // Random horizontal position
        bone.style.left = Math.random() * 100 + '%';
        
        // Random animation duration (slow motion: 20-30 seconds)
        const duration = 20 + Math.random() * 10;
        bone.style.animationDuration = duration + 's';
        
        // Random delay to create staggered effect
        bone.style.animationDelay = Math.random() * duration + 's';
        
        // Random size variation
        const size = 18 + Math.random() * 12;
        bone.style.fontSize = size + 'px';
        
        // Random initial position
        bone.style.top = Math.random() * -100 + 'px';
        
        bonesContainer.appendChild(bone);
    }
}
