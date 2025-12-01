'use client';

import { useState } from 'react';

// Services data
const services = [
  {
    id: 'individual',
    name: "Individual Therapy",
    duration: "50 minutes",
    price: 175,
    description: "One-on-one sessions tailored to your unique needs. We'll work together to understand patterns, process emotions, and develop practical strategies for lasting change.",
    details: [
      "Evidence-based approaches including CBT, EMDR, and somatic therapy",
      "Safe, confidential space to explore thoughts and feelings",
      "Personalized treatment plans adapted to your goals",
      "Flexible scheduling including evening appointments"
    ],
    ideal: "Adults experiencing anxiety, depression, trauma, life transitions, or relationship challenges."
  },
  {
    id: 'couples',
    name: "Couples Counseling",
    duration: "60 minutes",
    price: 225,
    description: "Strengthen your relationship through structured, compassionate guidance. Learn to communicate effectively, resolve conflicts, and deepen your emotional connection.",
    details: [
      "Gottman Method and Emotionally Focused Therapy (EFT)",
      "Communication skills and conflict resolution",
      "Rebuilding trust and emotional intimacy",
      "Pre-marital counseling available"
    ],
    ideal: "Couples seeking to improve communication, navigate transitions, or work through specific challenges."
  },
  {
    id: 'trauma',
    name: "Trauma & PTSD",
    duration: "50 minutes",
    price: 175,
    description: "Specialized trauma-informed care to help you heal from difficult experiences. We move at your pace, prioritizing safety and stability throughout the process.",
    details: [
      "EMDR (Eye Movement Desensitization and Reprocessing)",
      "Somatic Experiencing and body-based approaches",
      "Trauma-sensitive mindfulness techniques",
      "Support for complex trauma and childhood experiences"
    ],
    ideal: "Individuals who have experienced trauma, abuse, accidents, or other distressing events."
  },
  {
    id: 'anxiety',
    name: "Anxiety & Stress",
    duration: "50 minutes",
    price: 175,
    description: "Learn to manage overwhelming worry, panic, and stress. We'll work together to understand your anxiety and develop tools that bring relief and resilience.",
    details: [
      "Cognitive Behavioral Therapy (CBT) for anxiety",
      "Mindfulness-based stress reduction",
      "Nervous system regulation techniques",
      "Practical coping strategies for daily life"
    ],
    ideal: "Those experiencing generalized anxiety, panic attacks, social anxiety, or chronic stress."
  }
];

// Testimonials
const testimonials = [
  {
    id: 1,
    text: "Dr. Chen helped me understand patterns I'd been stuck in for years. For the first time, I feel like I have tools that actually work. The EMDR sessions were transformative.",
    author: "Sarah M.",
    type: "Individual Therapy Client",
    duration: "8 months"
  },
  {
    id: 2,
    text: "We came in barely speaking to each other. Now we have real conversations again. Dr. Chen gave us a framework for communicating that we use every day.",
    author: "Michael & Jessica R.",
    type: "Couples Counseling",
    duration: "6 months"
  },
  {
    id: 3,
    text: "After years of trying different therapists, I finally found someone who gets it. The trauma work has been hard but so worth it. I feel like myself again.",
    author: "David P.",
    type: "Trauma Therapy Client",
    duration: "1 year"
  }
];

// Available times for booking simulation
const availableTimes = [
  { date: 'Monday, Dec 2', slots: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'] },
  { date: 'Tuesday, Dec 3', slots: ['10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'] },
  { date: 'Wednesday, Dec 4', slots: ['9:00 AM', '12:00 PM', '2:00 PM'] },
  { date: 'Thursday, Dec 5', slots: ['11:00 AM', '1:00 PM', '4:00 PM', '6:00 PM'] },
  { date: 'Friday, Dec 6', slots: ['9:00 AM', '10:00 AM', '2:00 PM'] },
];

export default function AuroraWellnessStudio() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [activeTab, setActiveTab] = useState<'services' | 'book' | 'contact'>('services');
  const [selectedDate, setSelectedDate] = useState(availableTimes[0]);
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingStep, setBookingStep] = useState<'select' | 'confirm' | 'complete'>('select');
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleBookingConfirm = () => {
    if (selectedTime) {
      setBookingStep('confirm');
    }
  };

  const handleBookingComplete = () => {
    setBookingStep('complete');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      setFormSubmitted(true);
    }
  };

  const resetBooking = () => {
    setBookingStep('select');
    setSelectedTime('');
    setSelectedDate(availableTimes[0]);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sage-600 to-sage-700 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-stone-800">Aurora Wellness</span>
                <span className="hidden sm:inline text-stone-400 text-sm ml-2">| Dr. Emily Chen, LMFT</span>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setActiveTab('services')}
                className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'services'
                    ? 'bg-sage-100 text-sage-800'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setActiveTab('book')}
                className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'book'
                    ? 'bg-sage-100 text-sage-800'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                Book
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'contact'
                    ? 'bg-sage-100 text-sage-800'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sage-50 to-stone-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-800 mb-4 tracking-tight">
            A calm space for healing and growth
          </h1>
          <p className="text-lg sm:text-xl text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Evidence-based therapy for individuals and couples in Westminster, Colorado.
            In-person and telehealth appointments available.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setActiveTab('book')}
              className="px-6 py-3 bg-sage-700 text-white font-medium rounded-lg hover:bg-sage-800 transition-colors"
            >
              Schedule a Consultation
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className="px-6 py-3 bg-white text-stone-700 font-medium rounded-lg border border-stone-300 hover:bg-stone-50 transition-colors"
            >
              View Services
            </button>
          </div>

          {/* Credentials */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-stone-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-sage-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Licensed Marriage & Family Therapist</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-sage-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>EMDR Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-sage-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Telehealth Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service List */}
            <div className="lg:col-span-1 space-y-2">
              <h2 className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-4">Services</h2>
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    selectedService.id === service.id
                      ? 'border-sage-300 bg-sage-50'
                      : 'border-stone-200 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${selectedService.id === service.id ? 'text-sage-800' : 'text-stone-800'}`}>
                      {service.name}
                    </span>
                    <span className="text-sm text-stone-500">${service.price}</span>
                  </div>
                  <span className="text-sm text-stone-500">{service.duration}</span>
                </button>
              ))}

              {/* Insurance Info */}
              <div className="mt-6 p-4 rounded-lg bg-stone-100 border border-stone-200">
                <h3 className="text-sm font-semibold text-stone-700 mb-2">Insurance & Payment</h3>
                <p className="text-sm text-stone-600 mb-3">
                  I accept most major insurance plans. Out-of-network benefits and sliding scale available.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['Aetna', 'Cigna', 'Blue Cross', 'United', 'Kaiser'].map((ins) => (
                    <span key={ins} className="px-2 py-1 bg-white rounded border border-stone-200 text-stone-600">
                      {ins}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Detail */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-stone-800 mb-1">{selectedService.name}</h2>
                    <p className="text-stone-500">{selectedService.duration} • ${selectedService.price}/session</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('book')}
                    className="px-4 py-2 bg-sage-700 text-white text-sm font-medium rounded-lg hover:bg-sage-800 transition-colors"
                  >
                    Book Now
                  </button>
                </div>

                <p className="text-stone-600 leading-relaxed mb-6">
                  {selectedService.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-stone-700 uppercase tracking-wide mb-3">What to Expect</h3>
                  <ul className="space-y-2">
                    {selectedService.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600">
                        <svg className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-sage-50 border border-sage-100">
                  <h3 className="text-sm font-semibold text-sage-800 mb-1">Ideal For</h3>
                  <p className="text-sm text-sage-700">{selectedService.ideal}</p>
                </div>
              </div>

              {/* Testimonials */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-4">Client Experiences</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white rounded-lg border border-stone-200 p-5">
                      <p className="text-stone-600 text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
                      <div className="border-t border-stone-100 pt-3">
                        <p className="font-medium text-stone-800 text-sm">{testimonial.author}</p>
                        <p className="text-xs text-stone-500">{testimonial.type} • {testimonial.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Book Tab */}
        {activeTab === 'book' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8">

              {bookingStep === 'select' && (
                <>
                  <h2 className="text-2xl font-semibold text-stone-800 mb-2">Schedule Your Appointment</h2>
                  <p className="text-stone-500 mb-8">Select a date and time that works for you. All new clients begin with a 15-minute consultation.</p>

                  {/* Service Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-stone-700 mb-2">Service</label>
                    <select
                      value={selectedService.id}
                      onChange={(e) => setSelectedService(services.find(s => s.id === e.target.value) || services[0])}
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 text-stone-800 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                    >
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} - ${service.price} ({service.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-stone-700 mb-2">Select Date</label>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {availableTimes.map((day) => (
                        <button
                          key={day.date}
                          onClick={() => {
                            setSelectedDate(day);
                            setSelectedTime('');
                          }}
                          className={`flex-shrink-0 px-4 py-3 rounded-lg border text-sm transition-all ${
                            selectedDate.date === day.date
                              ? 'border-sage-500 bg-sage-50 text-sage-800'
                              : 'border-stone-200 text-stone-600 hover:border-stone-300'
                          }`}
                        >
                          {day.date}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-stone-700 mb-2">Select Time</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {selectedDate.slots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                            selectedTime === time
                              ? 'border-sage-500 bg-sage-700 text-white'
                              : 'border-stone-200 text-stone-600 hover:border-sage-300'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleBookingConfirm}
                    disabled={!selectedTime}
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      selectedTime
                        ? 'bg-sage-700 text-white hover:bg-sage-800'
                        : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                    }`}
                  >
                    Continue
                  </button>
                </>
              )}

              {bookingStep === 'confirm' && (
                <>
                  <h2 className="text-2xl font-semibold text-stone-800 mb-2">Confirm Your Appointment</h2>
                  <p className="text-stone-500 mb-8">Please review your appointment details and enter your information.</p>

                  {/* Appointment Summary */}
                  <div className="p-4 rounded-lg bg-sage-50 border border-sage-100 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-stone-500">Service</p>
                        <p className="font-medium text-stone-800">{selectedService.name}</p>
                      </div>
                      <div>
                        <p className="text-stone-500">Duration</p>
                        <p className="font-medium text-stone-800">{selectedService.duration}</p>
                      </div>
                      <div>
                        <p className="text-stone-500">Date</p>
                        <p className="font-medium text-stone-800">{selectedDate.date}</p>
                      </div>
                      <div>
                        <p className="text-stone-500">Time</p>
                        <p className="font-medium text-stone-800">{selectedTime}</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info Form */}
                  <div className="space-y-4 mb-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-800 focus:outline-none focus:ring-2 focus:ring-sage-500"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-800 focus:outline-none focus:ring-2 focus:ring-sage-500"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-800 focus:outline-none focus:ring-2 focus:ring-sage-500"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-800 focus:outline-none focus:ring-2 focus:ring-sage-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={resetBooking}
                      className="flex-1 py-3 rounded-lg font-medium border border-stone-300 text-stone-600 hover:bg-stone-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleBookingComplete}
                      className="flex-1 py-3 rounded-lg font-medium bg-sage-700 text-white hover:bg-sage-800 transition-colors"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </>
              )}

              {bookingStep === 'complete' && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-stone-800 mb-2">Appointment Confirmed</h2>
                  <p className="text-stone-500 mb-6">
                    Your appointment has been scheduled for {selectedDate.date} at {selectedTime}.
                    A confirmation email has been sent with additional details.
                  </p>
                  <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 text-left mb-6">
                    <h3 className="font-medium text-stone-800 mb-2">What's Next</h3>
                    <ul className="space-y-2 text-sm text-stone-600">
                      <li className="flex items-start gap-2">
                        <span className="text-sage-600 mt-0.5">1.</span>
                        <span>Check your email for a confirmation with intake forms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sage-600 mt-0.5">2.</span>
                        <span>Complete the intake forms at least 24 hours before your appointment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sage-600 mt-0.5">3.</span>
                        <span>You'll receive a reminder email and text 24 hours before</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={resetBooking}
                    className="px-6 py-2 text-sage-700 font-medium hover:text-sage-800 transition-colors"
                  >
                    Schedule Another Appointment
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8">
              {!formSubmitted ? (
                <>
                  <h2 className="text-2xl font-semibold text-stone-800 mb-2">Get in Touch</h2>
                  <p className="text-stone-500 mb-6">Have questions? Send me a message and I'll respond within 24 hours.</p>

                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                      <input
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-800 focus:outline-none focus:ring-2 focus:ring-sage-500"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-800 focus:outline-none focus:ring-2 focus:ring-sage-500"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Phone (optional)</label>
                      <input
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-800 focus:outline-none focus:ring-2 focus:ring-sage-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                      <textarea
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-800 focus:outline-none focus:ring-2 focus:ring-sage-500 resize-none"
                        placeholder="Tell me a little about what brings you to therapy..."
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-sage-700 text-white font-medium rounded-lg hover:bg-sage-800 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-stone-800 mb-2">Message Sent</h2>
                  <p className="text-stone-500 mb-6">
                    Thank you for reaching out. I'll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setContactForm({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="text-sage-700 font-medium hover:text-sage-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-stone-200 p-6">
                <h3 className="font-semibold text-stone-800 mb-4">Office Location</h3>
                <div className="space-y-3 text-stone-600">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sage-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-stone-800">Aurora Wellness Studio</p>
                      <p>8500 Turnpike Dr, Suite 220</p>
                      <p>Westminster, CO 80031</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(720) 555-0123</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>hello@aurorawellness.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-6">
                <h3 className="font-semibold text-stone-800 mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Monday - Thursday</span>
                    <span className="font-medium text-stone-800">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Friday</span>
                    <span className="font-medium text-stone-800">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Saturday - Sunday</span>
                    <span className="text-stone-400">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-sage-50 rounded-xl border border-sage-100 p-6">
                <h3 className="font-semibold text-sage-800 mb-2">Telehealth Available</h3>
                <p className="text-sm text-sage-700">
                  Can't make it to the office? I offer secure video sessions for all services.
                  Same quality care from the comfort of your home.
                </p>
              </div>

              <div className="bg-stone-100 rounded-xl border border-stone-200 p-6">
                <h3 className="font-semibold text-stone-800 mb-2">Confidentiality</h3>
                <p className="text-sm text-stone-600">
                  Your privacy is my priority. All sessions and records are HIPAA compliant and fully confidential.
                  I use encrypted, secure platforms for telehealth and messaging.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sage-600 to-sage-700 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-sm text-stone-600">Aurora Wellness Studio</span>
            </div>
            <p className="text-sm text-stone-500">
              Dr. Emily Chen, LMFT • License #LMF-12345 • Westminster, CO
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
