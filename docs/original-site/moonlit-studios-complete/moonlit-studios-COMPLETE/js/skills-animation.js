// ========================================
// SKILLS BAR ANIMATION ON SCROLL
// ========================================

function animateSkillBars() {
    const skillFills = document.querySelectorAll('.skill-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const skillBar = entry.target;
                const percent = skillBar.getAttribute('data-percent');
                
                // Set CSS variable for animation
                skillBar.style.setProperty('--skill-width', `${percent}%`);
                
                // Trigger animation
                skillBar.classList.add('animate', 'animated');
                
                // Unobserve after animation
                observer.unobserve(skillBar);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px'
    });
    
    skillFills.forEach(skill => {
        observer.observe(skill);
    });
    
    console.log('🎯 Skills animation initialized');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', animateSkillBars);
