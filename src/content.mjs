// All site copy and data in one place. Copy is carried over from the previous
// Next.js site (roofcoatleads.com); nothing here is new marketing claims.

export const site = {
  name: 'RoofCoat Leads',
  url: 'https://roofcoatleads.com',
  tagline: 'Exclusive Roof Coating Leads via Facebook Ads',
  description:
    'Stop buying shared leads. Get 100% exclusive, pre-qualified commercial & residential roof coating leads through our proven Facebook Ad system. 40% lower CPA. Most partners get their first lead within 48 hours.',
  email: 'marcfriedmancm@roofcoatleads.com',
  bookingUrl: 'https://api.leadconnectorhq.com/widget/bookings/roofcoatingleads',
  jotformId: '260953770990064',
  manufacturerJotformId: '261014402774045',
  gaId: 'G-F34YP77Z0F',
  plausibleSrc: 'https://plausible.io/js/pa-df7lV-XI8Y4HIePV-rOBs.js',
  price: '$1,500',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/niche-expertise', label: 'Niche Expertise' },
  { href: '/manufacturers', label: 'Manufacturers' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/blog', label: 'Blog' },
];

export const FULL_DISCLAIMER =
  'RoofCoat Leads provides lead generation services through paid Facebook Ad campaigns. ' +
  'Results shown on this website — including lead volume, cost per acquisition, and return on ad spend — ' +
  'reflect averages across our contractor network and are not guaranteed outcomes. ' +
  'Individual results vary based on geographic market, competition, ad budget, sales process, ' +
  'and other factors outside our control. Testimonials represent the experience of individual contractors ' +
  'and are not typical. RoofCoat Leads does not guarantee a specific number of leads, revenue, or return on investment.';

export const PRICING_NOTE =
  "The monthly fee covers our service and campaign management; your advertising spend is separate and paid directly to the ad platforms. Lead volume and quality depend on your market, budget, and competition, so we can't guarantee a specific number of leads, booked jobs, or revenue. Most contractors treat the first 30–60 days as a ramp-up period.";

// "The Results Speak for Themselves" (home page Results section)
export const stats = [
  { value: '100+', label: 'Contractors' },
  { value: '40%', label: 'Lower Cost Per Acquisition' },
  { value: '<48h', label: 'Setup to First Lead' },
  { value: '15%', label: 'Conversion Rate Increase' },
];

export const trustChecks = ['No contracts', 'Cancel anytime', 'Built to ramp up fast', 'Dedicated support'];

export const leaks = [
  {
    title: 'Budget Bleeding Out',
    hook: '$2,000–$5,000/month',
    text: 'Generic agencies charge premium prices while they "learn" your niche on your dime. Every month of their learning phase is money dripping out of your business.',
  },
  {
    title: 'Time Hemorrhage',
    hook: '3–6 months wasted',
    text: 'While they\'re "optimizing," your competitors are closing jobs. Every week without a system is a week of leads going to someone else in your market.',
  },
  {
    title: 'Leads Going Cold',
    hook: '80% of leads never convert',
    text: "Without niche-specific qualification, you're chasing homeowners who don't need coating, don't have budget, or aren't ready. Your pipeline is full of noise.",
  },
];

// What's Included
export const features = [
  {
    title: 'Custom Facebook Ad Campaigns',
    text: 'Fully managed, tailored to your service area and ideal customer. We handle copy, creative, targeting, and optimization.',
    details: ['Custom ad copy for your niche (silicone, acrylic, metal, TPO)', 'Territory-specific audience targeting', 'A/B tested creative and landing pages', 'Monthly optimization and scaling'],
  },
  {
    title: 'Lead Pre-Qualification Funnel',
    text: 'Our proprietary multi-step funnel screens every lead for property type, urgency, roof age, and budget.',
    details: ['Property type verification', 'Urgency and timeline screening', 'Budget qualification', 'Decision-maker confirmation'],
  },
  {
    title: 'Pre-Qualified, High-Intent Leads',
    text: 'Every lead is pre-screened before it reaches you. No tire kickers, no price shoppers — just ready-to-book prospects.',
    details: ['Screened for property type and roof condition', 'Budget-qualified before delivery', 'Real-time delivery via SMS + email', 'Full contact details + qualification answers'],
  },
  {
    title: 'Real-Time Notifications',
    text: 'Instant alerts the moment a lead qualifies. Call within 60 seconds and your close rate doubles.',
    details: ['Instant SMS notification', 'Email with full lead details', 'CRM integration available', 'Speed-to-lead tracking'],
  },
  {
    title: 'Follow-Up Script Support',
    text: 'Proven call and text scripts built specifically for roof coating. Partners using our scripts see 15%+ higher close rates.',
    details: ['Initial call script', 'Follow-up text sequences', 'Objection handling frameworks', 'Voicemail drop templates'],
  },
];

export const plans = [
  {
    name: 'AI Appointment Setter',
    kicker: 'Add-On',
    price: '$500',
    description: 'Our AI system contacts leads and books appointments on your calendar — automatically.',
    features: ['24/7 automated outreach', 'Books directly on your calendar', 'SMS + email sequences'],
    cta: 'Add to Plan',
  },
  {
    name: 'Core Lead System',
    kicker: 'Most Popular',
    price: '$1,500',
    description: 'One plan. Optional add-ons. Cancel anytime.',
    features: ['Custom Facebook Ad campaigns', 'Lead pre-qualification funnel', 'Pre-qualified, high-intent leads', 'Real-time notifications', 'Follow-up script support', 'Dedicated campaign manager', 'Monthly performance reporting'],
    cta: 'Book a Free Call',
    highlighted: true,
  },
  {
    name: 'Live Secretary Calls',
    kicker: 'Add-On',
    price: '$500',
    description: 'Our trained team calls every lead within minutes. Speed-to-lead handled for you.',
    features: ['Calls within 5 minutes', 'Trained on roof coating', 'Appointment booking included'],
    cta: 'Add to Plan',
  },
];

export const steps = [
  {
    number: '01',
    tag: 'Audit',
    time: 'Day 0',
    title: 'Free Strategy Audit',
    short: 'We do the homework before spending a dollar.',
    summary: 'We analyze your market, service area, competition, and ideal customer profile. You get a custom campaign blueprint — free.',
    text: "We analyze your local market, your service area, your ideal customer profile, and your current pipeline. This 30-minute call isn't a sales pitch — it's an honest assessment of whether we can deliver results for you. If we can't, we'll tell you.",
    detail: 'Custom campaign blueprint within 24 hours.',
    list: ['Local market analysis', 'Service area mapping', 'Competitor audit', 'Ideal customer profile', 'Pipeline assessment', 'Custom blueprint'],
  },
  {
    number: '02',
    tag: 'Build',
    time: 'Day 1',
    title: 'Campaign Build & Launch',
    short: 'Custom-built for your territory. Not a template.',
    summary: 'Our team builds precision-targeted Facebook Ads for your territory. Creatives, copy, targeting — all done for you. Live within 48 hours.',
    text: 'Our team builds your Facebook Ad campaign from the ground up — copy, creative, targeting, and funnel. Every campaign is custom-built for your territory, your niche (commercial vs residential), and your monthly lead volume target.',
    detail: 'Launch within 24–48 hours of approval.',
    list: ['Ad Copy', 'Creative Design', 'Audience Targeting', 'Qualification Funnel', 'Tracking & Analytics'],
  },
  {
    number: '03',
    tag: 'Qualify',
    time: 'Day 1–2',
    title: 'Lead Pre-Qualification',
    short: 'Tire kickers filtered out before you see them.',
    summary: 'Every lead passes through our 5-step funnel. Property type, roof age, timeline, budget — pre-qualified before it reaches you.',
    text: 'Every lead goes through our proprietary qualification funnel. We screen for property type, roof age, urgency, and budget. Price shoppers and tire kickers are filtered out. You only see leads who are genuinely ready to talk.',
    detail: 'You only receive qualified, ready-to-book prospects.',
    list: ['Property type match', 'Urgency confirmed', 'Budget qualified', 'Ready to book'],
  },
  {
    number: '04',
    tag: 'Deliver',
    time: 'Day 1–2',
    title: 'Exclusive Real-Time Delivery',
    short: 'Pre-qualified and delivered in real time.',
    summary: 'Leads sent directly to you in real time via SMS + email. 100% exclusive — never shared with competing contractors.',
    text: 'When a lead passes qualification, it goes directly to you in real time. You get an instant notification with their name, contact details, property type, and qualification answers. Speed-to-lead is everything.',
    detail: 'The faster you call, the higher your close rate.',
    list: ['Instant SMS notification', 'Email with full lead details', 'Property type + qualification answers'],
  },
];

// Why Facebook Ads? (home) — "The Unfair Advantage"
export const advantageTabs = [
  { stat: '100+', title: 'Contractors on the System', text: "It's done for you. We write the ads, set the targeting and run the qualification funnel. You close the jobs." },
  { stat: '10x', title: 'Better Targeting', text: "Facebook's 2.9B+ users and advanced behavioral data lets us find property owners the moment they're researching roof solutions." },
  { stat: '40%', title: 'Lower Cost Per Lead', text: 'Our precision targeting and exclusive model drives cost per acquisition down by 40% compared to HomeAdvisor and shared lead platforms.' },
  { stat: '<48h', title: 'First Lead Often Within 48 Hours', text: 'From signup to your first qualified lead in less than two days. Our streamlined onboarding gets campaigns live fast.' },
];

export const comparison = {
  them: [
    { text: 'Shared Lead Platforms', sub: '5+ contractors see the same lead' },
    { text: 'HomeAdvisor', sub: '3–4 contractors per lead, $80–$150 each' },
    { text: 'Generic Agencies', sub: 'Learning your niche on your dime' },
    { text: 'No Qualification', sub: 'Chasing people with no need or budget' },
  ],
};

// How It Works page — "Why Facebook Ads — Not Google?"
export const platformAdvantages = [
  { title: 'Behavioral Targeting', stat: '2.9B+', statLabel: 'users', text: 'Facebook knows when someone is researching home improvement or matches the profile of a property owner with an aging building. Google only knows what they typed.' },
  { title: 'Interruption Advantage', stat: 'Before', statLabel: 'they search', text: "Roof coating is a problem people don't know they have. Facebook reaches them at the problem-awareness stage — before they're comparing contractors." },
  { title: '40% Lower CPA', stat: '40%', statLabel: 'lower cost', text: 'Our Facebook campaigns consistently deliver cost-per-acquisition 40% below comparable HomeAdvisor leads for the same contractors.' },
  { title: 'Pre-Qualification Depth', stat: '5+', statLabel: 'screening Qs', text: "Facebook Lead Ads allow multi-question forms — that's how we qualify leads before you ever see them. Google search doesn't support this natively." },
];

export const included = [
  { title: 'Custom Facebook Ad Campaigns', text: 'Fully managed. We handle copy, creative, audience, and optimization — you close the jobs.' },
  { title: 'Lead Pre-Qualification Funnel', text: 'Proprietary multi-step funnel screens for property type, urgency, roof age, and budget.' },
  { title: 'Pre-Qualified, High-Intent Leads', text: 'Every lead is screened for property type, urgency, and budget before it reaches you.' },
  { title: 'Real-Time Notifications', text: 'Instant alerts via email, SMS, or CRM. Call within 60 seconds and your close rate doubles.' },
  { title: 'Follow-Up Script Support', text: 'Proven scripts built for roof coating. Partners using them see 15%+ conversion rate increase.' },
  { title: 'AI Appointment Setter + Live Secretaries', text: 'Optional add-ons: AI books appointments automatically ($500/mo) or our live team calls your leads ($500/mo).' },
  { title: 'Dedicated Campaign Manager', text: 'One point of contact who knows your business. No account shuffling.' },
];

export const scalability = [
  { icon: 'fa-chart-column', title: 'Predictable Pipeline', text: 'Know your numbers every month' },
  { icon: 'fa-wallet', title: 'Budget Control', text: 'Adjust spend anytime — no contracts' },
  { icon: 'fa-location-dot', title: 'Territory Expansion', text: 'New area? Live in days' },
  { icon: 'fa-cloud-sun', title: 'Seasonal Flexibility', text: 'Ramp up or down as needed' },
];

export const niches = [
  {
    id: 'silicone',
    label: 'Silicone',
    icon: 'fa-building',
    title: 'Commercial Silicone Roof Coatings',
    tagline: 'The highest-value niche in the coating industry.',
    photo: 'silicone',
    description: 'Our campaigns target commercial property owners with flat/low-slope roofs who are actively researching restoration options — before they find your competitors.',
    avgValue: '$8,000–$25,000',
    audience: 'Commercial property owners & facility managers',
    targeting: 'Facility management interests, commercial property research, building age 15+',
    qualification: 'Roof age 8+, building type commercial, urgency active, decision-maker confirmed',
    adAngle: 'Extend your roof life by 15+ years for a fraction of replacement cost',
    stats: [{ value: '8.2x', label: 'avg. ROI' }, { value: '$38', label: 'avg. CPL' }, { value: '28%', label: 'close rate' }],
  },
  {
    id: 'acrylic',
    label: 'Acrylic',
    icon: 'fa-house',
    title: 'Acrylic Roof Coating Leads',
    tagline: 'The gateway coating for residential homeowners.',
    photo: 'acrylic',
    description: 'Our ad copy focuses on energy savings and cost vs. full replacement — the two things that drive this buyer to take action fast.',
    avgValue: '$3,000–$8,000',
    audience: 'Residential homeowners with flat or low-pitch roofs',
    targeting: 'Home improvement interests, energy efficiency, roof age awareness',
    qualification: 'Roof age, active leak presence, willingness to spend on quality',
    adAngle: 'Save 30% on cooling costs. Stop leaks for good. No full replacement needed.',
    stats: [{ value: '5.4x', label: 'avg. ROI' }, { value: '$32', label: 'avg. CPL' }, { value: '31%', label: 'close rate' }],
  },
  {
    id: 'metal',
    label: 'Metal Roof',
    icon: 'fa-industry',
    title: 'Metal Roof Restoration Leads',
    tagline: 'High-ticket. Low competition. Massive ROI.',
    photo: 'metal',
    description: 'We target industrial and agricultural property owners with messaging around cost savings vs. full replacement — restore it for 25% of the cost.',
    avgValue: '$12,000–$50,000',
    audience: 'Industrial & agricultural property owners',
    targeting: 'Farm/ranch owners, warehouse managers, industrial property interests',
    qualification: 'Metal roof confirmed, square footage 5k+, urgency level, budget range',
    adAngle: 'Restore your metal roof for 25% of replacement cost. 20-year warranty.',
    stats: [{ value: '11.3x', label: 'avg. ROI' }, { value: '$52', label: 'avg. CPL' }, { value: '22%', label: 'close rate' }],
  },
  {
    id: 'tpo',
    label: 'TPO / Flat',
    icon: 'fa-screwdriver-wrench',
    title: 'TPO / Flat Roof Repair Leads',
    tagline: 'Urgency-driven buyers. Immediate demand.',
    photo: 'tpo',
    description: 'TPO and flat roof owners are dealing with leaks, ponding water, and upcoming inspections right now. Our campaigns meet them at the exact moment of need.',
    avgValue: '$5,000–$20,000',
    audience: 'Commercial & multi-family property owners',
    targeting: 'Commercial property managers, multi-family investors, maintenance-focused',
    qualification: 'Flat roof confirmed, active leak or ponding, decision timeline under 30 days',
    adAngle: 'Leaking flat roof? Get it sealed permanently — faster and cheaper than replacement.',
    stats: [{ value: '7.6x', label: 'avg. ROI' }, { value: '$41', label: 'avg. CPL' }, { value: '26%', label: 'close rate' }],
  },
];

export const nicheReasons = [
  { title: 'Niche-Specific Targeting', text: 'Each coating type has its own audience profile, behavioral signals, and ad creative.' },
  { title: 'Custom Ad Copy Per Niche', text: 'Silicone buyers care about longevity. Acrylic buyers care about savings. We write to each.' },
  { title: 'Niche Qualification Funnels', text: 'Our screening questions change per coating type — metal roof, flat roof, square footage, urgency.' },
  { title: 'Proven Playbooks', text: "100+ contractors across all coating types. We've already tested what works — you get the refined version." },
  { title: 'Job-Value Optimized', text: 'We optimize for revenue, not just leads. High-ticket commercial campaigns get different treatment.' },
  { title: 'Same Speed, Any Niche', text: 'Whether silicone or TPO, first lead often within 48 hours. The system is already built.' },
];

export const manufacturers = {
  problems: [
    { icon: 'fa-screwdriver-wrench', title: "Contractors Can't Find Jobs", text: 'New applicators lack marketing budgets and reputation. They sit idle while competitors with bigger names get the calls.' },
    { icon: 'fa-arrow-trend-down', title: 'Your Sales Plateau', text: "If your certified contractors aren't landing jobs, they're not ordering product. Your growth stalls even with a superior coating." },
    { icon: 'fa-building', title: 'Competitors Poach Talent', text: "When applicators can't stay busy with your product, they switch to competitors who offer better contractor support programs." },
  ],
  phases: [
    { title: 'We Generate the Leads', text: 'Our proven Facebook & Google ad system produces 100+ exclusive, pre-qualified roof coating leads per month. AI chatbot qualifies and books appointments automatically.', bullets: ['100+ leads/month', 'AI-powered booking', 'Exclusive territories'], photo: 'step-build' },
    { title: 'Your Contractors Get Booked', text: 'Leads are routed directly to your certified applicators based on service area. Warm, ready-to-buy homeowners — no cold calling.', bullets: ['Direct lead routing', 'Pre-qualified prospects', 'No shared leads'], photo: 'spray' },
    { title: 'You Sell More Product', text: 'Busy contractors order more coating, silicone, and materials. Your revenue grows because your network is thriving.', bullets: ['Higher order volume', 'Contractor loyalty', 'Predictable revenue'], photo: 'silicone' },
  ],
  results: [
    { tag: 'More Volume', title: 'Consistent Pipeline', text: "Your contractors stop chasing work and start choosing jobs. A steady flow of pre-qualified leads means they're never sitting idle — and never slowing down on orders." },
    { tag: 'Faster Ramp', title: 'Faster Growth for New Applicators', text: 'New contractors certified on your product get booked from day one. No reputation needed — we bring the leads, they bring the skill. They ramp faster and order sooner.' },
    { tag: 'Retention', title: 'Contractor Loyalty', text: "When your brand is the reason they're booked solid, they don't switch to a competitor. You become the partner they can't afford to leave." },
  ],
  numbers: [
    { value: '100+', label: 'Leads / Month' },
    { value: '40%', label: 'Lower CPA' },
    { value: '48hrs', label: 'First Lead' },
    { value: '24/7', label: 'AI Booking' },
  ],
};

export const faqs = [
  {
    q: 'How much do pre-qualified roof coating leads cost?',
    a: "Our leads typically cost $30–$60 each, compared to $80–$150 for shared leads on platforms like HomeAdvisor. Because you're the only contractor receiving each lead, your close rate climbs to 20–35%, making your actual cost per closed job $150–$300.",
  },
  {
    q: 'How quickly will I get my first lead?',
    a: 'Most partners receive their first lead within 48 hours of campaign launch. We build and launch your campaign within 24 hours of your strategy audit.',
  },
  {
    q: 'How are the leads pre-qualified?',
    a: 'Every lead goes through our proprietary qualification funnel before reaching you. We screen for property type, roof age, urgency, and budget. Price shoppers and tire kickers are filtered out — you only talk to prospects who are genuinely ready to move forward.',
  },
  {
    q: 'Do I need to sign a long-term contract?',
    a: 'No contracts. You set your budget, you control your spend, and you can pause or adjust anytime. We earn your business month by month.',
  },
  {
    q: 'What types of contractors do you work with?',
    a: 'We specialize exclusively in roof coating and restoration — both commercial (TPO, silicone, acrylic flat roofs) and residential. We do not work with general roofing or replacement contractors.',
  },
];

export const getStarted = {
  agenda: ['Your local market & competition analysis', 'Ideal customer profile for your niche', 'Estimated lead volume & cost per lead', 'Custom campaign blueprint — ready to launch'],
  trust: [
    { title: 'No obligation', text: "You don't owe us anything for showing up." },
    { title: 'No upsell', text: "We're not going to pitch you on a $10k retainer." },
    { title: 'Real intel', text: "You'll leave the call knowing more about your local lead landscape than you did before." },
    { title: 'Fast follow-through', text: 'Most partners receive their campaign blueprint within 24 hours of the audit.' },
  ],
  faqs: [
    { q: 'How do I qualify roofing leads before calling them?', a: 'Our system does the qualification for you. Every lead answers questions about property type, roof age, active issues, and timeline before you see their contact details.' },
    { q: 'What happens after the strategy audit?', a: 'Within 24 hours you receive a custom campaign blueprint showing your target audience, estimated lead volume, and projected cost per lead. If you approve, we launch within the next 24 hours.' },
    { q: 'Is the audit really free?', a: "Yes. No credit card. No commitment. We only do paid work after you've seen your blueprint and decided to move forward." },
    { q: "What if I'm not ready to start immediately?", a: "That's fine. The audit is yours to keep. We've had contractors book campaigns 3 months later because the timing wasn't right at first." },
  ],
};

export const posts = [
  {
    slug: 'facebook-ads-roof-coating-contractors',
    title: 'Facebook Ads for Roof Coating Contractors: How to Generate More Qualified Leads in 2026',
    excerpt: 'Facebook Ads help roof coating contractors generate local leads by combining precise targeting, strong offers, eye-catching creatives, and frictionless lead forms.',
    photo: 'spray',
    category: 'Facebook Ads',
    date: 'April 12, 2026',
    isoDate: '2026-04-12',
    readTime: '8 min read',
    cta: { title: 'Want Us to Run Your Facebook Ads?', text: 'We build and manage Facebook Ad campaigns exclusively for roof coating contractors. 100+ partners. $1,500/month. No contracts.' },
  },
  {
    slug: 'roof-coating-facebook-ads-case-study',
    title: 'How a Roof Coating Contractor Generated Qualified Leads With Facebook Ads',
    excerpt: 'A case study on how we helped a roof coating contractor go from inconsistent referrals to a predictable pipeline of pre-qualified commercial roofing leads using Facebook Ads.',
    photo: 'silicone',
    category: 'Case Study',
    date: 'April 12, 2026',
    isoDate: '2026-04-12',
    readTime: '10 min read',
    cta: { title: 'Want the Same Results?', text: "We build and manage Facebook Ad campaigns exclusively for roof coating contractors. This is the same system we used in this case study — and it's running for 100+ contractors right now." },
  },
];

export const legal = [
  { slug: 'privacy', title: 'Privacy Policy', description: 'Privacy Policy for RoofCoat Leads. Learn how we collect, use, and protect your personal information.' },
  { slug: 'terms', title: 'Terms of Service', description: 'Terms of Service for RoofCoat Leads. Read our terms and conditions for using our lead generation services.' },
  { slug: 'disclaimer', title: 'Disclaimer', description: 'Earnings, results, and testimonial disclaimer for RoofCoat Leads. Results are not guaranteed and individual outcomes vary.' },
];
