import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { BorderBeam } from "./BorderBeam";

interface AboutSectionProps {
  contactName: string;
  setContactName: (name: string) => void;
  contactEmail: string;
  setContactEmail: (email: string) => void;
  contactMessage: string;
  setContactMessage: (msg: string) => void;
  contactSubmitted: boolean;
  handleContactSubmit: (e: React.FormEvent) => void;
}

export default function AboutSection({
  contactName,
  setContactName,
  contactEmail,
  setContactEmail,
  contactMessage,
  setContactMessage,
  contactSubmitted,
  handleContactSubmit
}: AboutSectionProps) {
  return (
    <div className="animate-fade-in">
      {/* ABOUT US STORY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 rounded-3xl blur-2xl opacity-75 pointer-events-none" />
          <div className="relative bg-bg-card border border-text-muted/10 p-8 sm:p-10 rounded-xl shadow-md">
            <BorderBeam />
            <h3 className="font-display font-bold text-2xl text-primary mb-6">Welcome to Prestige</h3>
            <p className="italic text-text-light/95 leading-relaxed mb-6 font-medium">
              "Hands down the cleanest and best decorated Eastern European store I have ever seen! The selection of items is amazing, and the cafe side is very cute and inviting."
            </p>
            <div className="font-mono font-bold text-[10px] text-primary uppercase tracking-widest mb-8">— Stacy A., Yelp Elite Reviewer</div>
            
            <div className="grid grid-cols-3 gap-4 border-t border-text-muted/10 pt-6">
              <div className="text-center">
                <span className="block font-display font-bold text-3xl text-primary leading-none mb-1">4.4</span>
                <span className="text-[9px] font-mono font-bold text-text-muted uppercase tracking-widest">Yelp Stars</span>
              </div>
              <div className="text-center">
                <span className="block font-display font-bold text-3xl text-primary leading-none mb-1">100%</span>
                <span className="text-[9px] font-mono font-bold text-text-muted uppercase tracking-widest">Authentic</span>
              </div>
              <div className="text-center">
                <span className="block font-display font-bold text-3xl text-primary leading-none mb-1">11+</span>
                <span className="text-[9px] font-mono font-bold text-text-muted uppercase tracking-widest">Reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="subtitle">OUR DELI HISTORY</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-light tracking-tight leading-tight mb-6">
            A Modern Space Celebrating European Traditions
          </h2>
          <p className="text-text-light leading-relaxed mb-6 font-medium">
            Prestige Market & Deli is Maple Grove's premier neighborhood hub for Eastern European specialty groceries and fresh Slavic comfort foods.
          </p>
          <p className="text-text-muted leading-relaxed mb-8">
            We pride ourselves on offering the cleanest, most beautifully decorated store experience in Minnesota. Whether you are looking to browse shelves stocked with rare Ukrainian, Russian, and Polish favorites, sample premium dry-cured sausages at the deli, or relax with a fresh pastry and espresso in our bright, inviting cafe space with custom lighting, we invite you to browse and stay a while.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 text-primary flex items-center justify-center shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-text-light font-display">Fresh Artisan Breads</h4>
                <p className="text-xs text-text-muted mt-1">Freshly baked traditional European breads prepared daily.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 text-primary flex items-center justify-center shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-text-light font-display">Specialty Tea & Coffee</h4>
                <p className="text-xs text-text-muted mt-1">Carrying premium Lovare tea selections and signature latte recipes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-text-muted/10 pt-16">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="subtitle">GET IN TOUCH</span>
            <h2 className="text-3xl font-display font-bold text-text-light mb-4">Contact Our Staff</h2>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-8 max-w-sm">
              Have questions about special product orders, custom cake baking, or wholesale grocery imports? Send us a message and we'll reply shortly.
            </p>
          </div>

          {/* Flyer-style Operating Hours card (off-white background, no emojis) */}
          <div className="bg-[#FAF6F0] text-[#1A1A1A] p-8 rounded-xl shadow-md flex flex-col items-center border border-[#E8E2D7] relative overflow-hidden max-w-sm w-full">
            {/* Minimal unicode heart icon */}
            <div className="text-[#4D6D3A] text-2xl mb-3">♥</div>
            
            <h3 className="font-display font-black text-2xl uppercase tracking-widest text-[#1A1A1A] mb-4 text-center">
              Summer Hours
            </h3>
            
            <div className="w-12 h-[1px] bg-[#4D6D3A]/30 mb-4" />
            
            <div className="w-full space-y-3 font-brand text-xs uppercase tracking-wider text-center">
              <div>
                <span className="block text-[#4D6D3A] font-bold text-[10px] tracking-widest mb-0.5">Monday to Saturday</span>
                <span className="text-sm font-black font-sans">9:00 AM — 9:00 PM</span>
              </div>
              <div className="w-6 h-[1px] bg-[#4D6D3A]/25 mx-auto" />
              <div>
                <span className="block text-[#4D6D3A] font-bold text-[10px] tracking-widest mb-0.5">Sunday</span>
                <span className="text-sm font-black font-sans">10:00 AM — 6:00 PM</span>
              </div>
            </div>
            
            <div className="w-12 h-[1px] bg-[#4D6D3A]/30 mt-4 mb-3" />
            
            <span className="font-script text-3xl text-[#4D6D3A] select-none">visit us!</span>
          </div>
        </div>

        {/* Form container */}
        <div className="lg:col-span-7 bg-bg-card border border-text-muted/10 p-8 rounded-2xl shadow-sm relative">
          <h3 className="font-display font-bold text-lg text-text-light mb-6">Send A Message</h3>
          
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono text-text-muted uppercase mb-1 font-bold">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Elizabeth K."
                  className="w-full bg-bg-dark border border-text-muted/20 rounded-lg px-3.5 py-2.5 text-xs text-text-light focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-text-muted uppercase mb-1 font-bold">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="elizabeth@example.com"
                  className="w-full bg-bg-dark border border-text-muted/20 rounded-lg px-3.5 py-2.5 text-xs text-text-light focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono text-text-muted uppercase mb-1 font-bold">Message Content</label>
              <textarea 
                required
                rows={5}
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder="Write your message details here..."
                className="w-full bg-bg-dark border border-text-muted/20 rounded-lg px-3.5 py-2.5 text-xs text-text-light focus:outline-none focus:border-primary resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={contactSubmitted}
              className="bg-primary hover:bg-primary-hover text-bg-dark font-mono font-black text-xs px-6 py-3 rounded-lg transition-all flex items-center gap-1.5 hover:-translate-y-0.5 shadow-sm"
            >
              {contactSubmitted ? "Submitting..." : "Send Message"} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
