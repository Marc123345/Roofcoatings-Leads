export interface ServiceArea {
  slug: string;
  state: string;
  abbr: string;
  hero: string;
  climate: string;
  buildingStock: string;
  seasonal: string;
  localInsight: string;
  caseStudy: {
    name: string;
    company: string;
    quote: string;
    stat: string;
    statLabel: string;
  };
  image: string;
  cities: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "texas",
    state: "Texas",
    abbr: "TX",
    hero: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1920&q=80",
    climate: "Extreme heat, UV exposure, and hailstorms make roof coatings essential for Texas property owners. Silicone and acrylic coatings protect against 100°F+ summers and extend roof life by 15+ years.",
    buildingStock: "Texas has one of the largest commercial flat roof inventories in the US — warehouses, strip malls, and office parks across DFW, Houston, San Antonio, and Austin all need coating solutions.",
    seasonal: "Peak season runs March through October. Hail season (April–June) creates urgent demand. Smart contractors ramp up campaigns in February to capture early-season leads.",
    localInsight: "Texas contractors face heavy competition from general roofers on shared lead platforms. Facebook targeting lets you bypass that noise and reach building owners directly — before they search.",
    caseStudy: {
      name: "Mark Thompson",
      company: "Thompson Commercial Coatings",
      quote: "We closed 3 large commercial projects in our first month. The leads were all in our DFW territory — exactly what we asked for.",
      stat: "3",
      statLabel: "commercial jobs in month 1",
    },
    image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=800&q=80",
    cities: ["Houston", "Dallas", "San Antonio", "Austin", "Fort Worth", "El Paso", "Arlington", "Plano", "Corpus Christi", "Lubbock"],
  },
  {
    slug: "florida",
    state: "Florida",
    abbr: "FL",
    hero: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1920&q=80",
    climate: "Florida's combination of intense UV, humidity, hurricanes, and heavy rain makes roof coating the single most cost-effective protection for flat and low-slope roofs.",
    buildingStock: "Millions of commercial and residential flat roofs across Miami, Tampa, Orlando, and Jacksonville. Condo associations, warehouses, and strip malls are prime coating candidates.",
    seasonal: "Year-round demand with spikes after hurricane season (June–November). Post-storm leads convert at 2x normal rates — property owners are motivated and insurance-aware.",
    localInsight: "Florida property owners are highly responsive to Facebook ads about roof protection. The combination of storm anxiety and energy savings messaging drives exceptional CTR and lead quality.",
    caseStudy: {
      name: "Michael Patterson",
      company: "Summit Roof Coatings",
      quote: "Our cost per acquisition dropped by 40%. We booked 3 commercial coating jobs in the first month in the Tampa area alone.",
      stat: "40%",
      statLabel: "lower CPA vs. HomeAdvisor",
    },
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&q=80",
    cities: ["Miami", "Tampa", "Orlando", "Jacksonville", "Fort Lauderdale", "St. Petersburg", "Cape Coral", "Tallahassee", "Port St. Lucie", "Pembroke Pines"],
  },
  {
    slug: "california",
    state: "California",
    abbr: "CA",
    hero: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1920&q=80",
    climate: "California's Title 24 energy codes and intense sun exposure make cool roof coatings a regulatory and practical necessity. Reflective coatings reduce cooling costs by up to 30%.",
    buildingStock: "Massive commercial inventory in LA, Bay Area, and Inland Empire. California leads the nation in energy-efficiency mandates, creating built-in demand for reflective coating solutions.",
    seasonal: "Demand is steady year-round in Southern California. Northern California sees a slight seasonal dip in winter. Energy savings messaging performs exceptionally well statewide.",
    localInsight: "California contractors can charge premium rates due to code compliance requirements. Facebook campaigns targeting Title 24 compliance and energy savings generate the highest-value leads in the country.",
    caseStudy: {
      name: "Robert Garcia",
      company: "RG Commercial Systems",
      quote: "Best investment this year. Cost per acquisition is significantly lower than other platforms — and California leads close at premium rates.",
      stat: "8.2x",
      statLabel: "ROI in first 90 days",
    },
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&q=80",
    cities: ["Los Angeles", "San Diego", "San Francisco", "San Jose", "Sacramento", "Fresno", "Long Beach", "Oakland", "Bakersfield", "Riverside"],
  },
  {
    slug: "arizona",
    state: "Arizona",
    abbr: "AZ",
    hero: "https://images.unsplash.com/photo-1558645836-e44122a743ee?w=1920&q=80",
    climate: "Arizona's extreme desert heat (115°F+ summers) makes reflective roof coatings essential. Property owners see immediate ROI through reduced cooling costs — a powerful selling point.",
    buildingStock: "Phoenix metro alone has thousands of commercial flat roofs baking in the sun. Warehouses, retail centers, and residential flat roofs are all prime candidates for coating.",
    seasonal: "Peak demand runs April through September when cooling costs spike. Smart contractors launch campaigns in March to capture early-season urgency.",
    localInsight: "Arizona property owners respond strongly to energy savings messaging. Facebook ads highlighting 'reduce your cooling bill by 30%' consistently outperform generic roofing ads.",
    caseStudy: {
      name: "Karen Lewis",
      company: "Lewis Roofing & Solar",
      quote: "Our cost per lead dropped by 40% compared to HomeAdvisor. The Arizona market responds incredibly well to the energy savings angle.",
      stat: "$34",
      statLabel: "average cost per lead",
    },
    image: "https://images.unsplash.com/photo-1558645836-e44122a743ee?w=800&q=80",
    cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale", "Gilbert", "Glendale", "Tempe", "Peoria", "Surprise"],
  },
  {
    slug: "ohio",
    state: "Ohio",
    abbr: "OH",
    hero: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1920&q=80",
    climate: "Ohio's freeze-thaw cycles, heavy snow loads, and summer storms accelerate roof deterioration. Coatings provide critical waterproofing and extend roof life through harsh Midwest winters.",
    buildingStock: "Dense commercial inventory in Cleveland, Columbus, and Cincinnati. Manufacturing facilities, warehouses, and aging retail centers make up a significant portion of the coating market.",
    seasonal: "Primary season runs April through October. Fall is the sweet spot — property owners want to seal roofs before winter. Campaign launches in September capture peak urgency.",
    localInsight: "Ohio contractors face less Facebook ad competition than Sun Belt states, which means lower CPAs and higher lead quality. The 'protect before winter' message drives strong conversions.",
    caseStudy: {
      name: "David Chen",
      company: "Citywide Restorations",
      quote: "The pre-qualification process saves my sales team hours every week. Ohio property owners are ready to move fast before winter hits.",
      stat: "22%",
      statLabel: "close rate on pre-qualified leads",
    },
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
    cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Canton", "Youngstown", "Parma", "Lorain"],
  },
  {
    slug: "georgia",
    state: "Georgia",
    abbr: "GA",
    hero: "https://images.unsplash.com/photo-1575917649121-5f515a883a9c?w=1920&q=80",
    climate: "Georgia's hot, humid summers and strong storms create ideal conditions for roof coating. Reflective coatings combat heat while waterproofing seals protect against heavy rainfall.",
    buildingStock: "Atlanta metro's rapid commercial growth means thousands of new and aging flat roofs need coating. Distribution centers, office parks, and multi-family properties are key targets.",
    seasonal: "Year-round demand with peaks in spring and early fall. Storm season creates additional urgency-driven leads. Atlanta's commercial growth fuels consistent pipeline.",
    localInsight: "Georgia contractors benefit from Atlanta's booming commercial sector. Facebook campaigns targeting facility managers in the metro Atlanta area consistently produce high-value commercial leads.",
    caseStudy: {
      name: "James Wilson",
      company: "Wilson & Sons Coatings",
      quote: "We can actually plan our growth quarter to quarter now. The Atlanta market has been incredibly responsive.",
      stat: "5.8x",
      statLabel: "return on ad spend",
    },
    image: "https://images.unsplash.com/photo-1575917649121-5f515a883a9c?w=800&q=80",
    cities: ["Atlanta", "Augusta", "Columbus", "Savannah", "Athens", "Sandy Springs", "Roswell", "Macon", "Johns Creek", "Albany"],
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((sa) => sa.slug === slug);
}
