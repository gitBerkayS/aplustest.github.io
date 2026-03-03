import { ImageWithFallback } from './figma/ImageWithFallback';

const team = [
  {
      name: 'Dr. Kourosh Kaviani',
    role: 'Chief Dentist',
    image: 'https://images.unsplash.com/photo-1606811801193-e318c9a87ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODU4Nzk0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: '30+ years of experience in cosmetic and general dentistry',
  },
  {
    name: '{name}',
    role: '{role}',
    image: 'https://images.unsplash.com/photo-1611690061822-b707a67bfebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMHNtaWxlfGVufDF8fHx8MTc2ODYyMzEyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: '{description}',
  },
  {
    name: '{name}',
    role: '{role}',
    image: 'https://images.unsplash.com/photo-1764004450351-37fb72cb8e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm58ZW58MXx8fHwxNzY4NjAwOTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: '{description}',
  },
];

export function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}