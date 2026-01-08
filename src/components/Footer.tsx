import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, PhoneCall } from 'lucide-react';
// import logo from '../assets/logo.jpeg';

export function Footer() {
  return (
    <footer className="bg-[#003366] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            {/* <img src={logo} alt="Salford" className="h-16 mb-4 brightness-0 invert" /> */}
            <p className="text-white/70 mb-4">
              Your trusted partner for innovative engineering solutions and consulting services.
            </p>
            <div className="flex gap-4">
             
               {/* WhatsApp */}
              <a
                href="https://wa.me/256394857829"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <PhoneCall size={20} className="text-white" />
              </a>
              <a
                href="https://x.com/SalfordInc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="X (Twitter)"
              >

                <Twitter size={20} />
              </a>
              <a
                href=""
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70">
                <Phone size={16} />
                <span>+256394857829</span>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Mail size={16} />
                <span>salfordinc00@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Span House<br />Nakasero, Kampala Road<br />Uganda</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} Salford Engineering Consults. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}