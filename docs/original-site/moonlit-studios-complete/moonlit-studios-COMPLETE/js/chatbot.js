// Moonlit Studios AI Chatbot
// Keyword-based responses with voice input support

(function() {
    'use strict';
    
    // DOM Elements
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotVoiceBtn = document.getElementById('chatbotVoiceBtn');
    const quickActionBtns = document.querySelectorAll('.quick-action-btn');
    
    let recognition = null;
    let isRecording = false;
    
    // Initialize speech recognition if available
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            chatbotInput.value = transcript;
            handleUserMessage(transcript);
            stopRecording();
        };
        
        recognition.onerror = function() {
            stopRecording();
        };
        
        recognition.onend = function() {
            stopRecording();
        };
    }
    
    // Knowledge base with keyword matching
    const knowledgeBase = {
        pricing: {
            keywords: ['price', 'pricing', 'cost', 'how much', 'budget', 'expensive', 'cheap', 'afford', '$'],
            response: `Here are our pricing ranges by service category:

🔥 **Phoenix Services (Technical):**
• AI Product Development: $2,500 - $25,000+
• Full-Stack Development: $1,200 - $6,000+
• API Integration: $600 - $5,000

🦚 **Peacock Services (Creative):**
• Brand & Web Design: $700 - $6,000
• UI/UX Design: $1,500 - $6,000
• Writing & Ghostwriting: $75 - $35,000

🌟 **Unified Services (Complete Solutions):**
• Complete Web Applications: $4,000 - $20,000+
• HealthTech Platforms: $1,500 - $15,000+

Want a custom quote? Fill out the contact form or book a discovery call!`
        },
        
        timeline: {
            keywords: ['timeline', 'how long', 'when', 'time', 'duration', 'quick', 'fast', 'asap', 'rush'],
            response: `Typical project timelines:

⚡ **Rush Projects (2x cost):**
• Landing Page: 3-5 days
• Simple Website: 1-2 weeks

📅 **Standard Timeline:**
• Landing Page: 1 week
• Full Website: 2-3 weeks
• AI Product: 4-8 weeks
• HealthTech Platform: 8-12 weeks

🚀 **Enterprise:**
• Complex Applications: 3-6 months

Need it faster? Mention "ASAP" or "Rush" in your contact form!`
        },
        
        services: {
            keywords: ['service', 'what do you do', 'offerings', 'help with', 'can you', 'capabilities'],
            response: `We offer 5 main service categories:

🔥 **Brand & Web Experience**
Design, development, and branding for modern businesses

🤖 **AI Product Development**
AI-powered applications and integrations

🏥 **HealthTech Product UX**
HIPAA-compliant healthcare tools and clinical workflow systems

✍️ **Writing & Ghostwriting**
From books to blogs, technical docs to creative content

📊 **Strategy & Coaching**
Product strategy, UX consulting, and creative coaching

Which interests you?`
        },
        
        booking: {
            keywords: ['book', 'schedule', 'call', 'meeting', 'discovery', 'appointment', 'talk', 'speak'],
            response: `Great! Let's schedule a discovery call.

**What's included:**
• 30-minute video call
• Discuss your project goals & requirements
• Get a custom quote and timeline
• Review our portfolio examples

[Button placeholder - use contact form to request a call time]

Or book directly at: calendly.com/moonlitstudios`
        },
        
        healthtech: {
            keywords: ['health', 'medical', 'hipaa', 'clinical', 'nurse', 'doctor', 'patient', 'ehr', 'fhir'],
            response: `Yes! HealthTech is one of our specialties.

**Our Experience:**
• 15+ years healthcare operations leadership
• HIPAA-compliant application development
• SMART on FHIR integration
• Clinical workflow optimization
• Nurse-to-nurse communication systems

**Notable Project:**
Rohimaya Health AI - 8-product clinical intelligence ecosystem targeting the $18.9B clinical communication market.

Want to discuss your healthcare project? Fill out the contact form!`
        },
        
        ai: {
            keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'chatbot', 'automation', 'nlp'],
            response: `AI is our passion! We build:

🤖 **Conversational AI:**
• Chatbots & voice assistants
• Natural language interfaces
• AI-powered customer support

🧠 **Intelligent Applications:**
• Recommendation systems
• Predictive analytics
• Content generation tools

⚡ **Automation:**
• Workflow automation
• Data processing
• AI-powered operations

**Recent Projects:**
• StorySpoon AI: Voice-guided cookbook platform
• AuthorFlow Suite: AI writing & publishing tools

Ready to add AI to your project?`
        },
        
        portfolio: {
            keywords: ['portfolio', 'work', 'examples', 'projects', 'built', 'previous', 'past work'],
            response: `Check out our portfolio! We've built:

**Crescent & Arc** - Creative-tech publishing division
• AuthorFlow Suite (6 AI writing tools)
• LuminaForge (6 creative AI apps)
• Rohimaya Publishing

**Moonlit Studios** - Design & consulting (that's us!)

**Pathwright Learn** - Adaptive learning platform

**RiseAfter** - AI career recovery system

**Rohimaya Health AI** - 8-product clinical ecosystem

**Two Peaks Chai Co.** - Cultural lifestyle brand

View full details on our Portfolio page!`
        },
        
        founders: {
            keywords: ['who are you', 'about you', 'founder', 'team', 'hannah', 'prasad', 'phoenix', 'peacock'],
            response: `Meet the Phoenix & Peacock team!

🦚 **Hannah "Himani" Pagade** - The Peacock
• CEO & Founder
• 15+ years healthcare operations
• Published author (300K+ words)
• MS in AI/ML at CU Boulder
• UI/UX design & creative strategy

🔥 **Prasad Pagade** - The Phoenix
• CTO & Co-Founder
• Backend systems & AI architecture
• Technical fire & transformation

🎨 **Gracie** - Chief Design Critic
• "Classy, not flashy!"

Together: *Where the Phoenix Rises and the Peacock Dances*

Read our full story on the About page!`
        },
        
        rush: {
            keywords: ['urgent', 'emergency', 'now', 'immediately', 'today'],
            response: `Need something FAST? We offer rush services!

⚡ **Rush Pricing: 2x standard rate**

**Typical Rush Timelines:**
• Landing page: 3-5 days
• Simple website: 1-2 weeks
• Basic AI integration: 1-2 weeks

Mention "RUSH" or "ASAP" in your contact form and we'll prioritize your project.

Ready to move fast?`
        }
    };
    
    // Toggle chatbot
    chatbotToggle.addEventListener('click', function() {
        chatbotWindow.classList.toggle('active');
        if (chatbotWindow.classList.contains('active')) {
            chatbotInput.focus();
        }
    });
    
    chatbotClose.addEventListener('click', function() {
        chatbotWindow.classList.remove('active');
    });
    
    // Quick action buttons
    quickActionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const message = this.getAttribute('data-message');
            handleUserMessage(message);
        });
    });
    
    // Handle input
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value.trim()) {
            handleUserMessage(this.value);
            this.value = '';
        }
    });
    
    // Voice input
    if (chatbotVoiceBtn && recognition) {
        chatbotVoiceBtn.addEventListener('click', function() {
            if (isRecording) {
                stopRecording();
            } else {
                startRecording();
            }
        });
    }
    
    function startRecording() {
        if (recognition) {
            recognition.start();
            isRecording = true;
            chatbotVoiceBtn.classList.add('recording');
        }
    }
    
    function stopRecording() {
        if (recognition) {
            recognition.stop();
            isRecording = false;
            chatbotVoiceBtn.classList.remove('recording');
        }
    }
    
    function handleUserMessage(message) {
        // Add user message
        addMessage(message, 'user');
        
        // Get bot response
        const response = getBotResponse(message);
        
        // Add bot response with slight delay for natural feel
        setTimeout(() => {
            addMessage(response, 'bot');
        }, 500);
    }
    
    function getBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check each knowledge base category
        for (const [category, data] of Object.entries(knowledgeBase)) {
            for (const keyword of data.keywords) {
                if (lowerMessage.includes(keyword.toLowerCase())) {
                    return data.response;
                }
            }
        }
        
        // Default response if no match
        return `I'd be happy to help! Here are some things I can assist with:

💰 **Pricing** - Ask about our rates
⏱️ **Timeline** - Typical project durations
🎨 **Services** - What we offer
📅 **Booking** - Schedule a discovery call
🏥 **HealthTech** - Healthcare expertise
🤖 **AI** - Artificial intelligence projects

Or just fill out the contact form below and we'll respond within 24 hours!`;
    }
    
    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${type}`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = type === 'bot' ? '🌙' : '👤';
        
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        
        // Convert markdown-style formatting to HTML
        const formattedText = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
        
        bubble.innerHTML = formattedText;
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(bubble);
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
})();
