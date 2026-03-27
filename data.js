// Dentist-pack icons (non-services)
const dentistPackIcons = {
  checked: 'imgs/dentist-pack/svg/015-checked.svg',
  destination: 'imgs/dentist-pack/svg/024-destination.svg',
  'call-center': 'imgs/dentist-pack/svg/013-call%20center.svg',
  schedule: 'imgs/dentist-pack/svg/012-schedule.svg',
  consultation: 'imgs/dentist-pack/svg/018-consultation.svg',
  heart: 'imgs/dentist-pack/svg/030-heart.svg',
  shield: 'imgs/dentist-pack/svg/043-shield.svg',
  happy: 'imgs/dentist-pack/svg/029-happy.svg',
  inspection: 'imgs/dentist-pack/svg/023-inspection.svg',
  hygiene: 'imgs/dentist-pack/svg/031-hygiene.svg',
  'good-feedback': 'imgs/dentist-pack/svg/040-good%20feedback.svg',
};

// Site-wide configuration
const site = {
  brandName: 'A+ Dental',
  logo: 'imgs/logo.svg',
  cdcpLogo: 'imgs/cdcp-logo.svg',
  footerLogo: 'imgs/logo-footer.png',
  url: 'https://aplusdentalclinic.com',
  footerTagline: 'Your trusted partner for exceptional dental care and beautiful smiles.',

  navLinks: [
    { href: 'index.html', label: 'Home' },
    { href: 'services.html', label: 'Services' },
    {
      href: 'about.html',
      label: 'About',
      dropdown: [
        { href: 'about.html', label: 'About Us' },
        { href: 'new-patients.html', label: 'New Patients' },
      ],
    },
    { href: 'team.html', label: 'Our Team' },
    { href: 'careers.html', label: 'Careers' },
    { href: 'contact.html', label: 'Contact' },
  ],

  footerQuickLinks: [
    { href: 'index.html', label: 'Home' },
    { href: 'services.html', label: 'Services' },
    { href: 'about.html', label: 'About Us' },
    { href: 'new-patients.html', label: 'New Patients' },
    { href: 'team.html', label: 'Our Team' },
    { href: 'careers.html', label: 'Careers' },
  ],

  footerServices: [
    { href: 'services.html', label: 'Preventive Dentistry' },
    { href: 'services.html', label: 'Routine Dental Exam & Checkup' },
    { href: 'services.html', label: 'Emergency Dentistry' },
    { href: 'services.html', label: 'Dental Implants' },
    { href: 'services.html', label: 'Teeth Whitening' },
    { href: 'services.html', label: 'Crown and Bridge' },
    { href: 'services.html', label: 'Dental Fillings' },
    { href: 'services.html', label: 'Cosmetic Dentistry' },
    { href: 'services.html', label: 'Root Canal Treatment' },
    { href: 'services.html', label: 'Tooth Extractions' },
    { href: 'services.html', label: 'Dentures' },
    { href: 'services.html', label: 'Post Procedure Care' },
  ],

  social: {
    facebook: { url: '#', label: 'Visit our Facebook page' },
    googleMaps: { url: 'https://share.google/hDeuZpbhx6h9lPHdo', label: 'Open our Google Maps profile' },
    instagram: { url: 'https://www.instagram.com/dental_aplus/', label: 'Visit our Instagram page' },
    linkedin: { url: '#', label: 'Visit our LinkedIn page' },
  },
};

// Contact Information
const contact = {
  phone: '(604) 606-4202',
  phoneTel: '6046064202',
  email: 'info@aplusdental.ca',
  address: {
    street: '1288 Commercial Drive',
    city: 'Vancouver, BC V5L 3X4',
  },
  mapsUrl: 'https://maps.app.goo.gl/EdkV1iA85HCphsmf8',
  bookingUrl: 'https://aplusdental.myformsathome.com/TrackerCloud/NewBooking/NP%20Cleaning#step-2',
  hours: {
    weekdays: 'Mon - Fri: 10:00 AM - 5:00 PM',
    saturday: 'Sat: 10:00 AM - 5:00 PM',
    sunday: 'Sun: Closed',
  },
};

// Hero section (index page)
const hero = {
  title: 'Your Smile is Our Priority',
  subtitle: 'Experience exceptional dental care with our experienced team. We\'re committed to helping you achieve a healthy, beautiful smile.',
  primaryButton: 'Book Appointment',
  primaryButtonHref: 'contact.html',
  secondaryButton: 'Our Services',
  secondaryButtonHref: 'services.html',
  heroImage: 'imgs/clinic-front.png',
  heroImageAlt: 'Modern dental clinic',
  stats: [
    { value: '40+', label: 'Years Experience' },
    { value: '20,000+', label: 'Happy Patients (Est.)' },
    { value: '5★', label: 'Rated by Patients' },
  ],
};

// Index page
const indexPage = {
  newPatientsBanner: {
    title: 'New Patients Welcome',
    subtitle: 'We make your first visit stress-free. Learn what to expect, what to bring, and how we can help you achieve a healthier smile.',
    buttonText: 'New Patient Info',
    buttonHref: 'new-patients.html',
  },
  locationBenefits: {
    title: 'Visit Us on Commercial Drive',
    subtitle: 'Convenient location with patient-friendly amenities',
    items: [
      {
        icon: 'imgs/public-transportation/svg/028-van.svg',
        title: 'Free Nearby Parking',
        description: 'Easy parking available in the area so your visit is hassle-free.',
      },
      {
        icon: 'imgs/public-transportation/svg/003-bus-1.svg',
        title: 'Transit Accessible',
        description: 'Located on Commercial Drive with bus routes nearby.',
      },
      {
        icon: 'imgs/dentist-pack/svg/012-schedule.svg',
        title: 'Flexible Hours',
        description: 'Open Monday to Saturday to fit your schedule.',
      },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Quick answers to common questions about our practice',
    items: [
      {
        question: 'What dental services do you offer?',
        answer: 'We offer a full range of dental services, including preventive care, restorative treatments, and cosmetic dentistry.<br><br>Our services include cleanings, fillings, crowns, root canals, implants, and teeth whitening.<br><br>We focus on personalized treatment plans to help patients achieve healthy, confident smiles.',
      },
      {
        question: 'How often should I visit the dentist?',
        answer: 'Most patients should visit the dentist every six months for routine checkups and cleanings.<br><br>Regular visits help prevent dental problems and keep your smile healthy year-round.',
      },
      {
        question: 'Do you accept dental insurance?',
        answer: 'Yes, we accept most major dental insurance plans.<br><br>Our team is happy to help verify your coverage and assist with claims and billing.',
      },
      {
        question: 'Is teeth whitening safe?',
        answer: 'Yes, teeth whitening is safe when performed or supervised by a dental professional.<br><br>We use proven methods that effectively brighten your smile while protecting your teeth and gums.',
      },
      {
        question: 'What should I do in a dental emergency?',
        answer: 'If you experience a dental emergency, contact our office immediately for guidance and urgent care.<br><br>Prompt treatment can relieve pain, prevent further damage, and protect your oral health.',
      },
      {
        question: 'How can I prevent cavities?',
        answer: 'You can prevent cavities by brushing twice daily with fluoride toothpaste and flossing regularly.<br><br>Routine dental checkups, a balanced diet, and limiting sugary foods also help keep your teeth healthy.',
      },
      {
        question: 'Do you offer braces?',
        answer: 'Yes, we offer orthodontic options including traditional braces.<br><br>Our team will help you choose the best solution for a comfortable, confident smile.',
      },
      {
        question: 'What are your clinic hours?',
        answer: 'Please contact our office or visit our Contact Us page for the most up-to-date hours and availability.',
      },
      {
        question: 'How do I book an appointment?',
        answer: 'You can book an appointment by calling our office or by email.<br><br>Our team is happy to assist you in finding a time that works best for you.',
      },
    ],
  },
};

// Services page
const servicesPage = {
  header: {
    title: 'Our Services',
    subtitle: 'We offer a comprehensive range of dental services to meet all your oral health needs. From routine check-ups to advanced cosmetic procedures, our experienced team is here to help.',
  },
  cta: {
    title: 'Ready to Transform Your Smile?',
    text: 'Schedule your consultation today and take the first step towards a healthier, more beautiful smile.',
    primaryButton: 'Book Appointment',
    primaryHref: 'contact.html',
    secondaryButton: 'Meet Our Team',
    secondaryHref: 'team.html',
  },
};

// About page
const aboutPage = {
  header: {
    title: 'About Us',
    subtitle: 'Learn more about our practice, our values, and our commitment to exceptional dental care.',
  },
  content: {
    title: 'About A+ Dental',
    image: 'imgs/clinic-front.png',
    imageAlt: 'Dental office interior',
    description1: 'For over 30 years, A+ Dental has been providing exceptional dental care to families in our community. Our mission is to deliver personalized, gentle care using the latest technology and techniques.',
    description2: "We believe that everyone deserves a healthy, beautiful smile. That's why we focus on preventive care and patient education, ensuring you have the knowledge and tools to maintain optimal oral health.",
    features: [
      'State-of-the-art dental technology',
      'Experienced and caring dental team',
      'Comfortable and relaxing environment',
      'Flexible scheduling and payment options',
    ],
    buttonText: 'Learn More About Us',
  },
  values: {
    title: 'Our Values',
    subtitle: 'These core principles guide everything we do',
    items: [
      {
        title: 'Patient-Centered Care',
        description: 'Your comfort and well-being are our top priorities. We listen to your concerns and tailor our treatments to your unique needs.',
      },
      {
        title: 'Excellence in Dentistry',
        description: 'We are committed to delivering the highest quality dental care using the latest technology and evidence-based practices.',
      },
      {
        title: 'Experienced Team',
        description: 'Our skilled professionals bring years of expertise and a passion for creating beautiful, healthy smiles.',
      },
      {
        title: 'Trust & Integrity',
        description: 'We build lasting relationships with our patients based on honesty, transparency, and mutual respect.',
      },
    ],
  },
  stats: [
    { value: '30+', label: 'Years Experience' },
    { value: '10,000+', label: 'Happy Patients' },
    { value: '7+', label: 'Awards Won' },
  ],
};

// New Patients page
const newPatientsPage = {
  header: {
    title: 'New Patients',
    subtitle: 'Everything you need to know to prepare for your first visit',
  },
  whatToExpect: {
    title: 'What to Expect',
    intro: 'Your first visit is an opportunity for us to get to know you and your oral health goals. We\'ll take the time to listen and create a personalized care plan.',
    items: [
      {
        title: 'Welcome & Paperwork',
        description: 'We\'ll help you complete any necessary forms and review your health history.',
      },
      {
        title: 'Comprehensive Exam',
        description: 'A thorough examination of your teeth, gums, and overall oral health.',
      },
      {
        title: 'Personalized Plan',
        description: 'We\'ll discuss findings and recommend a treatment plan tailored to your needs.',
      },
    ],
  },
  whatToBring: {
    title: 'What to Bring',
    items: [
      'A valid photo ID',
      'Your dental insurance card (if applicable)',
      'List of current medications',
      'Any X-rays or records from your previous dentist (if transferring)',
    ],
  },
  payment: {
    title: 'Payment & Insurance',
    intro: 'Payment is due at the time of service. We accept cash, debit, Visa, and Mastercard.',
    insuranceTitle: 'Have dental insurance?',
    insuranceIntro: 'Please provide us with the following information before your appointment:',
    insuranceItems: [
      'Name of your insurance company',
      'Policy or group number',
      'First Nations Status (if applicable)',
      'Unique Client Identifier for Interim Federal Health Benefit (if applicable)',
    ],
    insuranceNote: 'If we do not receive your insurance details in advance, you may need to pay upfront and submit a claim to your insurance provider for reimbursement.',
  },
};

// Contact page
const contactPage = {
  header: {
    title: 'Contact Us',
    subtitle: 'Have questions? Get in touch—or book your appointment online.',
  },
  intro: {
    title: 'Get in Touch',
    text: "We're here to answer your questions. Use the form below to send us a message, or book online.",
  },
  form: {
    title: 'Send a Message',
    subtitle: 'Questions about our services, insurance, or anything else? We\'ll get back to you soon.',
    submitLabel: 'Send Message',
  },
  bookOnline: {
    label: 'Book Online',
    subtitle: 'Schedule your appointment directly',
  },
  map: {
    title: 'Find Us',
    subtitle: 'Located in the heart of Vancouver, BC',
  },
};

// Team page
const teamPage = {
  header: {
    title: 'Top-Rated Dentist in Vancouver',
    subtitle: 'Meet Dr. Kourosh Kaviani at A+ Dental, recognized by patients for trusted care and over 40 years of clinical experience.',
  },
  whyChoose: {
    title: 'Why Choose Our Team',
    subtitle: 'What sets our dental professionals apart',
    items: [
      {
        title: 'Highly Qualified',
        description: 'All our dentists hold advanced degrees and certifications from top dental schools and participate in ongoing continuing education.',
      },
      {
        title: 'Award-Winning',
        description: 'Our team has received numerous accolades for clinical excellence and outstanding patient care over the years.',
      },
      {
        title: 'Compassionate Care',
        description: 'We treat every patient like family, ensuring a comfortable experience and personalized treatment plans tailored to your needs.',
      },
    ],
  },
};

// Services Data
const services = [
  {
    title: 'Preventive Dentistry',
    description: 'Proactive care including exams, cleanings, and oral health planning to prevent problems before they start.',
    icon: '',
    learnMore: {
      whatIs: 'Preventive dentistry focuses on keeping teeth and gums healthy through regular checkups, hygiene care, fluoride, and early intervention.',
      careTips: 'Visit on a routine schedule, brush with fluoride toothpaste twice daily, floss once daily, and reduce sugary snacks and drinks.',
    },
  },
  {
    title: 'Routine Dental Exam & Checkup',
    description: 'Comprehensive oral exam, gum assessment, and personalized recommendations to catch issues early and keep your smile healthy.',
    icon: 'imgs/dental-care.svg',
    learnMore: {
      whatIs: 'A routine dental exam includes a thorough check of your teeth, gums, and oral tissues. We screen for cavities, gum disease, and other concerns. Professional cleaning removes plaque and tartar that brushing alone cannot reach.',
      careTips: 'Brush twice daily with fluoride toothpaste, floss daily, and visit every six months. Limit sugary foods and drinks. A balanced diet supports strong teeth and gums.',
    },
  },
  {
    title: 'Emergency Dentistry',
    description: 'Urgent dental care for tooth pain, infections, swelling, trauma, and other sudden oral health concerns.',
    icon: '',
    learnMore: {
      whatIs: 'Emergency dentistry provides same-day or urgent assessment and treatment to relieve pain and prevent further damage.',
      careTips: 'Call us immediately for urgent symptoms. Use a cold compress for swelling, avoid chewing on the affected side, and follow temporary home-care guidance until seen.',
    },
  },
  {
    title: 'Dental Implants',
    description: 'Long-term tooth replacement options that look and feel natural while helping preserve jawbone support.',
    icon: '',
    learnMore: {
      whatIs: 'Dental implants are titanium posts placed in the jaw to support crowns, bridges, or dentures. They provide strong, stable tooth replacement.',
      careTips: 'Maintain excellent oral hygiene, avoid smoking, and follow all healing instructions. Routine maintenance visits are important for long-term implant health.',
    },
  },
  {
    title: 'Teeth Whitening',
    description: 'Safe, professional whitening to lift stains and brighten your smile options available for in office and take home treatment.',
    icon: 'imgs/dental-cleaning.svg',
    learnMore: {
      whatIs: 'Professional whitening uses safe, effective formulas to lighten tooth color. In-office treatments offer faster results; take-home kits provide convenience. We assess your teeth first to ensure the best outcome.',
      careTips: 'Avoid coffee, tea, wine, and tobacco for 24–48 hours after whitening. Use a straw for dark drinks. Touch-ups can extend your results. Good oral hygiene keeps your smile bright.',
    },
  },
  {
    title: 'Crown and Bridge',
    description: 'Custom crowns and bridges restore damaged or missing teeth, improving function, comfort, and the look of your smile.',
    icon: '',
    learnMore: {
      whatIs: 'Crowns cover and protect weakened teeth, while bridges replace one or more missing teeth by anchoring to nearby teeth or implants.',
      careTips: 'Brush and floss daily, especially around bridge margins. Avoid chewing very hard foods on new restorations. Keep regular checkups to monitor fit and gum health.',
    },
  },
  {
    title: 'Dental Fillings',
    description: 'Tooth colored fillings to repair cavities and minor damage, restoring strength and a natural look with a comfortable, gentle approach.',
    icon: 'imgs/dental-treatment.svg',
    learnMore: {
      whatIs: 'Fillings restore teeth damaged by decay or minor fractures. We use tooth-colored composite materials that blend with your natural teeth and bond securely for lasting strength.',
      careTips: 'Avoid chewing on the filled tooth for a few hours if you received anesthesia. Sensitivity to hot or cold may last a short time. Continue brushing and flossing and reduce sugary snacks to prevent new cavities.',
    },
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Smile enhancing treatments like bonding, veneers, and contouring to improve shape, color, and overall appearance.',
    icon: 'imgs/dental-veneer.svg',
    learnMore: {
      whatIs: 'Cosmetic dentistry improves the look of your smile. Bonding repairs chips and gaps; veneers cover discolored or misshapen teeth; contouring subtly reshapes teeth. We tailor treatments to your goals.',
      careTips: 'Treat veneers and bonding like natural teeth—brush, floss, and visit regularly. Avoid biting hard objects. Staining agents may affect bonding; professional cleanings help maintain your smile.',
    },
  },
  {
    title: 'Root Canal Treatment',
    description: 'Relieves tooth pain and saves infected teeth by treating the inner pulp and sealing the tooth often completed in one or two visits.',
    icon: 'imgs/endodontic.svg',
    learnMore: {
      whatIs: 'A root canal removes infected or inflamed pulp from inside the tooth, cleans the canals, and seals them. This relieves pain and saves the tooth, often avoiding extraction.',
      careTips: 'Avoid chewing on the treated tooth until it is fully restored. Take any prescribed medications as directed. Most patients return to normal within a few days. A crown is often placed to protect the tooth long-term.',
    },
  },
  {
    title: 'Tooth Extractions',
    description: 'Gentle removal of damaged, decayed, or problematic teeth, with clear aftercare guidance and replacement options if needed.',
    icon: 'imgs/tooth-extraction.svg',
    learnMore: {
      whatIs: 'Extraction removes teeth that are too damaged to repair, impacted, or causing crowding. We use gentle techniques and appropriate sedation to keep you comfortable.',
      careTips: 'Bite on gauze for 30–60 minutes to control bleeding. Avoid rinsing, spitting, or using a straw for 24 hours. Eat soft foods and avoid the extraction site. Discuss replacement options like implants or bridges with us.',
    },
  },
  {
    title: 'Dentures',
    description: 'Full and partial dentures designed for a comfortable fit to help restore chewing, speech, and confidence.',
    icon: '',
    learnMore: {
      whatIs: 'Dentures are removable prosthetics used to replace missing teeth. We design them to support facial structure and improve day-to-day function.',
      careTips: 'Clean dentures daily, remove them overnight unless advised otherwise, and attend adjustment visits to prevent sore spots and maintain fit.',
    },
  },
  {
    title: 'Post Procedure Care',
    description: 'Clear aftercare guidance and follow-up support to promote smooth healing after dental treatment.',
    icon: '',
    learnMore: {
      whatIs: 'Post-procedure care covers instructions after treatments such as extractions, root canals, and restorations to reduce discomfort and complications.',
      careTips: 'Follow medication and cleaning instructions carefully, avoid activities your dentist advises against, and contact us right away if pain or swelling worsens.',
    },
  },
];

// Team Data
const team = [
  {
    name: 'Dr. Kourosh Kaviani',
    role: 'Family Dentist',
    image: 'imgs/doctor.svg',
    experience: 'Over 40 years of experience',
    education: [
      'College of Dental Surgeons of BC',
      'Dental Board of California',
      'NDEB of Canada',
    ],
    languages: ['English', 'Farsi'],
  },
];
