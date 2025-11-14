/* ========================================
   STARDUST CURSOR ANIMATION
   Creates magical stardust trail following cursor
   ======================================== */

(function() {
    'use strict';
    
    let lastTime = 0;
    const throttleDelay = 30; // Create stardust every 30ms for smooth trail
    
    // Create stardust particle
    function createStardust(x, y) {
        const stardust = document.createElement('div');
        stardust.className = 'stardust';
        
        // Random offset for natural look
        const offsetX = (Math.random() - 0.5) * 10;
        const offsetY = (Math.random() - 0.5) * 10;
        
        stardust.style.left = (x + offsetX) + 'px';
        stardust.style.top = (y + offsetY) + 'px';
        
        // Random size variation
        const size = 4 + Math.random() * 8;
        stardust.style.width = size + 'px';
        stardust.style.height = size + 'px';
        
        document.body.appendChild(stardust);
        
        // Remove after animation completes
        setTimeout(() => {
            stardust.remove();
        }, 800);
    }
    
    // Throttled mousemove handler
    document.addEventListener('mousemove', function(e) {
        const currentTime = Date.now();
        
        if (currentTime - lastTime >= throttleDelay) {
            createStardust(e.clientX, e.clientY);
            lastTime = currentTime;
        }
    });
    
    // Add extra sparkle on click
    document.addEventListener('click', function(e) {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createStardust(e.clientX, e.clientY);
            }, i * 50);
        }
    });
})();
