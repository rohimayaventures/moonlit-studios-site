'use client';

import { useState } from 'react';
import {
  User,
  Users,
  Heart,
  Brain,
  Shield,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Calendar,
  Video,
  Award,
  ChevronRight,
  ArrowLeft,
  Sparkles
} from 'lucide-react';

// Services data with icons
const services = [
  {
    id: 'individual',
    name: "Individual Therapy",
    duration: "50 minutes",
    price: 175,
    icon: User,
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
    icon: Users,
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
    icon: Heart,
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
    icon: Brain,
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
    duration: "8 months",
    rating: 5
  },
  {
    id: 2,
    text: "We came in barely speaking to each other. Now we have real conversations again. Dr. Chen gave us a framework for communicating that we use every day.",
    author: "Michael & Jessica R.",
    type: "Couples Counseling",
    duration: "6 months",
    rating: 5
  },
  {
    id: 3,
    text: "After years of trying different therapists, I finally found someone who gets it. The trauma work has been hard but so worth it. I feel like myself again.",
    author: "David P.",
    type: "Trauma Therapy Client",
    duration: "1 year",
    rating: 5
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

// Quiz questions for intelligent intake
const quizQuestions = [
  {
    id: 'focus',
    question: "What brings you to therapy?",
    options: [
      { value: 'anxiety', label: 'Anxiety or stress', icon: Brain },
      { value: 'relationships', label: 'Relationship concerns', icon: Users },
      { value: 'trauma', label: 'Past experiences', icon: Heart },
      { value: 'growth', label: 'Personal growth', icon: Sparkles }
    ]
  },
  {
    id: 'preference',
    question: "What type of support are you seeking?",
    options: [
      { value: 'individual', label: 'Individual sessions', icon: User },
      { value: 'couples', label: 'Couples therapy', icon: Users }
    ]
  }
];

export default function AuroraWellnessStudio() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [activeTab, setActiveTab] = useState<'services' | 'book' | 'contact'>('services');
  const [selectedDate, setSelectedDate] = useState(availableTimes[0]);
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingStep, setBookingStep] = useState<'quiz' | 'select' | 'confirm' | 'complete'>('quiz');
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleQuizAnswer = (questionId: string, value: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: value }));

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(prev => prev + 1);
    } else {
      // Quiz complete - recommend service based on answers
      let recommendedService = services[0];
      if (quizAnswers.focus === 'relationships' || value === 'couples') {
        recommendedService = services.find(s => s.id === 'couples') || services[0];
      } else if (quizAnswers.focus === 'trauma') {
        recommendedService = services.find(s => s.id === 'trauma') || services[0];
      } else if (quizAnswers.focus === 'anxiety') {
        recommendedService = services.find(s => s.id === 'anxiety') || services[0];
      }
      setSelectedService(recommendedService);
      setBookingStep('select');
    }
  };

  const handleBookingConfirm = () => {
    if (selectedTime) {
      setBookingStep('confirm');
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!contactForm.name.trim()) errors.name = 'Name is required';
    if (!contactForm.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(contactForm.email)) errors.email = 'Invalid email format';
    if (!contactForm.message.trim()) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleBookingComplete = () => {
    setBookingStep('complete');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSubmitted(true);
    }
  };

  const resetBooking = () => {
    setBookingStep('quiz');
    setQuizStep(0);
    setQuizAnswers({});
    setSelectedTime('');
    setSelectedDate(availableTimes[0]);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Trust Signal Bar */}
      <div className="bg-sage-700 text-white py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" />
            <span>HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            <span>Licensed & Verified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5" />
            <span>Telehealth Available</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-emerald-300 font-medium">Accepting New Patients</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sage-600 to-sage-700 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-stone-800">AuroraWellness</span>
                <span className="text-sage-600 font-bold">.care</span>
                {/* Live Indicator */}
                <span className="flex items-center gap-1 text-emerald-600 ml-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-semibold">Live</span>
                </span>
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
        <div className="max-w-4xl mx-auto text-center animate-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-800 mb-4 tracking-tight">
            A calm space for healing and growth
          </h1>
          <p className="text-lg sm:text-xl text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Evidence-based therapy for individuals and couples in Westminster, Colorado.
            In-person and telehealth appointments available.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <button
              onClick={() => setActiveTab('book')}
              className="px-6 py-3 bg-sage-700 text-white font-medium rounded-lg hover:bg-sage-800 transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Schedule a Consultation
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className="px-6 py-3 bg-white text-stone-700 font-medium rounded-lg border border-stone-300 hover:bg-stone-50 transition-colors"
            >
              View Services
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-sage-300 to-sage-500 border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                >
                  {['SM', 'MR', 'DP', 'JK', 'AL'][i - 1]}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-sm font-medium text-stone-700 ml-1">5.0</span>
              </div>
              <p className="text-xs text-stone-500">Trusted by 200+ clients</p>
            </div>
          </div>

          {/* Credentials */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-sage-600" />
              <span>Licensed Marriage & Family Therapist</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-sage-600" />
              <span>EMDR Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-sage-600" />
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="grid lg:grid-cols-3 gap-8 animate-in">
            {/* Service List */}
            <div className="lg:col-span-1 space-y-2">
              <h2 className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-4">Services</h2>
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selectedService.id === service.id
                        ? 'border-sage-300 bg-sage-50'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        selectedService.id === service.id ? 'bg-sage-200' : 'bg-stone-100'
                      }`}>
                        <IconComponent className={`w-4 h-4 ${
                          selectedService.id === service.id ? 'text-sage-700' : 'text-stone-500'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`font-medium ${selectedService.id === service.id ? 'text-sage-800' : 'text-stone-800'}`}>
                            {service.name}
                          </span>
                          <span className="text-sm text-stone-500">${service.price}</span>
                        </div>
                        <span className="text-sm text-stone-500">{service.duration}</span>
                      </div>
                    </div>
                  </button>
                );
              })}

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
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-sage-100">
                      {(() => {
                        const IconComponent = selectedService.icon;
                        return <IconComponent className="w-6 h-6 text-sage-700" />;
                      })()}
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-stone-800 mb-1">{selectedService.name}</h2>
                      <p className="text-stone-500">{selectedService.duration} | ${selectedService.price}/session</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('book')}
                    className="px-4 py-2 bg-sage-700 text-white text-sm font-medium rounded-lg hover:bg-sage-800 transition-colors flex items-center gap-2"
                  >
                    Book Now
                    <ChevronRight className="w-4 h-4" />
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
                        <CheckCircle className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" />
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

              {/* Testimonials Section */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-4">Client Experiences</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white rounded-lg border border-stone-200 p-5 hover:shadow-md transition-shadow">
                      <div className="flex gap-0.5 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                      <div className="border-t border-stone-100 pt-3">
                        <p className="font-medium text-stone-800 text-sm">{testimonial.author}</p>
                        <p className="text-xs text-stone-500">{testimonial.type} | {testimonial.duration}</p>
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
          <div className="max-w-2xl mx-auto animate-in">
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8">

              {/* Progress Bar */}
              {bookingStep !== 'complete' && (
                <div className="mb-8">
                  <div className="flex justify-between text-xs text-stone-500 mb-2">
                    <span className={bookingStep === 'quiz' ? 'text-sage-700 font-medium' : ''}>Care Quiz</span>
                    <span className={bookingStep === 'select' ? 'text-sage-700 font-medium' : ''}>Select Time</span>
                    <span className={bookingStep === 'confirm' ? 'text-sage-700 font-medium' : ''}>Confirm</span>
                  </div>
                  <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sage-600 transition-all duration-500"
                      style={{
                        width: bookingStep === 'quiz' ? '33%' :
                               bookingStep === 'select' ? '66%' :
                               bookingStep === 'confirm' ? '100%' : '0%'
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Quiz Step */}
              {bookingStep === 'quiz' && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-sage-100">
                      <Sparkles className="w-5 h-5 text-sage-700" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-stone-800">Care Assistant</h2>
                      <p className="text-sm text-stone-500">Let me help match you with the right service</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-stone-700 font-medium mb-4">{quizQuestions[quizStep].question}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {quizQuestions[quizStep].options.map((option) => {
                        const IconComponent = option.icon;
                        return (
                          <button
                            key={option.value}
                            onClick={() => handleQuizAnswer(quizQuestions[quizStep].id, option.value)}
                            className="p-4 rounded-lg border border-stone-200 hover:border-sage-300 hover:bg-sage-50 transition-all text-left"
                          >
                            <IconComponent className="w-5 h-5 text-sage-600 mb-2" />
                            <span className="text-sm font-medium text-stone-700">{option.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    onClick={() => setBookingStep('select')}
                    className="text-sm text-stone-500 hover:text-stone-700 transition-colors"
                  >
                    Skip quiz & choose service
                  </button>
                </>
              )}

              {/* Select Step */}
              {bookingStep === 'select' && (
                <>
                  <button
                    onClick={() => setBookingStep('quiz')}
                    className="flex items-center gap-1 text-sm text-stone-500 hover:text-stone-700 mb-4"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to quiz
                  </button>

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
                    className={`w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                      selectedTime
                        ? 'bg-sage-700 text-white hover:bg-sage-800'
                        : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                    }`}
                  >
                    Continue
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              {/* Confirm Step */}
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
                      onClick={() => setBookingStep('select')}
                      className="flex-1 py-3 rounded-lg font-medium border border-stone-300 text-stone-600 hover:bg-stone-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
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

              {/* Complete Step */}
              {bookingStep === 'complete' && (
                <div className="text-center py-8 animate-in">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage-100 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-sage-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-stone-800 mb-2">Appointment Confirmed</h2>
                  <p className="text-stone-500 mb-6">
                    Your appointment has been scheduled for {selectedDate.date} at {selectedTime}.
                    A confirmation email has been sent with additional details.
                  </p>
                  <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 text-left mb-6">
                    <h3 className="font-medium text-stone-800 mb-2">What&apos;s Next</h3>
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
                        <span>You&apos;ll receive a reminder email and text 24 hours before</span>
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
          <div className="grid lg:grid-cols-2 gap-8 animate-in">
            {/* Contact Form */}
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8">
              {!formSubmitted ? (
                <>
                  <h2 className="text-2xl font-semibold text-stone-800 mb-2">Get in Touch</h2>
                  <p className="text-stone-500 mb-6">Have questions? Send me a message and I&apos;ll respond within 24 hours.</p>

                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                      <input
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => {
                          setContactForm({ ...contactForm, name: e.target.value });
                          if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                        }}
                        className={`w-full px-4 py-2.5 rounded-lg border text-stone-800 focus:outline-none focus:ring-2 focus:ring-sage-500 ${
                          formErrors.name ? 'border-red-300' : 'border-stone-300'
                        }`}
                        placeholder="Your name"
                      />
                      {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => {
                          setContactForm({ ...contactForm, email: e.target.value });
                          if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                        }}
                        className={`w-full px-4 py-2.5 rounded-lg border text-stone-800 focus:outline-none focus:ring-2 focus:ring-sage-500 ${
                          formErrors.email ? 'border-red-300' : 'border-stone-300'
                        }`}
                        placeholder="you@example.com"
                      />
                      {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
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
                        onChange={(e) => {
                          setContactForm({ ...contactForm, message: e.target.value });
                          if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                        }}
                        rows={4}
                        className={`w-full px-4 py-2.5 rounded-lg border text-stone-800 focus:outline-none focus:ring-2 focus:ring-sage-500 resize-none ${
                          formErrors.message ? 'border-red-300' : 'border-stone-300'
                        }`}
                        placeholder="Tell me a little about what brings you to therapy..."
                      />
                      {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
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
                <div className="text-center py-8 animate-in">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage-100 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-sage-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-stone-800 mb-2">Message Sent</h2>
                  <p className="text-stone-500 mb-6">
                    Thank you for reaching out. I&apos;ll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setContactForm({ name: '', email: '', phone: '', message: '' });
                      setFormErrors({});
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
                <h3 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-sage-600" />
                  Office Location
                </h3>
                <div className="space-y-3 text-stone-600">
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="font-medium text-stone-800">Aurora Wellness Studio</p>
                      <p>8500 Turnpike Dr, Suite 220</p>
                      <p>Westminster, CO 80031</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-sage-600" />
                    <span>(720) 555-0123</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-sage-600" />
                    <span>hello@aurorawellness.care</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-6">
                <h3 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-sage-600" />
                  Office Hours
                </h3>
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
                <h3 className="font-semibold text-sage-800 mb-2 flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  Telehealth Available
                </h3>
                <p className="text-sm text-sage-700">
                  Can&apos;t make it to the office? I offer secure video sessions for all services.
                  Same quality care from the comfort of your home.
                </p>
              </div>

              <div className="bg-stone-100 rounded-xl border border-stone-200 p-6">
                <h3 className="font-semibold text-stone-800 mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-sage-600" />
                  Confidentiality
                </h3>
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
      <footer className="bg-sage-800 text-white py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="font-semibold">AuroraWellness</span>
                  <span className="text-sage-300">.care</span>
                </div>
              </div>
              <p className="text-sm text-sage-300">
                Evidence-based therapy for individuals and couples seeking healing and growth.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-sm text-sage-300">
                <li>Individual Therapy</li>
                <li>Couples Counseling</li>
                <li>Trauma & PTSD</li>
                <li>Anxiety & Stress</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-sage-300">
                <li>(720) 555-0123</li>
                <li>hello@aurorawellness.care</li>
                <li>Westminster, CO 80031</li>
              </ul>
            </div>

            {/* Credentials */}
            <div>
              <h4 className="font-semibold mb-3">Credentials</h4>
              <ul className="space-y-2 text-sm text-sage-300">
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Licensed LMFT #LMF-12345
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  EMDR Certified
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  HIPAA Compliant
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-sage-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-sage-400">
              Dr. Emily Chen, LMFT | License #LMF-12345 | Colorado
            </p>
            <p className="text-xs text-sage-500">
              This is a demo for Moonlit Studios portfolio
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
