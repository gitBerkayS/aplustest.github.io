import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { theme } from '../config/theme';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold text-orange-400`}>{theme.brandName}</h3>
            <p className={`text-zinc-400`}>
              Your trusted partner for exceptional dental care and beautiful smiles.
            </p>
            <div className="flex space-x-4">
              <a href={theme.social.facebook} className={`w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-orange-600' transition-colors`}>
                <Facebook className="w-5 h-5" />
              </a>
              <a href={theme.social.twitter} className={`w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-orange-600' transition-colors`}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href={theme.social.instagram} className={`w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-orange-600' transition-colors`}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href={theme.social.linkedin} className={`w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-orange-600' transition-colors`}>
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className={`text-zinc-400 hover:text-orange-400 transition-colors`}>Home</a></li>
              <li><a href="#services" className={`text-zinc-400 hover:text-orange-400 transition-colors`}>Services</a></li>
              <li><a href="#about" className={`text-zinc-400 hover:text-orange-400 transition-colors`}>About Us</a></li>
              <li><a href="#team" className={`text-zinc-400 hover:text-orange-400 transition-colors`}>Our Team</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className={`text-zinc-400 hover:text-orange-400 transition-colors`}>General Dentistry</a></li>
              <li><a href="#services" className={`text-zinc-400 hover:text-orange-400 transition-colors`}>Cosmetic Dentistry</a></li>
              <li><a href="#services" className={`text-zinc-400 hover:text-orange-400 transition-colors`}>Orthodontics</a></li>
              <li><a href="#services" className={`text-zinc-400 hover:text-orange-400 transition-colors`}>Emergency Care</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className={`space-y-2 text-zinc-400`}>
              <li>{theme.contact.address.street}</li>
              <li>{theme.contact.address.city}</li>
              <li className="pt-2">{theme.contact.phone}</li>
              <li>{theme.contact.email}</li>
            </ul>
          </div>
        </div>

        <div className={`border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-400`}>
          <p>&copy; {currentYear} {theme.brandName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}