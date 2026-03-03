import { Hero } from '../components/Hero';
import { Services } from '../components/Services';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of dental services to meet all your oral health needs
            </p>
          </div>
          <Services />
        </div>
      </section>
    </>
  );
}
