// TypeScript interfaces for static data
export interface MenuItem {
  id: string;
  title: string;
  price: number;
  badge?: string;
  desc?: string;
}

export interface CuredMeat {
  id: string;
  title: string;
  badge: string;
  price: number;
  unit: string;
  desc: string;
}

export interface CateringPlatter {
  id: string;
  title: string;
  price: number;
  serves: number;
  desc: string;
  unit: string;
}

export interface RecipeIngredient {
  id: string;
  name: string;
  price: number;
}

export interface Recipe {
  id: string;
  title: string;
  desc: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  ingredients: RecipeIngredient[];
  steps: string[];
}

export interface Review {
  author: string;
  text: string;
  stars: number;
  date: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

// Complete menu database grouped by categories (no emojis in texts)
export const COMPLETE_MENU: { [key: string]: MenuItem[] } = {
  combos: [
    {
      id: "menu_combo",
      title: "Combo Meal",
      price: 16.99,
      badge: "Best Value",
      desc: "Sample the best of our menu: 2 entrees + 1 side. A perfect introduction to traditional Slavic home cooking."
    }
  ],
  brunch: [
    {
      id: "menu_eggplant_dip",
      title: "Eggplant Dip",
      price: 15.60,
      badge: "Fresh Dip",
      desc: "Creamy, garlicky house-made eggplant dip served with fresh carrots, celery, and warm grilled pita. A fresh, flavorful snack perfect for sharing."
    }
  ],
  wraps: [
    {
      id: "menu_caesar_wrap",
      title: "Caesar Chicken Wrap",
      price: 10.40,
      desc: "Grilled tender chicken breast, crisp lettuce, parmesan cheese, and Caesar dressing wrapped tightly in a flour tortilla."
    },
    {
      id: "menu_cranberry_wrap",
      title: "Cranberry Chicken Wrap",
      price: 10.40,
      desc: "Grilled chicken, mixed greens, dried sweet cranberries, blue cheese, and sweet poppy seed dressing in a flour tortilla."
    },
    {
      id: "menu_southwest_wrap",
      title: "Southwest Chicken Wrap",
      price: 10.40,
      desc: "Grilled chicken, lettuce, tomato, black beans, corn, and melted cheese in a rich chipotle sauce, wrapped in a flour tortilla."
    },
    {
      id: "menu_shawarma_lula",
      title: "Chicken Lula Kebab Shawarma Wrap",
      price: 14.30,
      badge: "Highly Rated",
      desc: "Juicy ground chicken & herb kebab, fresh tomatoes, white marinated onions, cilantro, fresh parsley, and house special sauce in a toasted lavash bread wrap."
    },
    {
      id: "menu_shawarma_chicken",
      title: "Grilled Chicken Shawarma Wrap",
      price: 14.30,
      desc: "Grilled chicken with fresh cabbage salad, crunchy mildly-spiced Korean carrots, and house special sauce in a toasted lavash bread wrap."
    },
    {
      id: "menu_shawarma_veg",
      title: "Vegetarian Shawarma Wrap",
      price: 13.00,
      desc: "Fresh cabbage, tomatoes, crisp cucumbers, avocado, mildly-spiced Korean carrots, and house garlic sauce in toasted lavash bread."
    }
  ],
  sandwiches: [
    {
      id: "menu_breakfast_blt",
      title: "Breakfast BLT",
      price: 15.60,
      badge: "All Day",
      desc: "Scrambled eggs, crispy bacon, melted cheese, fresh lettuce, tomato, and mayo served on a flaky, warm croissant."
    },
    {
      id: "menu_mortadella_sandwich",
      title: "Russian Mortadella Sandwich",
      price: 15.60,
      desc: "Authentic Russian-style mortadella with dill pickles, lettuce, tomato, cheese, and olive oil mayo on a crusty herbal ciabatta bread."
    },
    {
      id: "menu_salmon_croissant",
      title: "Salmon Croissant Sandwich",
      price: 15.60,
      desc: "Cold-smoked salmon with lettuce, cucumbers, red onion, capers, and aromatic dill cream cheese on a soft croissant."
    },
    {
      id: "menu_veal_sandwich",
      title: "Stuffed Veal Breast Sandwich",
      price: 15.60,
      desc: "Red onion, lettuce, fresh tomatoes, melted cheese, and house garlic mayo served warm on ciabatta bread."
    }
  ],
  soup: [
    {
      id: "menu_borscht_soup",
      title: "Borscht",
      price: 7.80,
      badge: "Classic",
      desc: "Traditional homestyle beet soup loaded with vegetables, served warm with a side of sour cream and fresh dill."
    }
  ],
  salad: [
    {
      id: "menu_arugula_salad",
      title: "Arugula Feta Salad",
      price: 15.60,
      desc: "Peppery arugula with roasted beets, caramelized onions, toasted pistachios, and feta cheese tossed in a balsamic dressing."
    },
    {
      id: "menu_crab_salad",
      title: "Crab Salad",
      price: 13.00,
      desc: "Traditional Russian-style crab salad made with crab, eggs, sweet corn, cucumbers, white rice, and mayonnaise."
    },
    {
      id: "menu_salmon_salad",
      title: "Hot Smoked Salmon Salad",
      price: 19.50,
      desc: "Fresh mixed greens with roasted beets, pickled red onions, radishes, fried capers, and hard-boiled egg in a house-made vinaigrette."
    },
    {
      id: "menu_korean_carrot",
      title: "Korean Carrot Salad",
      price: 13.00,
      desc: "Crisp julienned carrots tossed with fresh garlic, vinegar, oil, and traditional spices. Mildly spicy and sweet."
    },
    {
      id: "menu_olivier",
      title: "Olivier Salad",
      price: 13.00,
      desc: "Famous traditional potato salad with diced bologna, boiled potatoes, carrots, pickles, and green peas in a creamy mayonnaise dressing."
    },
    {
      id: "menu_strawberry_chicken",
      title: "Strawberry Apple Grilled Chicken Salad",
      price: 19.50,
      desc: "Grilled chicken, mixed greens, crisp apples, strawberries, almonds, and house balsamic vinaigrette."
    },
    {
      id: "menu_vinegret",
      title: "Vinegret",
      price: 13.00,
      desc: "Classic beet salad with potatoes, carrots, pickles, and green peas, lightly tossed in sunflower oil dressing."
    }
  ],
  entrees: [
    {
      id: "menu_beef_plov",
      title: "Beef Rice Plov (Pilaf)",
      price: 18.20,
      badge: "Popular",
      desc: "Traditional beef and rice pilaf slow-cooked in a cast iron pot with onions, carrots, and spices, served with a dill pickle."
    },
    {
      id: "menu_beef_stroganoff",
      title: "Beef Stroganoff",
      price: 24.70,
      desc: "Tender beef stroganoff strips simmered in a creamy mushroom sour cream sauce, served over hot mashed potatoes."
    },
    {
      id: "menu_cabbage_rolls",
      title: "Cabbage Rolls",
      price: 20.80,
      desc: "Three hearty cabbage rolls stuffed with chicken and rice, slow-cooked in tomato sauce and served with sour cream."
    },
    {
      id: "menu_cherry_vareniki",
      title: "Cherry Vareniki (Pierogi)",
      price: 22.10,
      desc: "Seven large house-made vareniki filled with sweet-tart sour cherries, served with sweet condensed milk and sour cream."
    },
    {
      id: "menu_chicken_blintzes",
      title: "Chicken Blintzes",
      price: 20.80,
      desc: "Three savory blintzes filled with seasoned ground chicken, served with a rich mushroom cream sauce."
    },
    {
      id: "menu_chicken_kebab",
      title: "Chicken Kebab",
      price: 20.80,
      desc: "Grilled marinated chicken kebab skewers with pickled onions and house red pepper adjika sauce."
    },
    {
      id: "menu_cottage_cheese_blintzes",
      title: "Cottage Cheese Blintzes",
      price: 20.80,
      desc: "Three sweet crepes/blintzes filled with cottage cheese, served warm with berries."
    },
    {
      id: "menu_mushroom_blintzes",
      title: "Mushroom Blintzes",
      price: 20.80,
      desc: "Three tender blintzes stuffed with sautéed wild mushrooms and onions, served with sour cream."
    },
    {
      id: "menu_pelmeni",
      title: "Pelmeni (Dumplings)",
      price: 22.10,
      desc: "Traditional house-made dumplings filled with seasoned ground chicken, served hot with butter and sour cream."
    },
    {
      id: "menu_pork_kebab",
      title: "Pork Kebab",
      price: 20.80,
      desc: "Grilled marinated pork kebab skewers served with pickled sumac onions and red adjika sauce."
    },
    {
      id: "menu_potato_vareniki",
      title: "Potato Vareniki (Pierogi)",
      price: 22.10,
      desc: "Twelve house-made vareniki filled with creamy potato, topped with sautéed bacon bits and onions, served with sour cream."
    },
    {
      id: "menu_syrniki",
      title: "Syrniki (Cottage Cheese Fritters)",
      price: 20.80,
      desc: "Three golden cottage cheese fritters served with sweet condensed milk, sour cream, and fresh berries."
    },
    {
      id: "menu_vareniki_cheese",
      title: "Cottage Cheese Vareniki",
      price: 22.10,
      desc: "Twelve house-made vareniki filled with salted or sweet cottage cheese, served with fresh berries and sour cream."
    }
  ],
  bakery: [
    {
      id: "menu_blueberry_bun",
      title: "Blueberry Bun",
      price: 5.20,
      desc: "House-baked bun with soft, fluffy yeast dough and sweet blueberry jam filling."
    },
    {
      id: "menu_cabbage_pirogi",
      title: "Cabbage Pirogi",
      price: 4.50,
      desc: "Savory baked bun stuffed with sautéed cabbage, sweet carrots, and onions."
    },
    {
      id: "menu_cheburek",
      title: "Cheburek",
      price: 5.20,
      desc: "Crispy, deep-fried turnover pastry filled with juicy seasoned minced chicken."
    },
    {
      id: "menu_cherry_bun",
      title: "Cherry Bun",
      price: 5.20,
      desc: "Soft yeast dough bun loaded with sweet cherry filling and lightly glazed."
    },
    {
      id: "menu_cinnamon_bun",
      title: "Cinnamon Bun",
      price: 5.20,
      desc: "House-made cinnamon bun, soft and fluffy with a rich cinnamon-sugar swirl."
    },
    {
      id: "menu_egg_pirogi",
      title: "Egg & Green Onion Pirogi",
      price: 4.50,
      desc: "Baked yeast pirogi stuffed with hard-boiled eggs and fresh green onions."
    },
    {
      id: "menu_ground_chicken_pirogi",
      title: "Ground Chicken Pirogi",
      price: 5.80,
      desc: "Savory baked yeast pastry stuffed with seasoned ground chicken and onions."
    },
    {
      id: "menu_medovik",
      title: "Medovik (Honey Cake)",
      price: 7.80,
      desc: "Traditional Slavic multi-layered honey cake with soft honey-infused biscuits and sour cream frosting."
    },
    {
      id: "menu_mushroom_pirogi",
      title: "Mushroom Pirogi",
      price: 4.50,
      desc: "Baked savory bun filled with a seasoned wild mushroom and onion mixture."
    },
    {
      id: "menu_napoleon",
      title: "Napoleon Cake",
      price: 9.10,
      desc: "Flaky, multi-layered puff pastry sheets filled with rich, creamy custard-style cream."
    },
    {
      id: "menu_peach_bun",
      title: "Peach Bun",
      price: 5.20,
      desc: "Soft house-baked bun filled with sweet glaze and peach compote."
    },
    {
      id: "menu_poppy_seed_bun",
      title: "Poppy Seed Bun",
      price: 5.20,
      desc: "Soft dough bun rolled with a sweet, rich black poppy seed filling."
    },
    {
      id: "menu_potato_pirogi",
      title: "Potato Pirogi",
      price: 4.50,
      desc: "Soft baked pirogi filled with a seasoned mashed potatoes and onion mixture."
    },
    {
      id: "menu_sochnik",
      title: "Sochnik Pastry",
      price: 5.20,
      desc: "Traditional shortbread pastry filled with sweetened cottage cheese."
    },
    {
      id: "menu_vatrushka",
      title: "Vatrushka Danish",
      price: 5.20,
      desc: "Yeast dough Danish topped with a sweet cottage cheese center."
    }
  ],
  coffee: [
    {
      id: "menu_americano",
      title: "Americano",
      price: 5.20,
      desc: "A classic Americano made with bold espresso and hot water for a full-bodied coffee flavor."
    },
    {
      id: "menu_iced_americano",
      title: "Iced Americano",
      price: 5.20,
      desc: "A refreshing iced Americano made with double espresso shots, cold water, and ice."
    },
    {
      id: "menu_cappuccino",
      title: "Cappuccino",
      price: 7.10,
      desc: "Bold espresso topped with steamed milk and a thick layer of creamy milk foam."
    },
    {
      id: "menu_macchiato",
      title: "Caramel Macchiato",
      price: 7.50,
      desc: "Steamed milk with vanilla syrup, topped with bold espresso and sweet caramel drizzle."
    },
    {
      id: "menu_iced_macchiato",
      title: "Iced Caramel Macchiato",
      price: 7.50,
      desc: "Cold milk with vanilla syrup, espresso shots over ice, finished with caramel drizzle."
    },
    {
      id: "menu_flat_white",
      title: "Flat White",
      price: 7.50,
      desc: "Rich double espresso with velvety steamed milk and a thin layer of microfoam."
    },
    {
      id: "menu_latte",
      title: "Latte",
      price: 7.50,
      desc: "Smooth espresso with steamed milk, lightly topped with microfoam."
    },
    {
      id: "menu_iced_latte",
      title: "Iced Latte",
      price: 7.50,
      desc: "Bold espresso balanced with cold organic milk served over ice."
    },
    {
      id: "menu_mocha",
      title: "Mocha",
      price: 7.50,
      desc: "Bold espresso, velvety steamed milk, and rich dark chocolate sauce."
    },
    {
      id: "menu_iced_mocha",
      title: "Iced Mocha",
      price: 7.50,
      desc: "Espresso, cold milk, and rich chocolate served cold over ice."
    },
    {
      id: "menu_white_mocha",
      title: "White Mocha",
      price: 7.50,
      desc: "Espresso blended with steamed milk and smooth sweet white chocolate."
    },
    {
      id: "menu_iced_white_mocha",
      title: "Iced White Mocha",
      price: 7.50,
      desc: "Espresso, cold milk, and silky white chocolate served cold over ice."
    }
  ],
  sides: [
    {
      id: "menu_braised_cabbage",
      title: "Braised Cabbage",
      price: 6.50,
      desc: "Slow-braised cabbage with carrots and onions, rich and full of homestyle flavor."
    },
    {
      id: "menu_buckwheat",
      title: "Buckwheat with Carrots & Onions",
      price: 6.50,
      desc: "Hearty, aromatic buckwheat cooked with sautéed carrots and onions."
    },
    {
      id: "menu_mashed_potatoes",
      title: "Mashed Potatoes",
      price: 6.50,
      desc: "Fluffy mashed potatoes whipped smooth with real butter and milk."
    },
    {
      id: "menu_pampushki_side",
      title: "Pampushki (2 Garlic Dinner Rolls)",
      price: 6.50,
      desc: "Two freshly baked pampushki dinner rolls brushed with garlic oil and fresh dill."
    },
    {
      id: "menu_roasted_potatoes",
      title: "Roasted Potatoes",
      price: 6.50,
      desc: "Crispy oven-roasted potatoes tossed with vegetable oil, garlic, and dill."
    },
    {
      id: "menu_roasted_veg",
      title: "Roasted Vegetables",
      price: 6.50,
      desc: "Zucchini, eggplant, mushrooms, and bell peppers grilled in olive oil and seasonings."
    }
  ],
  drinks: [
    {
      id: "menu_birch_juice",
      title: "Birch Juice",
      price: 4.50,
      desc: "Light, refreshing birch tree sap juice with a subtle natural sweetness."
    },
    {
      id: "menu_fiji_water",
      title: "Fiji Water (16.9 oz)",
      price: 3.90,
      desc: "Premium natural artesian water bottled at source in Fiji."
    },
    {
      id: "menu_gira_kvas",
      title: "Gira Kvas Can (15.2 oz)",
      price: 3.90,
      desc: "Classic Lithuanian kvas with a mild bread flavor and gentle carbonation."
    },
    {
      id: "menu_kompot",
      title: "Kompot Fruit Drink",
      price: 4.50,
      desc: "A refreshing Eastern European fruit drink made by simmering berries and fruit."
    },
    {
      id: "menu_ochakovo_kvas",
      title: "Ochakovo Kvas Can (15.2 oz)",
      price: 3.90,
      desc: "Classic Russian kvas made from fermented rye bread, lightly sweet and naturally carbonated."
    },
    {
      id: "menu_mojito",
      title: "Ochakovo Lime Mojito Can (15.2 oz)",
      price: 3.90,
      desc: "A bubbly, alcohol-free mojito-style drink with tangy lime and cooling mint."
    }
  ]
};

// Cured Meats Data
export const CURED_MEATS_DELI: CuredMeat[] = [
  {
    id: "deli_gypsy_bacon",
    title: "Smoked Gypsy Bacon",
    badge: "Local Favorite",
    price: 18.99,
    unit: "LB",
    desc: "Double-smoked premium pork belly cured with traditional garlic, peppercorn, and bay leaf. A deli counter favorite.",
  },
  {
    id: "deli_polish_sausage",
    title: "Artisanal Polish Sausage",
    badge: "Imported",
    price: 14.99,
    unit: "LB",
    desc: "Traditional Kielbasa sausage, naturally oak-smoked and spiced with distinct garlic and cracked pepper notes.",
  },
  {
    id: "deli_slavic_salo",
    title: "Traditional Slavic Salo",
    badge: "Delicacy",
    price: 16.99,
    unit: "LB",
    desc: "Cold-cured pork fatback, dry-salted and seasoned with fresh garlic. Melts in your mouth, served sliced paper-thin.",
  },
  {
    id: "deli_salamis",
    title: "Specialty European Salamis",
    badge: "Curated",
    price: 19.99,
    unit: "LB",
    desc: "A wide variety of imported dry-cured sausages from Ukraine, Poland, and Hungary, sliced fresh to order.",
  }
];

// Catering platters Data
export const CATERING_PLATTERS: CateringPlatter[] = [
  {
    id: "cat_celebrity",
    title: "Celebrity Platter",
    price: 110.00,
    serves: 12,
    desc: "12-piece gourmet sandwich platter featuring 4 Dantes, 4 B. Franklins, and 4 Caprese sandwiches, wrapped and labeled.",
    unit: "Platter"
  },
  {
    id: "cat_three_three",
    title: "Three & Three Board",
    price: 40.79,
    serves: 6,
    desc: "Chef's selection of three premium European cheeses and three cured meats, served with fresh grapes, walnuts, and sliced semolina baguette.",
    unit: "Board"
  },
  {
    id: "cat_borscht_pot",
    title: "Family Size Borscht Pot",
    price: 65.00,
    serves: 10,
    desc: "A large hot pot of our traditional Ukrainian Borscht. Includes 10 garlic buns (pampushki) and paper-thin sliced salo.",
    unit: "Pot"
  },
  {
    id: "cat_pastry_box",
    title: "European Pastry Collection",
    price: 45.00,
    serves: 12,
    desc: "A curated collection of freshly baked Slavic poppyseed rolls, honey cakes, apricot tarts, and sweet cheese pastries.",
    unit: "Box"
  }
];

// Shoppable Recipes data
export const RECIPES: { [key: string]: Recipe } = {
  borscht: {
    id: "borscht",
    title: "Traditional Slavic Borscht",
    desc: "Bring the iconic flavor of Prestige's signature hot bar soup to your kitchen. Rich, earthy beets, tender beef chuck, cabbage, and fresh dill.",
    prepTime: "20 mins",
    cookTime: "2 hours",
    servings: "6 servings",
    ingredients: [
      { name: "Fresh Red Beets (Bunch)", price: 4.00, id: "ing_beets" },
      { name: "Premium Bone-in Beef Chuck (1.5 lbs)", price: 14.00, id: "ing_beef" },
      { name: "Fresh Head of Green Cabbage", price: 2.50, id: "ing_cabbage" },
      { name: "Traditional Slavic Salo (0.5 lb)", price: 8.50, id: "ing_salo" },
      { name: "House-baked Pampushki (Garlic Buns)", price: 5.00, id: "ing_buns" }
    ],
    steps: [
      "Simmer the beef chuck with bay leaves, onion, and black peppercorns for 1.5 hours to create a rich, savory broth.",
      "Sauté grated beets, carrots, onions, and tomato paste in a separate pan with butter and a splash of vinegar until caramelized.",
      "Add cubed potatoes and shredded cabbage to the broth, cooking until soft (approx. 15 minutes).",
      "Stir the sautéed beet mixture into the broth. Simmer for 10 minutes, adjust seasoning with salt, sugar, and vinegar.",
      "Finish with fresh crushed garlic and dill. Serve hot with a dollop of sour cream, pampushki, and thin sliced salo."
    ]
  },
  ube_latte: {
    id: "ube_latte",
    title: "Specialty Coconut Ube Latte",
    desc: "Recreate our most popular, colorful cafe beverage. Smooth, sweet ube paired with creamy coconut milk and espresso.",
    prepTime: "5 mins",
    cookTime: "5 mins",
    servings: "1 serving",
    ingredients: [
      { name: "Sweetened Ube Halaya Paste (1 Jar)", price: 6.50, id: "ing_ube" },
      { name: "Organic Coconut Milk Carton", price: 4.00, id: "ing_coconut" },
      { name: "Prestige Espresso Blend Beans (12 oz)", price: 15.00, id: "ing_coffee" }
    ],
    steps: [
      "Warm the ube paste with a teaspoon of hot water until smooth. Spread it along the bottom and lower sides of a tall glass.",
      "Fill the glass with ice cubes, then gently pour the coconut milk over the ice to keep the ube layer separated.",
      "Pull two fresh, hot shots of espresso from your machine.",
      "Gently float the espresso on top of the coconut milk to create a stunning tri-color effect. Stir gently before drinking!"
    ]
  }
};

// Yelp Elite Reviews (strictly no emojis)
export const REVIEWS: Review[] = [
  {
    author: "Janae J. from Minneapolis",
    text: "So many awesome items here from Eastern Europe! The store is beautiful and set out very orderly with a fresh modern approach. Deli sausages and gypsy bacon were delicious!",
    stars: 5,
    date: "Jan 2, 2026"
  },
  {
    author: "Joe B. from Osseo",
    text: "Entering the store, you notice it is very clean. In the back there is a deli with a whole bunch of meats along with hot cabbage rolls, blintzes, and pierogies. Awesome new food!",
    stars: 5,
    date: "Jan 18, 2026"
  },
  {
    author: "Crystal B. from Minneapolis",
    text: "My favorite local coffee shop. Beautiful decor, nice selection of pastries, and pierogies. The coffee is on point! Good food, great atmosphere, super chill.",
    stars: 5,
    date: "Jun 5, 2026"
  },
  {
    author: "Laura K. from Milwaukee",
    text: "Service is A+ and food is excellent! Dinnerware and utensils are classy. Such a lovely spot to dine. Taken out food from their deli which is delicious. Worth a visit!",
    stars: 5,
    date: "Apr 3, 2026"
  },
  {
    author: "Elizabeth K. from Brooklyn Park",
    text: "Perfect spot to shop, relax, drink coffee and knit! Staff is friendly and helpful. True authentic Slavic food, the chicken lula kebab is very flavorful. A hidden gem!",
    stars: 5,
    date: "May 22, 2026"
  },
  {
    author: "Kaylie A. from Fridley",
    text: "Super cute and cozy coffee shop! Service was fast. Latte and matcha were tasty, and the egg and onion pierogi was delicious. Highly recommend!",
    stars: 4,
    date: "Jan 5, 2026"
  }
];

// FAQs Data (strictly no emojis)
export const FAQS: FaqItem[] = [
  {
    q: "What kind of food is served at the hot bar deli?",
    a: "Our hot bar specializes in authentic Slavic and European cooking. You can order fresh hot dishes prepared daily, including traditional borscht (beet soup served with garlic bun and salo), seared pierogies, cabbage rolls, blintzes, chicken schnitzel, eggplant dishes, and chicken lula kebab. Selection varies by day."
  },
  {
    q: "Are there seats available to eat and drink coffee?",
    a: "Yes! We have a beautifully decorated cafe seating section with cozy green velvet chairs and custom overhead lighting. It is a bright, airy, and inviting spot to read a book, relax, enjoy your ube latte, or eat lunch. Please note that we currently do not offer public Wi-Fi or wall outlets."
  },
  {
    q: "Are all items on the market shelves printed in English?",
    a: "Since we stock authentic imported items directly from Ukraine, Russia, Poland, and other Eastern European nations, many of our shelf-stable canned goods and packages feature Cyrillic or native text. Our friendly, helpful staff is always happy to translate and help you find exactly what you need!"
  },
  {
    q: "Do you offer delivery or take-out?",
    a: "We offer full take-out services directly from our hot bar deli and cafe counters. You can purchase fresh salads, specialty cured meats, and hot meals packaged to-go. Delivery is available through select local third-party delivery providers, or directly through our website if you choose local delivery in the fulfillment selector."
  }
];
