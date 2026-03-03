// Mobile Menu Toggle
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    const menuLinks = mobileMenu.querySelectorAll('a');
    const firstLink = menuLinks[0];
    const lastLink = menuLinks[menuLinks.length - 1];
    
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('active');
      
      if (isOpen) {
        // Close menu
        mobileMenu.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        // Return focus to button
        mobileMenuBtn.focus();
      } else {
        // Open menu
        mobileMenu.classList.add('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        // Focus first link in menu
        if (firstLink) {
          setTimeout(() => firstLink.focus(), 100);
        }
      }
    });
    
    // Trap focus within mobile menu when open
    mobileMenu.addEventListener('keydown', (e) => {
      if (!mobileMenu.classList.contains('active')) return;
      
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstLink) {
            e.preventDefault();
            mobileMenuBtn.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastLink || document.activeElement === mobileMenuBtn) {
            e.preventDefault();
            firstLink.focus();
          }
        }
      }
      
      // Close menu on Escape
      if (e.key === 'Escape') {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.focus();
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('active') &&
          !mobileMenu.contains(e.target) &&
          !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

// Set Active Navigation Link
function setActiveNavLink() {
  const pathname = window.location.pathname;
  const currentPage = pathname.split('/').pop() || 'index.html';
  const isIndex = currentPage === '' || currentPage === 'index.html';
  const navLinks = document.querySelectorAll('nav a, .mobile-menu a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('tel:')) return;
    const linkPage = href.split('/').pop();
    const match = linkPage === currentPage || (isIndex && linkPage === 'index.html');
    link.classList.toggle('active', match);
  });

  // Mark dropdown trigger active when on a child page (e.g. About when on new-patients.html)
  document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector('.nav-dropdown-trigger');
    const hasActiveChild = dropdown.querySelector('.nav-dropdown-menu a.active');
    if (trigger && hasActiveChild) trigger.classList.add('active');
  });
}

// Contact Form Handler
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your appointment request! We will contact you shortly.');
      contactForm.reset();
    });
  }
}

// Image Fallback Handler
function initImageFallback() {
  const images = document.querySelectorAll('img[data-fallback]');
  
  images.forEach(img => {
    img.addEventListener('error', () => {
      const fallbackSrc = img.getAttribute('data-fallback');
      if (fallbackSrc) {
        img.src = fallbackSrc;
      }
    });
  });
}

// Service Learn More Modal
function initServiceModal() {
  const modal = document.getElementById('service-modal');
  const titleEl = document.getElementById('service-modal-title');
  const bodyEl = document.getElementById('service-modal-body');
  const closeBtn = modal?.querySelector('.service-modal-close');
  const backdrop = modal?.querySelector('.service-modal-backdrop');

  if (!modal || !titleEl || !bodyEl || typeof services === 'undefined') return;

  function closeModal() {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  function openModal(index) {
    const s = services[parseInt(index, 10)];
    if (!s?.learnMore) return;
    titleEl.textContent = s.title;
    let html = '';
    if (s.learnMore.whatIs) {
      html += '<div class="service-modal-section"><h3>What it is</h3><p>' + s.learnMore.whatIs + '</p></div>';
    }
    if (s.learnMore.careTips) {
      html += '<div class="service-modal-section"><h3>Care tips</h3><p>' + s.learnMore.careTips + '</p></div>';
    }
    bodyEl.innerHTML = html;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.service-learn-more');
    if (btn) {
      e.preventDefault();
      openModal(btn.getAttribute('data-service-index'));
    }
  });

  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  setActiveNavLink();
  initContactForm();
  initImageFallback();
  initServiceModal();
});
