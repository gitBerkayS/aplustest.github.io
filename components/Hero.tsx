import { Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-orange-30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Smile is Our Priority
            </h1>
            <p className="text-xl text-gray-600">
              Experience exceptional dental care with our experienced team. We're committed to helping you achieve a healthy, beautiful smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
              >
                Our Services
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-orange-600">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">10K+</div>
                <div className="text-gray-600">Happy Patients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">50+</div>
                <div className="text-gray-600">Awards Won</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://i.imgur.com/LZWOosB.jpeg"
                alt="Modern dental clinic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}