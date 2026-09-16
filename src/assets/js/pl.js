// RoofCoat Leads behaviour layered on the Gencyo template scripts (same base as Paving Leads).
(function () {
  'use strict';

  // The booking calendar is a plain iframe, as on the previous site. GoHighLevel's form_embed.js
  // hides this widget type until a handshake that never arrives, so it is not loaded.
  function loadBookingScript() {}

  // ---------- Booking modal ----------
  var modal = document.getElementById('pl-booking');
  if (modal) {
    var frame = modal.querySelector('iframe[data-src]');
    var lastFocus = null;

    function openBooking(e) {
      if (e) e.preventDefault();
      lastFocus = document.activeElement;
      loadBookingScript();
      if (frame && !frame.getAttribute('src')) {
        frame.addEventListener('load', function () { modal.classList.add('is-loaded'); }, { once: true });
        frame.setAttribute('src', frame.getAttribute('data-src'));
      }
      modal.hidden = false;
      document.documentElement.classList.add('pl-modal-open');
      void modal.offsetWidth; // flush the un-hidden state so the fade-in transition runs
      modal.classList.add('is-open');
      modal.querySelector('.pl-modal__close').focus();
      document.body.classList.remove('mobile-menu-visible');
      var popup = document.getElementById('rc-popup');
      if (popup) popup.hidden = true;
    }

    function closeBooking() {
      modal.classList.remove('is-open');
      document.documentElement.classList.remove('pl-modal-open');
      setTimeout(function () { modal.hidden = true; }, 250);
      if (lastFocus) lastFocus.focus();
    }

    document.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-booking]');
      if (trigger) return openBooking(e);
      if (e.target.closest('#pl-booking [data-close]')) closeBooking();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hidden) closeBooking();
    });
  }

  // ---------- Client videos: poster until played, then a real <video> ----------
  document.querySelectorAll('[data-video]').forEach(function (box) {
    box.querySelector('.pl-reel__play').addEventListener('click', function () {
      document.querySelectorAll('[data-video] video').forEach(function (v) { v.pause(); });
      var video = box.querySelector('video');
      if (!video) {
        video = document.createElement('video');
        video.src = box.getAttribute('data-video');
        video.controls = true;
        video.playsInline = true;
        video.poster = box.querySelector('img').src;
        box.appendChild(video);
      }
      box.classList.add('is-playing');
      video.play();
    });
  });

  // ---------- Footer back-to-top ----------
  document.addEventListener('click', function (e) {
    if (!e.target.closest('[data-back-top]')) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---------- Navigation ----------
  window.addEventListener('mousemove', function onMove() {
    document.documentElement.classList.add('pl-has-mouse');
    window.removeEventListener('mousemove', onMove);
  });
  // Header background as soon as the page moves (also correct on reload mid-page).
  var header = document.querySelector('.main-header');
  function syncHeader() { if (header) header.classList.toggle('fixed-header', window.scrollY > 10); }
  window.addEventListener('scroll', syncHeader, { passive: true });
  syncHeader();

  // Close the drawer when a link inside it is followed.
  document.addEventListener('click', function (e) {
    if (e.target.closest('.mobile-menu .navigation a')) document.body.classList.remove('mobile-menu-visible');
  });

  // ---------- Start the GSAP text/scroll animations once the web font is in ----------
  // script-gsap.js splits headings into lines/characters. Splitting before the font
  // loads measures the fallback font, and the lines jump when the real one swaps in.
  (function loadGsapAnimations() {
    var started = false;
    function start() {
      if (started) return;
      started = true;
      var s = document.createElement('script');
      var tag = document.querySelector('script[data-gsap-src]');
      s.src = tag ? tag.getAttribute('data-gsap-src') : '/assets/js/script-gsap.js';
      document.body.appendChild(s);
    }
    if (document.fonts && document.fonts.ready) {
      document.fonts.load('500 1em "Beatrice Trial"').then(function () { return document.fonts.ready; }).then(start, start);
      setTimeout(start, 2500); // never hold the animations back for a slow font CDN
    } else {
      start();
    }
  })();

  // ---------- Keep scroll animations aligned ----------
  // Recalculate trigger positions once fonts and images have settled.
  function refreshTriggers() {
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  }
  window.addEventListener('load', function () { setTimeout(refreshTriggers, 900); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refreshTriggers);

  // ---------- ROI calculator (same formula as the previous site) ----------
  document.querySelectorAll('[data-roi]').forEach(function (root) {
    var inputs = {};
    root.querySelectorAll('[data-roi-input]').forEach(function (el) { inputs[el.getAttribute('data-roi-input')] = el; });
    var short = function (n) {
      if (n >= 1000000) return '$' + (n / 1000000).toFixed(1) + 'M';
      if (n >= 1000) return '$' + (n / 1000).toFixed(n >= 10000 ? 0 : 1) + 'k';
      return '$' + Math.round(n).toLocaleString('en-US');
    };
    var fmt = { leads: function (n) { return n; }, cpl: function (n) { return '$' + n; }, close: function (n) { return n + '%'; }, job: short };
    var set = function (sel, text) { var el = root.querySelector(sel); if (el) el.textContent = text; };
    function update() {
      var leads = +inputs.leads.value, cpl = +inputs.cpl.value, close = +inputs.close.value, job = +inputs.job.value;
      var spend = leads * cpl;
      var jobs = Math.round((leads * close) / 100);
      var revenue = jobs * job;
      var roas = spend > 0 ? revenue / spend : 0;
      Object.keys(inputs).forEach(function (k) {
        var el = inputs[k];
        set('[data-roi-out="' + k + '"]', fmt[k](+el.value));
        set('[data-roi-min="' + k + '"]', fmt[k](+el.min));
        set('[data-roi-max="' + k + '"]', fmt[k](+el.max));
        el.style.setProperty('--pl-fill', ((el.value - el.min) / (el.max - el.min)) * 100 + '%');
      });
      set('[data-roi-spend]', short(spend));
      set('[data-roi-jobs]', jobs);
      set('[data-roi-roas]', roas.toFixed(1) + 'x');
      set('[data-roi-profit]', short(revenue - spend));
      set('[data-roi-revenue]', short(revenue));
      var max = Math.max(spend, revenue, 1);
      var bs = root.querySelector('[data-roi-bar-spend]'), br = root.querySelector('[data-roi-bar-rev]');
      if (bs) bs.style.width = Math.max(2, (spend / max) * 100) + '%';
      if (br) br.style.width = Math.max(2, (revenue / max) * 100) + '%';
    }
    Object.keys(inputs).forEach(function (k) { inputs[k].addEventListener('input', update); });
    update();
  });

  // ---------- Jotform: iframe embed, created the first time the form is shown ----------
  // (The jsform/<id> script relies on document.write, which is ignored once the page has loaded.)
  function loadJotform(box) {
    if (!box || box.getAttribute('data-loaded')) return;
    box.setAttribute('data-loaded', '1');
    var formId = box.getAttribute('data-jotform');
    var f = document.createElement('iframe');
    f.id = 'JotFormIFrame-' + formId;
    f.title = box.getAttribute('data-jotform-title') || 'RoofCoat Leads contact form';
    f.src = 'https://form.jotform.com/' + formId;
    f.setAttribute('allow', 'geolocation; microphone; camera; fullscreen');
    f.style.cssText = 'width:100%;min-height:760px;border:0;display:block;';
    f.loading = 'lazy';
    box.appendChild(f);
    window.addEventListener('message', function (e) {
      if (typeof e.data !== 'string' || e.origin.indexOf('jotform') === -1) return;
      var parts = e.data.split(':');
      if (parts[0] === 'setHeight' && (!parts[2] || parts[2] === formId)) {
        var h = parseInt(parts[1], 10);
        // Jotform can report ~0 while it's still laying out (seen on phones); ignore those.
        if (h > 300) { f.style.minHeight = '0'; f.style.height = h + 'px'; }
      }
    });
  }

  // ---------- Contact page: switch between the booking calendar and the form ----------
  document.querySelectorAll('[data-switcher]').forEach(function (root) {
    var buttons = root.querySelectorAll('.pl-switch__btn');
    function show(name, focus) {
      buttons.forEach(function (b) {
        var on = b.getAttribute('data-panel') === name;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', on ? 'true' : 'false');
        b.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(b.getAttribute('aria-controls'));
        panel.hidden = !on;
        if (on && panel.hasAttribute('data-jotform')) loadJotform(panel);
        var cal = on && panel.querySelector('iframe[data-src]');
        if (cal && !cal.getAttribute('src') && !panel.closest('.pl-modal[hidden]')) cal.setAttribute('src', cal.getAttribute('data-src'));
        if (on && focus) b.focus();
      });
      root.querySelector('.pl-switch').setAttribute('data-active', name);
    }
    buttons.forEach(function (b, i) {
      b.addEventListener('click', function () { show(b.getAttribute('data-panel')); });
      b.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        var next = buttons[(i + (e.key === 'ArrowRight' ? 1 : buttons.length - 1)) % buttons.length];
        show(next.getAttribute('data-panel'), true);
      });
    });
    // /get-started#form opens the form directly
    if (location.hash === '#form' && !root.closest('.pl-modal')) show('form');
  });
  // Third-party embeds that are on screen from the start (Get Started calendar, manufacturer form)
  // are attached after the page's load event: the calendar iframe otherwise holds up "load",
  // and the template's preloader only lifts on load.
  function attachPageEmbeds() {
    document.querySelectorAll('.pl-switch__panel:not([hidden]) iframe[data-src]').forEach(function (f) {
      if (!f.closest('.pl-modal') && !f.getAttribute('src')) f.setAttribute('src', f.getAttribute('data-src'));
    });
    document.querySelectorAll('[data-jotform-auto]').forEach(loadJotform);
  }
  if (document.readyState === 'complete') attachPageEmbeds();
  else window.addEventListener('load', attachPageEmbeds);

  // ---------- Cookie consent (Google consent mode, same keys as the previous site) ----------
  (function consent() {
    var bar = document.getElementById('rc-consent');
    if (!bar) return;
    var accepted = false;
    try { accepted = localStorage.getItem('roofcoat-consent') === 'accepted'; } catch (e) {}
    if (accepted) return;
    bar.hidden = false;
    bar.querySelector('[data-consent-accept]').addEventListener('click', function () {
      try { localStorage.setItem('roofcoat-consent', 'accepted'); } catch (e) {}
      if (window.gtag) window.gtag('consent', 'update', { ad_user_data: 'granted', ad_personalization: 'granted', ad_storage: 'granted', analytics_storage: 'granted' });
      bar.hidden = true;
    });
  })();

  // ---------- Consultation popup: once per session, after 30 seconds ----------
  (function popup() {
    var box = document.getElementById('rc-popup');
    if (!box || location.pathname === '/get-started') return;
    try { if (sessionStorage.getItem('roofcoat-popup-dismissed')) return; } catch (e) {}
    function close() {
      try { sessionStorage.setItem('roofcoat-popup-dismissed', 'true'); } catch (e) {}
      box.hidden = true;
    }
    setTimeout(function () {
      if (modal && !modal.hidden) return; // don't stack on an open booking modal
      box.hidden = false;
    }, 30000);
    box.addEventListener('click', function (e) { if (e.target.closest('[data-popup-close]')) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !box.hidden) close(); });
  })();
})();
