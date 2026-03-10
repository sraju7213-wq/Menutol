// Menu data
const MENU = [
  {
    category: "Black Coffee",
    items: [
      { name: "Espresso (Medium)", price: 120 },
      { name: "Espresso (Large)", price: 170 },
      { name: "Americano (Medium)", price: 150 },
      { name: "Americano (Large)", price: 200 },
      { name: "Mandarin Black (Medium)", price: 170 },
      { name: "Mandarin Black (Large)", price: 220 },
      { name: "Espresso Macchiato (Medium)", price: 130 },
      { name: "Espresso Macchiato (Large)", price: 180 },
    ],
  },
  {
    category: "Hot White Coffee",
    items: [
      { name: "Flat White (Medium)", price: 130 },
      { name: "Flat White (Large)", price: 180 },
      { name: "Cappuccino (Medium)", price: 140 },
      { name: "Cappuccino (Large)", price: 190 },
      { name: "Latte (Medium)", price: 145 },
      { name: "Latte (Large)", price: 190 },
      { name: "Mocha (Medium)", price: 160 },
      { name: "Mocha (Large)", price: 200 },
      { name: "Cortado (Medium)", price: 140 },
      { name: "Cortado (Large)", price: 190 },
    ],
  },
  {
    category: "Chocolate & Flavor Shakes",
    items: [
      { name: "Classic Cold Coffee", price: 120 },
      { name: "Oreo Shake", price: 160 },
      { name: "Nutty Nutella Shake", price: 270 },
      { name: "Strawberry Shake", price: 140 },
      { name: "Vanilla Shake", price: 140 },
      { name: "Kit Kat Shake", price: 160 },
      { name: "Alfonso Mango Shake", price: 160 },
      { name: "Double Caffeinated", price: 160 },
      { name: "Mocha Frappe Hot Chocolate", price: 140 },
      { name: "Kitkat Shake", price: 180 },
    ],
  },
  {
    category: "Blended & Frappes",
    items: [
      { name: "Mocha Frappe", price: 140 },
      { name: "Caramel Frostino Frappe", price: 160 },
      { name: "Lotus Biscoff Frappe", price: 180 },
      { name: "Caramel Frappe", price: 160 },
      { name: "Hazelnut Frappe", price: 160 },
      { name: "Signature Frappe", price: 140 },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Vanilla Cupcake", price: 30 },
      { name: "Red Velvet Cupcake", price: 30 },
      { name: "Chocolate Cupcake", price: 40 },
      { name: "Orange Cupcake", price: 40 },
      { name: "Banana Cupcake", price: 40 },
      { name: "Coconut Cupcake", price: 40 },
      { name: "Vanilla Cake Slice", price: 40 },
      { name: "Brownie", price: 160 },
      { name: "Cheese Cake", price: 175 },
      { name: "Bomblini", price: 80 },
      { name: "Chocolate Donut", price: 90 },
      { name: "Corossent", price: 100 },
      { name: "Brownie With Ice Cream", price: 100 },
    ],
  },
  {
    category: "Pizza",
    items: [
      { name: 'Margherita Pizza (10")', price: 150 },
      { name: 'Margherita Pizza (12")', price: 200 },
      { name: 'Veg Classic Pizza (10")', price: 180 },
      { name: 'Veg Classic Pizza (12")', price: 230 },
      { name: 'Peri Peri Paneer (10")', price: 195 },
      { name: 'Peri Peri Paneer (12")', price: 245 },
      { name: 'Peri Peri Chicken Pizza (10")', price: 240 },
      { name: 'Peri Peri Chicken Pizza (12")', price: 290 },
      { name: 'Chicken Loaed Pizza (10")', price: 260 },
      { name: 'Chicken Loaed Pizza (12")', price: 300 },
    ],
  },
  {
    category: "Rice",
    items: [
      { name: "Mexican Rice", price: 130 },
      { name: "Angara Rice", price: 110 },
      { name: "Chicken Bowl", price: 150 },
      { name: "Veg Rice Bowl", price: 110 },
      { name: "Rajma Rice", price: 120 },
      { name: "Kadi Rice", price: 120 },
    ],
  },
  {
    category: "Burgers",
    items: [
      { name: "Veg Burger", price: 110 },
      { name: "Paneer Burger", price: 130 },
      { name: "Nachos Burger", price: 105 },
      { name: "Chicken Burger", price: 120 },
      { name: "Grill Chicken Burger", price: 285 },
      { name: "Classic Chicken Burger", price: 120 },
    ],
  },
  {
    category: "Fries",
    items: [
      { name: "Peri Peri Fries", price: 50 },
      { name: "Cheese Fries", price: 60 },
      { name: "Loaded Cheese Fries", price: 70 },
      { name: "Crispers", price: 50 },
      { name: "Loaded Fries With Chicken", price: 180 },
    ],
  },
  {
    category: "Pasta",
    items: [
      { name: "Red Sauce Pasta", price: 190 },
      { name: "White Sauce Pasta", price: 190 },
      { name: "Mix Sauce Pasta", price: 180 },
    ],
  },
  {
    category: "Salad",
    items: [
      { name: "Caesar Salad", price: 90 },
      { name: "Tuna Salad", price: 300 },
      { name: "Raw Papay Salad", price: 150 },
      { name: "Sprouts Salad", price: 120 },
      { name: "Watermelon Salad", price: 150 },
    ],
  },
  {
    category: "Rolls",
    items: [
      { name: "Chicken Roll", price: 120 },
      { name: "Achari Chicken Tikka Roll", price: 120 },
      { name: "Chicken Tikka Roll", price: 120 },
      { name: "Peri Peri Paneer Tikka Roll", price: 120 },
      { name: "Veg Roll", price: 99 },
    ],
  },
  {
    category: "Sandwiches",
    items: [
      { name: "Cheese Sandwich", price: 110 },
      { name: "Paneer Sandwich", price: 130 },
      { name: "Chicken Sandwich", price: 105 },
      { name: "Spinach & Corn Sandwich", price: 120 },
    ],
  },
  {
    category: "Hot Chocolate",
    items: [
      { name: "Classic Hot Chocolate", price: 180 },
      { name: "Biscoff Hot Chocolate", price: 280 },
      { name: "Belgian Hot Chocolate", price: 280 },
      { name: "Nutella Hot Chocolate", price: 260 },
    ],
  },
  {
    category: "Icy Coffee",
    items: [
      { name: "Iced Espresso", price: 130 },
      { name: "Iced Americano", price: 180 },
      { name: "Iced Cappuccino", price: 150 },
      { name: "Iced Latte", price: 150 },
      { name: "Iced Mocha", price: 170 },
      { name: "Iced Cortado", price: 130 },
      { name: "Iced Golden Americano", price: 150 },
      { name: "Iced Chocolate", price: 150 },
      { name: "Butterscotch Iced Latte", price: 280 },
    ],
  },
  {
    category: "Coolers",
    items: [
      { name: "Lemon Iced Tea", price: 140 },
      { name: "Virgin Mojito", price: 140 },
      { name: "Passion Fruit Mojito", price: 150 },
      { name: "Watermelon Mojito", price: 140 },
      { name: "Desi Lemonade", price: 110 },
      { name: "Hibiscus Tea", price: 140 },
    ],
  },
  {
    category: "Fresh Coffee",
    items: [
      { name: "Espresso Lemonade", price: 250 },
      { name: "Strawberry Espresso Tonic", price: 250 },
      { name: "Hazelnut Espresso Tonic", price: 250 },
    ],
  },
  {
    category: "Fresh Juices",
    items: [
      { name: "Watermelon Juice", price: 200 },
      { name: "Orange Juice", price: 200 },
      { name: "Pineapple Juice", price: 200 },
    ],
  },
  {
    category: "Combos",
    items: [
      { name: "Chicken Brgr + Fries + Virgin Mojito", price: 325 },
      { name: "Veg Brgr + Fries + Virgin Mojito", price: 299 },
      { name: "Chicken Rice Bowl + Fries + Virgin Mojito", price: 325 },
      { name: "Veg Rice Bowl + Fries + Virgin Mojito", price: 299 },
    ],
  },
];

const CATEGORY_ICONS = {
  "Black Coffee": "☕",
  "Hot White Coffee": "☕",
  "Chocolate & Flavor Shakes": "🍫",
  "Blended & Frappes": "🍦",
  Desserts: "🎂",
  Pizza: "🍕",
  Rice: "🍚",
  Burgers: "🍔",
  Fries: "🍟",
  Pasta: "🍝",
  Salad: "🥗",
  Rolls: "🌯",
  Sandwiches: "🥪",
  "Hot Chocolate": "🍫",
  "Icy Coffee": "🧊",
  Coolers: "🍹",
  "Fresh Coffee": "☕",
  "Fresh Juices": "🍊",
  Combos: "🍽️",
};

const CATEGORY_COLORS = {
  "Black Coffee": {
    bg: "bg-stone-100",
    border: "border-stone-200",
    text: "text-stone-700",
    icon: "bg-stone-200",
    iconText: "text-stone-600",
  },
  "Hot White Coffee": {
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-800",
    icon: "bg-amber-100",
    iconText: "text-amber-600",
  },
  "Chocolate & Flavor Shakes": {
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-800",
    icon: "bg-amber-100",
    iconText: "text-amber-600",
  },
  "Blended & Frappes": {
    bg: "bg-pink-50",
    border: "border-pink-100",
    text: "text-pink-800",
    icon: "bg-pink-100",
    iconText: "text-pink-600",
  },
  Desserts: {
    bg: "bg-purple-50",
    border: "border-purple-100",
    text: "text-purple-800",
    icon: "bg-purple-100",
    iconText: "text-purple-600",
  },
  Pizza: {
    bg: "bg-red-50",
    border: "border-red-100",
    text: "text-red-800",
    icon: "bg-red-100",
    iconText: "text-red-600",
  },
  Rice: {
    bg: "bg-yellow-50",
    border: "border-yellow-100",
    text: "text-yellow-800",
    icon: "bg-yellow-100",
    iconText: "text-yellow-600",
  },
  Burgers: {
    bg: "bg-orange-50",
    border: "border-orange-100",
    text: "text-orange-800",
    icon: "bg-orange-100",
    iconText: "text-orange-600",
  },
  Fries: {
    bg: "bg-yellow-50",
    border: "border-yellow-100",
    text: "text-yellow-800",
    icon: "bg-yellow-100",
    iconText: "text-yellow-600",
  },
  Pasta: {
    bg: "bg-orange-50",
    border: "border-orange-100",
    text: "text-orange-800",
    icon: "bg-orange-100",
    iconText: "text-orange-600",
  },
  Salad: {
    bg: "bg-green-50",
    border: "border-green-100",
    text: "text-green-800",
    icon: "bg-green-100",
    iconText: "text-green-600",
  },
  Rolls: {
    bg: "bg-orange-50",
    border: "border-orange-100",
    text: "text-orange-800",
    icon: "bg-orange-100",
    iconText: "text-orange-600",
  },
  Sandwiches: {
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-800",
    icon: "bg-amber-100",
    iconText: "text-amber-600",
  },
  "Hot Chocolate": {
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-800",
    icon: "bg-amber-100",
    iconText: "text-amber-600",
  },
  "Icy Coffee": {
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    text: "text-cyan-800",
    icon: "bg-cyan-100",
    iconText: "text-cyan-600",
  },
  Coolers: {
    bg: "bg-teal-50",
    border: "border-teal-100",
    text: "text-teal-800",
    icon: "bg-teal-100",
    iconText: "text-teal-600",
  },
  "Fresh Coffee": {
    bg: "bg-green-50",
    border: "border-green-100",
    text: "text-green-800",
    icon: "bg-green-100",
    iconText: "text-green-600",
  },
  "Fresh Juices": {
    bg: "bg-orange-50",
    border: "border-orange-100",
    text: "text-orange-800",
    icon: "bg-orange-100",
    iconText: "text-orange-600",
  },
  Combos: {
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    text: "text-indigo-800",
    icon: "bg-indigo-100",
    iconText: "text-indigo-600",
  },
};

const ADDONS = {
  Beverages: [
    { name: "Honey", price: 30, attribute: "veg" },
    { name: "Mojito", price: 30, attribute: "veg" },
    { name: "Watermelon", price: 30, attribute: "veg" },
    { name: "Caramel", price: 30, attribute: "veg" },
    { name: "Strawberry", price: 30, attribute: "veg" },
    { name: "Vanilla", price: 30, attribute: "veg" },
    { name: "Mango", price: 30, attribute: "veg" },
    { name: "Hazelnut", price: 30, attribute: "veg" },
    { name: "Passion Fruit", price: 30, attribute: "veg" },
    { name: "Espresso Shot", price: 60, attribute: "veg" },
    { name: "Milk", price: 50, attribute: "veg" },
    { name: "Whipped Cream", price: 45, attribute: "veg" },
    { name: "Vanilla Ice Cream", price: 50, attribute: "veg" },
    { name: "Chocolate Ice Cream", price: 50, attribute: "veg" },
    { name: "Butter Scotch Ice Cream", price: 70, attribute: "veg" },
  ],
  Food: [
    { name: "Extra Dip", price: 30, attribute: "veg" },
    { name: "Cheese", price: 50, attribute: "veg" },
    { name: "Veggies", price: 50, attribute: "veg" },
    { name: "Chicken", price: 50, attribute: "non-veg" },
  ],
};

const BEVERAGE_ITEMS_WITH_ADDONS = [
  "Classic Cold Coffee",
  "Oreo Shake",
  "Nutty Nutella Shake",
  "Strawberry Shake",
  "Vanilla Shake",
  "Kit Kat Shake",
  "Alfonso Mango Shake",
  "Double Caffeinated",
  "Mocha Frappe Hot Chocolate",
  "Kitkat Shake",
  "Mocha Frappe",
  "Caramel Frostino Frappe",
  "Lotus Biscoff Frappe",
  "Caramel Frappe",
  "Hazelnut Frappe",
  "Signature Frappe",
  "Classic Hot Chocolate",
  "Biscoff Hot Chocolate",
  "Belgian Hot Chocolate",
  "Nutella Hot Chocolate",
  "Iced Espresso",
  "Iced Americano",
  "Iced Cappuccino",
  "Iced Latte",
  "Iced Mocha",
  "Iced Cortado",
  "Iced Golden Americano",
  "Iced Chocolate",
  "Butterscotch Iced Latte",
  "Espresso Lemonade",
  "Strawberry Espresso Tonic",
  "Hazelnut Espresso Tonic",
  "Lemon Iced Tea",
  "Virgin Mojito",
  "Passion Fruit Mojito",
  "Watermelon Mojito",
  "Desi Lemonade",
  "Hibiscus Tea",
  "Watermelon Juice",
  "Orange Juice",
  "Pineapple Juice",
  "Flat White (Medium)",
  "Flat White (Large)",
  "Cappuccino (Medium)",
  "Cappuccino (Large)",
  "Latte (Medium)",
  "Latte (Large)",
  "Mocha (Medium)",
  "Mocha (Large)",
  "Cortado (Medium)",
  "Cortado (Large)",
  "Espresso (Medium)",
  "Espresso (Large)",
  "Americano (Medium)",
  "Americano (Large)",
  "Mandarin Black (Medium)",
  "Mandarin Black (Large)",
  "Espresso Macchiato (Medium)",
  "Espresso Macchiato (Large)",
];

const FOOD_CATEGORIES_WITH_ADDONS = new Set([
  "Pizza",
  "Rice",
  "Burgers",
  "Fries",
  "Pasta",
  "Salad",
  "Rolls",
  "Sandwiches",
]);

const quantities = {};
const selectedAddons = {};
let searchQuery = "";
let openCategoryName = "";
let reducedMotionQuery = null;
let revealObserver = null;

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  setupScrollReveal();
  setupOrderType();
  setupFormSubmit();
  setupNewOrderButton();
  setupSearch();
  setupFloatingCart();
});

function prefersReducedMotion() {
  if (!reducedMotionQuery) {
    reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  }
  return reducedMotionQuery.matches;
}

function encodeItemName(name) {
  return encodeURIComponent(name);
}

function decodeItemName(encoded) {
  try {
    return decodeURIComponent(encoded);
  } catch {
    return encoded;
  }
}

function escapeHtmlAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function cssEscape(value) {
  if (window.CSS && typeof window.CSS.escape === "function") {
    return window.CSS.escape(value);
  }
  return String(value).replace(/["\\]/g, "\\$&");
}

function setCategoryOpen(details, open, { animate = true } = {}) {
  const content = details.querySelector(".category-content");
  if (!content) {
    details.open = open;
    return;
  }

  if (prefersReducedMotion() || !animate) {
    details.open = open;
    content.style.height = open ? "" : "";
    return;
  }

  if (details.dataset.animating === "1") return;
  details.dataset.animating = "1";

  const easing = "cubic-bezier(0.16, 1, 0.3, 1)";
  const openDuration = 320;
  const closeDuration = 240;

  if (open) {
    details.open = true;
    openCategoryName = details.dataset.category || openCategoryName;

    content.style.height = "0px";
    content.style.opacity = "0";
    content.style.transform = "translateY(-6px)";

    const targetHeight = content.scrollHeight;
    const animation = content.animate(
      [
        { height: "0px", opacity: 0, transform: "translateY(-6px)" },
        { height: `${targetHeight}px`, opacity: 1, transform: "translateY(0)" },
      ],
      { duration: openDuration, easing, fill: "forwards" },
    );

    animation.addEventListener("finish", () => {
      content.style.height = "";
      content.style.opacity = "";
      content.style.transform = "";
      details.dataset.animating = "0";
    });
  } else {
    const startHeight = content.scrollHeight;
    content.style.height = `${startHeight}px`;
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";

    const animation = content.animate(
      [
        { height: `${startHeight}px`, opacity: 1, transform: "translateY(0)" },
        { height: "0px", opacity: 0, transform: "translateY(-6px)" },
      ],
      { duration: closeDuration, easing, fill: "forwards" },
    );

    animation.addEventListener("finish", () => {
      details.open = false;
      content.style.height = "";
      content.style.opacity = "";
      content.style.transform = "";
      if (openCategoryName === details.dataset.category) openCategoryName = "";
      details.dataset.animating = "0";
    });
  }
}

function setupScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (elements.length === 0) return;

  const showAll = () => {
    elements.forEach((el) => el.classList.add("is-visible"));
  };

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    showAll();
    return;
  }

  if (revealObserver) {
    revealObserver.disconnect();
  }

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  elements.forEach((el) => revealObserver.observe(el));
}

function renderMenu() {
  const container = document.getElementById("menu-container");
  container.innerHTML = "";

  MENU.forEach((category) => {
    const details = document.createElement("details");
    details.className = "collapsible-category group";
    details.dataset.category = category.category;
    details.open = category.category === openCategoryName;

    const icon = CATEGORY_ICONS[category.category] || "";
    const colors = CATEGORY_COLORS[category.category] || {
      bg: "bg-white",
      border: "border-gray-100",
      text: "text-cafe-green",
      icon: "bg-cafe-green/10",
      iconText: "text-cafe-green",
    };

    const categoryCount = category.items.filter(
      (item) => quantities[item.name] > 0,
    ).length;

    details.innerHTML = `
      <summary class="category-header ${colors.bg} ${colors.border} border">
        <span class="category-title ${colors.text}">
          <span class="category-icon" aria-hidden="true">${icon}</span>
          <span>${category.category}</span>
          ${categoryCount > 0 ? `<span class="category-count bg-cafe-green text-white">${categoryCount}</span>` : ""}
        </span>
        <span class="category-arrow ${colors.text}" aria-hidden="true">⌄</span>
      </summary>
      <div class="category-content"></div>
    `;

    const content = details.querySelector(".category-content");
    const summary = details.querySelector("summary");
    if (summary) {
      summary.addEventListener("click", (e) => {
        e.preventDefault();

        if (!details.open) {
          document
            .querySelectorAll(".collapsible-category[open]")
            .forEach((d) => {
              if (d !== details) setCategoryOpen(d, false, { animate: true });
            });
          setCategoryOpen(details, true, { animate: true });
        } else {
          setCategoryOpen(details, false, { animate: true });
        }
      });
    }

    category.items.forEach((item) => {
      quantities[item.name] = 0;
      selectedAddons[item.name] = [];
      const addonGroup = getAddonGroup(category.category, item.name);
      const hasAddons = Boolean(addonGroup);
      const itemId = encodeItemName(item.name);
      const itemNameAttr = escapeHtmlAttr(item.name);
      const itemWrapper = document.createElement("div");
      itemWrapper.className = "menu-item-wrapper reveal";
      itemWrapper.dataset.category = category.category;
      itemWrapper.dataset.name = item.name.toLowerCase();

      let addonSection = "";
      if (hasAddons) {
        const addonGroups = [];
        const sectionTitle =
          addonGroup === "Beverages"
            ? "Customize Your Drink"
            : "Customize Your Food";

        addonGroups.push(`<div class="addon-section hidden">
          <p class="addon-section-title">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
            ${sectionTitle}
          </p>
          <div class="addon-grid">`);

        ADDONS[addonGroup].forEach((addon) => {
          addonGroups.push(`
            <label class="addon-checkbox" data-item="${itemId}">
              <input type="checkbox" class="addon-check hidden" data-item="${itemId}" data-addon="${escapeHtmlAttr(addon.name)}" data-price="${addon.price}">
              <span class="addon-card">
                <span class="addon-checkmark" aria-hidden="true">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                </span>
                <span class="addon-name">${addon.name}</span>
                <span class="addon-price">+₹${addon.price}</span>
              </span>
            </label>
          `);
        });

        addonGroups.push(`</div></div>`);
        addonSection = addonGroups.join("");
      }

      itemWrapper.id = `row-${slugify(item.name)}`;
      itemWrapper.innerHTML = `
        <div class="menu-item-row">
          <div class="menu-item-copy">
            <p class="item-name">${highlightSearch(item.name)}</p>
            <p class="item-price">₹${item.price}</p>
            ${hasAddons ? '<p class="addon-hint">Tap + to customize</p>' : ""}
          </div>
          <div class="qty-controls">
            <button type="button" class="qty-btn" data-item="${itemId}" data-action="minus" disabled aria-label="Decrease ${itemNameAttr} quantity">−</button>
            <input type="number" class="qty-input" value="0" min="0" max="20" data-item="${itemId}" readonly aria-label="${itemNameAttr} quantity">
            <button type="button" class="qty-btn" data-item="${itemId}" data-action="plus" aria-label="Increase ${itemNameAttr} quantity">+</button>
          </div>
        </div>
        ${addonSection}
      `;

      content.appendChild(itemWrapper);
    });

    details.addEventListener("toggle", function () {
      if (this.open) {
        openCategoryName = category.category;
      } else if (openCategoryName === category.category) {
        openCategoryName = "";
      }
    });

    container.appendChild(details);
  });

  document.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", handleQuantityClick);
  });

  document.querySelectorAll(".addon-check").forEach((checkbox) => {
    checkbox.addEventListener("change", handleAddonChange);
  });

  updateMenuCount();
}

function highlightSearch(text) {
  if (!searchQuery) return text;
  const regex = new RegExp(`(${escapeRegex(searchQuery)})`, "gi");
  return text.replace(regex, '<span class="search-highlight">$1</span>');
}

function getAddonGroup(categoryName, itemName) {
  if (BEVERAGE_ITEMS_WITH_ADDONS.includes(itemName)) {
    return "Beverages";
  }

  if (FOOD_CATEGORIES_WITH_ADDONS.has(categoryName)) {
    return "Food";
  }

  return null;
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function handleQuantityClick(e) {
  const btn = e.currentTarget;
  const itemName = decodeItemName(btn.dataset.item);
  const action = btn.dataset.action;

  if (action === "plus" && quantities[itemName] < 20) {
    quantities[itemName]++;
  } else if (action === "minus" && quantities[itemName] > 0) {
    quantities[itemName]--;
  }

  updateItemRow(itemName);
  updateCategoryCount(itemName);
  updateTotal();
  updateFloatingCart();
  updateMenuCount();
  toggleAddonSection(itemName);
}

function handleAddonChange(e) {
  const checkbox = e.currentTarget;
  const itemName = decodeItemName(checkbox.dataset.item);
  const addonName = checkbox.dataset.addon;
  const addonPrice = parseInt(checkbox.dataset.price);

  const addonCard = checkbox
    .closest(".addon-checkbox")
    .querySelector(".addon-card");

  if (checkbox.checked) {
    addonCard.classList.add("checked");
    selectedAddons[itemName].push({ name: addonName, price: addonPrice });
  } else {
    addonCard.classList.remove("checked");
    selectedAddons[itemName] = selectedAddons[itemName].filter(
      (a) => a.name !== addonName,
    );
  }

  updateTotal();
  updateFloatingCart();
}

function toggleAddonSection(itemName) {
  const slug = slugify(itemName);
  const row = document.getElementById(`row-${slug}`);
  if (!row) return;

  const addonSection = row.querySelector(".addon-section");
  if (!addonSection) return;

  const qty = quantities[itemName] || 0;

  if (qty > 0) {
    addonSection.classList.remove("hidden");
    addonSection.classList.remove("addon-exit");
    addonSection.classList.add("animate-slide-up");
  } else {
    addonSection.classList.remove("animate-slide-up");
    if (addonSection.classList.contains("hidden")) return;

    if (prefersReducedMotion()) {
      addonSection.classList.add("hidden");
      addonSection.classList.remove("addon-exit");
      return;
    }

    addonSection.classList.add("addon-exit");
    setTimeout(() => {
      addonSection.classList.add("hidden");
      addonSection.classList.remove("addon-exit");
    }, 180);
  }
}

function updateItemRow(itemName) {
  const slug = slugify(itemName);
  const row = document.getElementById(`row-${slug}`);
  if (!row) return;
  const itemRow = row.querySelector(".menu-item-row");
  const input = row.querySelector(".qty-input");
  const minusBtn = row.querySelector('[data-action="minus"]');
  const hint = row.querySelector(".addon-hint");
  const plusBtn = row.querySelector('[data-action="plus"]');

  input.value = quantities[itemName];
  input.classList.remove("animate-count");
  void input.offsetWidth;
  input.classList.add("animate-count");

  if (quantities[itemName] > 0) {
    itemRow.classList.add("active");
    minusBtn.disabled = false;
    if (hint) hint.classList.add("hidden");
  } else {
    itemRow.classList.remove("active");
    minusBtn.disabled = true;
    if (hint) hint.classList.remove("hidden");
  }

  [minusBtn, plusBtn].forEach((button) => {
    button.classList.remove("animate-press");
    void button.offsetWidth;
    button.classList.add("animate-press");
  });
}

function updateCategoryCount(itemName) {
  let categoryName = "";
  for (const cat of MENU) {
    if (cat.items.some((i) => i.name === itemName)) {
      categoryName = cat.category;
      break;
    }
  }

  const details = document.querySelector(
    `details.collapsible-category[data-category="${cssEscape(categoryName)}"]`,
  );
  if (details) {
    const countSpan = details.querySelector(".category-count");
    const categoryCount = MENU.find(
      (c) => c.category === categoryName,
    ).items.filter((item) => quantities[item.name] > 0).length;

    if (countSpan) {
      countSpan.textContent = categoryCount;
      if (categoryCount === 0) countSpan.remove();
    } else if (categoryCount > 0) {
      const titleSpan = details.querySelector(".category-title");
      const countSpan = document.createElement("span");
      countSpan.className = "category-count bg-cafe-green text-white";
      countSpan.textContent = categoryCount;
      titleSpan.appendChild(countSpan);
    }
  }
}

function updateTotal() {
  let subtotal = 0;
  let totalItems = 0;
  MENU.forEach((category) => {
    category.items.forEach((item) => {
      const qty = quantities[item.name] || 0;
      const itemPrice = item.price * qty;
      const addonTotal = (selectedAddons[item.name] || []).reduce(
        (sum, addon) => sum + addon.price * qty,
        0,
      );
      subtotal += itemPrice + addonTotal;
      totalItems += qty;
    });
  });

  const gst = Math.round(subtotal * 0.025 * 100) / 100;
  const cgst = Math.round(subtotal * 0.025 * 100) / 100;
  const total = subtotal + gst + cgst;

  animateValue("order-subtotal", subtotal);
  animateValue("order-gst", gst);
  animateValue("order-cgst", cgst);
  animateValue("order-total", total);
}

function animateValue(elementId, newValue) {
  const el = document.getElementById(elementId);
  el.classList.add("animate-count");
  el.textContent = `₹${Math.round(newValue)}`;
  setTimeout(() => el.classList.remove("animate-count"), 200);
}

function updateMenuCount() {
  let count = 0;
  Object.values(quantities).forEach((q) => (count += q));
  document.getElementById("menu-item-count").textContent =
    `${count} item${count !== 1 ? "s" : ""}`;
}

function setupOrderType() {
  const orderType = document.getElementById("orderType");
  const addressContainer = document.getElementById("address-container");
  const deliveryNotice = document.getElementById("delivery-notice");

  function toggleAddress() {
    const type = orderType.value;
    if (type === "Pickup" || type === "Delivery") {
      addressContainer.classList.remove("hidden");
    } else {
      addressContainer.classList.add("hidden");
    }

    if (type === "Delivery") {
      deliveryNotice.classList.remove("hidden");
    } else {
      deliveryNotice.classList.add("hidden");
    }
  }

  orderType.addEventListener("change", toggleAddress);
  toggleAddress();
}

function setupSearch() {
  const searchInput = document.getElementById("menu-search");
  const clearBtn = document.getElementById("clear-search");
  const noResults = document.getElementById("no-results");

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();

    if (searchQuery) {
      clearBtn.classList.remove("hidden");
    } else {
      clearBtn.classList.add("hidden");
    }

    let visibleCount = 0;
    const rows = document.querySelectorAll(".menu-item-wrapper");
    rows.forEach((row) => {
      const name = row.dataset.name;
      const matches = name.includes(searchQuery);
      row.classList.toggle("hidden", !matches);
      if (matches) visibleCount++;
    });

    const categories = document.querySelectorAll(".collapsible-category");
    let expandedDuringSearch = false;
    categories.forEach((cat) => {
      const visibleRows = cat.querySelectorAll(
        ".menu-item-wrapper:not(.hidden)",
      );
      cat.classList.toggle("hidden", visibleRows.length === 0);
      if (searchQuery && visibleRows.length > 0 && !expandedDuringSearch) {
        setCategoryOpen(cat, true, { animate: false });
        openCategoryName = cat.dataset.category;
        expandedDuringSearch = true;
      } else if (searchQuery) {
        setCategoryOpen(cat, false, { animate: false });
      }
    });

    noResults.classList.toggle("hidden", visibleCount > 0);
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearBtn.classList.add("hidden");
    document.querySelectorAll(".menu-item-wrapper").forEach((row) => {
      row.classList.remove("hidden");
    });
    document.querySelectorAll(".collapsible-category").forEach((cat) => {
      cat.classList.remove("hidden");
      setCategoryOpen(cat, cat.dataset.category === openCategoryName, {
        animate: false,
      });
    });
    noResults.classList.add("hidden");
  });
}

function setupFloatingCart() {
  const cart = document.getElementById("floating-cart");
  const checkoutBtn = document.getElementById("scroll-to-checkout");

  checkoutBtn.addEventListener("click", () => {
    document
      .getElementById("order-total-section")
      .scrollIntoView({ behavior: "smooth" });
  });
}

function updateFloatingCart() {
  const cart = document.getElementById("floating-cart");
  const badge = document.getElementById("cart-badge");
  const summary = document.getElementById("cart-summary");
  const totalEl = document.getElementById("cart-total");

  let count = 0;
  let subtotal = 0;
  Object.entries(quantities).forEach(([name, qty]) => {
    if (qty > 0) {
      count += qty;
      const item = MENU.flatMap((c) => c.items).find((i) => i.name === name);
      if (item) {
        const itemTotal = item.price * qty;
        const addonTotal = (selectedAddons[name] || []).reduce(
          (sum, addon) => sum + addon.price * qty,
          0,
        );
        subtotal += itemTotal + addonTotal;
      }
    }
  });

  const total = Math.round(subtotal * 1.05);

  badge.textContent = count;
  summary.textContent =
    count > 0 ? `🛒 ${count} Item${count !== 1 ? "s" : ""}` : "🛒 0 Items";
  totalEl.textContent = `₹${total}`;

  if (count > 0) {
    cart.classList.remove("translate-y-full");
  } else {
    cart.classList.add("translate-y-full");
  }
}

function setupFormSubmit() {
  const form = document.getElementById("order-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    hideError();

    const customerName = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const orderType = document.getElementById("orderType").value;
    const address = document.getElementById("address").value.trim();
    const specialInstructions = document
      .getElementById("specialInstructions")
      .value.trim();

    if (!customerName) {
      showError("Please enter your name.");
      return;
    }
    if (!phone) {
      showError("Please enter your phone number.");
      return;
    }

    if ((orderType === "Pickup" || orderType === "Delivery") && !address) {
      showError(`Please enter your address for ${orderType}.`);
      return;
    }

    const selectedItems = [];
    let subtotal = 0;
    MENU.forEach((category) => {
      category.items.forEach((item) => {
        const qty = quantities[item.name] || 0;
        if (qty > 0) {
          const itemAddons = selectedAddons[item.name] || [];
          const addonTotal = itemAddons.reduce(
            (sum, addon) => sum + addon.price * qty,
            0,
          );
          const itemSubtotal = item.price * qty + addonTotal;
          selectedItems.push({
            name: item.name,
            basePrice: item.price,
            quantity: qty,
            addons: itemAddons,
            subtotal: itemSubtotal,
          });
          subtotal += itemSubtotal;
        }
      });
    });

    const gst = Math.round(subtotal * 0.025 * 100) / 100;
    const cgst = Math.round(subtotal * 0.025 * 100) / 100;
    const total = subtotal + gst + cgst;

    if (selectedItems.length === 0) {
      showError("Please select at least one item.");
      return;
    }

    const submitBtn = document.getElementById("submit-btn");
    const originalHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span>';

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          phone,
          orderType,
          address,
          items: selectedItems,
          specialInstructions,
          subtotal,
          gst,
          cgst,
          total,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        showError(data.error || "Something went wrong. Please try again.");
        return;
      }

      showConfirmation(data.orderId);
      showToast("Order submitted successfully!", "success");
    } catch (err) {
      showError("Could not connect to server. Please try again.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHTML;
    }
  });
}

function showConfirmation(orderId) {
  document.getElementById("confirm-order-id").textContent = `#${orderId}`;
  document.getElementById("confirmation-overlay").classList.remove("hidden");
}

function setupNewOrderButton() {
  document.getElementById("new-order-btn").addEventListener("click", () => {
    document.getElementById("confirmation-overlay").classList.add("hidden");
    document.getElementById("order-form").reset();

    const orderType = document.getElementById("orderType").value;
    const addressContainer = document.getElementById("address-container");
    if (orderType === "Pickup" || orderType === "Delivery") {
      addressContainer.classList.remove("hidden");
    } else {
      addressContainer.classList.add("hidden");
    }

    document.getElementById("delivery-notice").classList.add("hidden");

    Object.keys(quantities).forEach((key) => {
      quantities[key] = 0;
      selectedAddons[key] = [];
      updateItemRow(key);
    });

    document.querySelectorAll(".addon-check").forEach((checkbox) => {
      checkbox.checked = false;
      const addonCard = checkbox
        .closest(".addon-checkbox")
        .querySelector(".addon-card");
      addonCard.classList.remove("checked");
    });

    document.querySelectorAll(".addon-section").forEach((section) => {
      section.classList.add("hidden");
    });

    updateTotal();
    updateFloatingCart();
    updateMenuCount();
    openCategoryName = "";

    document.querySelectorAll(".category-count").forEach((el) => el.remove());

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function showError(msg) {
  const el = document.getElementById("form-error");
  el.textContent = msg;
  el.classList.remove("hidden");
  el.scrollIntoView({ behavior: "smooth", block: "center" });
}

function hideError() {
  document.getElementById("form-error").classList.add("hidden");
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");

  const colors = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-cafe-green",
  };

  toast.className = `toast ${colors[type]} text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3`;
  toast.innerHTML = `
    ${type === "success" ? '<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>' : ""}
    <span class="text-sm font-medium">${message}</span>
  `;

  container.appendChild(toast);

  if (prefersReducedMotion()) {
    toast.classList.add("toast--shown");
  } else {
    requestAnimationFrame(() => toast.classList.add("toast--shown"));
  }

  setTimeout(() => {
    toast.classList.add("hiding");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
