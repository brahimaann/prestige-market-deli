import { motion, AnimatePresence } from "framer-motion";
import type { FaqItem } from "../data/menuData";

interface FAQSectionProps {
  faqs: FaqItem[];
  openFaqIndex: number | null;
  toggleFaq: (idx: number) => void;
}

export default function FAQSection({
  faqs,
  openFaqIndex,
  toggleFaq
}: FAQSectionProps) {
  return (
    <section id="faqs" className="py-24 bg-bg-card/30 border-t border-text-muted/10 transition-colors duration-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="section-header">
          <span className="subtitle">COMMON QUESTIONS</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our cafe, imported items, and hot bar deli.</p>
        </div>

        <div className="flex flex-col gap-4 mt-12">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx} 
                className="border border-text-muted/10 rounded-lg overflow-hidden bg-bg-card hover:bg-bg-card-hover transition-all duration-200 shadow-sm"
              >
                <button 
                  className="w-full py-5 px-6 flex justify-between items-center text-left font-display font-bold text-text-light text-base sm:text-lg focus:outline-none"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  <motion.span 
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xl text-primary font-mono font-black"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-text-muted leading-relaxed border-t border-text-muted/10 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
