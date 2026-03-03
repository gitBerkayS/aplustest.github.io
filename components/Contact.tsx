import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { theme } from '../config/theme';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (mock)
    alert('Thank you for your appointment request! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', date: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-${theme.colors.text.primary} mb-4`}>Book an Appointment</h2>
          <p className={`text-xl text-${theme.colors.text.secondary} max-w-2xl mx-auto`}>
            Ready to improve your smile? Contact us today to schedule your visit
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold text-${theme.colors.text.primary} mb-6`}>Get in Touch</h3>
              <p className={`text-${theme.colors.text.secondary} mb-8`}>
                We're here to answer your questions and schedule your appointment. Reach out to us through any of the following methods.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 bg-${theme.colors.primaryLight} rounded-lg flex items-center justify-center`}>
                  <MapPin className={`w-6 h-6 text-${theme.colors.primary}`} />
                </div>
                <div>
                  <h4 className={`font-semibold text-${theme.colors.text.primary} mb-1`}>Address</h4>
                  <p className={`text-${theme.colors.text.secondary}`}>{theme.contact.address.street}<br />{theme.contact.address.city}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 bg-${theme.colors.primaryLight} rounded-lg flex items-center justify-center`}>
                  <Phone className={`w-6 h-6 text-${theme.colors.primary}`} />
                </div>
                <div>
                  <h4 className={`font-semibold text-${theme.colors.text.primary} mb-1`}>Phone</h4>
                  <p className={`text-${theme.colors.text.secondary}`}>{theme.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 bg-${theme.colors.primaryLight} rounded-lg flex items-center justify-center`}>
                  <Mail className={`w-6 h-6 text-${theme.colors.primary}`} />
                </div>
                <div>
                  <h4 className={`font-semibold text-${theme.colors.text.primary} mb-1`}>Email</h4>
                  <p className={`text-${theme.colors.text.secondary}`}>{theme.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 bg-${theme.colors.primaryLight} rounded-lg flex items-center justify-center`}>
                  <Clock className={`w-6 h-6 text-${theme.colors.primary}`} />
                </div>
                <div>
                  <h4 className={`font-semibold text-${theme.colors.text.primary} mb-1`}>Office Hours</h4>
                  <p className={`text-${theme.colors.text.secondary}`}>
                    {theme.contact.hours.weekdays}<br />
                    {theme.contact.hours.saturday}<br />
                    {theme.contact.hours.sunday}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-${theme.colors.text.primary} font-medium mb-2`}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-${theme.colors.primary} focus:border-transparent outline-none transition`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-${theme.colors.text.primary} font-medium mb-2`}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-${theme.colors.primary} focus:border-transparent outline-none transition`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className={`block text-${theme.colors.text.primary} font-medium mb-2`}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-${theme.colors.primary} focus:border-transparent outline-none transition`}
                  placeholder="(604) 606-4202"
                />
              </div>

              <div>
                <label htmlFor="date" className={`block text-${theme.colors.text.primary} font-medium mb-2`}>
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-${theme.colors.primary} focus:border-transparent outline-none transition`}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-${theme.colors.text.primary} font-medium mb-2`}>
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-${theme.colors.primary} focus:border-transparent outline-none transition resize-none`}
                  placeholder="Tell us about your dental needs..."
                />
              </div>

              <button
                type="submit"
                className={`w-full px-8 py-4 bg-${theme.colors.primary} text-white rounded-lg hover:bg-${theme.colors.primaryHover} transition-colors shadow-lg hover:shadow-xl`}
              >
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}