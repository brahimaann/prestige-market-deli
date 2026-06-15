import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, 
  X, 
  Minus, 
  Plus, 
  Check, 
  Info
} from "lucide-react";

// Modular Subcomponents
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import MenuSection from "./components/MenuSection";
import CateringSection from "./components/CateringSection";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";

// Static emoji-free Database
import { 
  COMPLETE_MENU, 
  CURED_MEATS_DELI, 
  CATERING_PLATTERS, 
  RECIPES, 
  REVIEWS, 
  FAQS 
} from "./data/menuData";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  weight?: number;
  unit?: string;
  category: string;
}

export default function App() {
  // Navigation & Page Routing state
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Sync hash routing on mount/hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#/", "");
      setCurrentPage(hash || "home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // init
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Fulfillment Selector State
  const [fulfillmentMode, setFulfillmentMode] = useState<"pickup" | "delivery">("pickup");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);

  // Deli Counter Slider portion sizes
  const [deliWeights, setDeliWeights] = useState<{ [key: string]: number }>({
    deli_gypsy_bacon: 0.5,
    deli_polish_sausage: 0.5,
    deli_slavic_salo: 0.5,
    deli_salamis: 0.5
  });

  // Cart Drawer State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // B2B Catering Quote State
  const [cateringGuestCount, setCateringGuestCount] = useState(20);
  const [cateringQuantities, setCateringQuantities] = useState<{ [key: string]: number }>({
    cat_celebrity: 2,
    cat_three_three: 3,
    cat_borscht_pot: 0,
    cat_pastry_box: 1
  });
  const [showCateringQuoteModal, setShowCateringQuoteModal] = useState(false);

  // Active Shoppable Recipe Tab
  const [activeRecipeTab, setActiveRecipeTab] = useState<"borscht" | "ube_latte">("borscht");

  // Menu Search and Category State
  const [menuSearchQuery, setMenuSearchQuery] = useState("");
  const [activeMenuCategoryTab, setActiveMenuCategoryTab] = useState<string>("all");

  // Contact Form State
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Auto-planner for catering quantities based on guests
  useEffect(() => {
    const recomCelebrity = Math.ceil(cateringGuestCount / 12);
    const recomThreeThree = Math.ceil(cateringGuestCount / 6);
    
    setCateringQuantities(prev => ({
      ...prev,
      cat_celebrity: recomCelebrity,
      cat_three_three: recomThreeThree,
    }));
  }, [cateringGuestCount]);

  // Routing navigation helper
  const navigateTo = (pageHash: string) => {
    window.location.hash = `#/${pageHash}`;
    setMobileMenuOpen(false);
  };

  // Submit address form for local delivery
  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deliveryAddress.trim()) {
      setAddressError("Please enter a valid address.");
      setAddressSaved(false);
    } else {
      setAddressError("");
      setAddressSaved(true);
    }
  };

  // Contact form submission simulator
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactName("");
      setContactEmail("");
      setContactMessage("");
      setContactSubmitted(false);
      alert("Thank you! Your message has been submitted. Our team will get back to you shortly.");
    }, 1200);
  };

  // Add Item to reservation basket
  const addToCart = (
    id: string, 
    title: string, 
    price: number, 
    category: string, 
    weight?: number, 
    unit?: string, 
    customQty = 1
  ) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id && item.weight === weight);
      if (existing) {
        return prev.map(item => 
          (item.id === id && item.weight === weight) ? { ...item, quantity: item.quantity + customQty } : item
        );
      }
      return [...prev, { id, title, price, quantity: customQty, weight, unit, category }];
    });
    setIsCartOpen(true);
  };

  // Decrease quantity in cart
  const decreaseQuantity = (id: string, weight?: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.weight === weight) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  // Increase quantity in cart
  const increaseQuantity = (id: string, weight?: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.weight === weight) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    }));
  };

  // Cart subtotals
  const getSubtotal = () => {
    return cart.reduce((total, item) => {
      const cost = item.weight ? (item.price * item.weight) : item.price;
      return total + (cost * item.quantity);
    }, 0);
  };

  const subtotal = getSubtotal();
  const deliveryFee = fulfillmentMode === "delivery" ? 7.99 : 0.00;
  const total = subtotal + deliveryFee;

  // Catering quantities adjustments
  const adjustCateringQty = (id: string, delta: number) => {
    setCateringQuantities(prev => {
      const newQty = Math.max(0, (prev[id] || 0) + delta);
      return { ...prev, [id]: newQty };
    });
  };

  const getCateringTotal = () => {
    return CATERING_PLATTERS.reduce((sum, item) => {
      return sum + (item.price * (cateringQuantities[item.id] || 0));
    }, 0);
  };

  const addAllCateringToCart = () => {
    CATERING_PLATTERS.forEach(item => {
      const qty = cateringQuantities[item.id] || 0;
      if (qty > 0) {
        addToCart(item.id, item.title, item.price, "catering", undefined, item.unit, qty);
      }
    });
    setShowCateringQuoteModal(false);
    setIsCartOpen(true);
  };

  // Shoppable recipe helper
  const shopRecipeIngredients = (recipeId: "borscht" | "ube_latte") => {
    const recipe = RECIPES[recipeId];
    recipe.ingredients.forEach(ing => {
      addToCart(ing.id, ing.name, ing.price, "recipe", undefined, "item", 1);
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-bg-dark text-text-light font-sans relative overflow-x-hidden transition-colors duration-200">
      
      {/* Top Specials Scrolling Marquee Banner (Strictly no emojis) */}
      <div className="w-full bg-primary text-bg-dark font-mono py-2 text-xs overflow-hidden relative z-50 border-b border-text-muted/10 font-bold tracking-wider select-none">
        <div className="animate-ticker whitespace-nowrap">
          <span className="px-8">
            Senior Mondays: 10% OFF your purchase (Seniors 62+) &nbsp;&nbsp;&bull;&nbsp;&nbsp; 
            CDL Trucker Special: Free coffee with any $25+ purchase &nbsp;&nbsp;&bull;&nbsp;&nbsp; 
            SNAP and EBT Benefits Accepted &nbsp;&nbsp;&bull;&nbsp;&nbsp; 
            Cleanest Eastern European Grocer and Cafe in Maple Grove, MN &nbsp;&nbsp;&bull;&nbsp;&nbsp; 
            Slavic Comfort Foods and Fresh Cured Meats Daily
          </span>
          <span className="px-8">
            Senior Mondays: 10% OFF your purchase (Seniors 62+) &nbsp;&nbsp;&bull;&nbsp;&nbsp; 
            CDL Trucker Special: Free coffee with any $25+ purchase &nbsp;&nbsp;&bull;&nbsp;&nbsp; 
            SNAP and EBT Benefits Accepted &nbsp;&nbsp;&bull;&nbsp;&nbsp; 
            Cleanest Eastern European Grocer and Cafe in Maple Grove, MN &nbsp;&nbsp;&bull;&nbsp;&nbsp; 
            Slavic Comfort Foods and Fresh Cured Meats Daily
          </span>
        </div>
      </div>

      {/* Reusable Header */}
      <Header 
        currentPage={currentPage}
        cartCount={cartItemCount}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigateTo={navigateTo}
        onCartToggle={() => setIsCartOpen(true)}
      />

      {/* Main Pages Switcher */}
      <main className="min-h-[60vh]">
        <AnimatePresence mode="wait">
          {currentPage === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              <HomeSection 
                navigateTo={navigateTo}
                fulfillmentMode={fulfillmentMode}
                setFulfillmentMode={setFulfillmentMode}
                deliveryAddress={deliveryAddress}
                setDeliveryAddress={setDeliveryAddress}
                addressError={addressError}
                addressSaved={addressSaved}
                setAddressSaved={setAddressSaved}
                handleAddressSubmit={handleAddressSubmit}
                reviews={REVIEWS}
              />
            </motion.div>
          )}

          {currentPage === "menu" && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="container mx-auto px-6 py-12"
            >
              <MenuSection 
                completeMenu={COMPLETE_MENU}
                curedMeats={CURED_MEATS_DELI}
                deliWeights={deliWeights}
                setDeliWeights={setDeliWeights}
                addToCart={addToCart}
                menuSearchQuery={menuSearchQuery}
                setMenuSearchQuery={setMenuSearchQuery}
                activeMenuCategoryTab={activeMenuCategoryTab}
                setActiveMenuCategoryTab={setActiveMenuCategoryTab}
              />
            </motion.div>
          )}

          {currentPage === "catering" && (
            <motion.div
              key="catering"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="container mx-auto px-6 py-12"
            >
              <CateringSection 
                cateringGuestCount={cateringGuestCount}
                setCateringGuestCount={setCateringGuestCount}
                cateringQuantities={cateringQuantities}
                adjustCateringQty={adjustCateringQty}
                getCateringTotal={getCateringTotal}
                addAllCateringToCart={addAllCateringToCart}
                showCateringQuoteModal={showCateringQuoteModal}
                setShowCateringQuoteModal={setShowCateringQuoteModal}
                cateringPlatters={CATERING_PLATTERS}
              />
            </motion.div>
          )}

          {currentPage === "recipes" && (
            <motion.div
              key="recipes"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="container mx-auto px-6 py-12"
            >
              <div className="section-header">
                <span className="subtitle">GOURMET RECIPE BLUEPRINTS</span>
                <h2>Interactive Culinary Guides</h2>
                <p>Recreate traditional Eastern European delicacies at home. Reserve all required organic ingredients with one click.</p>
              </div>

              {/* Recipe selector tabs (strictly no emojis) */}
              <div className="flex justify-center gap-2 mb-10 max-w-xs mx-auto bg-bg-card p-1 rounded-lg border border-text-muted/10">
                <button 
                  onClick={() => setActiveRecipeTab("borscht")}
                  className={`flex-1 py-2 text-xs font-mono font-bold rounded-md transition-all ${
                    activeRecipeTab === "borscht" ? "bg-primary text-bg-dark font-black shadow-sm" : "text-text-muted hover:text-primary"
                  }`}
                >
                  Ukrainian Borscht
                </button>
                <button 
                  onClick={() => setActiveRecipeTab("ube_latte")}
                  className={`flex-1 py-2 text-xs font-mono font-bold rounded-md transition-all ${
                    activeRecipeTab === "ube_latte" ? "bg-primary text-bg-dark font-black shadow-sm" : "text-text-muted hover:text-primary"
                  }`}
                >
                  Coconut Ube Latte
                </button>
              </div>

              {/* Recipe card detail */}
              <div className="bg-bg-card border border-text-muted/10 rounded-2xl max-w-4xl mx-auto overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-5 p-8 border-r border-text-muted/10 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-primary mb-2">{RECIPES[activeRecipeTab].title}</h3>
                    <p className="text-xs text-text-muted leading-relaxed mb-6">{RECIPES[activeRecipeTab].desc}</p>
                    
                    <div className="flex gap-4 text-[10px] font-mono text-text-muted mb-6 bg-bg-dark/50 p-3 rounded-lg border border-text-muted/10 font-bold">
                      <div>Prep: <strong className="text-text-light">{RECIPES[activeRecipeTab].prepTime}</strong></div>
                      <div>Cook: <strong className="text-text-light">{RECIPES[activeRecipeTab].cookTime}</strong></div>
                      <div>Serves: <strong className="text-text-light">{RECIPES[activeRecipeTab].servings}</strong></div>
                    </div>

                    <h4 className="font-mono text-xs uppercase tracking-widest text-text-light border-b border-text-muted/10 pb-2 mb-4 font-bold">Required Ingredients</h4>
                    <ul className="space-y-2.5">
                      {RECIPES[activeRecipeTab].ingredients.map((ing) => (
                        <li key={ing.id} className="flex justify-between items-center text-xs font-mono text-text-light">
                          <span className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-primary" />
                            {ing.name}
                          </span>
                          <span className="text-text-muted font-bold">${ing.price.toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-text-muted/10 pt-6">
                    <div className="flex justify-between items-baseline mb-4">
                      <span className="text-xs font-mono text-text-muted font-bold">Total Package Price:</span>
                      <span className="font-display font-bold text-xl text-primary">
                        ${RECIPES[activeRecipeTab].ingredients.reduce((sum, ing) => sum + ing.price, 0).toFixed(2)}
                      </span>
                    </div>
                    <button 
                      onClick={() => shopRecipeIngredients(activeRecipeTab)}
                      className="w-full bg-primary hover:bg-primary-hover text-bg-dark py-3 rounded-lg text-xs font-mono font-black transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Shop Recipe Ingredients
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7 p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-text-light border-b border-text-muted/10 pb-2 mb-6 font-bold">Culinary Preparation Steps</h4>
                    <ol className="space-y-5">
                      {RECIPES[activeRecipeTab].steps.map((step, idx) => (
                        <li key={idx} className="flex gap-4">
                          <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono text-xs font-bold flex items-center justify-center shrink-0 border border-primary/40">
                            {idx + 1}
                          </span>
                          <p className="text-xs text-text-muted leading-relaxed pt-0.5">{step}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                  
                  <div className="mt-8 border-t border-text-muted/10 pt-6 text-[10px] text-text-muted font-mono leading-normal flex items-start gap-2 font-bold">
                    <Info className="w-4 h-4 text-primary shrink-0" />
                    All recipe ingredients are sourced organic, fresh from local farms or imported directly from Eastern Europe. You will receive them wrapped individually in your collection bag.
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentPage === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="container mx-auto px-6 py-12"
            >
              <AboutSection 
                contactName={contactName}
                setContactName={setContactName}
                contactEmail={contactEmail}
                setContactEmail={setContactEmail}
                contactMessage={contactMessage}
                setContactMessage={setContactMessage}
                contactSubmitted={contactSubmitted}
                handleContactSubmit={handleContactSubmit}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FAQ section rendered only on the Home page (strictly no emojis) */}
      {currentPage === "home" && (
        <FAQSection 
          faqs={FAQS}
          openFaqIndex={openFaqIndex}
          toggleFaq={toggleFaq}
        />
      )}

      {/* Reusable Footer */}
      <Footer navigateTo={navigateTo} />

      {/* Cart Drawer Overlay (no emojis) */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black z-45"
            />
            <motion.aside 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-bg-card border-l border-text-muted/10 z-50 p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex justify-between items-center border-b border-text-muted/10 pb-4 mb-6">
                  <h3 className="font-display font-bold text-lg text-text-light flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-primary" /> Reservation Cart
                  </h3>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="p-1 rounded-lg hover:bg-bg-dark text-text-muted hover:text-text-light transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-12 text-text-muted font-mono text-xs font-bold">
                    Your reservation cart is empty. Browse the deli counter or recipes to fill it.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, idx) => {
                      const cost = item.weight ? (item.price * item.weight) : item.price;
                      return (
                        <div key={idx} className="bg-bg-dark/50 border border-text-muted/10 p-4 rounded-lg flex justify-between items-start gap-4 shadow-sm">
                          <div className="space-y-1">
                            <h4 className="font-display font-bold text-sm text-text-light">{item.title}</h4>
                            <div className="text-[10px] font-mono text-primary font-bold uppercase">
                              {item.weight ? `${item.weight} LB Portion` : "Standard Item"} ({item.category})
                            </div>
                            <div className="text-xs font-mono text-text-muted">
                              ${cost.toFixed(2)} each
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-2 shrink-0">
                            <span className="font-mono text-xs text-text-light font-bold">
                              ${(cost * item.quantity).toFixed(2)}
                            </span>
                            
                            <div className="flex items-center gap-1.5 p-1 bg-bg-card rounded-md border border-text-muted/15 shadow-sm">
                              <button 
                                onClick={() => decreaseQuantity(item.id, item.weight)}
                                className="p-0.5 text-text-muted hover:text-text-light"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="w-5 text-center font-mono text-xs font-bold text-text-light">{item.quantity}</span>
                              <button 
                                onClick={() => increaseQuantity(item.id, item.weight)}
                                className="p-0.5 text-text-muted hover:text-text-light"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t border-text-muted/10 pt-6 mt-8 space-y-4 font-mono text-xs">
                  <div className="space-y-2">
                    <div className="flex justify-between text-text-muted">
                      <span>Subtotal:</span>
                      <span className="text-text-light font-bold">${subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between text-text-muted">
                      <span>Fulfillment:</span>
                      <span className="text-text-light font-bold">
                        {fulfillmentMode === "delivery" ? "Delivery" : "Pickup"}
                      </span>
                    </div>

                    <div className="flex justify-between text-text-muted">
                      <span>Delivery Fee:</span>
                      <span className="text-text-light font-bold">
                        {deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="flex justify-between text-text-light font-bold border-t border-text-muted/10 pt-2 text-sm">
                      <span>Estimated Total:</span>
                      <span className="text-primary font-black">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="bg-bg-dark/65 border border-text-muted/10 p-3 rounded-lg text-[10px] text-text-muted leading-relaxed font-bold">
                    Reservation Mode: You are booking items for direct pickup or local courier. No card is charged now; final weights are audited at pick-up.
                  </div>

                  <button 
                    onClick={() => {
                      alert(`Reservation Successful! Your items have been reserved. A confirmation text has been sent.`);
                      setCart([]);
                      setIsCartOpen(false);
                    }}
                    className="w-full bg-primary hover:bg-primary-hover text-bg-dark py-3 rounded-lg font-black text-center tracking-wider font-mono transition-all uppercase shadow-md"
                  >
                    Confirm Reservation
                  </button>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
