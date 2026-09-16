// Australian states and territories, served at /service-areas/australia/<slug>.
// Copy follows src/state-markets.mjs: climate and seasons per state, no stats, no testimonials.
// Seasons are southern-hemisphere (summer is December to February).

export const australia = [
  {
    slug: 'new-south-wales', state: 'New South Wales', abbr: 'NSW',
    cities: ['Sydney', 'Newcastle', 'Wollongong', 'Central Coast', 'Coffs Harbour', 'Wagga Wagga'],
    climate: 'Hot, humid summers, strong UV and severe storms with hail along the coast put flat and metal roofs under constant stress. Reflective coatings cut heat load and seal against storm damage.',
    seasonal: 'Spring and summer storm season drives the most urgent calls. Autumn is a strong second window, when owners want roofs sealed before winter rain.',
  },
  {
    slug: 'victoria', state: 'Victoria', abbr: 'VIC',
    cities: ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo', 'Shepparton'],
    climate: 'Changeable weather, cold wet winters and sudden summer heatwaves open seams and wear roof surfaces. Waterproof coatings stop leaks, and reflective coatings handle hot summer spells.',
    seasonal: 'Coating work runs best from spring through autumn. Leak calls pile up over the wet winter months, so a full pipeline is ready for spring.',
  },
  {
    slug: 'queensland', state: 'Queensland', abbr: 'QLD',
    cities: ['Brisbane', 'Gold Coast', 'Sunshine Coast', 'Townsville', 'Cairns', 'Toowoomba'],
    climate: 'Intense UV, tropical heat, heavy wet-season rain and cyclones in the north break roofs down fast. Reflective, waterproof coatings protect buildings and cut cooling costs.',
    seasonal: 'Demand runs year-round, with extra urgency in the summer wet season and after storms and cyclones.',
  },
  {
    slug: 'western-australia', state: 'Western Australia', abbr: 'WA',
    cities: ['Perth', 'Mandurah', 'Bunbury', 'Geraldton', 'Kalgoorlie'],
    climate: 'Long, hot, dry summers and some of the strongest UV in the country dry out and crack roof surfaces. Reflective coatings are an easy sell when cooling bills climb every summer.',
    seasonal: 'Demand builds through spring and peaks over the hot months. Winter rain in the south brings a second wave of leak repairs.',
  },
  {
    slug: 'south-australia', state: 'South Australia', abbr: 'SA',
    cities: ['Adelaide', 'Mount Gambier', 'Whyalla', 'Murray Bridge', 'Port Augusta'],
    climate: 'Hot, dry summers with regular heatwaves and strong UV age roofs quickly. Reflective coatings keep buildings cooler and extend roof life without a replacement.',
    seasonal: 'Spring and early summer are the busiest months, as owners prepare for heatwave season. Autumn catches repairs before winter rain.',
  },
  {
    slug: 'tasmania', state: 'Tasmania', abbr: 'TAS',
    cities: ['Hobart', 'Launceston', 'Devonport', 'Burnie'],
    climate: 'Cool, wet and windy weather keeps moisture on roofs for much of the year. Waterproof coatings seal flat and metal roofs against leaks and standing water.',
    seasonal: 'The drier months from late spring through early autumn are prime coating season. Leak calls from winter set up a busy summer.',
  },
  {
    slug: 'australian-capital-territory', state: 'Australian Capital Territory', abbr: 'ACT',
    cities: ['Canberra', 'Belconnen', 'Tuggeranong', 'Gungahlin', 'Woden'],
    climate: 'Hot summers, frosty winters and big temperature swings expand and contract roof materials, opening seams over time. Coatings seal the roof and protect against summer heat.',
    seasonal: 'Spring through autumn is the main season. Owners look to seal roofs before the frosts return in winter.',
  },
  {
    slug: 'northern-territory', state: 'Northern Territory', abbr: 'NT',
    cities: ['Darwin', 'Alice Springs', 'Palmerston', 'Katherine'],
    climate: 'Tropical heat, monsoon rain and cyclones in the Top End, and extreme desert heat and UV in the centre, are tough on every roof. Reflective, waterproof coatings answer both.',
    seasonal: 'In the Top End, the dry season is when coating work gets done, and wet-season leaks fill the pipeline for it. The centre follows the heat, with demand through the warmer months.',
  },
];

export function australiaMarket(st) {
  const main = st.cities.slice(0, 3).join(', ');
  return {
    climate: st.climate,
    buildingStock: `Warehouses, factories, retail centres and apartment blocks around ${main} carry metal and flat roofs that are prime candidates for coating, along with homes with ageing roofs.`,
    seasonal: st.seasonal,
    localInsight: `Most ${st.state} property owners don't look for roof coating until a leak shows up. Facebook targeting reaches building owners and homeowners in your service area before they call a competitor.`,
  };
}
