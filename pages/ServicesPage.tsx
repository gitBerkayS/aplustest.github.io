import { Services } from '../components/Services';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We offer a comprehensive range of dental services to meet all your oral health needs. 
            From routine check-ups to advanced cosmetic procedures, our experienced team is here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Services />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Schedule your consultation today and take the first step towards a healthier, more beautiful smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/team"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
