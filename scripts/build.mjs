// Builds the static RoofCoat Leads site into dist/.
// Markup is the Gencyo template (same build as Paving Leads); content lives in src/content.mjs.
// Run: npm run build   (Vercel runs the same command, see vercel.json)
import { cpSync, mkdirSync, rmSync, writeFileSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import * as content from '../src/content.mjs';
import { serviceAreas } from '../src/service-areas.mjs';
import { allStates } from '../src/states.mjs';
import { marketFor } from '../src/state-markets.mjs';
import { australia, australiaMarket } from '../src/australia.mjs';
import { photos as PH, statePhoto } from '../src/photos.mjs';
import { page, pageTitle, btn, bookBtn, subTitle, secTitle, img, esc, disclaimer, bookingSwitcher, assetVersions } from './layout.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const {
  site, stats, videoTestimonials, trustChecks, leaks, features, plans, steps, advantageTabs, comparison, platformAdvantages,
  included, scalability, niches, nicheReasons, manufacturers, faqs, getStarted, posts, legal, FULL_DISCLAIMER, PRICING_NOTE,
} = content;

// ---------- shared sections ----------

const arrowSvg = `<svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0" stroke="#EAB308" stroke-width="1.5"/></svg>`;
const pad = (i) => String(i + 1).padStart(2, '0');
const delay = (i, step = 1) => `.${3 + i * step}s`;
const initials = (name) => name.split(' ').map((n) => n[0]).join('');
const checkList = (items, cls = 'rc-checks') => `<ul class="${cls}">${items.map((t) => `<li><i class="fa-solid fa-circle-check"></i>${esc(t)}</li>`).join('')}</ul>`;

function statsRow(items = stats, extraClass = '') {
  return `
<div class="pl-stats ${extraClass}">
  ${items.map((s, i) => `<div class="pl-stat wow fadeInUp" data-wow-delay="${delay(i)}"><span class="pl-stat__value">${esc(s.value)}</span><span class="pl-stat__label">${esc(s.label)}</span></div>`).join('')}
</div>`;
}

// Client videos: poster image until played, then a real <video> (see pl.js).
function clientVideos({ sub = 'Video Testimonials', title = ['Real Contractors.', 'Real Jobs.'], cls = '' } = {}) {
  return `
<section class="pl-reels section-padding ${cls}" id="testimonials">
  <div class="container">
    <div class="sec-title text-center">
      ${subTitle(sub)}
      ${secTitle(title[0] + ' <br>', title[1])}
      <div class="pl-reels__intro rc-sec-intro">Hear it from roof coating contractors running jobs from our leads.</div>
    </div>
    <div class="row g-4">
      ${videoTestimonials
        .map(
          (v, i) => `
      <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="${delay(i)}">
        <div class="pl-reel">
          <div class="pl-reel__media" data-video="${v.src}">
            <img src="${v.poster}" width="540" height="720" alt="Video testimonial: ${esc(v.author)}" loading="lazy">
            <button type="button" class="pl-reel__play" aria-label="Play video ${i + 1}: ${esc(v.author)}"><i class="fa-solid fa-play"></i></button>
            <span class="pl-reel__label">Client Story ${pad(i)}</span>
          </div>
          <div class="pl-reel__body">
            <p>&ldquo;${esc(v.quote)}&rdquo;</p>
            <div class="pl-reel__author">
              <span class="pl-avatar"><i class="fa-solid fa-helmet-safety"></i></span>
              <div><strong>${esc(v.author)}</strong><span>${esc(v.company)}</span></div>
            </div>
          </div>
        </div>
      </div>`
        )
        .join('')}
    </div>
    <div class="pl-reels__swipe">Swipe for more stories <i class="fa-solid fa-arrow-right"></i></div>
  </div>
</section>`;
}

// "The Hidden Leak" in the template's about-section-2 slot.
function problem() {
  return `
<section class="about-section-2 fix section-padding rc-leak">
  <div class="about-light"><img src="${img('icons/about-light-2-1.png')}" alt=""></div>
  <div class="about-vec tm-gsap-animate-circle"><img src="${img('icons/about-object-2-1.png')}" alt=""></div>
  <div class="container">
    <div class="about-items-2">
      ${subTitle('The Hidden Leak')}
      <h2 class="title tx-title sec_title tm-itm-title tm-itm-anim">Your ad budget is silently draining every month. Most roof coating contractors don't realize they're losing $3,000+ every month simply because their agency wasn't built for this niche.</h2>
      <div class="row g-4 rc-leak__cards">
        ${leaks
          .map(
            (l, i) => `
        <div class="col-lg-4 wow fadeInUp" data-wow-delay="${delay(i, 2)}">
          <div class="rc-leak-card">
            <span class="rc-leak-card__num">${pad(i)}</span>
            <span class="rc-leak-card__hook">${esc(l.hook)}</span>
            <h4>${esc(l.title)}</h4>
            <p>${esc(l.text)}</p>
          </div>
        </div>`
          )
          .join('')}
      </div>
      <div class="rc-leak__foot wow fadeInUp">
        <p>Every day you wait is another day of leads — and revenue — dripping away. <strong>$12,800</strong> avg. lost in 4 months.</p>
        ${btn('Plug the Leak', { href: '/get-started' })}
      </div>
      ${statsRow()}
      ${disclaimer(FULL_DISCLAIMER, 'rc-disclaimer--center')}
    </div>
  </div>
</section>`;
}

function servicesHover() {
  const pics = [PH.featureCampaigns, PH.featureQualification, PH.featureLeads, PH.featureNotifications, PH.featureScripts];
  return `
<div class="service-section-2 section-padding bg-cover" style="background-image: url('${img('background/service-bg-2-1.jpg')}');">
  <div class="container">
    <div class="sec-title text-center text-lg-start">
      <div class="row g-4 justify-content-between align-items-end">
        <div class="col-xl-7 col-lg-7">
          ${subTitle("What's Included")}
          ${secTitle('Everything You Need', 'to Grow')}
        </div>
        <div class="col-xl-5 col-lg-5 wow fadeInUp" data-wow-delay=".3s">
          <div class="sercice-top-text text-end">
            <div class="top-text">One system. No piecemeal tools. Every component is built to work together, and all of it is included in your ${site.price}/mo plan.</div>
            ${btn('See How It Works', { href: '/how-it-works' })}
          </div>
        </div>
      </div>
    </div>
    <div class="service-hover-box-item">
      <div class="service-line"></div>
      <div class="row">
        <div class="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
          ${features
            .map(
              (f, i) => `
          <div class="service-block-two">
            <div class="inner-box${i === 0 ? ' active' : ''}" data-index="${i + 1}">
              <h4 class="title"><a href="/how-it-works"><span class="number">${pad(i)}</span> ${esc(f.title)}</a></h4>
              <a href="/how-it-works" class="arrow-icon" aria-label="${esc(f.title)}"><i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>`
            )
            .join('')}
        </div>
        <div class="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".5s">
          <div class="service-hover-image">
            ${features
              .map(
                (f, i) => `
            <div class="image-box${i === 0 ? ' active' : ''}" data-index="${i + 1}">
              <div class="image">
                <img src="${pics[i]}" alt="${esc(f.title)}" class="hover-img">
                <img src="${pics[i]}" alt="" class="hover-img">
              </div>
              <div class="content-box">
                <div class="text">${esc(f.text)}</div>
                <ul class="rc-hover-list">${f.details.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>
              </div>
            </div>`
              )
              .join('')}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

// Example Facebook creatives, drawn in HTML. Ad angles come straight from the niche playbooks.
function adCreatives() {
  const ads = [
    { photo: PH.silicone, text: niches[0].adAngle + '.', headline: 'Commercial Silicone Roof Coating', cta: 'Get Quote' },
    { photo: PH.spray, text: niches[1].adAngle, headline: 'Free Roof Coating Inspection', cta: 'Book Now' },
    { photo: PH.tpo, text: niches[3].adAngle, headline: 'Flat Roof Leak Repair', cta: 'Learn More' },
  ];
  return `
<section class="pl-ads section-padding">
  <div class="container">
    <div class="sec-title text-center text-lg-start">
      <div class="row g-4 justify-content-between align-items-end">
        <div class="col-xl-7 col-lg-7">
          ${subTitle('The Solution')}
          ${secTitle('Our Proprietary Facebook Ad System for', 'Roof Coating')}
        </div>
        <div class="col-xl-5 col-lg-5 wow fadeInUp" data-wow-delay=".3s">
          <div class="sercice-top-text text-end">
            <div class="top-text">We run targeted Facebook Ad campaigns that connect you directly with building owners and homeowners actively dealing with roof issues.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row g-4">
      ${ads
        .map(
          (a, i) => `
      <div class="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="${delay(i, 2)}">
        <div class="pl-fbad">
          <div class="pl-fbad__head">
            <span class="pl-fbad__avatar"><img src="${img('rc/logo-icon.svg')}" alt=""></span>
            <div><strong>Your Coating Co.</strong><span>Sponsored &middot; <i class="fa-solid fa-earth-americas"></i></span></div>
            <i class="fa-solid fa-ellipsis pl-fbad__more"></i>
          </div>
          <p class="pl-fbad__text">${esc(a.text)}</p>
          <div class="pl-fbad__media"><img src="${a.photo}" alt="${esc(a.headline)}"></div>
          <div class="pl-fbad__link">
            <div><span>YOURCOATINGCO.COM</span><strong>${esc(a.headline)}</strong></div>
            <span class="pl-fbad__cta">${a.cta}</span>
          </div>
          <div class="pl-fbad__actions"><span><i class="fa-regular fa-thumbs-up"></i> Like</span><span><i class="fa-regular fa-comment"></i> Comment</span><span><i class="fa-solid fa-share"></i> Share</span></div>
        </div>
      </div>`
        )
        .join('')}
    </div>
    <div class="row g-4 rc-audiences">
      <div class="col-md-6 wow fadeInUp"><div class="rc-audience"><i class="fa-solid fa-building"></i><div><h4>Commercial Property Owners</h4><p>Target facility managers and building owners with aging roofs.</p></div></div></div>
      <div class="col-md-6 wow fadeInUp" data-wow-delay=".2s"><div class="rc-audience"><i class="fa-solid fa-house-chimney"></i><div><h4>Homeowners with Leaks</h4><p>Connect with residential flat roof owners experiencing issues.</p></div></div></div>
    </div>
    <p class="pl-ads__note wow fadeInUp">Example creatives. Every campaign is written and designed for your company, your coating type and your territory.</p>
  </div>
</section>`;
}

function workProcess() {
  return `
<section class="work-process-section-2">
  <div class="work-process-light"><img src="${img('icons/work-process-light-2-1.png')}" alt=""></div>
  <div class="work-process-vec tm-gsap-animate-circle"><img src="${img('icons/work-process-vec2-1.png')}" alt=""></div>
  <div class="work-process-inner-2 section-padding bg-cover" style="background-image: url('${img('background/work-process-bg-2-1.jpg')}');">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-10">
          <div class="sec-title text-center">
            ${subTitle('How It Works')}
            <h2 class="title tx-title sec_title tm-itm-title tm-itm-anim">From Audit <span class="d-md-block">To Revenue</span></h2>
            <div class="rc-sec-intro">A proven 4-step system that turns ad spend into closed roof coating jobs — predictably.</div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="row">
        ${steps
          .map(
            (s, i) => `
        <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="${delay(i, 2)}">
          <div class="working-block-two rc-step">
            <div class="step-btn">Phase ${s.number}</div>
            <div class="inner-block">
              <div class="icon-box"><img src="${img('icons/process-icon-2-1.png')}" alt=""></div>
              <div class="dot"></div>
              <h4 class="title">${esc(s.title)}</h4>
              <div class="text">${esc(s.summary)}</div>
              <div class="pl-phase-stat"><strong>${esc(s.time)}</strong> ${esc(s.tag)}</div>
            </div>
          </div>
        </div>`
          )
          .join('')}
      </div>
      <div class="how-it-client-wrapper wow fadeInUp" data-wow-delay=".3s">
        <div class="client-info">
          <div class="client-image pl-initials">
            ${niches.map((n, i) => `<span class="icon-${i + 1}"><i class="fa-solid ${n.icon}"></i></span>`).join('')}
          </div>
          <h5 class="info-title">Leads come screened for property type, roof age, timeline, and budget before they reach you.</h5>
        </div>
        <div class="clieng-btn">
          <div class="floower-shape"><img src="${img('resource/shape-2-1.png')}" alt=""></div>
          ${bookBtn('Book a Free Call')}
        </div>
      </div>
    </div>
  </div>
</section>`;
}

function whyFacebook() {
  return `
<section class="feature-section section-padding">
  <div class="container">
    <div class="row g-4">
      <div class="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".2s">
        <div class="feature-box-style1 style-2">
          ${subTitle('Why Facebook Ads?')}
          ${secTitle('The Unfair', 'Advantage')}
          <p class="rc-feature-lead">We reach property owners at the exact moment they're researching roof solutions. Here's what you're up against without it:</p>
          <ul class="pl-them">
            ${comparison.them.map((t) => `<li><i class="fa-solid fa-minus"></i><div><strong>${esc(t.text)}</strong><span>${esc(t.sub)}</span></div></li>`).join('')}
          </ul>
          <div class="feature-button">${bookBtn('Book a Free Call', 'mt-0')}</div>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".4s">
        <div class="feature-box-style2 style-2">
          <div class="image"><img src="${img('resource/object4.png')}" alt=""></div>
          <div class="content">
            <span class="rc-feature-stat">${esc(advantageTabs[1].stat)}</span>
            <h4 class="title font-weight-500">${esc(advantageTabs[1].title)}</h4>
            <div class="text">${esc(advantageTabs[1].text)}</div>
          </div>
        </div>
      </div>
      <div class="col-xl-8 col-lg-7 wow fadeInUp" data-wow-delay=".8s">
        <div class="feature-box-style3 style-2 fix rc-proven">
          <div class="rc-proven__photo"><img src="${PH.silicone}" alt="Roof coating crew spraying a commercial roof"></div>
          <div class="rc-proven__content">
            <span class="rc-feature-stat">${esc(advantageTabs[0].stat)}</span>
            <h4 class="rc-proven__title">${esc(advantageTabs[0].title)}</h4>
            <p class="rc-proven__text">${esc(advantageTabs[0].text)}</p>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-5 wow fadeInUp" data-wow-delay=".6s">
        <div class="feature-box-style4">
          <div class="image"><img src="${img('resource/object5.png')}" alt=""></div>
          <div class="content">
            <span class="rc-feature-stat rc-feature-stat--dark">${esc(advantageTabs[2].stat)}</span>
            <h4 class="title">${esc(advantageTabs[2].title)}</h4>
            <div class="text">${esc(advantageTabs[2].text)}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

function faqSection(items = faqs, { sub = 'FAQ', title = ['Got Questions? <br>', 'Get the Answers Now'] } = {}) {
  return `
<section class="faq-section-2">
  <div class="faq-light"><img src="${img('icons/faq-light-2-1.png')}" alt=""></div>
  <div class="faq-light2"><img src="${img('icons/faq-light-2-2.png')}" alt=""></div>
  <div class="faq-vec tm-gsap-animate-circle"><img src="${img('icons/faq-vec-2-1.png')}" alt=""></div>
  <div class="faq-vec2 tm-gsap-animate-circle"><img src="${img('icons/faq-vec-2-2.png')}" alt=""></div>
  <div class="faq-inner-2 fix section-padding bg-cover" style="background-image: url('${img('background/faq-bg-2-1.jpg')}');">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="sec-title text-center mb-60">
            ${subTitle(sub)}
            ${secTitle(title[0], title[1])}
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10 wow fadeInUp" data-wow-delay=".3s">
          ${items
            .map(
              (f, i) => `
          <div class="faq-block-two${i === 0 ? ' active' : ''}">
            <div class="title-box">
              <div class="content">
                <span class="number">${pad(i)}</span>
                <div class="line"></div>
                <h5 class="title">${esc(f.q)}</h5>
              </div>
              <span class="icon"><i class="fa-sharp fa-solid fa-plus"></i></span>
            </div>
            <div class="content-box${i === 0 ? ' show' : ''}">
              <div class="inner"><div class="text">${esc(f.a)}</div></div>
            </div>
          </div>`
            )
            .join('')}
        </div>
      </div>
    </div>
  </div>
</section>`;
}

const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

function pricing() {
  return `
<section class="pricing-section-2 fix section-padding" id="pricing">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="sec-title text-center">
          ${subTitle('Pricing')}
          ${secTitle('Simple, Transparent Pricing. <br>', 'No Contracts.')}
          <div class="rc-sec-intro">One plan. Optional add-ons. Cancel anytime.</div>
        </div>
      </div>
    </div>
    <div class="row">
      ${plans
        .map(
          (p, i) => `
      <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="${delay(i, 2)}">
        <div class="pricing-block${p.highlighted ? ' style-2' : ''}">
          <div class="inner-box">
            ${p.highlighted ? `<div class="recommend">${esc(p.kicker)}</div>` : ''}
            <div class="pricing-header">
              <h6 class="sub-title">${esc(p.name)}${p.highlighted ? '' : ` <span class="pl-limited">${esc(p.kicker)}</span>`}</h6>
              <h2 class="price"><sup>${p.highlighted ? '$' : '+$'}</sup> ${p.price.slice(1)} <sub>/ Monthly</sub></h2>
              <div class="pricing-flower"><img src="${img('icons/pricing-flower-2-1.png')}" alt=""></div>
            </div>
            <p class="pl-plan-desc">${esc(p.description)}</p>
            <ul class="pricing-list">
              ${p.features.map((f) => `<li><img src="${img('icons/check-2-1.png')}" alt="">${esc(f)}</li>`).join('')}
            </ul>
            <div class="pricing-button">
              <button type="button" class="pricing-btn" data-booking>${esc(p.cta)}</button>
            </div>
          </div>
        </div>
      </div>`
        )
        .join('')}
    </div>
    <div class="pl-guarantee rc-terms wow fadeInUp" data-wow-delay=".3s">
      <div class="pl-guarantee__icon"><i class="fa-solid fa-file-signature"></i></div>
      <div>
        <ul class="rc-inline-checks">${trustChecks.map((t) => `<li><i class="fa-solid fa-check"></i>${t}</li>`).join('')}</ul>
        <p>${esc(PRICING_NOTE)}</p>
      </div>
    </div>
  </div>
</section>`;
}

function territories() {
  return `
<section class="award-section-2 section-padding">
  <div class="award-light"><img src="${img('icons/award-light-2-1.png')}" alt=""></div>
  <div class="award-vec tm-gsap-animate-circle"><img src="${img('icons/award-vec-2-1.png')}" alt=""></div>
  <div class="container">
    <div class="sec-title mb-60 text-center text-lg-start">
      <div class="row g-4 justify-content-between align-items-end">
        <div class="col-xl-6 col-lg-8">
          ${subTitle('Service Areas')}
          ${secTitle('Hyper-Local Leads.', 'Your Territory.')}
        </div>
        <div class="col-xl-4">
          <div class="text">We don't do national blasts. Every campaign is custom-built for your state, your cities, your customer base. Precision targeting that fills local pipelines.</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-3 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
        <div class="pl-territory-card">
          <span class="pl-territory-card__num">${allStates.length}</span>
          <span class="pl-territory-card__label">States, DC &amp; Puerto Rico</span>
          <a class="rc-territory-au" href="/service-areas/australia"><i class="fa-solid fa-earth-oceania"></i> Now in Australia</a>
          <p>Select your state to get started with pre-qualified leads in your territory.</p>
          <ul>${niches.map((n) => `<li>${esc(n.label)} leads</li>`).join('')}</ul>
          ${btn('View Service Areas', { href: '/service-areas' })}
        </div>
      </div>
      <div class="col-xl-9 col-lg-8 mt-4 mt-lg-0 wow fadeInUp" data-wow-delay=".5s">
        <div class="award-block-two">
          ${serviceAreas
            .map(
              (a) => `
          <div class="list-item">
            <a class="content-box" href="/service-areas/${a.slug}">
              <div class="title-box">
                <div class="year">${a.abbr}</div>
                <h5 class="title">${esc(a.state)}</h5>
              </div>
              <div class="right-text">
                <div class="text">${esc(a.cities.slice(0, 3).join(' · '))}</div>
                <span class="arrow-icon" aria-hidden="true"><img src="${img('icons/arrow.png')}" alt=""></span>
              </div>
            </a>
          </div>`
            )
            .join('')}
        </div>
      </div>
    </div>
  </div>
</section>`;
}

function roiCalculator() {
  const slider = (key, label, min, max, step, value) => `
        <div class="rc-roi__field">
          <div class="rc-roi__row"><label for="roi-${key}">${label}</label><output data-roi-out="${key}"></output></div>
          <input id="roi-${key}" type="range" min="${min}" max="${max}" step="${step}" value="${value}" data-roi-input="${key}">
          <div class="pl-roi__scale"><span data-roi-min="${key}"></span><span data-roi-max="${key}"></span></div>
        </div>`;
  return `
<section class="pl-roi section-padding" id="roi">
  <div class="container">
    <div class="sec-title text-center">
      ${subTitle('ROI Calculator')}
      ${secTitle('See Exactly What Your Pipeline', 'Could Look Like')}
      <div class="pl-roi__intro">Adjust the inputs to match your business. The math does the talking.</div>
    </div>
    <div class="pl-roi__grid" data-roi>
      <div class="pl-roi__input">
        <span class="pl-roi__kicker">Your Inputs</span>
        ${slider('leads', 'Leads per month', 5, 100, 5, 25)}
        ${slider('cpl', 'Cost per lead', 25, 80, 5, 45)}
        ${slider('close', 'Close rate', 10, 45, 5, 25)}
        ${slider('job', 'Avg. job value', 2000, 50000, 1000, 8000)}
      </div>
      <div class="pl-roi__tiles">
        <div class="pl-roi__tile"><strong data-roi-spend>$1.1k</strong><span>Monthly Ad Spend</span></div>
        <div class="pl-roi__tile"><strong data-roi-jobs>6</strong><span>Jobs Closed / Month</span></div>
        <div class="pl-roi__tile"><strong data-roi-roas>42.7x</strong><span>Return on Ad Spend</span></div>
        <div class="pl-roi__tile pl-roi__tile--hot"><strong data-roi-profit>$46.9k</strong><span>Net Profit</span></div>
      </div>
      <div class="pl-roi__result">
        <div><small>Estimated Monthly Revenue</small><strong data-roi-revenue>$48k</strong></div>
        <div class="rc-roi__bars" aria-hidden="true"><span class="rc-roi__bar rc-roi__bar--spend" data-roi-bar-spend></span><span class="rc-roi__bar" data-roi-bar-rev></span></div>
        ${bookBtn('Book a Free Call')}
      </div>
    </div>
    <p class="pl-roi__note">Estimates only, based on the numbers you enter. ${esc(FULL_DISCLAIMER)}</p>
    <div class="row g-3 rc-scale">
      ${scalability.map((s, i) => `<div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="${delay(i)}"><div class="rc-scale__item"><i class="fa-solid ${s.icon}"></i><h4>${s.title}</h4><p>${s.text}</p></div></div>`).join('')}
    </div>
  </div>
</section>`;
}

function serviceCards(items, { cols = 'col-xl-4 col-lg-6 col-md-6', stat = false } = {}) {
  return items
    .map(
      (v, i) => `
      <div class="${cols} wow fadeInUp" data-wow-delay="${delay(i % 3, 2)}">
        <div class="service-block-one${v.tag ? '' : ' rc-static'}">
          <div class="inner-block">
            <span class="dot"></span>
            <span class="number">${pad(i)}</span>
            <div class="content-box">
              ${stat && v.stat ? `<div class="rc-card-stat"><strong>${esc(v.stat)}</strong> ${esc(v.statLabel || '')}</div>` : `<div class="icon"><img src="${img(`icons/service-icon-1-${(i % 6) + 1}.png`)}" alt=""></div>`}
              <h4 class="title">${esc(v.title)}</h4>
              <div class="text">${esc(v.text)}</div>
              ${v.tag ? `<span class="arrow-link">${esc(v.tag)}</span>` : ''}
            </div>
          </div>
        </div>
      </div>`
    )
    .join('');
}

function cardsSection({ sub, title, intro = '', items, opts = {}, id = '' }) {
  return `
<section class="service-section section-padding bg-cover"${id ? ` id="${id}"` : ''} style="background-image: url('${img('background/service-bg-1-1.jpg')}');">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-8 col-lg-9">
        <div class="sec-title text-center mb-60">
          ${subTitle(sub)}
          ${secTitle(title[0], title[1])}
          ${intro ? `<div class="rc-sec-intro">${intro}</div>` : ''}
        </div>
      </div>
    </div>
    <div class="row g-2">
      ${serviceCards(items, opts)}
    </div>
  </div>
</section>`;
}

// ---------- pages ----------

const pages = [];

pages.push({
  file: 'index.html',
  path: '/',
  title: '',
  description: site.description,
  schema: [
    faqSchema([
      { q: 'What are exclusive roof coating leads?', a: 'Exclusive roof coating leads are prospects sent only to your business — no sharing with competitors. Unlike shared leads from HomeAdvisor or shared lead platforms, you are the only contractor who receives the lead, resulting in higher close rates and lower cost per acquisition.' },
      { q: 'How does RoofCoat Leads generate leads?', a: 'We run precision-targeted Facebook Ad campaigns that reach commercial property owners and homeowners actively dealing with roof issues. Our proprietary funnel pre-qualifies every lead before delivering them to you in real time.' },
      ...faqs,
    ]),
  ],
  body: `
<section class="plh" aria-label="RoofCoat Leads">
  <div class="container plh__container">
    <div class="plh__content">
      <span class="rc-hero-kicker">Exclusive Leads — One Click at a Time</span>
      <h1 class="plh__title">A proven lead system <span>built for</span> roof coating</h1>
      <div class="plh__icon-bx">
        <div class="plh__badge" aria-hidden="true">
          <svg viewBox="0 0 120 120" class="plh__badge-ring">
            <defs><path id="plh-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"/></defs>
            <text><textPath href="#plh-circle" startOffset="0" textLength="286" lengthAdjust="spacing">PRE-QUALIFIED LEADS &#8226; NO CONTRACTS &#8226;</textPath></text>
          </svg>
          <span class="plh__badge-core"><i class="fa-solid fa-arrow-up-right"></i></span>
        </div>
        <p>Exclusive leads, screened for property type, roof age, timeline, and budget. Book a free call and we'll map out your lead strategy.</p>
      </div>
      <button type="button" class="plh-btn" data-booking>
        <span class="plh-btn__arrow plh-btn__arrow--left"><i class="fa-solid fa-arrow-right"></i></span>
        <span class="plh-btn__label">Book a Free Call</span>
        <span class="plh-btn__arrow plh-btn__arrow--right"><i class="fa-solid fa-arrow-right"></i></span>
      </button>
      <p class="rc-hero-note">No contracts &middot; Cancel anytime &middot; Built to ramp up fast</p>
    </div>
  </div>
  <div class="plh__campaign" aria-hidden="true"><span>Facebook Ads</span></div>
  <div class="plh__marketing" aria-hidden="true">
    <div class="plh__marketing-icon"><i class="fa-solid fa-bolt"></i></div>
    <h6>Pre-Qualified Roof Coating Leads</h6>
  </div>
  <img class="plh__mobile-art" src="${PH.hero}" width="1916" height="821" alt="">
</section>

${clientVideos()}
${problem()}
${adCreatives()}
${servicesHover()}
${workProcess()}
${whyFacebook()}
${roiCalculator()}
${pricing()}
${faqSection()}
${territories()}`,
});

pages.push({
  file: 'how-it-works.html',
  path: '/how-it-works',
  title: 'How It Works — Exclusive Roof Coating Lead Generation',
  description:
    'See exactly how RoofCoat Leads delivers exclusive, pre-qualified roof coating leads through Facebook Ads. Free strategy audit, custom campaign, lead pre-qualification, real-time delivery.',
  body: `
${pageTitle('How It Works', PH.pageTitleHow)}
<section class="about-section section-padding">
  <div class="light-shape-1"><img src="${img('icons/about-light-1-1.png')}" alt=""></div>
  <div class="about-shape-1 tm-gsap-animate-circle"><img src="${img('icons/about-shape-1-1.png')}" alt=""></div>
  <div class="light-shape-2"><img src="${img('icons/about-light-1-2.png')}" alt=""></div>
  <div class="about-shape-2 tm-gsap-animate-circle"><img src="${img('icons/about-shape-1-2.png')}" alt=""></div>
  <div class="container">
    <div class="row g-4">
      <div class="col-xxl-5 col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
        <div class="about-image-1 fix"><img data-speed=".8" src="${PH.aboutPortrait}" alt="Campaign strategist working on a laptop"></div>
      </div>
      <div class="col-xxl-7 col-xl-6 col-lg-6">
        <div class="about-content">
          <div class="sec-title mb-0">
            ${subTitle('No Black Box')}
            ${secTitle('From Audit to First Lead', 'Often Within 48 Hours')}
          </div>
          <div class="about-text wow fadeInUp" data-wow-delay=".2s">Most lead generation is a black box. You pay, you wait, you hope. Here's exactly what happens — step by step.</div>
          <div class="about-list-items">
            <ul class="wow fadeInUp" data-wow-delay=".3s">
              ${steps.slice(0, 2).map((s) => `<li><i class="fa-solid fa-circle-check"></i> ${esc(s.title)}</li>`).join('')}
            </ul>
            <ul class="wow fadeInUp" data-wow-delay=".4s">
              ${steps.slice(2).map((s) => `<li><i class="fa-solid fa-circle-check"></i> ${esc(s.title)}</li>`).join('')}
            </ul>
          </div>
          <div class="about-thumb-items">
            <div class="thumb1 wow fadeInUp" data-wow-delay=".5s"><img src="${PH.aboutSmall}" alt="Campaign analytics dashboard"></div>
            <div class="content wow fadeInUp" data-wow-delay=".6s">
              <h3 class="count-box">&lt;<span class="count-text" data-speed="2000" data-stop="48">0</span>h</h3>
              <p>Setup to First Lead</p>
            </div>
          </div>
          ${bookBtn('Start Your Audit')}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="feature-section section-padding pt-0" id="process">
  <div class="container">
    <div class="sec-title text-center">
      ${subTitle('The Process')}
      ${secTitle('Four Steps.', 'Zero Guesswork.')}
    </div>
    <div class="row g-4">
      ${steps
        .map(
          (s, i) => `
      <div class="col-lg-6 wow fadeInUp" data-wow-delay="${delay(i % 2, 2)}">
        <div class="pl-channel rc-step-card">
          <div class="pl-channel__photo"><img src="${[PH.stepAudit, PH.stepBuild, PH.stepQualify, PH.stepDeliver][i]}" alt="${esc(s.title)}"><span class="rc-step-card__badge">Step ${s.number} &middot; ${esc(s.time)}</span></div>
          <span class="pl-channel__method">${esc(s.short)}</span>
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.text)}</p>
          <ul>${s.list.map((f) => `<li><i class="fa-solid fa-circle-check"></i>${esc(f)}</li>`).join('')}</ul>
          <p class="rc-step-card__detail"><i class="fa-solid fa-bolt"></i> ${esc(s.detail)}</p>
        </div>
      </div>`
        )
        .join('')}
    </div>
  </div>
</section>

${cardsSection({ sub: 'Platform Advantage', title: ['Why Facebook Ads —', 'Not Google?'], intro: "Most roofing contractors think Google first. Here's why Facebook is the better fit for roof coating.", items: platformAdvantages, opts: { cols: 'col-xl-3 col-lg-6 col-md-6', stat: true } })}

<section class="pricing-section-2 section-padding rc-included">
  <div class="container">
    <div class="sec-title text-center">
      ${subTitle("What's Included")}
      ${secTitle('Everything You Need', 'to Grow')}
      <div class="rc-sec-intro">All included. No hidden fees.</div>
    </div>
    <div class="row g-4">
      ${included.map((it, i) => `<div class="${i === 0 || i === 6 ? 'col-lg-8' : 'col-lg-4'} col-md-6 wow fadeInUp" data-wow-delay="${delay(i % 3)}"><div class="rc-included__item"><span>${pad(i)}</span><h4>${esc(it.title)}</h4><p>${esc(it.text)}</p></div></div>`).join('')}
    </div>
  </div>
</section>
${roiCalculator()}
${faqSection()}`,
});

pages.push({
  file: 'niche-expertise.html',
  path: '/niche-expertise',
  title: 'Niche Expertise — Silicone, Acrylic, Metal & TPO Leads',
  description:
    'We speak your niche. Exclusive lead campaigns for silicone roof coatings, acrylic coatings, metal roof restoration, and TPO/flat roof repair. Custom targeting for each coating type.',
  body: `
${pageTitle('Niche Expertise', PH.pageTitleNiche)}
<section class="section-padding rc-niche-intro">
  <div class="container">
    <div class="sec-title text-center">
      ${subTitle('We Speak Your Niche')}
      ${secTitle("We Don't Do", 'General Roofing')}
      <div class="rc-sec-intro">Silicone vs acrylic. TPO vs metal. Every coating type needs a different campaign. We build each one from the ground up for your exact niche.</div>
    </div>
    <nav class="rc-niche-tabs" aria-label="Coating types">
      ${niches.map((n) => `<a href="#${n.id}"><i class="fa-solid ${n.icon}"></i> ${esc(n.label)}</a>`).join('')}
    </nav>
  </div>
</section>
${niches
  .map(
    (n, i) => `
<section class="rc-niche section-padding pt-0" id="${n.id}">
  <div class="container">
    <div class="row g-5 align-items-center${i % 2 ? ' flex-lg-row-reverse' : ''}">
      <div class="col-lg-6 wow fadeInUp">
        <div class="rc-niche__media">
          <img src="${PH[n.photo]}" alt="${esc(n.title)}">
          <div class="rc-niche__stats">${n.stats.map((s) => `<div><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div>
        </div>
      </div>
      <div class="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
        ${subTitle(esc(n.label))}
        <h2 class="rc-niche__title">${esc(n.title)}</h2>
        <p class="rc-niche__tagline">${esc(n.tagline)}</p>
        <p>${esc(n.description)}</p>
        <div class="rc-niche__value"><small>Avg. Job Value</small><strong>${esc(n.avgValue)}</strong><span>per closed project</span></div>
        <dl class="rc-spec">
          <div><dt>Target Audience</dt><dd>${esc(n.audience)}</dd></div>
          <div><dt>Behavioral Targeting</dt><dd>${esc(n.targeting)}</dd></div>
          <div><dt>Pre-Qualification</dt><dd>${esc(n.qualification)}</dd></div>
          <div><dt>Ad Angle</dt><dd>${esc(n.adAngle)}</dd></div>
        </dl>
        ${bookBtn(`Get ${esc(n.label)} Leads`)}
      </div>
    </div>
  </div>
</section>`
  )
  .join('')}
${cardsSection({ sub: 'Why It Matters', title: ["General Agencies Don't", 'Get This'], intro: "We know that a silicone campaign needs different messaging than acrylic. That metal roof owners respond to different pain points than TPO. This isn't generic marketing.", items: nicheReasons })}
<section class="section-padding pt-0 rc-page-disclaimer"><div class="container">${disclaimer()}</div></section>`,
});

pages.push({
  file: 'manufacturers.html',
  path: '/manufacturers',
  title: 'Manufacturer Partnerships',
  description:
    'Partner with RoofCoat Leads to keep your certified contractors booked. More jobs for your applicators means more material orders for you.',
  body: `
${pageTitle('Manufacturer Partnerships', PH.pageTitleManufacturers)}
<section class="contact-details pt-120 pb-80" id="contact">
  <div class="container">
    <div class="row g-4 g-lg-5 align-items-start">
      <div class="col-xl-6 col-lg-6">
        ${subTitle('Manufacturer Partnership Program')}
        <h2 class="rc-big-title">Your Applicators Stay Busy. <span>You Sell More Product.</span></h2>
        <p class="rc-lead">We generate exclusive roof coating leads every month for your certified contractors. When your applicators are booked, they order more material. Everybody wins.</p>
        ${checkList(['Proven Facebook & Google ad system', 'AI chatbot qualifies & books automatically', 'Exclusive leads — never shared'])}
        <div class="pl-hero-buttons">${btn('See How It Works', { href: '#partnership' })}</div>
        <p class="rc-hero-note">No risk &middot; Revenue-driven &middot; Results from month 1</p>
      </div>
      <div class="col-xl-6 col-lg-6">
        <div class="pl-jotform__card rc-form-card" data-jotform="${site.manufacturerJotformId}" data-jotform-auto data-jotform-title="Manufacturer Partnership Inquiry">
          <div class="rc-form-card__head"><i class="fa-solid fa-handshake"></i> Partnership Inquiry</div>
        </div>
      </div>
    </div>
  </div>
</section>

${cardsSection({ sub: 'The Problem You Already Know', title: ['When Your Contractors Slow Down,', 'Your Orders Drop.'], intro: 'Your product is great. But your installers and certified applicators struggle to find consistent work — especially newer ones without an established reputation. When they slow down, they stop buying material.', items: manufacturers.problems })}

<section class="feature-section section-padding" id="partnership">
  <div class="container">
    <div class="sec-title text-center">
      ${subTitle('The Partnership')}
      ${secTitle('We Become Your', 'Contractor Support Arm.')}
      <div class="rc-sec-intro">More jobs for your applicators. More material orders for you. A system that grows your revenue without growing your ad budget.</div>
    </div>
    <div class="row g-4">
      ${manufacturers.phases
        .map(
          (ph, i) => `
      <div class="col-lg-4 wow fadeInUp" data-wow-delay="${delay(i, 2)}">
        <div class="pl-channel">
          <div class="pl-channel__photo"><img src="${PH[{ 'step-build': 'metal', spray: 'spray', silicone: 'silicone' }[ph.photo]]}" alt="${esc(ph.title)}"><span class="rc-step-card__badge">Phase ${pad(i)}</span></div>
          <h3>${esc(ph.title)}</h3>
          <p>${esc(ph.text)}</p>
          <ul>${ph.bullets.map((b) => `<li><i class="fa-solid fa-circle-check"></i>${esc(b)}</li>`).join('')}</ul>
        </div>
      </div>`
        )
        .join('')}
    </div>
  </div>
</section>

${cardsSection({ sub: 'The Result', title: ['Your Contractors Get', 'More Jobs.'], intro: "That's the whole point. More jobs for your applicators means more product moving off your shelves. Here's what changes when you partner with us.", items: manufacturers.results })}

<section class="section-padding rc-numbers">
  <div class="container">
    <div class="sec-title text-center mb-0">
      ${subTitle('The Numbers')}
      ${secTitle('This Is a Real', 'Machine.')}
    </div>
    ${statsRow(manufacturers.numbers)}
    ${disclaimer(FULL_DISCLAIMER, 'rc-disclaimer--center')}
  </div>
</section>`,
});

pages.push({
  file: 'service-areas.html',
  path: '/service-areas',
  title: 'Service Areas — Exclusive Roof Coating Leads Nationwide',
  description:
    'We generate exclusive roof coating leads in Texas, Florida, California, Arizona, Ohio, Georgia, and expanding. Custom Facebook Ad campaigns tailored to your local market.',
  body: `
${pageTitle('Service Areas', PH.pageTitleAreas)}
<section class="section-padding">
  <div class="container">
    <div class="sec-title text-center">
      ${subTitle('Service Areas')}
      ${secTitle('Hyper-Local Leads.', 'Your Territory.')}
      <div class="rc-sec-intro">We don't do national blasts. Every campaign is custom-built for your state, your cities, your customer base. Precision targeting that fills local pipelines.</div>
    </div>
    <div class="row g-4">
      ${serviceAreas
        .map(
          (a, i) => `
      <div class="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="${delay(i % 3, 2)}">
        <a class="rc-area-card" href="/service-areas/${a.slug}">
          <div class="rc-area-card__photo"><img src="${statePhoto(a.slug)}" alt="${esc(a.state)}"><span>${a.abbr}</span></div>
          <div class="rc-area-card__body">
            <h3>${esc(a.state)}</h3>
            <p class="rc-area-card__cities">${esc(a.cities.slice(0, 4).join(' · '))} + more</p>
            <p>${esc(a.climate)}</p>
            <span class="rc-area-card__link">Explore ${esc(a.state)} ${arrowSvg}</span>
          </div>
        </a>
      </div>`
        )
        .join('')}
    </div>
    <p class="rc-center-note wow fadeInUp">Every state, DC and Puerto Rico has its own page below. Want to see what a campaign in your area looks like? <button type="button" data-booking>Book a Free Call &rarr;</button></p>
  </div>
</section>

<section class="section-padding pt-0">
  <div class="container">
    <div class="sec-title text-center">
      ${subTitle('Nationwide')}
      ${secTitle('All 50 States,', 'DC &amp; Puerto Rico')}
      <div class="rc-sec-intro">Every market has its own page. Pick yours to see the local roof coating market.</div>
    </div>
    <div class="rc-states">
      ${allStates
        .map((st) => {
          const featured = serviceAreas.some((a) => a.slug === st.slug);
          return `<a class="rc-state${featured ? ' is-featured' : ''}" href="/service-areas/${st.slug}"><strong>${st.abbr}</strong><span>${esc(st.state)}</span></a>`;
        })
        .join('')}
    </div>
    <div class="rc-states__legend"><span class="is-featured">Featured markets</span><span>Every market has its own page</span></div>
  </div>
</section>

<section class="section-padding pt-0" id="australia">
  <div class="container">
    <div class="sec-title text-center">
      ${subTitle('Now in Australia')}
      ${secTitle('Australian States', '&amp; Territories')}
      <div class="rc-sec-intro">Exclusive roof coating leads for contractors across Australia.</div>
    </div>
    <div class="rc-states">
      ${australia.map((st) => `<a class="rc-state" href="/service-areas/australia/${st.slug}"><strong>${st.abbr}</strong><span>${esc(st.state)}</span></a>`).join('')}
    </div>
    <div class="text-center mt-4">${btn('Explore Australia', { href: '/service-areas/australia' })}</div>
  </div>
</section>`,
});

// Photos for markets without their own image rotate through the roof coating shots.
const marketPhotos = [PH.metal, PH.silicone, PH.tpo, PH.spray, PH.commercialBuildings, PH.usSkyline];
// Australia uses roof coating shots only (the city photos are American skylines).
const roofPhotos = [PH.metal, PH.silicone, PH.tpo, PH.spray];

// One page per market. US states live at /service-areas/<slug>, Australian states and
// territories at /service-areas/australia/<slug>.
function marketPage(st, idx, { base = '/service-areas', crumbs = [{ label: 'Service Areas', href: '/service-areas' }], market = marketFor, photos = marketPhotos } = {}) {
  const featured = base === '/service-areas' && serviceAreas.find((s) => s.slug === st.slug);
  const a = featured || { ...st, ...market(st) };
  const photo = featured ? statePhoto(a.slug) : photos[idx % photos.length];
  pages.push({
    file: `${base.slice(1)}/${a.slug}.html`,
    path: `${base}/${a.slug}`,
    title: `${a.state} Roof Coating Leads — Exclusive Leads for ${a.abbr} Contractors`,
    description: `Get exclusive, pre-qualified roof coating leads in ${a.state}. Custom Facebook Ad campaigns targeting ${a.cities.slice(0, 3).join(', ')} and more.${featured ? ' 40% lower CPA.' : ''} First lead often within 48h.`,
    body: `
${pageTitle(`${esc(a.state)} Roof Coating Leads`, photo, crumbs)}
<section class="section-padding">
  <div class="container">
    <div class="row g-5 align-items-center">
      <div class="col-lg-7">
        ${subTitle(`${a.abbr} &middot; Service Area`)}
        <h2 class="rc-big-title">${esc(a.state)} <span>Roof Coating Leads</span></h2>
        <p class="rc-lead">Pre-qualified, high-intent leads for ${esc(a.state)} roof coating contractors. Custom campaigns targeting ${esc(a.cities.slice(0, 3).join(', '))} and beyond.</p>
        <div class="pl-hero-buttons">${bookBtn(`Get ${esc(a.state)} Leads`)}${btn('See How It Works', { href: '/how-it-works' })}</div>
      </div>
      <div class="col-lg-5">
        <div class="rc-area-stats">
          ${featured ? `<div><strong>${esc(a.caseStudy.stat)}</strong><span>${esc(a.caseStudy.statLabel)}</span></div>` : '<div><strong>100%</strong><span>exclusive leads</span></div>'}
          <div><strong>${a.cities.length}+</strong><span>${a.slug === 'district-of-columbia' ? 'neighborhoods' : 'cities'} covered</span></div>
          <div><strong>&lt;48h</strong><span>to first lead</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="service-section section-padding bg-cover" style="background-image: url('${img('background/service-bg-1-1.jpg')}');">
  <div class="container">
    <div class="sec-title text-center mb-60">
      ${subTitle('Market Overview')}
      ${secTitle(`The ${esc(a.state)}`, 'Roof Coating Market')}
    </div>
    <div class="row g-2">
      ${serviceCards(
        [
          { title: 'Climate & Conditions', text: a.climate },
          { title: 'Building Stock', text: a.buildingStock },
          { title: 'Seasonal Patterns', text: a.seasonal },
          { title: 'Local Insight', text: a.localInsight },
        ],
        { cols: 'col-xl-3 col-lg-6 col-md-6' }
      )}
    </div>
  </div>
</section>

${featured ? `<section class="tetsimonial-section-4">
  <div class="testimonial-light d-none d-xxl-block"><img src="${img('icons/testimonial-light-4-1.png')}" alt=""></div>
  <div class="testimonial-inner-4 section-padding bg-cover" style="background-image: url('${img('background/testimonial-bg-4-1.jpg')}');">
    <div class="container">
      <div class="row g-4 align-items-center">
        <div class="col-lg-5">
          <div class="testimonial-image-block4 fix"><img class="wow fadeInUp img-custom-anim-left" src="${PH.metal}" alt="Roof coating crew restoring a commercial roof"></div>
        </div>
        <div class="col-lg-7">
          <div class="testimonial-block-four">
            <div class="sec-title mb-0">
              ${subTitle(`${esc(a.state)} Partner Win-Log`)}
              ${secTitle(esc(a.caseStudy.company), '')}
            </div>
            <div class="inner-box rc-winlog">
              <div class="pl-metric"><strong>${esc(a.caseStudy.stat)}</strong> ${esc(a.caseStudy.statLabel)}</div>
              <div class="text">&ldquo;${esc(a.caseStudy.quote)}&rdquo;</div>
              <div class="rc-winlog__author"><span class="pl-avatar">${initials(a.caseStudy.name)}</span><div><h4 class="name">${esc(a.caseStudy.name)}</h4><div class="sub-text">${esc(a.caseStudy.company)}</div></div></div>
              ${bookBtn('Get Results Like This')}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>` : clientVideos({ sub: 'Proof', title: ['Hear It From', 'The Contractors'] })}

<section class="section-padding">
  <div class="container">
    <div class="sec-title text-center">
      ${subTitle('Coverage')}
      ${secTitle(a.slug === 'district-of-columbia' ? 'Neighborhoods We Serve in' : 'Cities We Serve in', esc(a.state))}
      <div class="rc-sec-intro">+ all surrounding areas within your service radius</div>
    </div>
    <div class="rc-states rc-states--cities">
      ${a.cities.map((c) => `<div class="rc-state"><strong>${esc(c)}</strong><span>${a.abbr}</span></div>`).join('')}
    </div>
    ${disclaimer(FULL_DISCLAIMER, 'rc-disclaimer--center')}
  </div>
</section>`,
  });
}

allStates.forEach((st, idx) => marketPage(st, idx));

// Australia hub + states/territories
pages.push({
  file: 'service-areas/australia.html',
  path: '/service-areas/australia',
  title: 'Australia — Exclusive Roof Coating Leads',
  description: 'Exclusive, pre-qualified roof coating leads for contractors across Australia: New South Wales, Victoria, Queensland, Western Australia, South Australia, Tasmania, the ACT and the Northern Territory.',
  body: `
${pageTitle('Australia', PH.metal, [{ label: 'Service Areas', href: '/service-areas' }])}
<section class="section-padding">
  <div class="container">
    <div class="sec-title text-center">
      ${subTitle('Now in Australia')}
      ${secTitle('Roof Coating Leads', 'Across Australia')}
      <div class="rc-sec-intro">The same done-for-you Facebook Ad system, built for Australian roof coating contractors. Every state and territory has its own campaign and its own page.</div>
    </div>
    <div class="row g-4">
      ${australia
        .map(
          (st, i) => `
      <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="${delay(i % 4)}">
        <a class="rc-area-card" href="/service-areas/australia/${st.slug}">
          <div class="rc-area-card__photo"><img src="${roofPhotos[i % roofPhotos.length]}" alt="${esc(st.state)}"><span>${st.abbr}</span></div>
          <div class="rc-area-card__body">
            <h3>${esc(st.state)}</h3>
            <p class="rc-area-card__cities">${esc(st.cities.slice(0, 3).join(' · '))}</p>
            <span class="rc-area-card__link">Explore ${esc(st.abbr)} ${arrowSvg}</span>
          </div>
        </a>
      </div>`
        )
        .join('')}
    </div>
    <p class="rc-center-note wow fadeInUp">Want to see what a campaign in your area looks like? <button type="button" data-booking>Book a Free Call &rarr;</button></p>
  </div>
</section>
${clientVideos({ sub: 'Proof', title: ['Hear It From', 'The Contractors'] })}`,
});

australia.forEach((st, idx) =>
  marketPage(st, idx, {
    base: '/service-areas/australia',
    crumbs: [{ label: 'Service Areas', href: '/service-areas' }, { label: 'Australia', href: '/service-areas/australia' }],
    market: australiaMarket,
    photos: roofPhotos,
  })
);

pages.push({
  file: 'get-started.html',
  path: '/get-started',
  title: 'Get Started — Free Roof Coating Lead Strategy Audit',
  description:
    "Book your free strategy audit. In 30 minutes we'll map out your market, your ideal lead profile, and how many exclusive leads we can deliver each month. No charge. No contract.",
  schema: [faqSchema(getStarted.faqs)],
  body: `
${pageTitle('Free Strategy Audit', PH.pageTitleStart)}
<section class="contact-details pt-120 pb-80" id="book">
  <div class="container">
    <div class="row g-4 g-lg-5">
      <div class="col-xl-7 col-lg-6">
        <div class="section-title mb-30">
          ${subTitle('Free Lead Strategy Audit')}
          <h2 class="title">Book Your Free Strategy Audit</h2>
          <div class="text mt-3">Pick a time that works for you. In 30 minutes we'll map out your market, your ideal lead profile, and how many exclusive leads we can deliver each month. No charge for the audit. No contracts. If we're not the right fit, we'll tell you.</div>
        </div>
        ${bookingSwitcher('page', { lazyCalendar: true })}
      </div>
      <div class="col-xl-5 col-lg-6">
        <div class="contact-details__right">
          <div class="section-title mb-30">
            ${subTitle('The Briefing')}
            <h2 class="title">What You Get</h2>
          </div>
          <ul class="list-unstyled contact-details__info">
            ${getStarted.agenda
              .map(
                (a, i) => `
            <li class="d-block d-sm-flex align-items-sm-center">
              <div class="icon"><span class="pl-agenda-num">${pad(i)}</span></div>
              <div class="text ml-xs--0 mt-xs-10"><h5 class="mb-0">${esc(a)}</h5></div>
            </li>`
              )
              .join('')}
          </ul>
          <div class="rc-host">
            <span class="pl-avatar">M</span>
            <div>
              <strong>Marc Friedman</strong>
              <span>Head of Sales, RoofCoat Leads</span>
              <p>You'll be talking directly with me — not a sales rep, not an account manager. I built this system and I know your niche inside out.</p>
            </div>
          </div>
          <div class="pl-badges">
            <span><i class="fa-solid fa-clock"></i> 30-Minute Call</span>
            <span><i class="fa-solid fa-hand-holding-dollar"></i> No Charge</span>
            <span><i class="fa-solid fa-file-signature"></i> No Contracts</span>
          </div>
          <a class="rc-mail" href="mailto:${site.email}"><i class="fa-solid fa-envelope"></i> ${site.email}</a>
        </div>
      </div>
    </div>
  </div>
</section>
${clientVideos({ sub: 'Proof', title: ['Hear It From', 'The Contractors'] })}
${cardsSection({ sub: 'Why It Works', title: ['Why Contractors Trust', 'the Audit'], intro: 'The audit is free, takes 30 minutes, and you keep the blueprint whether you work with us or not.', items: getStarted.trust, opts: { cols: 'col-xl-3 col-lg-6 col-md-6' } })}
${faqSection(getStarted.faqs, { sub: 'Questions', title: ['Questions About', 'the Audit'] })}`,
});

pages.push({
  file: 'blog.html',
  path: '/blog',
  title: 'Blog',
  description: 'Insights, strategies, and proven tactics for roof coating contractors looking to generate more qualified leads through Facebook Ads.',
  body: `
${pageTitle('Blog', PH.pageTitleBlog)}
<section class="section-padding">
  <div class="container">
    <div class="sec-title text-center">
      ${subTitle('Insights')}
      ${secTitle('Facebook Ads Playbooks for', 'Roof Coating Contractors')}
    </div>
    <div class="row g-4 justify-content-center">
      ${posts
        .map(
          (p, i) => `
      <div class="col-lg-6 wow fadeInUp" data-wow-delay="${delay(i, 2)}">
        <a class="pl-channel rc-post-card" href="/blog/${p.slug}">
          <div class="pl-channel__photo"><img src="${PH[p.photo]}" alt="${esc(p.title)}"><span class="rc-step-card__badge">${esc(p.category)}</span></div>
          <span class="pl-channel__method">${esc(p.date)} &middot; ${esc(p.readTime)}</span>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.excerpt)}</p>
          <span class="rc-area-card__link">Read the article ${arrowSvg}</span>
        </a>
      </div>`
        )
        .join('')}
    </div>
  </div>
</section>`,
});

const decode = (s) => s.replace(/<[^>]+>/g, '').replace(/&#39;/g, "'").replace(/&ldquo;|&rdquo;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim();

for (const p of posts) {
  const html = readFileSync(join(ROOT, `src/pages/blog-${p.slug}.html`), 'utf8');
  const qa = [...html.matchAll(/<div class="rc-faq"><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p><\/div>/g)].map((m) => ({ q: decode(m[1]), a: decode(m[2]) }));
  pages.push({
    file: `blog/${p.slug}.html`,
    path: `/blog/${p.slug}`,
    title: p.title,
    description: p.excerpt,
    ogImage: PH[p.photo],
    type: 'article',
    schema: [
      { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.title, description: p.excerpt, datePublished: p.isoDate, image: `${site.url}${PH[p.photo]}`, author: { '@type': 'Organization', name: site.name }, publisher: { '@type': 'Organization', name: site.name } },
      ...(qa.length ? [faqSchema(qa)] : []),
    ],
    body: `
${pageTitle(esc(p.category), PH[p.photo], [{ label: 'Blog', href: '/blog' }])}
<section class="section-padding">
  <div class="container">
    <article class="rc-prose">
      <span class="rc-kicker">${esc(p.date)} &middot; ${esc(p.readTime)}</span>
      <h1 class="rc-prose__title">${esc(p.title)}</h1>
      <p class="rc-prose__lead">${esc(p.excerpt)}</p>
      ${html}
      <div class="rc-prose__cta">
        <h2>${esc(p.cta.title)}</h2>
        <p>${esc(p.cta.text)}</p>
        ${btn('Book a Free Strategy Call', { href: '/get-started' })}
        <small>${site.price}/mo &middot; No contracts &middot; Built to ramp up fast</small>
      </div>
    </article>
  </div>
</section>`,
  });
}

for (const l of legal) {
  const html = readFileSync(join(ROOT, `src/pages/legal-${l.slug}.html`), 'utf8').replace('{FULL_DISCLAIMER}', esc(FULL_DISCLAIMER));
  pages.push({
    file: `${l.slug}.html`,
    path: `/${l.slug}`,
    title: l.title,
    description: l.description,
    body: `
${pageTitle(l.title, PH.pageTitleLegal)}
<section class="section-padding">
  <div class="container">
    <article class="rc-prose">${html}</article>
  </div>
</section>`,
  });
}

pages.push({
  file: '404.html',
  path: '/404',
  title: 'Page Not Found',
  description: "Sorry, we couldn't find the page you're looking for.",
  body: `
${pageTitle('Page Not Found', PH.pageTitleLegal)}
<section class="section-padding text-center pl-404">
  <div class="container">
    <h2 class="title">This page sprang a leak.</h2>
    <p>Sorry, we couldn't find the page you're looking for.</p>
    <div class="pl-hero-buttons justify-content-center">${btn('Go Home', { href: '/' })}${bookBtn('Book a Free Call')}</div>
  </div>
</section>`,
});

// ---------- write ----------

rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
cpSync(join(ROOT, 'src/assets'), join(DIST, 'assets'), { recursive: true });
cpSync(join(ROOT, 'src/assets/images/rc/favicon.svg'), join(DIST, 'favicon.svg'));
// Inline the template's @import-ed stylesheets into style.css: the browser otherwise
// fetches them one after another before it can paint. The web font is linked in <head>.
{
  const cssDir = join(ROOT, 'src/assets/css');
  const bundled = readFileSync(join(cssDir, 'style.css'), 'utf8')
    .replace(/@import url\("https?:[^"]+"\);\s*/g, '')
    .replace(/@import url\("([^"]+\.css)"\);/g, (_, f) => readFileSync(join(cssDir, f), 'utf8'));
  writeFileSync(join(DIST, 'assets/css/style.css'), bundled);
}
// Stamp every CSS/JS file with a hash of its built contents (see assetVersions in layout.mjs).
for (const dir of ['css', 'js']) {
  for (const f of readdirSync(join(DIST, 'assets', dir))) {
    if (!/\.(css|js)$/.test(f)) continue;
    const hash = createHash('md5').update(readFileSync(join(DIST, 'assets', dir, f))).digest('hex').slice(0, 10);
    assetVersions[`/assets/${dir}/${f}`] = hash;
  }
}
for (const p of pages) {
  mkdirSync(dirname(join(DIST, p.file)), { recursive: true });
  writeFileSync(join(DIST, p.file), page(p));
}
console.log(`wrote ${pages.length} pages`);
const urls = pages.filter((p) => p.path !== '/404').map((p) => `  <url><loc>${site.url}${p.path === '/' ? '' : p.path}</loc></url>`);
writeFileSync(join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
writeFileSync(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);
console.log('wrote sitemap.xml, robots.txt');
