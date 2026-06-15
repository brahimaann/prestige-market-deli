import { Info, Search, ShoppingBag, ChevronRight, Award } from "lucide-react";
import type { MenuItem, CuredMeat } from "../data/menuData";

interface MenuSectionProps {
  completeMenu: { [key: string]: MenuItem[] };
  curedMeats: CuredMeat[];
  deliWeights: { [key: string]: number };
  setDeliWeights: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
  addToCart: (id: string, title: string, price: number, category: string, weight?: number, unit?: string) => void;
  menuSearchQuery: string;
  setMenuSearchQuery: (query: string) => void;
  activeMenuCategoryTab: string;
  setActiveMenuCategoryTab: (tab: string) => void;
}

export default function MenuSection({
  completeMenu,
  curedMeats,
  deliWeights,
  setDeliWeights,
  addToCart,
  menuSearchQuery,
  setMenuSearchQuery,
  activeMenuCategoryTab,
  setActiveMenuCategoryTab
}: MenuSectionProps) {
  
  // Category tabs data (completely emoji-free)
  const categoryTabs = [
    { id: "all", label: "All Categories" },
    { id: "combos", label: "Combos" },
    { id: "brunch", label: "Brunch" },
    { id: "wraps", label: "Wraps" },
    { id: "sandwiches", label: "Sandwiches" },
    { id: "soup", label: "Soup" },
    { id: "salad", label: "Salad" },
    { id: "entrees", label: "Entrees" },
    { id: "bakery", label: "Bakery" },
    { id: "coffee", label: "Coffee" },
    { id: "sides", label: "Sides" },
    { id: "drinks", label: "Drinks" }
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="section-header">
        <span className="subtitle">AUTHENTIC EUROPEAN TASTES</span>
        <h2>Prestige Market &amp; Deli Menu</h2>
        <p>Explore our extensive range of fresh wraps, Russian mortadella, hot entrees, home-baked buns, and specialty coffee lattes.</p>
      </div>

      {/* Cured Meats Weight Selection Counter */}
      <div className="bg-bg-card border border-text-muted/10 rounded-2xl p-8 mb-16 shadow-sm">
        <h3 className="font-display font-bold text-xl text-primary mb-2 flex items-center gap-2">
          <Award className="w-5 h-5" /> Fresh Sliced Cured Meats Counter
        </h3>
        <p className="text-xs text-text-muted mb-8 max-w-xl">
          Choose custom portion sizes (in LBs). Our butchers cut, slice, and package these gourmet meats fresh from our case.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {curedMeats.map((item) => {
            const itemWeight = deliWeights[item.id] || 0.5;
            const calculatedPrice = item.price * itemWeight;

            return (
              <div 
                key={item.id} 
                className="bg-bg-dark/40 border border-text-muted/10 p-6 rounded-xl flex flex-col justify-between hover:border-primary/30 transition-all shadow-sm group relative"
              >
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-primary bg-primary-light px-2 py-0.5 rounded uppercase">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-text-muted font-bold">
                      ${item.price} / {item.unit}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-sm text-text-light mb-1">{item.title}</h3>
                  <p className="text-[11px] text-text-muted leading-relaxed mb-4">{item.desc}</p>
                </div>

                <div className="border-t border-text-muted/10 pt-4 space-y-4">
                  <div className="flex justify-between items-center text-[11px] font-mono">
                    <span className="text-text-muted font-bold">Portion Size:</span>
                    <span className="text-primary font-black">{itemWeight} LB</span>
                  </div>

                  <div className="relative flex items-center">
                    <input 
                      type="range" 
                      min="0.25" 
                      max="3" 
                      step="0.25" 
                      value={itemWeight}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        setDeliWeights(prev => ({ ...prev, [item.id]: val }));
                      }}
                      className="w-full h-1 bg-bg-dark rounded-lg appearance-none cursor-pointer accent-primary border border-text-muted/10"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-text-muted uppercase font-bold">Est. Cost</span>
                      <span className="font-display font-bold text-base text-text-light">
                        ${calculatedPrice.toFixed(2)}
                      </span>
                    </div>

                    <div className="group/tooltip relative">
                      <button className="bg-bg-card border border-text-muted/20 p-1.5 rounded-lg text-text-muted hover:text-primary transition-colors flex items-center gap-1 text-[9px] font-mono font-bold">
                        <Info className="w-3 h-3" /> Artisan Scale
                      </button>
                      <div className="absolute right-0 bottom-full mb-2 w-48 bg-bg-card border border-text-muted/15 p-3 rounded-lg shadow-md text-[10px] text-text-muted leading-normal opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-opacity z-20">
                        Cut fresh to order. Final reservation price will be verified on the scale.
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(item.id, item.title, item.price, "deli", itemWeight, "LB")}
                    className="w-full bg-primary hover:bg-primary-hover text-bg-dark py-2.5 rounded-lg text-xs font-mono font-black transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Reserve Slices
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Menu Search and Categories Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-text-muted/10 pb-6">
        
        {/* Category selector (Strictly no emojis) */}
        <div className="flex flex-wrap gap-2">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveMenuCategoryTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeMenuCategoryTab === tab.id 
                  ? "bg-primary text-bg-dark font-black shadow-sm" 
                  : "bg-bg-card border border-text-muted/15 text-text-muted hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search any menu item..."
            value={menuSearchQuery}
            onChange={(e) => setMenuSearchQuery(e.target.value)}
            className="w-full bg-bg-card border border-text-muted/20 rounded-lg pl-10 pr-4 py-2.5 text-xs text-text-light focus:outline-none focus:border-primary transition-colors shadow-sm"
          />
          {menuSearchQuery && (
            <button 
              onClick={() => setMenuSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-light font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="space-y-12">
        {Object.entries(completeMenu).map(([categoryName, items]) => {
          // Filter by category selection
          if (activeMenuCategoryTab !== "all" && activeMenuCategoryTab !== categoryName) return null;

          // Filter by search query
          const filteredItems = items.filter(item => 
            item.title.toLowerCase().includes(menuSearchQuery.toLowerCase()) || 
            (item.desc && item.desc.toLowerCase().includes(menuSearchQuery.toLowerCase()))
          );

          if (filteredItems.length === 0) return null;

          // Clean display category title (strictly emoji-free)
          const displayCategory = categoryName === "combos" ? "Combo Meals" : categoryName;

          return (
            <div key={categoryName} className="space-y-4">
              <h3 className="font-display font-black text-xl text-primary border-b border-text-muted/10 pb-2 uppercase tracking-wide">
                {displayCategory}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map(item => (
                  <div 
                    key={item.id} 
                    className="bg-bg-card border border-text-muted/10 p-6 rounded-xl flex flex-col justify-between hover:border-primary/25 transition-all group shadow-sm"
                  >
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-display font-bold text-base text-text-light flex items-center gap-2">
                          {item.title}
                          {item.badge && (
                            <span className="text-[8px] font-mono font-bold tracking-widest text-primary bg-primary-light px-2 py-0.5 rounded uppercase">
                              {item.badge}
                            </span>
                          )}
                        </h4>
                        <span className="text-xs font-mono font-bold text-primary">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      {item.desc && <p className="text-xs text-text-muted leading-relaxed mb-4">{item.desc}</p>}
                    </div>
                    
                    <button
                      onClick={() => addToCart(item.id, item.title, item.price, categoryName, undefined, "item")}
                      className="self-start text-[10px] font-mono font-black text-primary group-hover:text-primary-hover transition-colors flex items-center gap-1 mt-2"
                    >
                      + Add to Reservation <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* No search results fallback */}
        {activeMenuCategoryTab === "all" && 
         Object.values(completeMenu).flat().filter(item => 
           item.title.toLowerCase().includes(menuSearchQuery.toLowerCase())
         ).length === 0 && (
          <div className="text-center py-16 text-text-muted font-mono text-xs font-bold">
            No menu items found matching "{menuSearchQuery}". Please try another search term.
          </div>
        )}
      </div>
    </div>
  );
}
