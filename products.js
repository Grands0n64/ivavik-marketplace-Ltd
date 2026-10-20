// IVAVIK MARKETPLACE LTD - LOCALIZED 500+ CATALOGUE SEED
const categories = ["Food Stuffs", "Gadgets", "Sport Stuffs", "School Stuffs", "House Materials"];
const brands = ["Ivavik Premium", "Dangote", "Golden Penny", "Samsung", "Oraimo", "Sony", "Nike", "Adidas", "Cway", "Scanfrost"];

const itemTypes = {
  "Food Stuffs": ["Bag of Rice (50kg)", "Carton of Indomie", "Gallon of Vegetable Oil", "Yam Tuber Tub", "Bag of Garri", "Pack of Spaghetti"],
  "Gadgets": ["Smart Phone 128GB", "Core i5 Slim Laptop", "Wireless Bluetooth Earbuds", "Fast Charging Power Bank", "43-inch Smart TV"],
  "Sport Stuffs": ["Leather Football", "Training Tracksuit", "Running Sneakers", "Gym Dumbbell Set", "Agility Training Cones"],
  "School Stuffs": ["Waterproof Backpack", "Hardcover Notebook Pack", "Mathematical Set", "Scientific Calculator", "Desk Organizer Box"],
  "House Materials": ["Rechargeable Standing Fan", "Electric Blender", "LED Energy Saving Bulb", "Smart Door Lock", "Microwave Oven"]
};

// Premium Unsplash images matching your exact departments
const imagePool = {
  "Food Stuffs": "https://unsplash.com",
  "Gadgets": "https://unsplash.com",
  "Sport Stuffs": "https://unsplash.com",
  "School Stuffs": "https://unsplash.com",
  "House Materials": "https://unsplash.com"
};

const IVAVIK_INVENTORY = [];

// Loop engine generating 505 structured items
for (let i = 1; i <= 505; i++) {
  const selectedCat = categories[i % categories.length];
  const brand = brands[i % brands.length];
  const availableTypes = itemTypes[selectedCat];
  const type = availableTypes[i % availableTypes.length];
  
  const productName = `${brand} ${type} Mod-${200 + i}`;
  
  // Custom pricing tiers depending on category type
  let basePrice = 2500 + (i * 750);
  if (selectedCat === "Gadgets") basePrice += 85000;
  if (selectedCat === "Food Stuffs" && type.includes("Rice")) basePrice += 60000;
  
  const finalPrice = Math.ceil(basePrice / 500) * 500; // Round to nearest 500 Naira

  IVAVIK_INVENTORY.push({
    id: i,
    name: productName,
    category: selectedCat,
    price: finalPrice,
    img: imagePool[selectedCat]
  });
}
