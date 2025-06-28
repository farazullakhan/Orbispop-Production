import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import TextReveal from './TextReveal';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import SectionTransition from './SectionTransition';
import FloatingElements from './FloatingElements';

const Contact = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(formRef, { threshold: 0.3, once: true });
  
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset form state after 5 seconds
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState('error');
      // Reset error state after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  const getButtonContent = () => {
    switch (formState) {
      case 'submitting':
        return (
          <>
            <Loader2 size={20} className="animate-spin mr-2" />
            Sending...
          </>
        );
      case 'success':
        return (
          <>
            <CheckCircle size={20} className="mr-2" />
            Message Sent!
          </>
        );
      case 'error':
        return (
          <>
            <AlertCircle size={20} className="mr-2" />
            Try Again
          </>
        );
      default:
        return 'Send Message';
    }
  };

  const getButtonStyles = () => {
    switch (formState) {
      case 'success':
        return 'bg-green-600 hover:bg-green-700';
      case 'error':
        return 'bg-red-700 hover:bg-red-800';
      default:
        return 'bg-red-600 hover:bg-red-700';
    }
  };

  return (
    <>
      <section id="contact" className="py-24 bg-black relative section-transition">
        {/* Floating background elements */}
        <FloatingElements variant="lines" density="medium" color="red-600" />
        <FloatingElements variant="circles" density="low" color="red-600" className="opacity-20" />
        
        <div className="absolute right-0 top-20 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <TextReveal>
              <p className="text-gray-400 text-lg mb-3">Get in Touch</p>
            </TextReveal>
            <TextReveal delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold">Let's Connect</h2>
            </TextReveal>
          </div>

          <div 
            ref={formRef}
            className={`
              max-w-xl mx-auto bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-600/20
              transform transition-all duration-700
              ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            {formState === 'success' && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-500/30 rounded-lg flex items-center">
                <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                <p className="text-green-400">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            )}

            {formState === 'error' && (
              <div className="mb-6 p-4 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center">
                <AlertCircle size={20} className="text-red-500 mr-3 flex-shrink-0" />
                <p className="text-red-400">Sorry, there was an error sending your message. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="7f474bdd-86d7-426f-9711-72618720a67b" />
              
              {/* Honeypot Spam Protection */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={formState === 'submitting'}
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={formState === 'submitting'}
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={formState === 'submitting'}
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formState === 'submitting'}
                className={`
                  w-full text-white rounded-lg px-6 py-4 font-medium transition-all duration-300 
                  flex items-center justify-center
                  disabled:cursor-not-allowed
                  ${getButtonStyles()}
                `}
              >
                {getButtonContent()}
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Transition to footer */}
      <SectionTransition type="wave" direction="up" />
    </>
  );
};

export default Contact;