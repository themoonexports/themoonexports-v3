'use client';

import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // For Vercel deployment, we'll use Web3Forms (free form handling service)
      const form = new FormData();
      form.append('access_key', 'your-web3forms-access-key'); // Replace with actual key
      form.append('name', `${formData.firstName} ${formData.lastName}`);
      form.append('email', formData.email);
      form.append('company', formData.company);
      form.append('message', formData.message);
      form.append('subject', `New inquiry from ${formData.firstName} ${formData.lastName}`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your inquiry! We will get back to you soon.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
      
    } catch (error) {
      // Fallback to mailto if form service fails
      const subject = encodeURIComponent(`Inquiry from ${formData.firstName} ${formData.lastName}`);
      const body = encodeURIComponent(`
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}

---
Sent from The Moon Exports website contact form
      `);
      
      const mailtoLink = `mailto:info@themoonexports.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setSubmitMessage('Your email client will open with the message ready to send. Thank you for your inquiry!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
      <h3 className="text-base font-semibold leading-7 text-gray-900">Send us a message</h3>
      
      {submitMessage && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-blue-800 text-sm">{submitMessage}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
              First name *
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
              Last name *
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email *
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
            Company
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              autoComplete="organization"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
            Message *
          </label>
          <div className="mt-2">
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Tell us about your requirements..."
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Preparing Email...' : 'Send Message'}
          </button>
        </div>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Or email us directly at{' '}
          <a 
            href="mailto:info@themoonexports.com" 
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            info@themoonexports.com
          </a>
        </p>
      </div>
    </div>
  );
}
