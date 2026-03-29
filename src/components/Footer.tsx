import Logo from "./Logo";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Results", href: "/results" },
      { label: "Niche Expertise", href: "/niche-expertise" },
      { label: "Get Started", href: "/get-started" },
    ],
  },
  {
    title: "Service Areas",
    links: [
      { label: "Texas", href: "/service-areas/texas" },
      { label: "Florida", href: "/service-areas/florida" },
      { label: "California", href: "/service-areas/california" },
      { label: "Arizona", href: "/service-areas/arizona" },
      { label: "Ohio", href: "/service-areas/ohio" },
      { label: "Georgia", href: "/service-areas/georgia" },
    ],
  },
  {
    title: "Coating Types",
    links: [
      { label: "Commercial Silicone", href: "/niche-expertise" },
      { label: "Acrylic Coatings", href: "/niche-expertise" },
      { label: "Metal Roof Restoration", href: "/niche-expertise" },
      { label: "TPO / Flat Roof", href: "/niche-expertise" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-light border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <Logo size={36} />
              <span className="text-white font-bold text-lg">
                RoofCoat <span className="text-gold">Leads</span>
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs mb-6">
              Pre-qualified lead generation for commercial and residential
              roof coating contractors through proven Facebook Ad campaigns.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href="mailto:marcfriedmancm@roofcoatleads.com" className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors group">
                <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-gold/10 transition-colors shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm break-all">marcfriedmancm@roofcoatleads.com</span>
              </a>
              <a href="/get-started" className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors group">
                <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-gold/10 transition-colors shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm">Book a Free Strategy Audit</span>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/70 hover:text-gold text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Get Started</h3>
            <p className="text-white/80 text-sm mb-4">Free 5-page website + proven lead system for your business.</p>
            <a href="/get-started"
              className="inline-flex items-center bg-gradient-to-r from-gold to-yellow-400 text-navy px-5 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-gold/10 hover:shadow-gold/20 transition-shadow">
              Talk to Marc &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/80 text-xs">
            &copy; {new Date().getFullYear()} RoofCoat Leads. All rights reserved.
          </p>
          <p className="text-white/70 text-xs font-medium">
            Proven System. No Contracts. Just Results.
          </p>
        </div>
      </div>
    </footer>
  );
}
