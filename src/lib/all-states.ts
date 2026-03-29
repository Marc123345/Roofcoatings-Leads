export interface StateInfo {
  slug: string;
  state: string;
  abbr: string;
  cities: string[];
}

export const allStates: StateInfo[] = [
  { slug: "alabama", state: "Alabama", abbr: "AL", cities: ["Birmingham", "Montgomery", "Huntsville", "Mobile", "Tuscaloosa"] },
  { slug: "alaska", state: "Alaska", abbr: "AK", cities: ["Anchorage", "Fairbanks", "Juneau", "Sitka", "Ketchikan"] },
  { slug: "arizona", state: "Arizona", abbr: "AZ", cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale", "Gilbert", "Glendale", "Tempe", "Peoria", "Surprise"] },
  { slug: "arkansas", state: "Arkansas", abbr: "AR", cities: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro"] },
  { slug: "california", state: "California", abbr: "CA", cities: ["Los Angeles", "San Diego", "San Francisco", "San Jose", "Sacramento", "Fresno", "Long Beach", "Oakland", "Bakersfield", "Riverside"] },
  { slug: "colorado", state: "Colorado", abbr: "CO", cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood"] },
  { slug: "connecticut", state: "Connecticut", abbr: "CT", cities: ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury"] },
  { slug: "delaware", state: "Delaware", abbr: "DE", cities: ["Wilmington", "Dover", "Newark", "Middletown", "Bear"] },
  { slug: "florida", state: "Florida", abbr: "FL", cities: ["Miami", "Tampa", "Orlando", "Jacksonville", "Fort Lauderdale", "St. Petersburg", "Cape Coral", "Tallahassee", "Port St. Lucie", "Pembroke Pines"] },
  { slug: "georgia", state: "Georgia", abbr: "GA", cities: ["Atlanta", "Augusta", "Columbus", "Savannah", "Athens", "Sandy Springs", "Roswell", "Macon", "Johns Creek", "Albany"] },
  { slug: "hawaii", state: "Hawaii", abbr: "HI", cities: ["Honolulu", "Pearl City", "Hilo", "Kailua", "Waipahu"] },
  { slug: "idaho", state: "Idaho", abbr: "ID", cities: ["Boise", "Meridian", "Nampa", "Idaho Falls", "Caldwell"] },
  { slug: "illinois", state: "Illinois", abbr: "IL", cities: ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford"] },
  { slug: "indiana", state: "Indiana", abbr: "IN", cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel"] },
  { slug: "iowa", state: "Iowa", abbr: "IA", cities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City"] },
  { slug: "kansas", state: "Kansas", abbr: "KS", cities: ["Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka"] },
  { slug: "kentucky", state: "Kentucky", abbr: "KY", cities: ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington"] },
  { slug: "louisiana", state: "Louisiana", abbr: "LA", cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles"] },
  { slug: "maine", state: "Maine", abbr: "ME", cities: ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn"] },
  { slug: "maryland", state: "Maryland", abbr: "MD", cities: ["Baltimore", "Columbia", "Germantown", "Silver Spring", "Waldorf"] },
  { slug: "massachusetts", state: "Massachusetts", abbr: "MA", cities: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell"] },
  { slug: "michigan", state: "Michigan", abbr: "MI", cities: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor"] },
  { slug: "minnesota", state: "Minnesota", abbr: "MN", cities: ["Minneapolis", "Saint Paul", "Rochester", "Duluth", "Bloomington"] },
  { slug: "mississippi", state: "Mississippi", abbr: "MS", cities: ["Jackson", "Gulfport", "Southaven", "Hattiesburg", "Biloxi"] },
  { slug: "missouri", state: "Missouri", abbr: "MO", cities: ["Kansas City", "St. Louis", "Springfield", "Columbia", "Independence"] },
  { slug: "montana", state: "Montana", abbr: "MT", cities: ["Billings", "Missoula", "Great Falls", "Bozeman", "Helena"] },
  { slug: "nebraska", state: "Nebraska", abbr: "NE", cities: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney"] },
  { slug: "nevada", state: "Nevada", abbr: "NV", cities: ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks"] },
  { slug: "new-hampshire", state: "New Hampshire", abbr: "NH", cities: ["Manchester", "Nashua", "Concord", "Dover", "Rochester"] },
  { slug: "new-jersey", state: "New Jersey", abbr: "NJ", cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Edison"] },
  { slug: "new-mexico", state: "New Mexico", abbr: "NM", cities: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell"] },
  { slug: "new-york", state: "New York", abbr: "NY", cities: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"] },
  { slug: "north-carolina", state: "North Carolina", abbr: "NC", cities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem"] },
  { slug: "north-dakota", state: "North Dakota", abbr: "ND", cities: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo"] },
  { slug: "ohio", state: "Ohio", abbr: "OH", cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Canton", "Youngstown", "Parma", "Lorain"] },
  { slug: "oklahoma", state: "Oklahoma", abbr: "OK", cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond"] },
  { slug: "oregon", state: "Oregon", abbr: "OR", cities: ["Portland", "Salem", "Eugene", "Gresham", "Hillsboro"] },
  { slug: "pennsylvania", state: "Pennsylvania", abbr: "PA", cities: ["Philadelphia", "Pittsburgh", "Allentown", "Reading", "Erie"] },
  { slug: "rhode-island", state: "Rhode Island", abbr: "RI", cities: ["Providence", "Warwick", "Cranston", "Pawtucket", "East Providence"] },
  { slug: "south-carolina", state: "South Carolina", abbr: "SC", cities: ["Charleston", "Columbia", "North Charleston", "Greenville", "Rock Hill"] },
  { slug: "south-dakota", state: "South Dakota", abbr: "SD", cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown"] },
  { slug: "tennessee", state: "Tennessee", abbr: "TN", cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville"] },
  { slug: "texas", state: "Texas", abbr: "TX", cities: ["Houston", "Dallas", "San Antonio", "Austin", "Fort Worth", "El Paso", "Arlington", "Plano", "Corpus Christi", "Lubbock"] },
  { slug: "utah", state: "Utah", abbr: "UT", cities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem"] },
  { slug: "vermont", state: "Vermont", abbr: "VT", cities: ["Burlington", "South Burlington", "Rutland", "Barre", "Montpelier"] },
  { slug: "virginia", state: "Virginia", abbr: "VA", cities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Arlington"] },
  { slug: "washington", state: "Washington", abbr: "WA", cities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue"] },
  { slug: "west-virginia", state: "West Virginia", abbr: "WV", cities: ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling"] },
  { slug: "wisconsin", state: "Wisconsin", abbr: "WI", cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine"] },
  { slug: "wyoming", state: "Wyoming", abbr: "WY", cities: ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs"] },
];

// The featured states with full data
export const featuredSlugs = ["texas", "florida", "california", "arizona", "ohio", "georgia"];

export function getStateInfo(slug: string): StateInfo | undefined {
  return allStates.find((s) => s.slug === slug);
}
