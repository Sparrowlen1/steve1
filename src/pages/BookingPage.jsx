import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BookingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    spend: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://formspree.io/f/mjgzpngo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          monthly_spend: formData.spend,
          message: formData.message,
          _subject: `New Booking Request from ${formData.name}`,
        })
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: '✓ Booking request sent! We\'ll contact you within 24 hours.' 
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          spend: '',
          message: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: '❌ Failed to send. Please email us directly at Sparrowlen13@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors mb-8"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book a <span className="text-amber-500">Consultation</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Let's discuss how we can scale your brand with high-volume creative
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-amber-500 focus:outline-none text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-amber-500 focus:outline-none text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-amber-500 focus:outline-none text-white"
                  placeholder="0740063099"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-amber-500 focus:outline-none text-white"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Monthly Ad Spend (KES)</label>
              <select
                name="spend"
                value={formData.spend}
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-amber-500 focus:outline-none text-white"
              >
                <option value="">Select your monthly ad spend range</option>
                <option value="KES 0 - KES 6.5M">KES 0 - KES 6.5M</option>
                <option value="KES 6.5M - KES 13M">KES 6.5M - KES 13M</option>
                <option value="KES 13M - KES 32.5M">KES 13M - KES 32.5M</option>
                <option value="KES 32.5M+">KES 32.5M+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your brand, goals, and challenges..."
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-amber-500 focus:outline-none text-white resize-none"
              ></textarea>
            </div>

            <input type="text" name="_gotcha" style={{ display: 'none' }} />

            {status.message && (
              <div className={`p-4 rounded-lg ${
                status.type === 'success' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black py-4 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Book Your Consultation →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;