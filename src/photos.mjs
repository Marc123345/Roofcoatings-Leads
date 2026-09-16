// Photo slots -> files.
// rc/: RoofCoat Leads' own roof coating photos plus the Unsplash images the previous site used.
// pl/photos/: free Pexels/Unsplash images shared with the Paving Leads build (see CREDITS.md there).
const rc = (name) => `/assets/images/rc/${name}.jpg`;
const p = (name) => `/assets/images/pl/photos/${name}.jpg`;

export const photos = {
  hero: rc('hero-bg'),
  spray: rc('spray'),
  silicone: rc('silicone'),
  acrylic: rc('acrylic'),
  metal: rc('metal'),
  tpo: rc('tpo'),
  stepAudit: p('team-computers-night-office'),
  stepBuild: rc('step-build'),
  stepQualify: rc('step-qualify'),
  stepDeliver: rc('spray'),
  analytics: rc('analytics'),
  commercialBuildings: rc('commercial-buildings'),
  usSkyline: rc('us-skyline'),
  office: rc('office'),
  // What's Included hover list
  featureCampaigns: p('facebook-page-call-now-button-dark'),
  featureQualification: p('dark-analytics-dashboard-laptop'),
  featureLeads: p('contractor-yellow-hardhat-texting'),
  featureNotifications: p('booked-calendar-phone-dark'),
  featureScripts: p('contractor-orange-hardhat-phone-plans'),
  aboutPortrait: p('strategist-laptop-dark-studio'),
  aboutSmall: p('laptop-analytics-dashboard-dark'),
  channelSocial: p('hands-scrolling-feed-dark-warm'),
  pageTitleHow: rc('analytics'),
  pageTitleNiche: rc('commercial-buildings'),
  pageTitleManufacturers: rc('silicone'),
  pageTitleAreas: rc('us-skyline'),
  pageTitleStart: rc('office'),
  pageTitleBlog: p('laptop-revenue-dashboard-dark-desk'),
  pageTitleLegal: p('colleagues-late-night-office'),
};

// On the previous site the Georgia photo URL was dead, Arizona showed a cocktail and Ohio showed
// Mumbai's Gateway of India, so those three use roof coating / commercial photos instead.
const stateOverrides = { georgia: 'commercial-buildings', arizona: 'tpo', ohio: 'metal' };
export const statePhoto = (slug) => rc(stateOverrides[slug] || slug);
