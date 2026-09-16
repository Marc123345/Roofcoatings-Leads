// Shared page chrome, ported from the Gencyo "SEO Agency" template (index-2.html),
// same build as Paving Leads, in RoofCoat Leads colours and copy.
import { site, nav, FULL_DISCLAIMER } from '../src/content.mjs';

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const img = (p) => `/assets/images/${p}`;

// Cache-busting stamps for CSS/JS, filled in by build.mjs from each file's contents.
// Without them a returning visitor's browser can pair new HTML with an old stylesheet.
export const assetVersions = {};
const v = (path) => (assetVersions[path] ? `${path}?v=${assetVersions[path]}` : path);

// Gencyo's three-part arrow button. `attrs` lets a button open the booking modal.
export function btn(label, { href = '#', attrs = '', tag = 'a', cls = '' } = {}) {
  const arrow = `<img src="${img('icons/right-arrow-1-2.png')}" alt="">`;
  const inner = `<span class="btn-arrow-left">${arrow}</span><span class="btn-title">${label}</span><span class="btn-arrow-right">${arrow}</span>`;
  return tag === 'button'
    ? `<button type="button" class="btn-style-one ${cls}" ${attrs}>${inner}</button>`
    : `<a href="${href}" class="btn-style-one ${cls}" ${attrs}>${inner}</a>`;
}

export const bookBtn = (label = 'Book a Free Call', cls = '') => btn(label, { tag: 'button', attrs: 'data-booking', cls });

export function subTitle(text) {
  return `<span class="sub-title tm-sub-tilte tm-sub-anim tx-subTitle"><img src="${img('icons/star.png')}" alt=""> ${text}</span>`;
}

export function secTitle(main, accent) {
  return `<h2 class="title tx-title sec_title tm-itm-title tm-itm-anim">${main} <span>${accent}</span></h2>`;
}

export function pageTitle(title, bg, crumbs = []) {
  const trail = [...crumbs, { label: title }]
    .map((c) => (c.href ? `<li><a href="${c.href}">${c.label}</a></li>` : `<li>${c.label}</li>`))
    .join('');
  return `
<section class="page-title" style="background-image: url(${bg});">
  <div class="auto-container">
    <div class="title-outer text-center">
      <h1 class="title">${title}</h1>
      <ul class="page-breadcrumb">
        <li><a href="/">Home</a></li>
        ${trail}
      </ul>
    </div>
  </div>
</section>`;
}

export function disclaimer(text = FULL_DISCLAIMER, cls = '') {
  return `<p class="rc-disclaimer ${cls}">${esc(text)}</p>`;
}

export const logo = (cls = '') =>
  `<a href="/" class="rc-logo ${cls}" aria-label="${site.name} home"><img src="${img('rc/logo-icon.svg')}" width="44" height="44" alt=""><span>RoofCoat <b>Leads</b></span></a>`;

function head({ title, description, path, ogImage, schema = [], type = 'website' }) {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | Exclusive Commercial Roofing Leads via Facebook Ads`;
  const org = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: site.name,
        url: site.url,
        description: 'Exclusive, pre-qualified lead generation for commercial and residential roof coating contractors through Facebook Ads.',
        serviceType: 'Lead Generation',
      },
      {
        '@type': 'Service',
        name: 'Exclusive Roof Coating Lead Generation',
        provider: { '@type': 'Organization', name: site.name },
        description: 'Targeted Facebook Ad campaigns that deliver exclusive, pre-qualified leads for commercial and residential roof coating projects.',
        areaServed: 'United States',
        serviceType: 'Digital Marketing & Lead Generation',
      },
    ],
  };
  const ld = [org, ...schema].map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#09090b">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${site.url}${path === '/' ? '' : path}">
<meta property="og:type" content="${type}">
<meta property="og:site_name" content="${site.name}">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${site.url}${path === '/' ? '' : path}">
<meta property="og:image" content="${site.url}${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.cdnfonts.com" crossorigin>
<link href="https://fonts.cdnfonts.com/css/beatrice-display-trial" rel="stylesheet">
<link href="${v('/assets/css/bootstrap.min.css')}" rel="stylesheet">
<link href="${v('/assets/css/style.css')}" rel="stylesheet">
<link href="${v('/assets/css/pl.css')}" rel="stylesheet">
<link href="${v('/assets/css/rc.css')}" rel="stylesheet">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/favicon.svg">
${ld}
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{'ad_user_data':'denied','ad_personalization':'denied','ad_storage':'denied','analytics_storage':'denied','wait_for_update':500});try{if(localStorage.getItem('roofcoat-consent')==='accepted'){gtag('consent','update',{'ad_user_data':'granted','ad_personalization':'granted','ad_storage':'granted','analytics_storage':'granted'});}}catch(e){}</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=${site.gaId}"></script>
<script>gtag('js',new Date());gtag('config','${site.gaId}');</script>
</head>
`;
}

function menu(active) {
  return nav
    .map((n) => {
      const on = n.href === active || (n.href !== '/' && active.startsWith(n.href + '/'));
      return `<li${on ? ' class="current"' : ''}><a href="${n.href}">${n.label}</a></li>`;
    })
    .join('\n                ');
}

function header(active) {
  return `
    <header class="main-header header-style-one header-1">
      <div class="container">
        <div class="header-lower">
          <div class="main-box pl-main-box">
            <div class="logo">${logo()}</div>
            <nav class="nav main-menu" aria-label="Main">
              <ul class="navigation">
                ${menu(active)}
              </ul>
            </nav>
            <div class="outer-box">
              <button type="button" class="contact-btn pl-header-cta" data-booking>Book a Free Call</button>
              <div class="mobile-nav-toggler" aria-label="Open menu"><span></span><span></span><span></span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-menu">
        <div class="menu-backdrop"></div>
        <nav class="menu-box">
          <div class="upper-box">
            <div class="nav-logo">${logo()}</div>
            <div class="close-btn"><i class="icon fa fa-times"></i></div>
          </div>
          <ul class="navigation clearfix"></ul>
          <div class="pl-drawer-cta">${bookBtn('Book a Free Call')}</div>
          <ul class="contact-list-one">
            <li>
              <div class="contact-info-box">
                <i class="icon lnr-icon-envelope"></i>
                <span class="title">Email</span>
                <a href="mailto:${site.email}">${site.email}</a>
              </div>
            </li>
            <li>
              <div class="contact-info-box">
                <i class="icon lnr-icon-calendar-full"></i>
                <span class="title">Free Strategy Audit</span>
                <a href="/get-started">30 minutes. No obligation.</a>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div class="sticky-header">
        <div class="auto-container">
          <div class="inner-container">
            <div class="logo">${logo()}</div>
            <div class="nav-outer">
              <nav class="main-menu">
                <div class="navbar-collapse show collapse clearfix">
                  <ul class="navigation clearfix"></ul>
                </div>
              </nav>
              <button type="button" class="pl-sticky-cta" data-booking>Book a Free Call</button>
              <div class="mobile-nav-toggler pl-sticky-toggler" aria-label="Open menu"><span></span><span></span><span></span></div>
            </div>
          </div>
        </div>
      </div>
    </header>`;
}

function footer() {
  const col = (title, links) => `
                <div class="pl-footer__col">
                  <h4 class="pl-footer__title">${title}</h4>
                  <ul class="pl-footer__links">${links.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join('')}</ul>
                </div>`;
  const year = new Date().getFullYear();
  return `
        <footer class="footer-section pl-footer">
          <div class="footer-vec tm-gsap-animate-circle d-none d-lg-block">
            <img src="${img('icons/footer-vec-2-1.png')}" alt="">
          </div>
          <div class="foorer-area">
            <div class="footer-line-2">
              <img src="${img('icons/footer-line2-1.png')}" alt="">
            </div>
            <div class="container">
              <div class="footer-lets-talk bg-cover" style="background-image: url('${img('background/footer-lets-talk-bg.jpg')}');">
                <div class="pl-footer-cta__copy">
                  <span class="pl-footer-cta__kicker">Spots filling up</span>
                  <h2 class="title">Ready to Fill Your Pipeline?</h2>
                  <p>Pre-qualified leads, screened before they reach you. ${site.price}/month. Cancel anytime.</p>
                </div>
                <button type="button" class="circle-btn" data-booking aria-label="Book a free call">
                  <img src="${img('icons/arrow2.png')}" alt="">
                  <span class="pl-footer-cta__label">Book a Call</span>
                </button>
              </div>

              <div class="pl-footer__grid rc-footer__grid">
                <div class="pl-footer__brand">
                  ${logo('pl-footer__logo')}
                  <p>Pre-qualified lead generation for commercial and residential roof coating contractors through proven Facebook Ad campaigns.</p>
                  <ul class="pl-footer__trust">
                    <li><i class="fa-solid fa-envelope"></i> <a href="mailto:${site.email}">${site.email}</a></li>
                    <li><i class="fa-solid fa-calendar-check"></i> <a href="/get-started">Book a Free Strategy Audit</a></li>
                    <li><i class="fa-solid fa-file-signature"></i> No contracts. Cancel anytime.</li>
                  </ul>
                </div>
                ${col('Company', [['How It Works', '/how-it-works'], ['Niche Expertise', '/niche-expertise'], ['Manufacturers', '/manufacturers'], ['Blog', '/blog'], ['Get Started', '/get-started']])}
                ${col('Service Areas', [['Texas', '/service-areas/texas'], ['Florida', '/service-areas/florida'], ['California', '/service-areas/california'], ['Arizona', '/service-areas/arizona'], ['Ohio', '/service-areas/ohio'], ['Georgia', '/service-areas/georgia'], ['Australia', '/service-areas/australia']])}
                ${col('Coating Types', [['Commercial Silicone', '/niche-expertise#silicone'], ['Acrylic Coatings', '/niche-expertise#acrylic'], ['Metal Roof Restoration', '/niche-expertise#metal'], ['TPO / Flat Roof', '/niche-expertise#tpo']])}
              </div>

              ${disclaimer(FULL_DISCLAIMER, 'rc-disclaimer--footer')}

              <div class="pl-footer__bottom">
                <p>&copy; ${year} RoofCoat Leads. All rights reserved. Proven System. No Contracts. Just Results.</p>
                <div class="pl-footer__bottom-links">
                  <a href="/privacy">Privacy</a>
                  <a href="/terms">Terms</a>
                  <a href="/disclaimer">Disclaimer</a>
                  <a href="/sitemap.xml">Sitemap</a>
                  <button type="button" class="pl-footer__top" data-back-top aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>
                </div>
              </div>
            </div>
          </div>
        </footer>`;
}

// Calendar or contact form, switched with the same control as the Get Started page.
export function bookingSwitcher(idPrefix, { lazyCalendar = false } = {}) {
  const calendar = lazyCalendar
    ? `<iframe data-src="${site.bookingUrl}" title="Book a Free Strategy Audit with RoofCoat Leads" id="${idPrefix}-calendar"></iframe>`
    : `<iframe src="${site.bookingUrl}" title="Book a Free Strategy Audit with RoofCoat Leads" id="${idPrefix}-calendar" loading="lazy"></iframe>`;
  return `
<div class="pl-switcher" data-switcher>
  <div class="pl-switch" role="tablist" aria-label="How would you like to reach us?">
    <button type="button" class="pl-switch__btn is-active" role="tab" id="${idPrefix}-tab-call" aria-controls="${idPrefix}-panel-call" aria-selected="true" data-panel="call"><i class="fa-solid fa-calendar-check"></i> Book a Call</button>
    <button type="button" class="pl-switch__btn" role="tab" id="${idPrefix}-tab-form" aria-controls="${idPrefix}-panel-form" aria-selected="false" data-panel="form"><i class="fa-solid fa-envelope"></i> Contact Us</button>
    <span class="pl-switch__thumb" aria-hidden="true"></span>
  </div>
  <div class="pl-switch__panel pl-calendar" id="${idPrefix}-panel-call" role="tabpanel" aria-labelledby="${idPrefix}-tab-call">
    ${calendar}
  </div>
  <div class="pl-switch__panel pl-jotform__card" id="${idPrefix}-panel-form" role="tabpanel" aria-labelledby="${idPrefix}-tab-form" data-jotform="${site.jotformId}" hidden></div>
</div>`;
}

// Lives outside #smooth-wrapper so position:fixed isn't trapped by a transformed ancestor.
function bookingModal() {
  return `
  <div class="pl-modal" id="pl-booking" role="dialog" aria-modal="true" aria-labelledby="pl-booking-title" hidden>
    <div class="pl-modal__backdrop" data-close></div>
    <div class="pl-modal__panel">
      <div class="pl-modal__head">
        <div>
          <span class="pl-modal__kicker">Free Strategy Audit</span>
          <h3 id="pl-booking-title">Book a Free Call</h3>
          <p>30 minutes. No charge. No contracts.</p>
        </div>
        <button type="button" class="pl-modal__close" data-close aria-label="Close"><i class="fa fa-times"></i></button>
      </div>
      <div class="pl-modal__body rc-modal__body">
        ${bookingSwitcher('modal', { lazyCalendar: true })}
      </div>
    </div>
  </div>`;
}

function consentBanner() {
  return `
  <div class="rc-consent" id="rc-consent" role="region" aria-label="Cookie consent" hidden>
    <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
    <p>By using this site, you agree to our <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Service</a>. We use cookies for analytics and to improve your experience.</p>
    <button type="button" data-consent-accept>Accept</button>
  </div>`;
}

function consultationPopup() {
  return `
  <div class="rc-popup" id="rc-popup" role="dialog" aria-modal="true" aria-labelledby="rc-popup-title" hidden>
    <div class="rc-popup__backdrop" data-popup-close></div>
    <div class="rc-popup__panel">
      <button type="button" class="pl-modal__close rc-popup__close" data-popup-close aria-label="Close"><i class="fa fa-times"></i></button>
      <span class="pl-modal__kicker">Free Strategy Call</span>
      <h3 id="rc-popup-title">Want More <span>Roof Coating Jobs?</span></h3>
      <p>Book a free 30-minute strategy call. We'll map out your market, your ideal lead profile, and exactly how many exclusive leads we can deliver each month.</p>
      ${btn('Book My Free Call', { href: '/get-started', attrs: 'data-popup-close' })}
      <small>No contracts &middot; Cancel anytime</small>
    </div>
  </div>`;
}

export function page({ path, title, description, ogImage = '/assets/images/rc/og-image.jpg', schema, type, body }) {
  const inner = path !== '/';
  return withAsyncImages(
    head({ title, description, path, ogImage, schema, type }) +
    `<body class="${inner ? 'pl-inner' : 'pl-home'}">
  <div class="page-wrapper">
    <div class="preloader is-loading">
      <div class="preloader-inner">
        <div class="preloader-ball-wrap">
          <div class="preloader-ball-inner-wrap">
            <div class="preloader-ball-inner"><div class="preloader-ball"></div></div>
            <div class="preloader-ball-shadow"></div>
          </div>
          <div id="weave-anim" class="preloader-text">Loading...</div>
        </div>
      </div>
      <div class="preloader-overlay"></div>
    </div>
    <button id="back-top" class="back-to-top" aria-label="Back to top"><i class="fa-regular fa-arrow-up"></i></button>
    <div class="mouseCursor cursor-outer"></div>
    <div class="mouseCursor cursor-inner"></div>
${header(path)}
    <div id="smooth-wrapper">
      <div id="smooth-content">
${body}
${footer()}
      </div>
    </div>
  </div>
${bookingModal()}
${consultationPopup()}
${consentBanner()}
  <button type="button" class="pl-mobile-cta" data-booking><i class="fa-solid fa-calendar-check"></i> Book a Free Call</button>
  <script src="${v('/assets/js/jquery.js')}"></script>
  <script src="${v('/assets/js/popper.min.js')}"></script>
  <script src="${v('/assets/js/bootstrap.min.js')}"></script>
  <script src="${v('/assets/js/gsap.js')}"></script>
  <script src="${v('/assets/js/gsap-scroll-trigger.js')}"></script>
  <script src="${v('/assets/js/gsap-split-text.js')}"></script>
  <script src="${v('/assets/js/parallaxie.js')}"></script>
  <script src="${v('/assets/js/jquery.magnific-popup.min.js')}"></script>
  <script src="${v('/assets/js/wow.js')}"></script>
  <script src="${v('/assets/js/appear.js')}"></script>
  <script src="${v('/assets/js/nice-select.min.js')}"></script>
  <script src="${v('/assets/js/swiper.min.js')}"></script>
  <script src="${v('/assets/js/script.js')}"></script>
  <script src="${v('/assets/js/pl.js')}" data-gsap-src="${v('/assets/js/script-gsap.js')}"></script>
  <script async src="${site.plausibleSrc}"></script>
  <script>window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()</script>
</body>
</html>
`
  );
}

// Decode images off the main thread so they don't hitch scrolling.
function withAsyncImages(html) {
  return html.replace(/<img(?![^>]*decoding=)/g, '<img decoding="async"');
}
