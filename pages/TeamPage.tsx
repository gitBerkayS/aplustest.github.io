import { Team } from '../components/Team';
import { GraduationCap, Award, Heart } from 'lucide-react';

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced dental professionals are dedicated to providing you with the best care possible. 
            Get to know the friendly faces behind your healthy smile.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <Team />

      {/* Why Choose Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What sets our dental professionals apart
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Highly Qualified</h3>
              <p className="text-gray-600">
                All our dentists hold advanced degrees and certifications from top dental schools 
                and participate in ongoing continuing education.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Award-Winning</h3>
              <p className="text-gray-600">
                Our team has received numerous accolades for clinical excellence and outstanding 
                patient care over the years.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compassionate Care</h3>
              <p className="text-gray-600">
                We treat every patient like family, ensuring a comfortable experience and 
                personalized treatment plans tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-orange-100 mb-8">
            We're always looking for talented dental professionals to join our growing practice.
          </p>
          <button className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors shadow-lg font-semibold">
            View Career Opportunities
          </button>
        </div>
      </section>
    </>
  );
}
