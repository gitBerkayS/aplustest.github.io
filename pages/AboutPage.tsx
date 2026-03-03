import { About } from '../components/About';
import { Award, Heart, Users, Shield } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'Your comfort and well-being are our top priorities. We listen to your concerns and tailor our treatments to your unique needs.',
  },
  {
    icon: Award,
    title: 'Excellence in Dentistry',
    description: 'We are committed to delivering the highest quality dental care using the latest technology and evidence-based practices.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Our skilled professionals bring years of expertise and a passion for creating beautiful, healthy smiles.',
  },
  {
    icon: Shield,
    title: 'Trust & Integrity',
    description: 'We build lasting relationships with our patients based on honesty, transparency, and mutual respect.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our practice, our values, and our commitment to exceptional dental care.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <About />

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">30+</div>
              <div className="text-xl text-orange-100">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-xl text-orange-100">Happy Patients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl text-orange-100">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
