import React from "react";
import { Sparkles, ArrowRight, Clock, Check, Star } from "lucide-react";
import { Marquee } from "./Marquee";
import { TextFadeUp } from "./TextFadeUp";

interface HomeSectionProps {
  navigateTo: (page: string) => void;
  fulfillmentMode: "pickup" | "delivery";
  setFulfillmentMode: (mode: "pickup" | "delivery") => void;
  deliveryAddress: string;
  setDeliveryAddress: (address: string) => void;
  addressError: string;
  addressSaved: boolean;
  setAddressSaved: (saved: boolean) => void;
  handleAddressSubmit: (e: React.FormEvent) => void;
  reviews: Array<{
    author: string;
    text: string;
    stars: number;
    date: string;
  }>;
}

export default function HomeSection({
  navigateTo,
  fulfillmentMode,
  setFulfillmentMode,
  deliveryAddress,
  setDeliveryAddress,
  addressError,
  addressSaved,
  setAddressSaved,
  handleAddressSubmit,
  reviews
}: HomeSectionProps) {
  const phoneFormatted = "(612) 500-9168";
  const phoneRaw = "6125009168";

  return (
    <div className="animate-fade-in">
      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden border-b border-text-muted/10 bg-bg-dark transition-colors duration-200">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 bg-primary-light border border-primary/20 text-primary px-4 py-1.5 rounded-lg text-xs font-mono font-bold mb-6 tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EASTERN EUROPEAN MARKET & CAFE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-bold text-text-light tracking-tight leading-[1.08] mb-6">
              <TextFadeUp text="Where Culinary Heritage Meets Everyday" />
              <span className="text-primary italic font-normal"> Prestige.</span>
            </h1>

            <p className="text-base sm:text-lg text-text-muted mb-8 max-w-lg leading-relaxed">
              Maple Grove's premier European food destination. Savor homestyle recipes, buy fresh pirogies, and explore our fully-stocked specialty grocery market shelves.
            </p>

            {/* Fulfillment Selector Card */}
            <div className="w-full max-w-md bg-bg-card border border-text-muted/10 p-5 rounded-xl shadow-md mb-8">
              <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-3 flex items-center gap-1.5 font-bold">
                <Clock className="w-3.5 h-3.5" /> Fulfillment Mode
              </h3>
              
              <div className="flex gap-2 p-1 bg-bg-dark rounded-lg border border-text-muted/10 mb-4">
                <button
                  onClick={() => { setFulfillmentMode("pickup"); setAddressSaved(false); }}
                  className={`flex-1 py-2 text-xs font-mono font-bold rounded-md transition-all ${
                    fulfillmentMode === "pickup" 
                      ? "bg-primary text-bg-dark font-black shadow-sm" 
                      : "text-text-muted hover:text-text-light"
                  }`}
                >
                  In-Store Pickup
                </button>
                <button
                  onClick={() => setFulfillmentMode("delivery")}
                  className={`flex-1 py-2 text-xs font-mono font-bold rounded-md transition-all ${
                    fulfillmentMode === "delivery" 
                      ? "bg-primary text-bg-dark font-black shadow-sm" 
                      : "text-text-muted hover:text-text-light"
                  }`}
                >
                  Local Delivery ($7.99)
                </button>
              </div>

              {fulfillmentMode === "delivery" ? (
                <form onSubmit={handleAddressSubmit} className="space-y-3">
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Enter delivery address in Maple Grove..."
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="flex-1 bg-bg-dark border border-text-muted/20 rounded-lg px-3.5 py-2 text-xs text-text-light focus:outline-none focus:border-primary transition-colors"
                    />
                    <button 
                      type="submit"
                      className="bg-primary hover:bg-primary-hover text-bg-dark font-mono font-bold text-xs px-4 rounded-lg transition-all"
                    >
                      Confirm
                    </button>
                  </div>
                  {addressError && <p className="text-red-600 text-[10px] font-mono">{addressError}</p>}
                  {addressSaved && (
                    <p className="text-emerald-600 text-[10px] font-mono flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Delivery confirmed!
                    </p>
                  )}
                </form>
              ) : (
                <p className="text-text-muted text-xs font-mono">
                  Address: <strong className="text-text-light">13641 Grove Dr, Maple Grove, MN</strong>. Ready in 20 minutes.
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigateTo("menu")} 
                className="bg-primary hover:bg-primary-hover text-bg-dark flex items-center gap-2 py-3 px-6 rounded-lg font-mono font-bold tracking-wider hover:-translate-y-0.5 transition-all text-xs shadow-sm"
              >
                Order Food & Groceries <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => navigateTo("catering")} 
                className="border border-text-muted/20 hover:border-primary/40 hover:bg-primary-light text-text-light flex items-center gap-2 py-3 px-6 rounded-lg font-mono font-bold tracking-wider hover:-translate-y-0.5 transition-all text-xs"
              >
                Catering Planner
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 rounded-3xl blur-3xl pointer-events-none" />
            
            <div className="col-span-7 aspect-[3/4] rounded-xl overflow-hidden shadow-md relative group border border-text-muted/10">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80" 
                alt="Cozy Cafe Seating Vibe" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent opacity-90" />
              
              <div className="absolute top-4 left-4 bg-primary/90 px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider text-bg-dark flex items-center gap-1.5 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-bg-dark animate-ping" />
                Live Café Space
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[9px] font-mono font-bold text-primary tracking-widest uppercase">The Vibe</span>
                <h3 className="text-text-light font-display font-bold text-xl mt-1 leading-snug">Bright, airy seating with cozy green velvet chairs</h3>
              </div>
            </div>

            <div className="col-span-5 flex flex-col gap-4">
              <div className="aspect-square rounded-xl overflow-hidden shadow-sm relative group border border-text-muted/10">
                <img 
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80" 
                  alt="Authentic Slavic Soups" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-text-light font-display font-semibold text-sm">Authentic Borscht</h4>
                </div>
              </div>

              <div className="aspect-square rounded-xl overflow-hidden shadow-sm relative group border border-text-muted/10">
                <img 
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" 
                  alt="Ube Latte" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-text-light font-display font-semibold text-sm">Ube Lattes</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE SPHERES */}
      <section className="py-24 bg-bg-card/50 border-b border-text-muted/10 transition-colors duration-200">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <span className="subtitle">EXPLORE OUR THREE SPHERES</span>
            <h2>One Destination. Unlimited Culinary Discoveries.</h2>
            <p>From custom cakes to hand-crafted smoked salumi, explore our specialty spaces.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            
            {/* Sphere 1 */}
            <div className="bg-bg-card border border-text-muted/10 p-8 rounded-xl shadow-sm flex flex-col justify-between hover:border-primary/20 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none" />
              <div>
                <h3 className="font-display font-bold text-xl text-text-light mb-4">The Specialty Market</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  Browse beautifully organized shelves stocked with premium imported delicacies, including Ukrainian chocolates, cold-pressed oils, canned wild mushrooms, high-grade buckwheat, and local honey.
                </p>
              </div>
              <button 
                onClick={() => navigateTo("menu")} 
                className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider text-left hover:text-primary-hover transition-colors mt-4"
              >
                Browse Grocery Listings →
              </button>
            </div>

            {/* Sphere 2 */}
            <div className="bg-bg-card border-2 border-primary/30 p-8 rounded-xl shadow-md flex flex-col justify-between relative hover:border-primary/60 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-bg-dark px-3 py-1 rounded-full text-[9px] font-mono font-black tracking-widest uppercase">
                Hot Bar Favorite
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-text-light mb-4">Hot Bar & Meat Counter</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  Our traditional deli counter features award-winning cured meats, premium salamis, and smoked gypsy bacon. In the back, order hot, comforting homestyle Slavic foods made fresh daily.
                </p>
              </div>
              <button 
                onClick={() => navigateTo("menu")} 
                className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider text-left hover:text-primary-hover transition-colors mt-4"
              >
                Order Hot Deli Food →
              </button>
            </div>

            {/* Sphere 3 */}
            <div className="bg-bg-card border border-text-muted/10 p-8 rounded-xl shadow-sm flex flex-col justify-between hover:border-primary/20 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none" />
              <div>
                <h3 className="font-display font-bold text-xl text-text-light mb-4">Cozy Coffee Shop</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  Unwind in our custom-designed cafe seating area. Savor signature ube coconut lattes, artisanal matchas, and fresh espresso beverages alongside authentic European cakes, tarts, and flaky pastries.
                </p>
              </div>
              <button 
                onClick={() => navigateTo("menu")} 
                className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider text-left hover:text-primary-hover transition-colors mt-4"
              >
                Open Cafe Menu →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* YELP ELITE REVIEWS */}
      <section className="py-24 bg-bg-dark border-b border-text-muted/10 overflow-hidden transition-colors duration-200">
        <div className="container mx-auto px-6">
          <div className="section-header mb-10">
            <span className="subtitle">YELP ELITE FEEDBACK</span>
            <h2>What Our Customers Think</h2>
            <p>Real quotes and ratings from local dining and shopping customers in Maple Grove.</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <Marquee direction="left">
            {reviews.slice(0, 3).map((r, i) => (
              <div key={i} className="w-[380px] shrink-0 bg-bg-card border border-text-muted/10 p-8 rounded-xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex text-primary gap-0.5 text-xs">
                      {Array.from({ length: r.stars }).map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-primary stroke-none" />
                      ))}
                    </div>
                    <span className="text-[9px] text-text-muted font-mono font-bold">{r.date}</span>
                  </div>
                  <p className="text-sm italic text-text-light leading-relaxed mb-6">"{r.text}"</p>
                </div>
                <div className="font-mono font-bold text-xs text-primary uppercase tracking-wider border-t border-text-muted/10 pt-4">
                  {r.author}
                </div>
              </div>
            ))}
          </Marquee>

          <Marquee direction="right">
            {reviews.slice(3).map((r, i) => (
              <div key={i} className="w-[380px] shrink-0 bg-bg-card border border-text-muted/10 p-8 rounded-xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex text-primary gap-0.5 text-xs">
                      {Array.from({ length: r.stars }).map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-primary stroke-none" />
                      ))}
                    </div>
                    <span className="text-[9px] text-text-muted font-mono font-bold">{r.date}</span>
                  </div>
                  <p className="text-sm italic text-text-light leading-relaxed mb-6">"{r.text}"</p>
                </div>
                <div className="font-mono font-bold text-xs text-primary uppercase tracking-wider border-t border-text-muted/10 pt-4">
                  {r.author}
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* LOCATION DETAILS */}
      <section className="py-24 bg-bg-card/30 border-b border-text-muted/10 transition-colors duration-200">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="subtitle">VISIT OUR MARKET</span>
              <h2>Visit Us Today</h2>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-8">
                We are conveniently located inside the shared Maple Grove shopping strip mall with ample plaza parking.
              </p>

              <div className="flex flex-col gap-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 text-primary flex items-center justify-center shrink-0 font-bold font-mono">ADR</div>
                  <div>
                    <h5 className="text-[9px] font-mono font-bold text-text-muted uppercase tracking-widest mb-1">Our Address</h5>
                    <p className="text-sm font-bold text-text-light">13641 Grove Dr, Maple Grove, MN 55369</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 text-primary flex items-center justify-center shrink-0 font-bold font-mono">PHN</div>
                  <div>
                    <h5 className="text-[9px] font-mono font-bold text-text-muted uppercase tracking-widest mb-1">Phone Number</h5>
                    <p className="text-sm font-bold text-text-light">
                      <a href={`tel:${phoneRaw}`} className="hover:text-primary transition-colors">{phoneFormatted}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-text-muted/10 p-6 sm:p-8 rounded-lg shadow-sm">
              <h4 className="font-display font-bold text-primary text-base border-b-2 border-primary pb-3 mb-4">
                Operating Hours
              </h4>
              <div className="flex flex-col gap-3 text-xs sm:text-sm font-semibold">
                <div className="flex justify-between">
                  <span className="text-text-muted font-mono font-bold">Monday - Saturday</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between border-t border-text-muted/10 pt-3">
                  <span className="text-text-muted font-mono font-bold">Sunday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-xl shadow-sm overflow-hidden border border-text-muted/10 w-full h-[380px] lg:h-full min-h-[380px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.5935926526147!2d-93.44754582374495!3d45.175112152646695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b338e55e09f5db%3A0xbe9dbb71ab600ee6!2s13641%20Grove%20Dr%2C%20Maple%20Grove%2C%20MN%2055369!5e0!3m2!1sen!2sus!4v1718467451000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Prestige Market & Deli Location Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
