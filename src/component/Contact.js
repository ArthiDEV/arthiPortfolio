import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import PageTransition from './PageTransition';
import ContactSkeleton from './ContactSkeleton';
import Copyright from './Copyright';

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    // Simulate loading time for contact form initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // 1.2 second loading time

    return () => clearTimeout(timer);
  }, []);

  // Handle network issues or slow loading
  useEffect(() => {
    const handleOnline = () => {
      if (navigator.onLine) {
        setIsLoading(false);
      }
    };

    const handleOffline = () => {
      setIsLoading(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isLoading) {
    return <ContactSkeleton />;
  }

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    console.log(`Field updated: ${name} = ${value}`);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Form submission started');
    console.log('Form data:', formData);
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      console.log('Validation failed: Missing required fields');
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    
    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
      
      // Check if environment variables are configured
      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS configuration missing. Please check your .env file.');
        console.log('Service ID:', serviceId ? 'Configured' : 'Missing');
        console.log('Template ID:', templateId ? 'Configured' : 'Missing');
        console.log('Public Key:', publicKey ? 'Configured' : 'Missing');
        setStatus({ 
          type: 'error', 
          message: 'Email service not configured. Please check your .env file.' 
        });
        return;
      }
      
      console.log('EmailJS Configuration loaded from environment');
      console.log('Service ID:', serviceId ? 'Configured ✓' : 'Missing ✗');
      console.log('Template ID:', templateId ? 'Configured ✓' : 'Missing ✗');
      console.log('Public Key:', publicKey ? 'Configured ✓' : 'Missing ✗');
      console.log('Sending email with EmailJS...');
      
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );
      
      console.log('Email sent successfully:', result.text);
      
      setStatus({ 
        type: 'success', 
        message: 'Message sent successfully! Thank you for reaching out.' 
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      console.log('Form reset after successful submission');
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or contact directly via email.' 
      });
    } finally {
      setIsSubmitting(false);
      console.log('Form submission completed');
    }
  };
  return (
    <PageTransition>
      <div id="contact-page" className="h-screen w-full bg-gradient-to-br from-dark-800 via-dark-900 to-black relative overflow-hidden overflow-x-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary-500/10 to-transparent" />
        </div>

        {/* Fixed Background Rectangle Container */}
        <div className="absolute inset-x-2 top-16 bottom-2 sm:inset-x-4 sm:top-20 sm:bottom-4 lg:inset-8 bg-dark-800/30 backdrop-blur-sm border border-primary-500/20 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          {/* Scrollable Content Inside Rectangle */}
          <div className="h-full overflow-y-auto overflow-x-hidden">
            {/* Main Content */}
            <div className="relative z-10 pb-16">

        <div className="relative z-10 p-3 sm:p-6 lg:p-12 max-w-6xl mx-auto pt-4 sm:pt-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-light-50 mb-6 sm:mb-8 lg:mb-12 text-center">
            GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-purple-400">TOUCH</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-light-50 mb-4 lg:mb-6">Contact Information</h3>
                
                <div className="space-y-4 lg:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-light-400 text-xs sm:text-sm uppercase tracking-wide">Email</p>
                      <p className="text-light-50 text-base sm:text-lg font-medium break-all">arthideveloper398@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-light-400 text-xs sm:text-sm uppercase tracking-wide">Phone</p>
                      <p className="text-light-50 text-base sm:text-lg font-medium">+91 6379394126</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-light-400 text-xs sm:text-sm uppercase tracking-wide">Location</p>
                      <p className="text-light-50 text-base sm:text-lg font-medium">Cuddalore, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-light-50 mb-4 lg:mb-6">Connect With Me</h3>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a 
                    href="https://www.linkedin.com/in/arthi-hari-03a04k1998" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary-500/20 border border-secondary-500/30 text-secondary-400 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 hover:bg-secondary-500 hover:text-white text-sm sm:text-base inline-block text-center cursor-pointer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-light-50 mb-4 lg:mb-6">Send a Message</h3>
              
              {/* Status Message */}
              {status.message && (
                <div className={`mb-4 p-3 rounded-lg border text-sm ${
                  status.type === 'success' 
                    ? 'bg-green-500/20 border-green-500/30 text-green-300' 
                    : 'bg-red-500/20 border-red-500/30 text-red-300'
                }`}>
                  {status.message}
                </div>
              )}
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    required
                    className="w-full p-3 sm:p-4 bg-dark-700/50 border border-primary-500/30 rounded-lg text-light-50 placeholder-light-400 transition-all duration-300 focus:outline-none focus:border-secondary-500 focus:bg-dark-700/70 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email" 
                    required
                    className="w-full p-3 sm:p-4 bg-dark-700/50 border border-primary-500/30 rounded-lg text-light-50 placeholder-light-400 transition-all duration-300 focus:outline-none focus:border-secondary-500 focus:bg-dark-700/70 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject" 
                    className="w-full p-3 sm:p-4 bg-dark-700/50 border border-primary-500/30 rounded-lg text-light-50 placeholder-light-400 transition-all duration-300 focus:outline-none focus:border-secondary-500 focus:bg-dark-700/70 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message" 
                    rows="5"
                    required
                    className="w-full p-3 sm:p-4 bg-dark-700/50 border border-primary-500/30 rounded-lg text-light-50 placeholder-light-400 transition-all duration-300 focus:outline-none focus:border-secondary-500 focus:bg-dark-700/70 resize-none text-sm sm:text-base"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 uppercase tracking-wide text-sm sm:text-base ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-secondary-500 to-purple text-white hover:from-secondary-600 hover:to-secondary-700 hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
          </div>
        </div>
          </div>
        </div>
        
        {/* Copyright Component */}
        <Copyright />
      </div>
    </PageTransition>
  );
}

export default Contact;