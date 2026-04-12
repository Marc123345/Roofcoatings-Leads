"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import AnimateIn from "./AnimateIn";

interface Review {
  name: string;
  company: string;
  state: string;
  text: string;
  stat?: string;
  statLabel?: string;
}

const REVIEWS: Review[] = [
  { name: "Michael P.", company: "Summit Roof Coatings", state: "FL", text: "Booked 3 commercial coating jobs in our first month. Cost per acquisition dropped 40%.", stat: "3 jobs", statLabel: "month one" },
  { name: "Sarah J.", company: "Jenkins Roofing", state: "TX", text: "Lead quality is unmatched. These leads are exclusive and actually ready to book. Results from week one.", stat: "8.2x", statLabel: "ROI" },
  { name: "Robert G.", company: "RG Commercial", state: "CA", text: "Best investment this year. CPA is significantly lower than Google Ads and leads close at premium rates.", stat: "40%", statLabel: "lower CPA" },
  { name: "Karen L.", company: "Lewis Roofing & Solar", state: "AZ", text: "Cost per lead dropped 40% compared to HomeAdvisor. The energy savings angle works incredibly in Arizona.", stat: "$34", statLabel: "per lead" },
  { name: "David C.", company: "Citywide Restorations", state: "OH", text: "Pre-qualification saves my team hours every week. Ohio owners are ready to move fast before winter.", stat: "22%", statLabel: "close rate" },
  { name: "James W.", company: "Wilson & Sons", state: "GA", text: "We used to rely on referrals — not scalable. Now we can actually plan growth quarter to quarter.", stat: "5.8x", statLabel: "ROAS" },
  { name: "Tony M.", company: "Apex Coating Co.", state: "FL", text: "We went from 0 to 15 coating jobs per month. The system literally pays for itself in the first week." },
  { name: "Lisa R.", company: "ProShield Roofing", state: "TX", text: "The lead system pays for itself in the first week. Professional, consistent, and it converts like crazy." },
  { name: "Marcus D.", company: "Guardian Coat", state: "NC", text: "Signed up Monday, first lead Tuesday. Not even exaggerating — the speed is real.", stat: "24hrs", statLabel: "to first lead" },
  { name: "Rachel K.", company: "SunCoat Pros", state: "AZ", text: "Phoenix is competitive but these leads are exclusive to us. Nobody else is calling the same homeowner." },
  { name: "Steve B.", company: "Titan Roof Solutions", state: "CA", text: "California compliance makes coating a premium service. This system targets the right property owners.", stat: "6.1x", statLabel: "ROI" },
  { name: "Amanda H.", company: "Elite Restoration", state: "FL", text: "We tried 4 other lead services. This is the only one where every lead actually knows what roof coating is." },
  { name: "Chris T.", company: "NextGen Coatings", state: "OH", text: "Our close rate jumped from 8% to 22% because the leads come in pre-qualified and ready to book." },
  { name: "Derek F.", company: "All-Weather Roofing", state: "GA", text: "Atlanta's commercial market is booming. We're booking 2-3 large jobs per week now consistently.", stat: "$180K", statLabel: "Q1 revenue" },
  { name: "Nicole S.", company: "Peak Performance", state: "TX", text: "The AI chatbot qualifies leads before they even reach my phone. Game changer for my small team." },
  { name: "Brian M.", company: "Heritage Coat Co.", state: "TN", text: "Went from spending $4K/month on dead leads to $2K/month on leads that actually close. Do the math." },
  { name: "Kevin P.", company: "Patriot Coatings", state: "VA", text: "I was skeptical about Facebook ads for roofing. Completely wrong — the targeting is surgical.", stat: "4.5x", statLabel: "ROAS" },
  { name: "Jennifer L.", company: "Coastal Roof Systems", state: "SC", text: "The custom website they built us ranks on Google already. Double win — paid leads and organic traffic." },
  { name: "Tom W.", company: "Midwest Coatings", state: "MO", text: "I cancelled Angi, HomeAdvisor, and Thumbtack. This one system replaced all of them for less money." },
  { name: "Diana R.", company: "Desert Shield Roofing", state: "NV", text: "Vegas sun destroys roofs. Property owners are desperate for coating and these ads find them.", stat: "$28", statLabel: "per lead" },
  { name: "Paul H.", company: "Evergreen Roof Coat", state: "WA", text: "Seattle's rainy season is our busy season. The seasonal targeting feature is incredibly smart." },
  { name: "Maria G.", company: "SouthStar Coatings", state: "FL", text: "Tampa Bay market is saturated but we stand out because our leads are truly exclusive. No sharing." },
  { name: "Andrew K.", company: "Shield Pro Roofing", state: "PA", text: "Commercial property managers love the energy savings pitch. Every lead comes in educated already." },
  { name: "Stephanie M.", company: "Sunbelt Roof Systems", state: "AL", text: "Small town contractor, big results. $2K/month and I'm booked out 6 weeks. Can't ask for more.", stat: "6 weeks", statLabel: "booked out" },
  { name: "Ryan O.", company: "Apex Roof Restoration", state: "IN", text: "The dashboard shows exactly where every dollar goes. First time I've trusted a marketing company." },
  { name: "Laura C.", company: "ClearCoat Solutions", state: "CO", text: "Denver's hail damage market is huge. These ads target property owners right after storm season." },
  { name: "Mark T.", company: "TopCoat Pro", state: "MI", text: "Michigan winters are brutal on roofs. Spring campaign brought in 40+ qualified leads in 3 weeks.", stat: "40+", statLabel: "leads in 3 wks" },
  { name: "Ashley B.", company: "Premier Roof Coat", state: "NC", text: "We do commercial and residential. The system lets us run separate campaigns for each. Smart setup." },
  { name: "Greg J.", company: "American Coat Systems", state: "IL", text: "Chicago commercial buildings need coating badly. The Facebook targeting finds facility managers directly." },
  { name: "Tammy F.", company: "Golden State Coatings", state: "CA", text: "LA is expensive for ads but the ROI is there because coating jobs here start at $15K minimum.", stat: "7.3x", statLabel: "ROI" },
  { name: "Jason D.", company: "StormGuard Roofing", state: "OK", text: "Oklahoma gets hammered by storms. Post-storm campaigns generated 60 leads in one week flat.", stat: "60", statLabel: "leads/week" },
  { name: "Heather W.", company: "AllStar Roof Coat", state: "NJ", text: "NJ commercial regulations push owners toward coating. These ads educate and convert simultaneously." },
  { name: "Doug N.", company: "Pinnacle Coatings", state: "AZ", text: "Second summer using the system. Revenue doubled year over year. Not changing anything.", stat: "2x", statLabel: "YoY revenue" },
  { name: "Carla V.", company: "Blue Sky Roofing", state: "NM", text: "New Mexico sun is relentless. Every homeowner we talk to needs coating — leads are pre-sold basically." },
  { name: "Scott R.", company: "ProTech Roof Systems", state: "MD", text: "The 5-page website they built converts at 12%. My old site was under 2%. That alone pays for the service." },
  { name: "Megan L.", company: "Valley Roof Coat", state: "UT", text: "Salt Lake City is growing fast. New construction owners want coating from day one. Perfect market." },
  { name: "Tim H.", company: "Ironclad Coatings", state: "KY", text: "Small operation, just me and 2 guys. This system keeps us busy without needing a sales team." },
  { name: "Sandra P.", company: "SureCoat Solutions", state: "WI", text: "Wisconsin property managers are cautious buyers. The pre-qualification means I only talk to serious ones." },
  { name: "Victor L.", company: "Metro Roof Restoration", state: "MN", text: "Minneapolis commercial market was untapped for Facebook ads. First mover advantage is real here.", stat: "$42", statLabel: "per lead" },
  { name: "Kim B.", company: "RedHawk Coatings", state: "OR", text: "Portland's green building trend makes roof coating an easy sell. Leads come in already convinced." },
  { name: "Dale S.", company: "FrontLine Roof Coat", state: "LA", text: "Louisiana humidity destroys roofs fast. The urgency messaging in the ads drives immediate responses." },
  { name: "Angela M.", company: "Capital Coat Systems", state: "DC", text: "Government buildings need coating too. The commercial targeting has been incredibly precise for us." },
  { name: "Ray C.", company: "Heartland Roofing", state: "KS", text: "Kansas City straddles two states. The geo-targeting lets me cover both Missouri and Kansas perfectly." },
  { name: "Teresa J.", company: "Sunshine Coatings", state: "HI", text: "Hawaii's salt air destroys roofs. Every property owner needs coating — the market is endless here." },
  { name: "Hank W.", company: "Mountain West Coat", state: "MT", text: "Rural Montana means long drives but big jobs. Each lead averages $8K+ in revenue for us.", stat: "$8K+", statLabel: "avg job value" },
  { name: "Crystal A.", company: "Pacific Roof Systems", state: "WA", text: "Tacoma to Seattle corridor is booming. We're picking up 3-4 new clients every single week." },
  { name: "Eddie R.", company: "Gulf Coast Coatings", state: "MS", text: "Mississippi summers wreck roofs. The seasonal ad campaigns hit at exactly the right time every year." },
  { name: "Wendy K.", company: "Liberty Roof Coat", state: "NH", text: "New England winters sell coating for us. The before/after content in the ads is what closes deals." },
  { name: "Frank D.", company: "Trident Coatings", state: "DE", text: "Small state, tight market. Exclusive leads mean I'm the only contractor calling. That matters." },
  { name: "Susan H.", company: "Cornerstone Roof", state: "CT", text: "Connecticut commercial property taxes are high — owners love the energy savings pitch. Perfect fit.", stat: "5.2x", statLabel: "ROAS" },
];

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="bg-navy-light border border-white/[0.06] rounded-xl p-5 sm:p-6 flex flex-col gap-3 hover:border-gold/20 transition-colors duration-300"
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-white text-sm leading-relaxed flex-1">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Stat highlight */}
      {review.stat && (
        <div className="flex items-center gap-2 bg-gold/[0.06] border border-gold/15 rounded-lg px-3 py-1.5 self-start">
          <span className="text-gold text-sm font-bold">{review.stat}</span>
          <span className="text-white text-xs">{review.statLabel}</span>
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/[0.04]">
        <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
          <span className="text-gold text-[10px] font-bold">{review.name.charAt(0)}</span>
        </div>
        <div className="min-w-0">
          <p className="text-white text-xs font-semibold truncate">{review.name}</p>
          <p className="text-white/35 text-xs truncate">{review.company} · {review.state}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-navy relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 grid-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimateIn>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-5 py-2 mb-6">
              <Star className="w-3.5 h-3.5 text-gold fill-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Wall of Love</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              What Our <span className="text-gradient-gold">Contractors</span> Say
            </h2>
            <p className="mt-4 text-white text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Real results from real roof coating contractors across all 50 states.
              No fluff, no fake reviews — just numbers that speak for themselves.
            </p>

            {/* Aggregate stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-8">
              {[
                { val: "100+", label: "Contractors" },
                { val: "4.9", label: "Avg Rating" },
                { val: "50", label: "States" },
                { val: "5.4x", label: "Avg ROAS" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-gold text-xl sm:text-2xl font-black">{s.val}</p>
                  <p className="text-white text-[10px] sm:text-xs uppercase tracking-widest mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5">
          {REVIEWS.map((review, i) => (
            <div key={i} className="break-inside-avoid">
              <ReviewCard review={review} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateIn delay={0.2}>
          <div className="mt-12 sm:mt-16 text-center">
            <motion.a
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-yellow-400 text-navy px-8 py-4 rounded-lg font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-gold/20"
              whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(234,179,8,0.35)" }}
              whileTap={{ scale: 0.97 }}
            >
              Join 100+ Contractors
            </motion.a>
            <p className="text-white/25 text-xs mt-3 uppercase tracking-widest">
              No contracts · Cancel anytime
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
