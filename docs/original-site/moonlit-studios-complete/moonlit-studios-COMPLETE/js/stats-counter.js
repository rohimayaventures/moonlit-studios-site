// ========================================
// ANIMATED STATS COUNTER
// ========================================

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target') || counter.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                counter.classList.add('counted');
                
                const updateCounter = () => {
                    current += increment;
                    
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { 
        threshold: 0.5,
        rootMargin: '0px'
    });
    
    counters.forEach(counter => {
        // Set initial value to 0
        counter.textContent = '0';
        observer.observe(counter);
    });
    
    console.log('📊 Stats counter initialized');
}

// Enhanced counter with easing
function easeOutQuart(x) {
    return 1 - Math.pow(1 - x, 4);
}

function animateCounterWithEasing(element, target, duration = 2000) {
    const start = performance.now();
    
    const step = (currentTime) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        
        element.textContent = Math.floor(easedProgress * target);
        
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            element.textContent = target;
        }
    };
    
    requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', animateCounters);
