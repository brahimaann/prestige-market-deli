import { Phone, ShoppingBag } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  currentPage: string;
  cartCount: number;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  navigateTo: (page: string) => void;
  onCartToggle: () => void;
}

export default function Header({
  currentPage,
  cartCount,
  mobileMenuOpen,
  setMobileMenuOpen,
  navigateTo,
  onCartToggle
}: HeaderProps) {
  const phoneFormatted = "(612) 500-9168";
  const phoneRaw = "6125009168";

  return (
    <header className="sticky top-0 z-40 bg-bg-dark/85 backdrop-blur-md border-b border-text-muted/10 shadow-sm transition-colors duration-200">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <button 
          onClick={() => navigateTo("home")} 
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <Logo className="w-12 h-12 transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-primary leading-none group-hover:text-primary-hover transition-colors">
              Prestige
            </span>
            <span className="text-[9px] font-mono font-bold tracking-widest text-text-muted uppercase mt-1">
              Market & Deli
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 font-mono text-xs uppercase tracking-wider">
          <button 
            onClick={() => navigateTo("home")} 
            className={`transition-colors font-bold ${currentPage === "home" ? "text-primary" : "text-text-muted hover:text-primary"}`}
          >
            Home
          </button>
          <button 
            onClick={() => navigateTo("menu")} 
            className={`transition-colors font-bold ${currentPage === "menu" ? "text-primary" : "text-text-muted hover:text-primary"}`}
          >
            Menu
          </button>
          <button 
            onClick={() => navigateTo("catering")} 
            className={`transition-colors font-bold ${currentPage === "catering" ? "text-primary" : "text-text-muted hover:text-primary"}`}
          >
            Catering
          </button>
          <button 
            onClick={() => navigateTo("recipes")} 
            className={`transition-colors font-bold ${currentPage === "recipes" ? "text-primary" : "text-text-muted hover:text-primary"}`}
          >
            Recipes
          </button>
          <button 
            onClick={() => navigateTo("about")} 
            className={`transition-colors font-bold ${currentPage === "about" ? "text-primary" : "text-text-muted hover:text-primary"}`}
          >
            About & Contact
          </button>
        </nav>

        {/* Right Header Actions */}
        <div className="flex items-center gap-4">
          {/* Call Us Link */}
          <a 
            href={`tel:${phoneRaw}`} 
            className="hidden sm:inline-flex items-center gap-1.5 bg-primary hover:bg-primary-hover text-bg-dark text-xs font-mono font-black py-2 px-4 rounded-lg transition-all shadow-sm hover:-translate-y-0.5"
          >
            <Phone className="w-3.5 h-3.5" /> Call {phoneFormatted}
          </a>

          {/* Cart Trigger Badge */}
          <button 
            onClick={onCartToggle}
            className="relative bg-bg-card border border-text-muted/20 hover:border-primary/45 p-2.5 rounded-lg text-text-light transition-all flex items-center justify-center shadow-sm"
            aria-label="Open Cart"
          >
            <ShoppingBag className="w-5 h-5 text-primary" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-bg-dark shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Nav Button */}
          <button 
            className="lg:hidden text-2xl text-primary font-bold focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-bg-dark border-b border-text-muted/10 overflow-hidden">
          <div className="flex flex-col px-6 py-6 gap-4 font-mono text-xs uppercase tracking-wider">
            <button onClick={() => navigateTo("home")} className="py-2 text-left text-text-muted hover:text-primary font-bold">Home</button>
            <button onClick={() => navigateTo("menu")} className="py-2 text-left text-text-muted hover:text-primary font-bold">Menu</button>
            <button onClick={() => navigateTo("catering")} className="py-2 text-left text-text-muted hover:text-primary font-bold">Catering</button>
            <button onClick={() => navigateTo("recipes")} className="py-2 text-left text-text-muted hover:text-primary font-bold">Recipes</button>
            <button onClick={() => navigateTo("about")} className="py-2 text-left text-text-muted hover:text-primary font-bold">About & Contact</button>
            
            <a 
              href={`tel:${phoneRaw}`} 
              className="bg-primary hover:bg-primary-hover text-bg-dark text-center py-3 rounded-lg font-black text-xs mt-2 transition-colors flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" /> Call {phoneFormatted}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
