/**
 * Populates page content from data.js
 * Run after data.js and ensure DOM is ready
 */
(function () {
  'use strict';

  function $(id) {
    return document.getElementById(id);
  }

  function setText(id, text) {
    const el = $(id);
    if (el && text != null) el.textContent = text;
  }

  function setHtml(id, html) {
    const el = $(id);
    if (el && html != null) el.innerHTML = html;
  }

  function setAttr(id, attr, value) {
    const el = $(id);
    if (el && value != null) el.setAttribute(attr, value);
  }

  function populateHeader() {
    setAttr('header-logo', 'src', site?.logo);
    setText('header-brand', site?.brandName);
    setText('header-phone', contact?.phone);
    setAttr('header-phone', 'href', contact ? 'tel:' + contact.phoneTel : null);
    setText('top-banner-phone', contact?.phone ? 'Call ' + contact.phone : '');
    setAttr('top-banner-phone', 'href', contact ? 'tel:' + contact.phoneTel : null);
    setText('mobile-phone', contact?.phone);

    const topBannerInner = document.querySelector('.top-banner-inner');
    if (topBannerInner && !document.getElementById('top-banner-cdcp')) {
      const cdcpBadge = document.createElement('div');
      cdcpBadge.id = 'top-banner-cdcp';
      cdcpBadge.className = 'top-banner-cdcp';
      cdcpBadge.innerHTML = `
        <img src="${site?.cdcpLogo || ''}" alt="CDCP logo" class="top-banner-cdcp-logo" width="24" height="20">
        <span>Now Accepting CDCP</span>
      `;
      topBannerInner.prepend(cdcpBadge);
    }

    const navContainer = $('main-nav');
    if (navContainer && site?.navLinks) {
      navContainer.innerHTML = site.navLinks
        .map((l) => {
          if (l.dropdown && Array.isArray(l.dropdown)) {
            return `<div class="nav-dropdown"><a href="${l.href}" class="nav-dropdown-trigger">${l.label} <span class="nav-dropdown-arrow" aria-hidden="true">▾</span></a><div class="nav-dropdown-menu">${l.dropdown.map((d) => `<a href="${d.href}">${d.label}</a>`).join('')}</div></div>`;
          }
          return `<a href="${l.href}">${l.label}</a>`;
        })
        .join('');
    }

    const mobileNavContainer = $('mobile-nav');
    if (mobileNavContainer && site?.navLinks) {
      mobileNavContainer.innerHTML = site.navLinks
        .map((l) => {
          if (l.dropdown && Array.isArray(l.dropdown)) {
            return l.dropdown.map((d) => `<a href="${d.href}">${d.label}</a>`).join('');
          }
          return `<a href="${l.href}">${l.label}</a>`;
        })
        .join('');
    }
  }

  function populateFooter() {
    setAttr('footer-logo', 'src', site?.footerLogo || site?.logo);
    setText('footer-brand', site?.brandName);
    setText('footer-tagline', site?.footerTagline);

    const socialContainer = $('footer-social');
    if (socialContainer && site?.social) {
      const s = site.social;
      socialContainer.innerHTML = [
        ['facebook', s.facebook],
        ['twitter', s.twitter],
        ['instagram', s.instagram],
        ['linkedin', s.linkedin],
      ]
        .filter(([, v]) => v?.url)
        .map(
          ([key, v]) =>
            `<a href="${v.url}" aria-label="${v.label}"><svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">${getSocialSvg(key)}</svg></a>`
        )
        .join('');
    }

    const quickLinksContainer = $('footer-quick-links');
    if (quickLinksContainer && site?.footerQuickLinks) {
      quickLinksContainer.innerHTML = site.footerQuickLinks
        .map((l) => `<li><a href="${l.href}">${l.label}</a></li>`)
        .join('');
    }

    const footerServicesContainer = $('footer-services');
    if (footerServicesContainer && site?.footerServices) {
      footerServicesContainer.innerHTML = site.footerServices
        .map((l) => `<li><a href="${l.href}">${l.label}</a></li>`)
        .join('');
    }

    const footerContactContainer = $('footer-contact');
    if (footerContactContainer && contact) {
      footerContactContainer.innerHTML = `
        <div>${contact.address.street}</div>
        <div>${contact.address.city}</div>
        <div><a href="tel:${contact.phoneTel}">${contact.phone}</a></div>
        <div><a href="mailto:${contact.email}">${contact.email}</a></div>
      `;
    }

    setText('current-year', new Date().getFullYear());
  }

  function getSocialSvg(key) {
    const svgs = {
      facebook: '<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>',
      twitter:
        '<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>',
      instagram:
        '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="white"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" stroke-width="2"></line>',
      linkedin:
        '<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle>',
    };
    return svgs[key] || '';
  }

  function populateIndex() {
    if (!$('hero-title')) return;
    setText('hero-title', hero?.title);
    setText('hero-text', hero?.subtitle);
    setText('hero-primary-btn-text', hero?.primaryButton);
    setAttr('hero-primary-btn', 'href', hero?.primaryButtonHref);
    setText('hero-secondary-btn', hero?.secondaryButton);
    setAttr('hero-secondary-btn', 'href', hero?.secondaryButtonHref);
    setAttr('hero-image', 'src', hero?.heroImage);
    setAttr('hero-image', 'alt', hero?.heroImageAlt);

    if (hero?.stats) {
      const container = $('hero-stats');
      if (container) {
        container.innerHTML = hero.stats
          .map(
            (s) => `
          <div>
            <div class="hero-stat-value">${s.value}</div>
            <div class="hero-stat-label">${s.label}</div>
          </div>
        `
          )
          .join('');
      }
    }

    // New patients banner
    const banner = indexPage?.newPatientsBanner;
    if (banner) {
      setText('new-patients-banner-title', banner.title);
      setText('new-patients-banner-subtitle', banner.subtitle);
      setText('new-patients-banner-btn', banner.buttonText);
      setAttr('new-patients-banner-btn', 'href', banner.buttonHref);
    }

    // Location benefits
    const loc = indexPage?.locationBenefits;
    const locGrid = $('location-benefits-grid');
    if (locGrid && loc?.items) {
      const iconPaths = {
        destination: dentistPackIcons?.destination || '',
        schedule: dentistPackIcons?.schedule || '',
      };
      locGrid.innerHTML = loc.items
        .map(
          (item) => {
            const iconSrc = (typeof item.icon === 'string' && (item.icon.includes('.svg') || item.icon.startsWith('imgs/'))) ? item.icon : (iconPaths[item.icon] || iconPaths.destination);
            return `
          <div class="location-benefit-card">
            <div class="location-benefit-icon">
              <img src="${iconSrc}" alt="" class="dentist-pack-icon" width="48" height="48">
            </div>
            <h3 class="location-benefit-title">${item.title}</h3>
            <p class="location-benefit-description">${item.description}</p>
          </div>
        `;
          }
        )
        .join('');
    }
    setText('location-benefits-title', loc?.title);
    setText('location-benefits-subtitle', loc?.subtitle);

    // FAQ
    const faq = indexPage?.faq;
    setText('faq-title', faq?.title);
    setText('faq-subtitle', faq?.subtitle);
    const faqList = $('faq-list');
    if (faqList && faq?.items) {
      faqList.innerHTML = faq.items
        .map(
          (item) => `
        <details class="faq-item">
          <summary class="faq-question">${item.question}</summary>
          <div class="faq-answer"><p>${item.answer}</p></div>
        </details>
      `
        )
        .join('');
    }
  }

  function populateServicesPage() {
    if (!$('services-page-title')) return;
    setText('services-page-title', servicesPage?.header?.title);
    setText('services-page-subtitle', servicesPage?.header?.subtitle);
    setText('services-cta-title', servicesPage?.cta?.title);
    setText('services-cta-text', servicesPage?.cta?.text);
    setText('services-cta-primary', servicesPage?.cta?.primaryButton);
    setAttr('services-cta-primary', 'href', servicesPage?.cta?.primaryHref);
    setText('services-cta-secondary', servicesPage?.cta?.secondaryButton);
    setAttr('services-cta-secondary', 'href', servicesPage?.cta?.secondaryHref);

    const servicesGrid = $('services-grid');
    const paginationContainer = $('services-pagination');
    if (servicesGrid && typeof services !== 'undefined') {
      const orderedServices = services.map((service, idx) => ({ ...service, originalIndex: idx }));

      const collapsedCount = 6;
      let isExpanded = false;
      let isAnimating = false;

      function renderGridMarkup(pageItems) {
        return pageItems
          .map(
            (s) => `
          <div class="service-card">
            <div class="service-icon">
              ${s.icon ? `<img src="${s.icon}" alt="" class="icon-xl" width="56" height="56">` : '<span class="service-icon-placeholder" aria-hidden="true"></span>'}
            </div>
            <h3 class="service-title">${s.title}</h3>
            <p class="service-description">${s.description}</p>
            ${s.learnMore ? `<button type="button" class="service-learn-more" data-service-index="${s.originalIndex}">LEARN MORE &gt;</button>` : ''}
          </div>
        `
          )
          .join('');
      }

      function renderServicesView(expanded, animate = false) {
        if (isAnimating) return;
        isExpanded = expanded;
        const visibleItems = isExpanded ? orderedServices : orderedServices.slice(0, collapsedCount);

        const newMarkup = renderGridMarkup(visibleItems);
        if (animate) {
          isAnimating = true;
          servicesGrid.classList.remove('services-grid-animate-in');
          servicesGrid.classList.add('services-grid-animate-out');
          window.setTimeout(() => {
            servicesGrid.innerHTML = newMarkup;
            servicesGrid.classList.remove('services-grid-animate-out');
            servicesGrid.classList.add('services-grid-animate-in');
            window.setTimeout(() => {
              servicesGrid.classList.remove('services-grid-animate-in');
              isAnimating = false;
            }, 260);
          }, 180);
        } else {
          servicesGrid.innerHTML = newMarkup;
        }

        if (!paginationContainer || orderedServices.length <= collapsedCount) {
          if (paginationContainer) paginationContainer.innerHTML = '';
          return;
        }

        paginationContainer.innerHTML = `
          <button type="button" class="services-expand-toggle" data-toggle-services>
            ${isExpanded ? 'Show fewer services ↑' : 'Show all services ↓'}
          </button>
        `;

        paginationContainer.querySelector('[data-toggle-services]')?.addEventListener('click', () => {
          renderServicesView(!isExpanded, true);
        });
      }

      if (paginationContainer && orderedServices.length > collapsedCount) {
        renderServicesView(false);
      } else {
        servicesGrid.innerHTML = renderGridMarkup(orderedServices);
        if (paginationContainer) paginationContainer.innerHTML = '';
      }
    }
  }

  function populateAbout() {
    if (!$('about-page-title')) return;
    setText('about-page-title', aboutPage?.header?.title);
    setText('about-page-subtitle', aboutPage?.header?.subtitle);
    setAttr('about-image', 'src', aboutPage?.content?.image);
    setAttr('about-image', 'alt', aboutPage?.content?.imageAlt);
    setText('about-content-title', aboutPage?.content?.title);
    setText('about-desc1', aboutPage?.content?.description1);
    setText('about-desc2', aboutPage?.content?.description2);

    const featuresContainer = $('about-features');
    if (featuresContainer && aboutPage?.content?.features) {
      featuresContainer.innerHTML = aboutPage.content.features
        .map(
          (f) => `
        <div class="about-feature">
          <div class="about-feature-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <span class="about-feature-text">${f}</span>
        </div>
      `
        )
        .join('');
    }

    setText('values-title', aboutPage?.values?.title);
    setText('values-subtitle', aboutPage?.values?.subtitle);

    const valuesContainer = $('values-grid');
    if (valuesContainer && aboutPage?.values?.items && typeof dentistPackIcons !== 'undefined') {
      const valueIconPaths = [dentistPackIcons.heart, dentistPackIcons.shield, dentistPackIcons.happy, dentistPackIcons.inspection];
      valuesContainer.innerHTML = aboutPage.values.items
        .map(
          (v, i) => `
        <div class="value-card">
          <div class="value-icon"><img src="${valueIconPaths[i] || valueIconPaths[0]}" alt="" class="dentist-pack-icon" width="48" height="48"></div>
          <h3 class="value-title">${v.title}</h3>
          <p class="value-description">${v.description}</p>
        </div>
      `
        )
        .join('');
    }

    const aboutStatsContainer = $('about-stats');
    if (aboutStatsContainer && aboutPage?.stats) {
      aboutStatsContainer.innerHTML = aboutPage.stats
        .map(
          (s) => `
        <div>
          <div class="stat-value">${s.value}</div>
          <div class="stat-label">${s.label}</div>
        </div>
      `
        )
        .join('');
    }
  }

  function populateContact() {
    if (!$('contact-page-title')) return;
    setText('contact-page-title', contactPage?.header?.title);
    setText('contact-page-subtitle', contactPage?.header?.subtitle);
    setText('contact-intro-title', contactPage?.intro?.title);
    setText('contact-intro-text', contactPage?.intro?.text);
    setText('contact-map-title', contactPage?.map?.title);
    setText('contact-map-subtitle', contactPage?.map?.subtitle);

    const bookOnlineBtn = $('contact-book-online');
    if (bookOnlineBtn && contact?.bookingUrl) {
      bookOnlineBtn.href = contact.bookingUrl;
      if (contactPage?.bookOnline?.label) {
        bookOnlineBtn.textContent = contactPage.bookOnline.label;
      }
    }

    const addressEl = $('contact-address');
    if (addressEl && contact) {
      const mapsHref = contact.mapsUrl || '#';
      addressEl.innerHTML = `<a href="${mapsHref}" target="_blank" rel="noopener noreferrer">${contact.address.street}<br />${contact.address.city}</a>`;
    }

    const mapLink = $('contact-map-link');
    if (mapLink && contact?.mapsUrl) {
      mapLink.href = contact.mapsUrl;
    }

    const mapEmbed = $('contact-map-embed');
    if (mapEmbed && contact?.address) {
      const q = encodeURIComponent(`${contact.address.street}, ${contact.address.city}`);
      mapEmbed.src = `https://maps.google.com/maps?q=${q}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    }

    if (contactPage?.form) {
      setText('contact-form-title', contactPage.form.title);
      setText('contact-form-subtitle', contactPage.form.subtitle);
      setText('contact-form-submit', contactPage.form.submitLabel);
    }
    setHtml('contact-phone', contact ? `<p><a href="tel:${contact.phoneTel}">${contact.phone}</a></p>` : '');
    setHtml('contact-email', contact ? `<p><a href="mailto:${contact.email}">${contact.email}</a></p>` : '');
    const hoursEl = $('contact-hours');
    if (hoursEl && contact?.hours) {
      hoursEl.innerHTML = `
        <p>
          <time>${contact.hours.weekdays}</time><br />
          <time>${contact.hours.saturday}</time><br />
          ${contact.hours.sunday}
        </p>
      `;
    }
  }

  function populateTeam() {
    if (!$('team-page-title')) return;
    setText('team-page-title', teamPage?.header?.title);
    setText('team-page-subtitle', teamPage?.header?.subtitle);
    setText('why-choose-title', teamPage?.whyChoose?.title);
    setText('why-choose-subtitle', teamPage?.whyChoose?.subtitle);

    const whyChooseContainer = $('why-choose-cards');
    if (whyChooseContainer && teamPage?.whyChoose?.items && typeof dentistPackIcons !== 'undefined') {
      const teamIconPaths = [dentistPackIcons.hygiene, dentistPackIcons['good-feedback'], dentistPackIcons.happy];
      whyChooseContainer.innerHTML = teamPage.whyChoose.items
        .map(
          (item, i) => `
        <div class="feature-card">
          <div class="feature-card-icon"><img src="${teamIconPaths[i] || teamIconPaths[0]}" alt="" class="dentist-pack-icon" width="56" height="56"></div>
          <h3 class="feature-card-title">${item.title}</h3>
          <p class="feature-card-description">${item.description}</p>
        </div>
      `
        )
        .join('');
    }

    const teamGrid = $('team-grid');
    if (teamGrid && typeof team !== 'undefined') {
      const fallbackSvg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
      teamGrid.innerHTML = team
        .map(
          (m) => `
        <div class="team-card">
          <div class="team-image-container">
            <img src="${m.image}" alt="${m.name}" class="team-image" width="400" height="400" loading="lazy" onerror="this.src='${fallbackSvg}'">
          </div>
          <div class="team-info">
            <h3 class="team-name">${m.name}</h3>
            <p class="team-role">${m.role}</p>
            <p class="team-bio">${m.bio}</p>
          </div>
        </div>
      `
        )
        .join('');
    }
  }

  function populateNewPatients() {
    if (!$('new-patients-page-title')) return;
    setText('new-patients-page-title', newPatientsPage?.header?.title);
    setText('new-patients-page-subtitle', newPatientsPage?.header?.subtitle);

    const expectTitle = $('new-patients-expect-title-section');
    if (expectTitle && newPatientsPage?.whatToExpect?.title) {
      expectTitle.textContent = newPatientsPage.whatToExpect.title;
    }

    const expectIntro = $('new-patients-expect-intro');
    if (expectIntro && newPatientsPage?.whatToExpect?.intro) {
      expectIntro.textContent = newPatientsPage.whatToExpect.intro;
    }

    const expectGrid = $('new-patients-expect-grid');
    if (expectGrid && newPatientsPage?.whatToExpect?.items) {
      expectGrid.innerHTML = newPatientsPage.whatToExpect.items
        .map(
          (item, i) => `
        <div class="feature-card feature-card-numbered">
          <div class="step-number">${i + 1}</div>
          <h3 class="feature-card-title">${item.title}</h3>
          <p class="feature-card-description">${item.description}</p>
        </div>
      `
        )
        .join('');
    }

    const bringTitle = $('new-patients-bring-title');
    if (bringTitle && newPatientsPage?.whatToBring?.title) {
      bringTitle.textContent = newPatientsPage.whatToBring.title;
    }

    const bringList = $('new-patients-bring-items');
    if (bringList && newPatientsPage?.whatToBring?.items) {
      bringList.innerHTML = newPatientsPage.whatToBring.items
        .map(
          (item) => `
        <div class="about-feature">
          <div class="about-feature-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <span class="about-feature-text">${item}</span>
        </div>
      `
        )
        .join('');
    }

    setText('new-patients-payment-title', newPatientsPage?.payment?.title);
    setText('new-patients-payment-intro', newPatientsPage?.payment?.intro);
    setText('new-patients-insurance-title', newPatientsPage?.payment?.insuranceTitle);
    setText('new-patients-insurance-intro', newPatientsPage?.payment?.insuranceIntro);
    setText('new-patients-insurance-note', newPatientsPage?.payment?.insuranceNote);

    const insuranceList = $('new-patients-insurance-items');
    if (insuranceList && newPatientsPage?.payment?.insuranceItems) {
      insuranceList.innerHTML = newPatientsPage.payment.insuranceItems
        .map((item) => `<li>${item}</li>`)
        .join('');
    }
  }

  function init() {
    if (typeof site === 'undefined') return;

    populateHeader();
    populateFooter();

    if ($('hero-title')) populateIndex();
    if ($('services-page-title')) populateServicesPage();
    if ($('about-page-title')) populateAbout();
    if ($('contact-page-title')) populateContact();
    if ($('team-page-title')) populateTeam();
    if ($('new-patients-page-title')) populateNewPatients();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
