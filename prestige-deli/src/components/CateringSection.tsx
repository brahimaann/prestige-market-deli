import React from "react";
import { Plus, Minus, Printer, ShoppingBag, Award, X } from "lucide-react";
import Logo from "./Logo";
import type { CateringPlatter } from "../data/menuData";

interface CateringSectionProps {
  cateringGuestCount: number;
  setCateringGuestCount: React.Dispatch<React.SetStateAction<number>>;
  cateringQuantities: { [key: string]: number };
  adjustCateringQty: (id: string, delta: number) => void;
  getCateringTotal: () => number;
  addAllCateringToCart: () => void;
  showCateringQuoteModal: boolean;
  setShowCateringQuoteModal: (show: boolean) => void;
  cateringPlatters: CateringPlatter[];
}

export default function CateringSection({
  cateringGuestCount,
  setCateringGuestCount,
  cateringQuantities,
  adjustCateringQty,
  getCateringTotal,
  addAllCateringToCart,
  showCateringQuoteModal,
  setShowCateringQuoteModal,
  cateringPlatters
}: CateringSectionProps) {
  const phoneFormatted = "(612) 500-9168";

  return (
    <div className="animate-fade-in">
      <div className="section-header">
        <span className="subtitle">CORPORATE LUNCH & PRIVATE EVENTS</span>
        <h2>Bespoke Catering Quote Builder</h2>
        <p>Planning a corporate luncheon or family event? Input guest counts to estimate food quantities and generate a printable quote.</p>
      </div>

      <div className="bg-bg-card border border-text-muted/10 rounded-2xl max-w-5xl mx-auto shadow-sm p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative overflow-hidden transition-colors duration-200">
        
        {/* Catering Left: Setup Guest count and select platters */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h3 className="font-display font-bold text-lg text-text-light mb-2">1. Establish Event Parameters</h3>
            <p className="text-xs text-text-muted mb-4">Provide guest counts to calculate automatically suggested platter quantities.</p>
            
            <div className="flex items-center gap-4 bg-bg-dark/50 border border-text-muted/10 p-4 rounded-xl max-w-xs shadow-sm">
              <span className="text-xs font-mono text-text-muted uppercase shrink-0 font-bold">Guests:</span>
              <button 
                onClick={() => setCateringGuestCount(prev => Math.max(5, prev - 5))}
                className="bg-bg-card border border-text-muted/20 hover:border-primary p-1.5 rounded-lg text-text-light transition-all shadow-sm"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <input 
                type="number"
                value={cateringGuestCount}
                onChange={(e) => setCateringGuestCount(Math.max(5, parseInt(e.target.value) || 5))}
                className="w-16 bg-bg-dark border border-text-muted/20 text-center font-display font-bold text-lg text-primary rounded-lg py-1 focus:outline-none focus:border-primary transition-colors"
              />
              <button 
                onClick={() => setCateringGuestCount(prev => prev + 5)}
                className="bg-bg-card border border-text-muted/20 hover:border-primary p-1.5 rounded-lg text-text-light transition-all shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-text-light">2. Customize Platter Selections</h3>
            <div className="space-y-3">
              {cateringPlatters.map((item) => {
                const qty = cateringQuantities[item.id] || 0;
                return (
                  <div 
                    key={item.id} 
                    className="bg-bg-dark/30 border border-text-muted/10 p-4 rounded-xl flex items-center justify-between gap-4 hover:border-primary/20 transition-all shadow-sm"
                  >
                    <div className="space-y-1">
                      <h4 className="font-display font-bold text-sm text-text-light">{item.title}</h4>
                      <p className="text-[11px] text-text-muted leading-relaxed max-w-md">{item.desc}</p>
                      <div className="text-[10px] font-mono text-primary font-bold">
                        Serves: {item.serves} guests | ${item.price.toFixed(2)} per {item.unit}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button 
                        onClick={() => adjustCateringQty(item.id, -1)}
                        className="bg-bg-card border border-text-muted/20 hover:border-primary p-1 rounded-md text-text-muted hover:text-text-light transition-all"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center font-mono text-xs font-bold text-text-light">{qty}</span>
                      <button 
                        onClick={() => adjustCateringQty(item.id, 1)}
                        className="bg-bg-card border border-text-muted/20 hover:border-primary p-1 rounded-md text-text-muted hover:text-text-light transition-all"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Catering Right: Estimate Quotation */}
        <div className="lg:col-span-5 bg-bg-dark/50 border border-text-muted/10 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none" />
          
          <div>
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-primary font-bold">
              <Award className="w-4 h-4" /> B2B Corporate Planner
            </div>
            
            <h3 className="font-display font-bold text-xl text-text-light mb-1">Catering Quote Summary</h3>
            <p className="text-[10px] font-mono text-text-muted mb-6">Generated instantly based on {cateringGuestCount} guests</p>
            
            <div className="space-y-3 mb-6 border-b border-text-muted/10 pb-6">
              {cateringPlatters.map(item => {
                const qty = cateringQuantities[item.id] || 0;
                if (qty === 0) return null;
                return (
                  <div key={item.id} className="flex justify-between items-center text-xs font-mono">
                    <span className="text-text-muted">{qty}x {item.title}</span>
                    <span className="text-text-light font-bold">${(item.price * qty).toFixed(2)}</span>
                  </div>
                );
              })}
              {getCateringTotal() === 0 && (
                <p className="text-xs text-text-muted italic text-center py-4">No platters selected. Select quantities on the left to begin.</p>
              )}
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between text-text-muted">
                <span>Catering Subtotal:</span>
                <span>${getCateringTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-text-light font-bold border-t border-text-muted/10 pt-2 text-sm">
                <span>Estimated Total:</span>
                <span className="text-primary font-black">${getCateringTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 mt-8">
            <button 
              disabled={getCateringTotal() === 0}
              onClick={() => setShowCateringQuoteModal(true)}
              className="w-full bg-primary hover:bg-primary-hover disabled:bg-primary/20 disabled:text-text-muted/40 disabled:cursor-not-allowed text-bg-dark py-3 rounded-lg text-xs font-mono font-black transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" /> View Printable B2B Quote
            </button>
            <button 
              disabled={getCateringTotal() === 0}
              onClick={addAllCateringToCart}
              className="w-full border border-text-muted/20 hover:border-primary/40 disabled:border-text-muted/10 disabled:text-text-muted/40 disabled:cursor-not-allowed hover:bg-primary-light text-text-light py-2.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-primary" /> Reserve Platters in Cart
            </button>
          </div>
        </div>

      </div>

      {/* B2B Catering Quote Printable Modal */}
      {showCateringQuoteModal && (
        <>
          <div 
            onClick={() => setShowCateringQuoteModal(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-45"
          />
          <div 
            className="fixed inset-x-4 top-10 bottom-10 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full max-w-2xl bg-white text-slate-800 rounded-2xl z-50 p-8 shadow-2xl flex flex-col justify-between overflow-y-auto font-sans"
          >
            <div>
              <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Logo className="w-8 h-8" light={true} />
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 leading-none">Prestige Market & Deli</h3>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mt-1">Catering & Events Division</span>
                  </div>
                </div>
                <button 
                  onClick={() => setShowCateringQuoteModal(false)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6 text-sm">
                {/* Quote header metadata */}
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 pb-4 text-xs font-mono">
                  <div>
                    <span className="block text-slate-400">PREPARED FOR:</span>
                    <strong className="text-slate-800 uppercase">Corporate Event Planner</strong>
                    <span className="block text-slate-500">Estimates for {cateringGuestCount} Guests</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-slate-400">QUOTE DATE:</span>
                    <strong className="text-slate-800">{new Date().toLocaleDateString()}</strong>
                    <span className="block text-slate-500">Valid for 30 Days</span>
                  </div>
                </div>

                {/* Quote Line items */}
                <div>
                  <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">Line-Item Provisions</h4>
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-400 uppercase font-mono">
                        <th className="py-2">Item Description</th>
                        <th className="py-2 text-center">Qty</th>
                        <th className="py-2 text-right">Unit Price</th>
                        <th className="py-2 text-right">Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cateringPlatters.map(item => {
                        const qty = cateringQuantities[item.id] || 0;
                        if (qty === 0) return null;
                        return (
                          <tr key={item.id} className="border-b border-slate-100 text-slate-700">
                            <td className="py-3 font-semibold text-slate-800">
                              {item.title} <span className="text-[10px] text-slate-400 font-normal">({item.desc})</span>
                            </td>
                            <td className="py-3 text-center">{qty}</td>
                            <td className="py-3 text-right">${item.price.toFixed(2)}</td>
                            <td className="py-3 text-right font-bold">${(item.price * qty).toFixed(2)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Totals */}
                <div className="flex flex-col items-end gap-2 border-t border-slate-200 pt-4">
                  <div className="w-64 space-y-1.5 text-xs font-mono">
                    <div className="flex justify-between text-slate-500">
                      <span>Catering Subtotal:</span>
                      <span>${getCateringTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-900 font-bold text-sm border-t border-slate-200 pt-1.5">
                      <span>Grand Total:</span>
                      <span>${getCateringTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-[10px] font-mono text-slate-400">
                Address: Prestige Market & Deli • 13641 Grove Dr, Maple Grove, MN • Call: {phoneFormatted}
              </span>
              
              <div className="flex gap-2 text-xs font-mono">
                <button 
                  onClick={() => window.print()}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-bold transition-all flex items-center gap-1"
                >
                  <Printer className="w-3.5 h-3.5" /> Print Quote
                </button>
                <button 
                  onClick={addAllCateringToCart}
                  className="bg-primary hover:bg-primary-hover text-bg-dark px-4 py-2 rounded-lg font-black transition-all flex items-center gap-1"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Book Provisions
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
