import { Contact } from '../components/Contact';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      {/* Contact Form & Info */}
      <Contact />
      

      {/* Map Section */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Find Us</h2>
            <p className="text-zinc-600">Located in the heart of New York City</p>
          </div>
          <div className="bg-zinc-300 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
            <p className="text-zinc-600 text-lg">Map integration would go here</p>
          </div>
        </div>
      </section>
    </>
  );
}
