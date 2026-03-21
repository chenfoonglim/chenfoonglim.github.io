/* ============================================================
   portfolio.js  –  Role cycler + Tab switching + Project modal
   ============================================================ */

/* ── Role cycler ─────────────────────────────────────────────── */
(function () {
    var roles = [
        'Software Developer',
        'Web Developer',
        'Creative Designer',
        'Cybersecurity Student'
    ];
    var idx = 0;
    var el  = document.getElementById('roleCycler');
    if (!el) return;

    function cycleRole() {
        idx = (idx + 1) % roles.length;

        /* slide the current text out */
        el.classList.remove('role-in');
        el.classList.add('role-out');

        setTimeout(function () {
            el.textContent = roles[idx];
            el.classList.remove('role-out');
            el.classList.add('role-in');
        }, 360); /* just after the out-animation finishes */
    }

    setInterval(cycleRole, 2800);
})();

/* ── Project data ───────────────────────────────────────────── */
const projectData = {

  /* ── DEV PROJECTS ── */
  'stars': {
    title: 'UWA STARS App',
    year: '2025',
    tags: ['React Native', 'Mobile Dev', 'Supabase', 'TypeScript'],
    description:
      'A cross-platform mobile application built for UWA nursing students to track internship pre-requisites, submission deadlines, and progress milestones. Developed in close collaboration with real clients from the UWA School of Nursing, the app uses Supabase for real-time database sync and authentication, and was designed with a clean, accessible UI to suit students in a healthcare setting.',
    github: 'https://github.com/chenfoonglim',
    images: ['images/stars/dashboard.png','images/stars/login.png','images/stars/edit.png','images/stars/search.png',] // e.g. ['images/stars/screenshot1.png']
  },

  'ai-matcher': {
    title: 'AI Job Matching Web App',
    year: '2024',
    tags: ['Web Dev', 'PHP', 'ChatGPT API', 'MySQL'],
    description:
      'A full-stack hackathon web application that uses the ChatGPT API to intelligently match job seekers with employers based on skills, experience, and preferences. Built under time pressure during a 24-hour hackathon, the app handles both employer and candidate profiles, performs AI-driven compatibility scoring, and presents ranked match results through a clean web interface.',
    github: 'https://github.com/chenfoonglim',
    images: ['images/ai-matcher/login.png', 'images/ai-matcher/mentor.png', 'images/ai-matcher/fund.png']
  },

  'survey-mgmt': {
    title: 'Survey Management Software',
    year: '2023',
    tags: ['JavaFX', 'Java', 'Desktop Dev', 'OOP'],
    description:
      'A desktop survey-management tool built with JavaFX featuring persistent storage, an analytics dashboard, and multi-role access. The system allows administrators to create and distribute surveys, while respondents can submit answers through a polished GUI. Data is stored persistently and results are visualised through charts and summary views — designed with a clean, professional UI.',
    github: 'https://github.com/chenfoonglim',
    images: ['images/survey-mgmt/login.png','images/survey-mgmt/data.png','images/survey-mgmt/form.png' ]
  },

  'snake-game': {
    title: 'Multiplayer Retro Snake Game',
    year: '2022',
    tags: ['Python', 'Game Dev', 'OOP'],
    description:
      'A two-player retro Snake game written in Python featuring real-time state management, collision detection, power-ups, and a live scoreboard. Each player controls a snake on the same keyboard, competing to eat food and outlast the other. The game loop is tightly optimised to maintain consistent frame timing, and the codebase follows OOP principles for clean extensibility.',
    github: 'https://github.com/chenfoonglim',
    images: ['images/snake-game/snake.png']
  },

  'aipaca': {
    title: 'AIpaca',
    year: '2026',
    tags: ['Next.js 15', 'React', 'Tailwind CSS', 'Ollama', 'TypeScript'],
    description:
      'A privacy-first local AI chat application built with Next.js 15 (App Router) and React, styled with Tailwind CSS. Uses Ollama as the backend to run large language models entirely on your own machine — no cloud APIs, no data sent externally. Features a multi-conversation sidebar with persistent chat history saved to disk, background streaming so switching chats never interrupts generation, and per-conversation settings including temperature, top-k/p, context window size, and system prompt. The UI renders markdown, syntax-highlighted code blocks, and KaTeX math equations. Optional features include web search via the Brave Search API with cited sources, a reasoning/thinking mode that surfaces the model\'s internal thought process, and image attachment support.',
    github: 'https://github.com/chenfoonglim',
    images: ['images/aipaca/Chat_window.png', 'images/aipaca/setttings.png', 'images/aipaca/light.png']
  },

  /* ── ART PORTFOLIO ── */
  'ltw': {
    title: 'Leading Thriving Workplaces',
    year: '2025',
    tags: ['Report Design', 'Canva', 'Affinity'],
    description:
      'Designed and delivered a professional report template for the Leading Thriving Workplaces final report during a Digital Content internship at UWA\'s School of Health and Clinical Sciences. Identified and evaluated local photographers, led team discussions to select the most suitable candidate, and negotiated and documented usage agreements for the report.',
    images: []
  },

  'mcs': {
    title: 'Malaysian Cultural Society',
    year: '2024–2025',
    tags: ['Poster Design', 'Branding', 'Canva', 'Procreate'],
    description:
      'Served as Creative Assistant Director for UWA\'s Malaysian Cultural Society. Designed event posters, merchandise, and promotional materials across cultural nights, fundraisers, and society events. Coordinated team decoration for major cultural events and worked closely with the executive committee to strengthen the club\'s visual identity across social media and physical events.',
    images: []
  },

  'brighttanica': {
    title: 'Brighttanica Perth',
    year: '2026',
    tags: ['Branding', 'Print Design', 'Canva', 'Affinity'],
    description:
      'Designed a business card and promotional banner for Brighttanica Perth.',
    images: []
  },

  'digital-illus': {
    title: 'Digital Illustrations',
    year: '2021 – Present',
    tags: ['Digital Art', 'Procreate', 'Illustration', 'Character Design'],
    description:
      'Original digital illustrations and character art published under the @floofing_doodles brand on Instagram and YouTube. The body of work spans fan art, original characters, environment pieces, and stylised portraits, produced primarily in Procreate with occasional post-processing in Photoshop. The YouTube channel features speedpaint videos showcasing the creative process.',
    link: 'https://www.instagram.com/floofing_doodles/',
    linkLabel: 'View on Instagram',
    images: []
  },

};

/* ── Card thumbnails ─────────────────────────────────────────
   Inject the first image from each project's images array
   into its card on the main portfolio grid.
──────────────────────────────────────────────────────────── */
document.querySelectorAll('.projectCard[data-project-id]').forEach(function (card) {
  var id   = card.getAttribute('data-project-id');
  var data = projectData[id];
  if (!data || !data.images || !data.images.length) return;

  var imgDiv = card.querySelector('.projectImage');
  if (!imgDiv) return;

  var img = document.createElement('img');
  img.src = data.images[0];
  img.alt = data.title;
  img.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;';
  imgDiv.innerHTML = '';
  imgDiv.appendChild(img);
});


/* ── Tab switching ───────────────────────────────────────────── */
document.querySelectorAll('.portTab').forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Deactivate all tabs + content panels
    document.querySelectorAll('.portTab').forEach(function (t) {
      t.classList.remove('active');
    });
    document.querySelectorAll('.portTabContent').forEach(function (panel) {
      panel.classList.remove('active');
    });

    // Activate clicked tab + its panel
    btn.classList.add('active');
    var targetId = btn.getAttribute('data-tab');
    var targetPanel = document.getElementById(targetId);
    if (targetPanel) targetPanel.classList.add('active');
  });
});


/* ── Modal helpers ───────────────────────────────────────────── */
var modal   = document.getElementById('projectModal');
var mTitle  = document.getElementById('modalTitle');
var mDesc   = document.getElementById('modalDesc');
var mTags   = document.getElementById('modalTags');
var mYear   = document.getElementById('modalYear');
var mLinks  = document.getElementById('modalLinks');
var mGallery = document.getElementById('modalGallery');

function openModal(projectId) {
  var data = projectData[projectId];
  if (!data) return;

  /* Title + year */
  mTitle.textContent = data.title;
  mYear.textContent  = data.year;

  /* Tags */
  mTags.innerHTML = '';
  (data.tags || []).forEach(function (tag) {
    var span = document.createElement('span');
    span.className = 'modal-tag';
    span.textContent = tag;
    mTags.appendChild(span);
  });

  /* Description */
  mDesc.textContent = data.description;

  /* Links */
  mLinks.innerHTML = '';
  if (data.link) {
    var extLink = document.createElement('a');
    extLink.href = data.link;
    extLink.target = '_blank';
    extLink.rel = 'noopener noreferrer';
    extLink.className = 'projLinkBtn';
    extLink.textContent = data.linkLabel || 'View';
    mLinks.appendChild(extLink);
  }

  /* Gallery */
  mGallery.innerHTML = '';
  if (data.images && data.images.length > 0) {
    mGallery.style.display = '';
    data.images.forEach(function (src) {
      var wrap = document.createElement('div');
      wrap.className = 'modal-img-wrap';
      var img = document.createElement('img');
      img.src = src;
      img.alt = data.title;
      img.className = 'modal-img';
      wrap.appendChild(img);
      mGallery.appendChild(wrap);
    });
  } else {
    /* No images yet — show a styled placeholder */
    mGallery.style.display = 'flex';
    var placeholder = document.createElement('div');
    placeholder.className = 'modal-placeholder';
    placeholder.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none">' +
      '<rect x="3" y="3" width="18" height="18" rx="2" stroke="#333" stroke-width="1.5"/>' +
      '<circle cx="8.5" cy="8.5" r="1.5" fill="#333"/>' +
      '<path d="M21 15L16 10L5 21" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>' +
      '<p>Images coming soon</p>';
    mGallery.appendChild(placeholder);
  }

  /* Show modal */
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Lightbox ──────────────────────────────────────────────── */
(function () {
  var lightbox   = document.getElementById('lightbox');
  var track      = document.getElementById('lightboxTrack');
  var prevBtn    = document.getElementById('lightboxPrev');
  var nextBtn    = document.getElementById('lightboxNext');
  if (!lightbox || !track) return;

  var currentImages = [];
  var currentIndex  = 0;

  function getIndex() {
    return Math.round(track.scrollLeft / track.clientWidth);
  }

  function updateNav() {
    var hasNav = currentImages.length > 1;
    prevBtn.style.display = hasNav ? '' : 'none';
    nextBtn.style.display = hasNav ? '' : 'none';
    if (hasNav) {
      var idx = getIndex();
      prevBtn.classList.toggle('disabled', idx <= 0);
      nextBtn.classList.toggle('disabled', idx >= currentImages.length - 1);
    }
  }

  function goTo(index, animate) {
    currentIndex = Math.max(0, Math.min(index, currentImages.length - 1));
    if (animate) {
      track.scrollTo({ left: currentIndex * track.clientWidth, behavior: 'smooth' });
    } else {
      track.scrollLeft = currentIndex * track.clientWidth;
    }
  }

  function openLightbox() {
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* Open */
  document.addEventListener('click', function (e) {
    var wrap = e.target.closest('.modal-img-wrap');
    if (!wrap) return;
    var allWraps = Array.from(document.querySelectorAll('#modalGallery .modal-img-wrap'));
    currentImages = allWraps.map(function (w) { return w.querySelector('img').src; });
    currentIndex  = allWraps.indexOf(wrap);

    track.innerHTML = '';
    currentImages.forEach(function (src, i) {
      var slide = document.createElement('div');
      slide.className = 'lightbox-slide';
      var img = document.createElement('img');
      img.src = src;
      img.alt = allWraps[i].querySelector('img').alt;
      slide.appendChild(img);
      track.appendChild(slide);
    });

    updateNav();
    openLightbox();
    goTo(currentIndex, false);
  });

  /* Buttons */
  prevBtn.addEventListener('click', function (e) { e.stopPropagation(); goTo(getIndex() - 1, true); });
  nextBtn.addEventListener('click', function (e) { e.stopPropagation(); goTo(getIndex() + 1, true); });
  /* Update nav on scroll (handles manual swipe) */
  track.addEventListener('scroll', updateNav, { passive: true });

  /* Close — click backdrop or slide padding area */
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox-slide')) closeLightbox();
  });

  /* Keyboard */
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  goTo(getIndex() - 1, true);
    if (e.key === 'ArrowRight') goTo(getIndex() + 1, true);
  });
})();


/* ── Open modal when a project card is clicked ───────────────── */
document.querySelectorAll('.projectCard[data-project-id]').forEach(function (card) {
  card.style.cursor = 'pointer';
  card.addEventListener('click', function () {
    openModal(card.getAttribute('data-project-id'));
  });
});


/* ── Close modal — button, backdrop, Escape ──────────────────── */
document.getElementById('modalClose').addEventListener('click', closeModal);

modal.addEventListener('click', function (e) {
  /* Only close when clicking the dark backdrop (not the card itself) */
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});


/* ── Contact form — fetch submit ─────────────────────────────── */
(function () {
  var form      = document.getElementById('contactForm');
  var submitBtn = document.getElementById('submitBtn');
  var popup     = document.getElementById('contactPopup');
  var popIcon   = document.getElementById('contactPopupIcon');
  var popTitle  = document.getElementById('contactPopupTitle');
  var popMsg    = document.getElementById('contactPopupMsg');
  var popClose  = document.getElementById('contactPopupClose');

  if (!form || !popup || !popClose) return;

  var SVG_SUCCESS =
    '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">' +
    '<circle cx="26" cy="26" r="25" stroke="url(#sg)" stroke-width="1.5"/>' +
    '<path d="M15 26.5l8 8 14-16" stroke="url(#sg)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<defs><linearGradient id="sg" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">' +
    '<stop stop-color="#0FF"/><stop offset="1" stop-color="#209BFF"/></linearGradient></defs></svg>';

  var SVG_ERROR =
    '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">' +
    '<circle cx="26" cy="26" r="25" stroke="#FF4D4D" stroke-width="1.5"/>' +
    '<path d="M18 18l16 16M34 18L18 34" stroke="#FF4D4D" stroke-width="2" stroke-linecap="round"/>' +
    '</svg>';

  function showPopup(success) {
    if (success) {
      popIcon.innerHTML    = SVG_SUCCESS;
      popTitle.textContent = 'Message Sent!';
      popMsg.textContent   = "Thanks for reaching out. I'll get back to you as soon as possible.";
      popup.classList.remove('popup-error');
    } else {
      popIcon.innerHTML    = SVG_ERROR;
      popTitle.textContent = 'Something went wrong';
      popMsg.textContent   = 'Your message could not be sent. Please try again or contact me directly by email.';
      popup.classList.add('popup-error');
    }
    popup.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closePopup() {
    popup.classList.remove('open');
    document.body.style.overflow = '';
  }

  popClose.addEventListener('click', closePopup);
  popup.addEventListener('click', function (e) {
    if (e.target === popup) closePopup();
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    submitBtn.disabled    = true;
    submitBtn.textContent = 'Sending…';

    var data = new FormData(form);

    fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      .then(function (res) { return res.json(); })
      .then(function (json) {
        if (json.success) {
          form.reset();
          showPopup(true);
        } else {
          showPopup(false);
        }
      })
      .catch(function () {
        showPopup(false);
      })
      .finally(function () {
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Send Message';
      });
  });
})();
