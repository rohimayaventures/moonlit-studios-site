// Contact Form Handler with Voice Input
(function() {
    'use strict';
    
    const contactForm = document.getElementById('contactForm');
    const voiceInputBtn = document.getElementById('voiceInputBtn');
    const messageTextarea = document.getElementById('message');
    const formSuccess = document.getElementById('formSuccess');
    
    let recognition = null;
    let isRecording = false;
    
    // Initialize speech recognition if available
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onresult = function(event) {
            let transcript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript + ' ';
            }
            messageTextarea.value = transcript.trim();
        };
        
        recognition.onerror = function() {
            stopRecording();
        };
        
        recognition.onend = function() {
            stopRecording();
        };
    }
    
    // Voice input button
    if (voiceInputBtn && recognition) {
        voiceInputBtn.addEventListener('click', function() {
            if (isRecording) {
                stopRecording();
            } else {
                startRecording();
            }
        });
    } else if (voiceInputBtn) {
        // Hide voice button if not supported
        voiceInputBtn.style.display = 'none';
    }
    
    function startRecording() {
        if (recognition) {
            recognition.start();
            isRecording = true;
            voiceInputBtn.innerHTML = '<span class="voice-icon">⏸️</span><span class="voice-text">Stop recording</span>';
            voiceInputBtn.style.background = 'var(--phoenix-fire)';
        }
    }
    
    function stopRecording() {
        if (recognition) {
            recognition.stop();
            isRecording = false;
            voiceInputBtn.innerHTML = '<span class="voice-icon">🎤</span><span class="voice-text">Or speak your project idea</span>';
            voiceInputBtn.style.background = '';
        }
    }
    
    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // Here you would send to your backend
            // For now, just show success message
            console.log('Form data:', data);
            
            // Show success message
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // In production, send to your backend:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
            })
            .catch(error => {
                alert('Error sending message. Please try again or email us directly.');
            });
            */
        });
    }
    
    // Form validation helpers
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !isValidEmail(this.value)) {
                this.setCustomValidity('Please enter a valid email address');
            } else {
                this.setCustomValidity('');
            }
        });
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
})();
