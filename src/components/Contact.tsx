import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Send email via EmailJS
  emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID!,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,   // Replace with your EmailJS template ID
    
    {
      name: formData.name,

      message: formData.message
    },
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY!     // Replace with your EmailJS public key
  )
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
  })
  .catch((err) => {
    console.error('FAILED...', err);
    alert('Oops! Something went wrong. Please try again.');
  });
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#003366] text-3xl sm:text-4xl mb-4">Get In Touch</h2>
          <p className="text-[#003366]/70 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="mb-8">
              <h3 className="text-[#003366] mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#003366]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#003366]" size={20} />
                  </div>
                  <div>
                    <p className="text-[#003366]/70">Phone</p>
                    <p className="text-[#003366]">+256394857829</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#003366]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#003366]" size={20} />
                  </div>
                  <div>
                    <p className="text-[#003366]/70">Email</p>
                    <p className="text-[#003366]">salfordinc00@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#003366]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#003366]" size={20} />
                  </div>
                  <div>
                    <p className="text-[#003366]/70">Address</p>
                    <p className="text-[#003366]">Span House<br />Nakasero, Kampala Road<br />Uganda</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-[#003366] mb-3">Office Hours</h4>
              <div className="space-y-2 text-[#003366]/70">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#003366] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] text-[#003366]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#003366] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] text-[#003366]"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#003366] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] text-[#003366]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#003366] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] text-[#003366] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-[#0055aa] transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
