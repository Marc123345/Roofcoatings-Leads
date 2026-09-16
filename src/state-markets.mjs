// Market copy for the service-area pages that don't have hand-written detail
// (src/service-areas.mjs covers the six featured states). Copy is written per climate
// region and filled in with each state's own name and cities. No stats, no testimonials.

const regions = {
  southeast: {
    climate: 'Hot, humid summers, heavy rain and strong storms wear down flat and low-slope roofs fast. Reflective coatings keep buildings cooler, and silicone holds up where water ponds.',
    seasonal: 'Demand runs most of the year, with peaks in spring and early fall. Storm season brings urgent leak calls, so campaigns that are already running catch that demand first.',
  },
  gulf: {
    climate: 'Gulf Coast heat, humidity, hurricanes and heavy rain make leaks and ponding water a constant problem. Coatings seal and reflect in one application, which is why property owners look for them after storms.',
    seasonal: 'Year-round demand with spikes after tropical storms and during the long cooling season. Owners who put off repairs in winter move quickly once spring rain starts.',
  },
  southwest: {
    climate: 'Intense sun, long stretches of triple-digit heat and strong UV break down roof membranes. Reflective coatings are an easy sell because owners feel the cooling cost every summer.',
    seasonal: 'Demand builds in spring and peaks through the hot months. Monsoon storms add a second wave of leak calls in late summer.',
  },
  plains: {
    climate: 'Hail, high wind and big temperature swings between summer and winter crack and loosen roof surfaces. Coatings restore aging roofs without a full tear-off.',
    seasonal: 'Hail season in spring and early summer drives urgent demand. Fall is the second window, when owners want roofs sealed before winter.',
  },
  midwest: {
    climate: 'Freeze-thaw cycles, snow load and summer storms open seams and speed up roof wear. Coatings add a waterproof layer that carries flat roofs through hard winters.',
    seasonal: 'The main season runs spring through fall. Late summer and fall are the sweet spot, when owners want to seal roofs before the first freeze.',
  },
  northeast: {
    climate: 'Cold, snowy winters, freeze-thaw cycles and summer heat put older flat roofs under constant stress. Coatings extend roof life on aging commercial and multi-family buildings without a tear-off.',
    seasonal: 'Most work happens between spring and late fall. Campaigns that start early in spring fill the calendar before the busy season.',
  },
  midAtlantic: {
    climate: 'Humid summers, cold winters and heavy rain from coastal storms test roofs year-round. Reflective and waterproof coatings answer both problems on flat and low-slope roofs.',
    seasonal: 'Spring through fall is the core season, with a push after storm systems move through. Fall campaigns catch owners who want repairs done before winter.',
  },
  mountain: {
    climate: 'High-altitude UV, heavy snow and wide daily temperature swings dry out and crack roof surfaces. Coatings protect against UV and seal against snowmelt.',
    seasonal: 'The coating season is shorter and busier, from late spring to early fall. Getting campaigns live before the season opens matters here.',
  },
  pacificNorthwest: {
    climate: 'Long wet seasons, moss and constant moisture are hard on flat roofs. Waterproof coatings stop leaks and protect against standing water.',
    seasonal: 'The dry months from late spring through early fall are prime coating season. Leak calls pile up during the rainy months, so a full pipeline is ready once it dries out.',
  },
  alaska: {
    climate: 'Extreme cold, heavy snow load and long winters put roofs under severe stress. Coatings help seal and protect roofs during the short working season.',
    seasonal: 'The coating season is short and concentrated in summer. Leads booked in spring decide how full that season gets.',
  },
  tropical: {
    climate: 'Strong year-round sun, salt air and heavy tropical rain break down roofs quickly. Reflective, waterproof coatings protect buildings and cut cooling load.',
    seasonal: 'Demand runs all year, with extra urgency around the rainy season and after tropical storms.',
  },
};

const regionOf = {
  alabama: 'gulf', mississippi: 'gulf', louisiana: 'gulf',
  arkansas: 'southeast', tennessee: 'southeast', 'north-carolina': 'southeast', 'south-carolina': 'southeast', kentucky: 'southeast',
  'new-mexico': 'southwest', nevada: 'southwest', utah: 'southwest',
  oklahoma: 'plains', kansas: 'plains', nebraska: 'plains', 'south-dakota': 'plains', 'north-dakota': 'plains', iowa: 'plains',
  michigan: 'midwest', indiana: 'midwest', illinois: 'midwest', wisconsin: 'midwest', minnesota: 'midwest', missouri: 'midwest',
  'new-york': 'northeast', pennsylvania: 'northeast', 'new-jersey': 'northeast', connecticut: 'northeast', massachusetts: 'northeast',
  'rhode-island': 'northeast', vermont: 'northeast', 'new-hampshire': 'northeast', maine: 'northeast',
  virginia: 'midAtlantic', maryland: 'midAtlantic', delaware: 'midAtlantic', 'west-virginia': 'midAtlantic', 'district-of-columbia': 'midAtlantic',
  colorado: 'mountain', wyoming: 'mountain', montana: 'mountain', idaho: 'mountain',
  washington: 'pacificNorthwest', oregon: 'pacificNorthwest',
  alaska: 'alaska',
  hawaii: 'tropical', 'puerto-rico': 'tropical',
};

export function marketFor(st) {
  const r = regions[regionOf[st.slug]];
  if (!r) throw new Error(`No market region for ${st.slug}`);
  const main = st.cities.slice(0, 3).join(', ');
  return {
    climate: r.climate,
    buildingStock: `Warehouses, retail centers, offices and multi-family buildings around ${main} carry flat and low-slope roofs that are prime candidates for coating, along with residential flat roofs.`,
    seasonal: r.seasonal,
    localInsight: `Most ${st.state} property owners don't search for roof coating until a leak shows up. Facebook targeting reaches building owners and homeowners in your service area before they call a competitor.`,
  };
}
