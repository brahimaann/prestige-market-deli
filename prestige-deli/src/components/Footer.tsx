import Logo from "./Logo";

interface FooterProps {
  navigateTo: (page: string) => void;
}

export default function Footer({ navigateTo }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const phoneFormatted = "(612) 500-9168";
  const phoneRaw = "6125009168";

  return (
    <footer className="bg-bg-dark border-t border-text-muted/10 pt-20 pb-16 text-text-light relative overflow-hidden transition-colors duration-200">
      {/* Background design accents */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-accent/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16 relative z-10">
        
        {/* Column 1: Branding and Credentials */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Logo className="w-14 h-14 shrink-0 transition-transform duration-500 hover:rotate-12" light={true} />
            <div className="flex flex-col">
              <span className="font-display text-base font-bold tracking-tight text-primary leading-none">
                Prestige
              </span>
              <span className="text-[9px] font-mono font-bold tracking-widest text-text-muted uppercase mt-0.5">
                Market & Deli
              </span>
            </div>
          </div>
          <p className="text-xs text-text-muted leading-relaxed">
            Maple Grove's premium destination for authentic Eastern European groceries, hot Slavic comfort foods, and a cozy cafe space.
          </p>
          {/* Benefits credentials (no emojis) */}
          <div className="space-y-2 pt-1.5">
            <div className="inline-flex items-center gap-1.5 bg-primary-light border border-primary/20 text-primary px-3 py-1 rounded text-[9px] font-mono font-bold tracking-wider uppercase">
              EBT and SNAP Accepted
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-text-muted font-mono">
              <span>Visa</span> • <span>MC</span> • <span>Amex</span> • <span>Apple Pay</span>
            </div>
          </div>
        </div>

        {/* Column 2: Hours & Location (no emojis) */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-sm text-primary tracking-wide uppercase border-b border-text-muted/10 pb-2">
            Location & Hours
          </h4>
          <div className="space-y-3 text-xs text-text-muted">
            <p className="leading-relaxed text-text-light font-medium">
              <a 
                href="https://maps.google.com/?q=Prestige+Market+Deli+13641+Grove+Dr+Maple+Grove+MN+55369" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
              >
                13641 Grove Dr,<br/>
                Maple Grove, MN 55369
              </a>
            </p>
            <p className="font-mono text-text-light font-bold">
              Call: <a href={`tel:${phoneRaw}`} className="hover:text-primary transition-colors">{phoneFormatted}</a>
            </p>
            <div className="w-full space-y-1.5 font-mono pt-1">
              <div className="flex justify-between">
                <span>Mon - Sat:</span>
                <span className="text-text-light font-bold">9 AM - 9 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-text-light font-bold">10 AM - 6 PM</span>
              </div>
            </div>
            <div className="pt-1">
              <span className="font-script text-2xl text-primary select-none">visit us!</span>
            </div>
          </div>
        </div>

        {/* Column 3: Specials & Programs (no emojis) */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-sm text-primary tracking-wide uppercase border-b border-text-muted/10 pb-2">
            Weekly Specials
          </h4>
          <div className="space-y-4 text-xs">
            <div className="bg-bg-card border border-text-muted/10 p-3 rounded-lg shadow-sm">
              <h5 className="font-display font-bold text-primary mb-1">
                Senior Mondays
              </h5>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Every <strong>Monday</strong>, get <strong className="text-primary font-bold">10% OFF</strong> your purchase. (Seniors 62+, valid ID required)
              </p>
            </div>
            <div className="bg-bg-card border border-text-muted/10 p-3 rounded-lg shadow-sm">
              <h5 className="font-display font-bold text-primary mb-1">
                CDL Trucker Special
              </h5>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Show valid Commercial Driver's License (CDL) for a <strong className="text-primary font-bold">free coffee</strong> with any $25+ purchase. Easy truck parking!
              </p>
            </div>
          </div>
        </div>

        {/* Column 4: Links & Socials (no emojis) */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-sm text-primary tracking-wide uppercase border-b border-text-muted/10 pb-2">
            Links & Connect
          </h4>
          <div className="space-y-5">
            <ul className="text-xs font-mono uppercase tracking-wider flex flex-col gap-2.5">
              <li><button onClick={() => navigateTo("home")} className="text-text-muted hover:text-primary transition-colors text-left">Home Page</button></li>
              <li><button onClick={() => navigateTo("menu")} className="text-text-muted hover:text-primary transition-colors text-left">Specialty Menu</button></li>
              <li><button onClick={() => navigateTo("catering")} className="text-text-muted hover:text-primary transition-colors text-left">B2B Catering</button></li>
              <li><button onClick={() => navigateTo("recipes")} className="text-text-muted hover:text-primary transition-colors text-left">Our Recipes</button></li>
              <li><button onClick={() => navigateTo("about")} className="text-text-muted hover:text-primary transition-colors text-left">About & Contact</button></li>
            </ul>
            
            <div className="pt-2">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2.5">Follow Our Feeds</span>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=61574521868137" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 bg-bg-card border border-text-muted/20 hover:border-primary hover:bg-primary-light text-text-light hover:text-primary px-3 py-2 rounded-lg text-xs font-mono transition-all font-bold group shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                  </svg>
                  Facebook
                </a>
                <a 
                  href="https://www.instagram.com/prestigemarketdeli/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 bg-bg-card border border-text-muted/20 hover:border-primary hover:bg-primary-light text-text-light hover:text-primary px-3 py-2 rounded-lg text-xs font-mono transition-all font-bold group shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 border-t border-text-muted/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-text-muted font-mono uppercase tracking-widest text-center sm:text-left">
        <p>&copy; {currentYear} Prestige Market &amp; Deli. All rights reserved.</p>
        <p>Cleanest Eastern European Grocer in Maple Grove, MN</p>
      </div>
    </footer>
  );
}
