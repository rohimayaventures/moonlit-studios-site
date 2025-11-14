// ========================================
// KONAMI CODE EASTER EGG
// ========================================

const konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    const key = e.code;
    
    // Check if the pressed key matches the current position in the code
    if (key === konamiCode[konamiIndex]) {
        konamiIndex++;
        console.log(`🎮 Konami progress: ${konamiIndex}/${konamiCode.length}`);
        
        // If the entire code has been entered
        if (konamiIndex === konamiCode.length) {
            activateKonamiMode();
            konamiIndex = 0;
        }
    } else {
        // Reset if wrong key is pressed
        konamiIndex = 0;
    }
});

function activateKonamiMode() {
    console.log('🎮🔥 KONAMI CODE ACTIVATED! 🔥🎮');
    
    // Create success message
    const message = document.createElement('div');
    message.className = 'konami-success';
    message.innerHTML = `
        <h2>🔥🦚 LEGENDARY MODE ACTIVATED! 🦚🔥</h2>
        <p>"Where the Phoenix Rises and the Peacock Dances!"</p>
        <p style="font-size: 1rem; margin-top: 1rem; opacity: 0.9;">
            You found the secret! Hannah would be proud. 🌙
        </p>
    `;
    
    document.body.appendChild(message);
    
    // Add peacock gradient effect to body
    document.body.style.animation = 'shimmer 3s ease infinite';
    document.body.style.backgroundImage = 'linear-gradient(135deg, #4A9B9B 0%, #6B4E71 25%, #FFD700 50%, #4A9B9B 75%, #1B4965 100%)';
    document.body.style.backgroundSize = '300% 300%';
    
    // Make all cards pulse
    document.querySelectorAll('.trifecta-card, .service-card, .project-card').forEach(card => {
        card.classList.add('konami-active');
    });
    
    // Create confetti effect
    createConfetti();
    
    // Remove message and reset after 5 seconds
    setTimeout(() => {
        message.remove();
        document.body.style.animation = '';
        document.body.style.backgroundImage = '';
        
        document.querySelectorAll('.konami-active').forEach(card => {
            card.classList.remove('konami-active');
        });
    }, 5000);
}

function createConfetti() {
    const confettiCount = 50;
    const emojis = ['🦚', '🔥', '🌙', '✨', '💎', '⭐'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-50px';
        confetti.style.fontSize = (Math.random() * 20 + 20) + 'px';
        confetti.style.zIndex = '10001';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        // Animate falling
        const duration = Math.random() * 2 + 2;
        const rotation = Math.random() * 360;
        
        confetti.animate([
            { 
                transform: 'translateY(0) rotate(0deg)',
                opacity: 1
            },
            { 
                transform: `translateY(${window.innerHeight + 100}px) rotate(${rotation}deg)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}
