import dentalCareIcon from '../imgs/dental-care.svg';
import dentalCleaningIcon from '../imgs/dental-cleaning.svg';
import dentalTreatmentIcon from '../imgs/dental-treatment.svg';
import dentalVeneerIcon from '../imgs/dental-veneer.svg';
import endodonticIcon from '../imgs/endodontic.svg';
import toothExtractionIcon from '../imgs/tooth-extraction.svg';

const services = [
  {
    icon: dentalCareIcon,
    title: 'Routine Dental Exam & Checkup',
    description:
      'Comprehensive oral exam, gum assessment, and personalized recommendations to catch issues early and keep your smile healthy.',
  },
  {
    icon: dentalCleaningIcon,
    title: 'Teeth Whitening',
    description:
      'Safe, professional whitening to lift stains and brighten your smile options available for in office and take home treatment.',
  },
  {
    icon: dentalTreatmentIcon,
    title: 'Dental Fillings',
    description:
      'Tooth colored fillings to repair cavities and minor damage, restoring strength and a natural look with a comfortable, gentle approach.',
  },
  {
    icon: dentalVeneerIcon,
    title: 'Cosmetic Dentistry',
    description:
      'Smile enhancing treatments like bonding, veneers, and contouring to improve shape, color, and overall appearance.',
  },
  {
    icon: endodonticIcon,
    title: 'Root Canal Treatment',
    description:
      'Relieves tooth pain and saves infected teeth by treating the inner pulp and sealing the tooth often completed in one or two visits.',
  },
  {
    icon: toothExtractionIcon,
    title: 'Tooth Extractions',
    description:
      'Gentle removal of damaged, decayed, or problematic teeth, with clear aftercare guidance and replacement options if needed.',
  },
];


export function Services() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="p-8 rounded-xl border border-gray-200 hover:border-orange-600 hover:shadow-lg transition-all duration-300 group"
        >
          <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
            <img
              src={service.icon}
              alt=""
              className="w-14 h-14 object-contain transition-[filter] duration-300 [filter:brightness(0)_saturate(100%)_invert(48%)_sepia(89%)_saturate(1582%)_hue-rotate(358deg)_brightness(98%)_contrast(91%)] group-hover:[filter:brightness(0)_invert(1)]"
              aria-hidden
            />
          </div>
          <h3 className="text-xl font-extrabold text-gray-900 mb-3">{service.title}</h3>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
        </div>
      ))}
    </div>
  );
}