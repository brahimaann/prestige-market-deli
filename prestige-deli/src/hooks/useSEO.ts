import { useEffect } from "react";
import { 
  COMPLETE_MENU, 
  CURED_MEATS_DELI, 
  RECIPES, 
  FAQS 
} from "../data/menuData";

interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
}

const PAGE_META_MAP: { [key: string]: PageMeta } = {
  home: {
    title: "Prestige Market & Deli | Modern European Food Maple Grove",
    description: "Prestige Market & Deli offers authentic Slavic hot food, cured meats, and fresh café pastries in Maple Grove. Browse our market today!",
    canonical: "https://prestigemarketdeli.com/",
    ogTitle: "Prestige Market & Deli | Modern European Market & Café",
    ogDescription: "Authentic Slavic hot bar dishes, fresh artisan bakery, imported European items, and specialty coffee in Maple Grove, MN."
  },
  menu: {
    title: "Slavic Delicatessen & Cured Meats Menu | Prestige Market & Deli",
    description: "Browse 60+ authentic European deli favorites in Maple Grove: borscht, pierogies, cabbage rolls, and fresh smoked salo, Polish sausages & salamis.",
    canonical: "https://prestigemarketdeli.com/#/menu",
    ogTitle: "Specialty Slavic & European Deli Menu | Maple Grove, MN",
    ogDescription: "Fresh hot bar combos, savory blintzes, schnitzels, hand-pinched pierogies, and premium smoked cured meats cut to order."
  },
  catering: {
    title: "Event Catering & B2B Platter Quotes | Prestige Market & Deli",
    description: "Order professional European catering platters, hot borscht pots, and artisan pastry boxes. Build and download your custom estimate online.",
    canonical: "https://prestigemarketdeli.com/#/catering",
    ogTitle: "Gourmet European Event Catering & B2B Quotes",
    ogDescription: "Host your next office gathering or family party with traditional Slavic catering platters. Estimate your custom quote today."
  },
  recipes: {
    title: "Interactive Slavic Recipe Guides | Prestige Market & Deli",
    description: "Learn to cook authentic Ukrainian Borscht and specialty Coconut Ube Lattes. Add all premium ingredients directly to your shopping basket.",
    canonical: "https://prestigemarketdeli.com/#/recipes",
    ogTitle: "Cook Slavic Favorites: Interactive Recipe Checklists",
    ogDescription: "Follow step-by-step culinary guides and instantly shop all premium imported ingredients for home cooking."
  },
  about: {
    title: "Our Heritage, Address & Contact | Prestige Market & Deli",
    description: "Learn about our European heritage in Maple Grove, view summer operating hours, and contact our friendly team for questions and feedback.",
    canonical: "https://prestigemarketdeli.com/#/about",
    ogTitle: "Our Slavic Heritage, Location Map & Summer Hours",
    ogDescription: "Discover our family story, view detailed operating hours, and find us in Maple Grove, MN."
  }
};

export default function useSEO(currentPage: string) {
  useEffect(() => {
    const activeKey = PAGE_META_MAP[currentPage] ? currentPage : "home";
    const meta = PAGE_META_MAP[activeKey];

    // 1. Update Title
    document.title = meta.title;

    // 2. Update Meta Description
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", meta.description);

    // 3. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", meta.canonical);

    // 4. Update Open Graph Tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement("meta");
        ogTag.setAttribute("property", property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute("content", content);
    };

    updateOGTag("og:title", meta.ogTitle);
    updateOGTag("og:description", meta.ogDescription);
    updateOGTag("og:url", meta.canonical);
    updateOGTag("og:image", "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&h=630&q=80");

    // 5. Dynamic JSON-LD Structured Data Injection
    let scriptTag = document.getElementById("seo-jsonld");
    if (scriptTag) {
      scriptTag.remove();
    }

    const schemas: any[] = [];

    // LocalBusiness (Common baseline)
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "FoodEstablishment",
      "name": "Prestige Market & Deli",
      "description": "Premium Eastern European market, hot food delicatessen, and café located in Maple Grove, MN.",
      "telephone": "(612) 500-9168",
      "image": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&h=630&q=80",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "13641 Grove Dr",
        "addressLocality": "Maple Grove",
        "addressRegion": "MN",
        "postalCode": "55369",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 45.1011,
        "longitude": -93.4566
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:00",
          "closes": "18:00"
        }
      ],
      "menu": "https://prestigemarketdeli.com/#/menu",
      "servesCuisine": ["Modern European", "Ukrainian", "Russian", "Polish", "Deli", "Café"],
      "priceRange": "$$"
    };
    schemas.push(localBusinessSchema);

    // BreadcrumbList Schema
    const breadcrumbListSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://prestigemarketdeli.com/"
        }
      ]
    };

    if (activeKey !== "home") {
      breadcrumbListSchema.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": activeKey.charAt(0).toUpperCase() + activeKey.slice(1),
        "item": `https://prestigemarketdeli.com/#/${activeKey}`
      });
      schemas.push(breadcrumbListSchema);
    }

    // Page Specific Schemas
    if (activeKey === "home") {
      // FAQPage schema
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      };
      schemas.push(faqSchema);
    } else if (activeKey === "menu") {
      // Products: Inject cured meats and key combos/popular items
      const comboItem = COMPLETE_MENU.combos?.[0];
      if (comboItem) {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": comboItem.title,
          "description": comboItem.desc,
          "offers": {
            "@type": "Offer",
            "price": comboItem.price,
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        });
      }

      CURED_MEATS_DELI.forEach(meat => {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": meat.title,
          "description": meat.desc,
          "offers": {
            "@type": "Offer",
            "price": meat.price,
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": meat.price,
              "priceCurrency": "USD",
              "referenceQuantity": {
                "@type": "QuantitativeValue",
                "value": "1",
                "unitCode": "LBR"
              }
            }
          }
        });
      });
    } else if (activeKey === "recipes") {
      // Recipe Schemas
      Object.keys(RECIPES).forEach(key => {
        const rec = RECIPES[key];
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Recipe",
          "name": rec.title,
          "description": rec.desc,
          "prepTime": rec.id === "borscht" ? "PT20M" : "PT5M",
          "cookTime": rec.id === "borscht" ? "PT2H" : "PT5M",
          "recipeYield": rec.servings,
          "recipeIngredient": rec.ingredients.map(ing => ing.name),
          "recipeInstructions": rec.steps.map(step => ({
            "@type": "HowToStep",
            "text": step
          }))
        });
      });
    }

    // Inject consolidated schemas
    scriptTag = document.createElement("script");
    scriptTag.setAttribute("id", "seo-jsonld");
    scriptTag.setAttribute("type", "application/ld+json");
    scriptTag.textContent = JSON.stringify(schemas, null, 2);
    document.head.appendChild(scriptTag);

  }, [currentPage]);
}
