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
const CAFE_WHATSAPP_NUMBER = "918826139339";
let searchQuery = "";
let openCategoryName = "";
let reducedMotionQuery = null;
let revealObserver = null;

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  setupCategoryDock();
  setupFilterChips();
  setupItemRowTilt();
  setup3DToolbar();
  setupAmbientParticles();
  setupKeyboardShortcuts();
  setupScrollReveal();
  setupOrderType();
  setupFormSubmit();
  setupNewOrderButton();
  setupSearch();
  setupFloatingCart();
  setupDesktopGlance();
  setupDockScrollSpy();
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

function scrollPillInDock(pill) {
  const dock = document.getElementById("category-nav-dock");
  if (!dock || !pill) return;

  const pillLeft = pill.offsetLeft;
  const pillWidth = pill.offsetWidth;
  const dockWidth = dock.clientWidth;
  const targetScrollLeft = pillLeft - (dockWidth / 2) + (pillWidth / 2);

  dock.scrollTo({
    left: Math.max(0, targetScrollLeft),
    behavior: "smooth",
  });
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
          // Record current position on screen before any DOM collapse
          const initialTop = summary.getBoundingClientRect().top;

          document
            .querySelectorAll(".collapsible-category[open]")
            .forEach((d) => {
              if (d !== details) setCategoryOpen(d, false, { animate: false });
            });
          setCategoryOpen(details, true, { animate: true });

          if (window.Scene3D) {
            window.Scene3D.setCategoryMood(category.category);
            window.Scene3D.triggerBounce();
          }
          const label = document.getElementById("mood-category-label");
          if (label) {
            label.textContent = `${icon} ${category.category}`;
          }

          document.querySelectorAll(".dock-pill").forEach((pill) => {
            if (pill.dataset.category === category.category) {
              pill.classList.add("active");
              // Safely scroll only the dock horizontal bar without touching window scroll!
              scrollPillInDock(pill);
            } else {
              pill.classList.remove("active");
            }
          });

          // Prevent layout shift: if closing other categories shifted this summary, compensate immediately
          requestAnimationFrame(() => {
            const currentTop = summary.getBoundingClientRect().top;
            const diff = currentTop - initialTop;
            if (Math.abs(diff) > 2) {
              window.scrollBy({ top: diff, behavior: "instant" });
            }
          });
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
  setupItemRowTilt();
  updateDesktopGlance();
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

    // 3D Cup Reaction & Sound
    if (window.Scene3D) {
      window.Scene3D.triggerBounce();
    }

    // Micro Confetti from Button Position
    if (window.confetti && !prefersReducedMotion()) {
      const rect = btn.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      window.confetti({
        particleCount: 14,
        spread: 45,
        startVelocity: 16,
        origin: { x, y },
        colors: ["#2D5A27", "#4A7C43", "#F59E0B", "#D97706", "#FFFDF7"],
        disableForReducedMotion: true,
      });
    }
  } else if (action === "minus" && quantities[itemName] > 0) {
    quantities[itemName]--;
    if (window.Scene3D) {
      window.Scene3D.playSound("click");
    }
  }

  updateItemRow(itemName);
  updateCategoryCount(itemName);
  updateCategoryDockCount(itemName);
  updateTotal();
  updateFloatingCart();
  updateDesktopGlance();
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
    if (window.Scene3D) window.Scene3D.playSound("pop");
  } else {
    addonCard.classList.remove("checked");
    selectedAddons[itemName] = selectedAddons[itemName].filter(
      (a) => a.name !== addonName,
    );
    if (window.Scene3D) window.Scene3D.playSound("click");
  }

  updateTotal();
  updateFloatingCart();
  updateDesktopGlance();
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
  const checkoutBtn = document.getElementById("scroll-to-checkout");
  if (!checkoutBtn) return;

  checkoutBtn.addEventListener("click", () => {
    const customerName = document.getElementById("customerName");
    const phone = document.getElementById("phone");

    if (!customerName || !phone || !customerName.value.trim() || !phone.value.trim()) {
      const orderForm = document.getElementById("order-form");
      if (orderForm) {
        orderForm.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          if (customerName) customerName.focus();
        }, 450);
      }
      showToast("Please enter your name & phone to order on WhatsApp", "info");
    } else {
      document.getElementById("submit-btn").click();
    }
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

function collectOrderDataFromForm() {
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
    return null;
  }
  if (!phone) {
    showError("Please enter your phone number.");
    return null;
  }

  if ((orderType === "Pickup" || orderType === "Delivery") && !address) {
    showError(`Please enter your address for ${orderType}.`);
    return null;
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

  if (selectedItems.length === 0) {
    showError("Please select at least one item.");
    return null;
  }

  const gst = Math.round(subtotal * 0.025 * 100) / 100;
  const cgst = Math.round(subtotal * 0.025 * 100) / 100;
  const total = subtotal + gst + cgst;

  return {
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
    timestamp: new Date().toISOString(),
  };
}

function buildCompleteWhatsAppMessage(order) {
  const timestamp = order.timestamp
    ? new Date(order.timestamp).toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      });

  let msg = `🌿 *TREE OF LIFE CAFE*\n`;
  msg += `*Digital Order Ticket #${order.id || "NEW"}*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
  msg += `📅 *Date & Time:* ${timestamp}\n`;
  msg += `👤 *Customer Name:* ${order.customerName}\n`;
  msg += `📞 *Phone Number:* ${order.phone}\n`;
  msg += `🍽️ *Order Type:* ${order.orderType}\n`;
  if (order.address && order.address.trim()) {
    const label = order.orderType === "Table" ? "Table Number" : "Delivery Address";
    msg += `📍 *${label}:* ${order.address}\n`;
  }

  msg += `\n📋 *Ordered Items Breakdown:*\n`;
  order.items.forEach((item, index) => {
    const itemTotal = item.subtotal || (item.basePrice ? item.basePrice * item.quantity : item.price * item.quantity);
    msg += `${index + 1}. *${item.name}* × ${item.quantity} — ₹${itemTotal}\n`;
    if (item.addons && item.addons.length > 0) {
      const addonsStr = item.addons
        .map((a) => `${a.name}${a.price ? ` (+₹${a.price})` : ""}`)
        .join(", ");
      msg += `   └ *Addons:* ${addonsStr}\n`;
    }
  });

  if (order.specialInstructions && order.specialInstructions.trim()) {
    msg += `\n📝 *Special Instructions:* ${order.specialInstructions}\n`;
  }

  msg += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
  if (order.subtotal !== undefined) {
    msg += `💵 *Subtotal:* ₹${order.subtotal}\n`;
  }
  if (order.gst !== undefined && order.cgst !== undefined) {
    msg += `🏷️ *GST (2.5%):* ₹${order.gst}\n`;
    msg += `🏷️ *CGST (2.5%):* ₹${order.cgst}\n`;
  }
  msg += `💰 *Grand Total: ₹${order.total}*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;

  if (order.orderType === "Delivery") {
    msg += `\n📍 *Please share your live location on WhatsApp for swift delivery.*\n🚍 Free delivery within 1km.\n`;
  }

  msg += `\n✨ *Thank you for ordering with Tree of Life Cafe!*`;

  return msg;
}

function setupFormSubmit() {
  const form = document.getElementById("order-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const orderData = collectOrderDataFromForm();
    if (!orderData) return;

    orderData.id = "TOL" + Math.random().toString(36).substring(2, 7).toUpperCase();

    // Prepare complete WhatsApp message
    const msg = buildCompleteWhatsAppMessage(orderData);
    const encoded = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${CAFE_WHATSAPP_NUMBER}?text=${encoded}`;

    // Open WhatsApp synchronously on user click/tap so popups are never blocked
    try {
      window.open(whatsappUrl, "_blank");
    } catch (err) {
      console.warn("Popup blocked notice:", err);
    }

    // Display confirmation modal
    showConfirmation(orderData);
    showToast("Opening WhatsApp with complete order slip!", "success");

    // Asynchronously record order in POS kitchen counter
    try {
      fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data && data.orderId) {
            orderData.id = data.orderId;
            document.getElementById("confirm-order-id").textContent = `#${data.orderId}`;
          }
        })
        .catch((err) => console.warn("POS sync notice:", err));
    } catch (e) {
      console.warn("Async POS order notice:", e);
    }
  });
}

function showConfirmation(order) {
  const orderId = typeof order === "object" ? order.id : order;
  document.getElementById("confirm-order-id").textContent = `#${orderId}`;

  if (typeof order === "object") {
    const msg = buildCompleteWhatsAppMessage(order);
    const encoded = encodeURIComponent(msg);

    const cafeBtn = document.getElementById("confirm-whatsapp-cafe-btn");
    if (cafeBtn) {
      cafeBtn.href = `https://wa.me/${CAFE_WHATSAPP_NUMBER}?text=${encoded}`;
    }

    const selfBtn = document.getElementById("confirm-whatsapp-self-btn");
    if (selfBtn) {
      let cleanPhone = (order.phone || "").replace(/[^0-9]/g, "");
      if (cleanPhone.length === 10) cleanPhone = "91" + cleanPhone;
      selfBtn.href = `https://wa.me/${cleanPhone}?text=${encoded}`;
    }

    // Automatically open WhatsApp in new tab for instant convenience
    try {
      window.open(`https://wa.me/${CAFE_WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
    } catch (e) {
      // Browser popup blocked, link remains clickable
    }
  }

  document.getElementById("confirmation-overlay").classList.remove("hidden");

  // Celebratory Confetti Shower & Harmonic Chime
  if (window.confetti && !prefersReducedMotion()) {
    window.confetti({
      particleCount: 110,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#2D5A27", "#10B981", "#F59E0B", "#F5F0E8", "#D97706"],
    });
    setTimeout(() => {
      window.confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#2D5A27", "#F59E0B", "#10B981"],
      });
      window.confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#2D5A27", "#F59E0B", "#10B981"],
      });
    }, 250);
  }

  if (window.Scene3D) {
    window.Scene3D.playSound("success");
    window.Scene3D.triggerBounce();
  }
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
    success: "bg-[#0c2413] border border-amber-400/50 text-[#f5e29e] shadow-[0_10px_25px_rgba(0,0,0,0.5)]",
    error: "bg-[#2a0c0c] border border-red-500/50 text-red-200 shadow-[0_10px_25px_rgba(0,0,0,0.5)]",
    info: "bg-[#0c2413] border border-amber-400/40 text-[#f5e29e] shadow-[0_10px_25px_rgba(0,0,0,0.5)]",
  };

  toast.className = `toast ${colors[type] || colors.info} px-4 py-3 rounded-xl backdrop-blur-md flex items-center gap-3`;
  toast.innerHTML = `
    ${type === "success" ? '<svg class="w-5 h-5 flex-shrink-0 text-[#ffd700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>' : '<span class="text-amber-400 text-sm">✦</span>'}
    <span class="text-sm font-semibold">${message}</span>
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

// ============================================================================
// 3D Interactive Features, Quick Dock, Tilt Cards & Ambient Particle Engine
// ============================================================================

function setupCategoryDock() {
  const dock = document.getElementById("category-nav-dock");
  if (!dock) return;
  dock.innerHTML = "";

  MENU.forEach((cat, index) => {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = `dock-pill ${index === 0 ? "active" : ""}`;
    pill.dataset.category = cat.category;
    const icon = CATEGORY_ICONS[cat.category] || "🍽️";

    const count = cat.items.filter((item) => quantities[item.name] > 0).length;

    pill.innerHTML = `
      <span aria-hidden="true">${icon}</span>
      <span>${cat.category}</span>
      <span class="dock-badge ${count > 0 ? "" : "hidden"}">${count}</span>
    `;

    pill.addEventListener("click", () => {
      document.querySelectorAll(".dock-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      scrollPillInDock(pill);

      if (window.Scene3D) {
        window.Scene3D.setCategoryMood(cat.category);
        window.Scene3D.triggerBounce();
      }
      const label = document.getElementById("mood-category-label");
      if (label) label.textContent = `${icon} ${cat.category}`;

      const details = document.querySelector(
        `details.collapsible-category[data-category="${cssEscape(cat.category)}"]`
      );
      if (details) {
        document
          .querySelectorAll(".collapsible-category[open]")
          .forEach((d) => {
            if (d !== details) setCategoryOpen(d, false, { animate: false });
          });
        setCategoryOpen(details, true, { animate: true });
        details.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    dock.appendChild(pill);
  });
}

function updateCategoryDockCount(itemName) {
  let categoryName = "";
  for (const cat of MENU) {
    if (cat.items.some((i) => i.name === itemName)) {
      categoryName = cat.category;
      break;
    }
  }
  if (!categoryName) return;

  const pill = document.querySelector(`.dock-pill[data-category="${cssEscape(categoryName)}"]`);
  if (!pill) return;

  const badge = pill.querySelector(".dock-badge");
  if (!badge) return;

  const count = MENU.find((c) => c.category === categoryName).items.filter(
    (item) => quantities[item.name] > 0
  ).length;

  badge.textContent = count;
  if (count > 0) {
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }
}

function setupFilterChips() {
  const chips = document.querySelectorAll(".filter-chip");
  if (!chips.length) return;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");

      const filter = chip.dataset.filter;
      const categories = document.querySelectorAll(".collapsible-category");
      let firstOpen = false;

      categories.forEach((cat) => {
        const catName = cat.dataset.category || "";
        let match = false;

        if (filter === "all") {
          match = true;
        } else if (filter === "coffee") {
          match = catName.includes("Coffee") || catName.includes("Frappes");
        } else if (filter === "shakes") {
          match = catName.includes("Shakes") || catName.includes("Desserts") || catName.includes("Chocolate");
        } else if (filter === "food") {
          match = ["Pizza", "Rice", "Burgers", "Fries", "Pasta", "Salad", "Rolls", "Sandwiches", "Combos"].includes(catName);
        } else if (filter === "coolers") {
          match = catName.includes("Coolers") || catName.includes("Juices");
        }

        cat.classList.toggle("hidden", !match);
        if (match && !firstOpen) {
          setCategoryOpen(cat, true, { animate: true });
          firstOpen = true;
          if (window.Scene3D) {
            window.Scene3D.setCategoryMood(catName);
          }
          const label = document.getElementById("mood-category-label");
          if (label) label.textContent = `${CATEGORY_ICONS[catName] || "🍽️"} ${catName}`;
        } else if (match) {
          setCategoryOpen(cat, false, { animate: false });
        }
      });
    });
  });
}

function setupItemRowTilt() {
  if (prefersReducedMotion()) return;
  const rows = document.querySelectorAll(".menu-item-row");
  rows.forEach((row) => {
    row.addEventListener("mousemove", (e) => {
      const rect = row.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      row.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
      row.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
      row.style.setProperty("--mx", `${x.toFixed(1)}px`);
      row.style.setProperty("--my", `${y.toFixed(1)}px`);
    });

    row.addEventListener("mouseleave", () => {
      row.style.setProperty("--rx", "0deg");
      row.style.setProperty("--ry", "0deg");
    });
  });
}

function setup3DToolbar() {
  const soundBtn = document.getElementById("sound-toggle-btn");
  const iconOn = document.getElementById("sound-icon-on");
  const iconOff = document.getElementById("sound-icon-off");

  if (soundBtn && iconOn && iconOff) {
    soundBtn.addEventListener("click", () => {
      if (window.Scene3D) {
        const isEnabled = window.Scene3D.toggleSound();
        if (isEnabled) {
          iconOn.classList.remove("hidden");
          iconOff.classList.add("hidden");
          window.Scene3D.playSound("pop");
          showToast("Sound effects enabled", "info");
        } else {
          iconOn.classList.add("hidden");
          iconOff.classList.remove("hidden");
          showToast("Sound effects muted", "info");
        }
      }
    });
  }

  const spinBtn = document.getElementById("spin-cup-btn");
  if (spinBtn) {
    spinBtn.addEventListener("click", () => {
      if (window.Scene3D) {
        window.Scene3D.triggerBounce();
      }
      if (window.confetti && !prefersReducedMotion()) {
        const rect = spinBtn.getBoundingClientRect();
        window.confetti({
          particleCount: 22,
          spread: 50,
          origin: {
            x: (rect.left + rect.width / 2) / window.innerWidth,
            y: (rect.top + rect.height / 2) / window.innerHeight,
          },
          colors: ["#2D5A27", "#F59E0B", "#F5F0E8"],
        });
      }
    });
  }

  const glanceCheckout = document.getElementById("glance-checkout-btn");
  if (glanceCheckout) {
    glanceCheckout.addEventListener("click", () => {
      const customerName = document.getElementById("customerName");
      const phone = document.getElementById("phone");

      if (!customerName || !phone || !customerName.value.trim() || !phone.value.trim()) {
        const orderForm = document.getElementById("order-form");
        if (orderForm) {
          orderForm.scrollIntoView({ behavior: "smooth", block: "start" });
          setTimeout(() => {
            if (customerName) customerName.focus();
          }, 450);
        }
        showToast("Please enter your name & phone to order on WhatsApp", "info");
      } else {
        document.getElementById("submit-btn").click();
      }
    });
  }
}

function setupKeyboardShortcuts() {
  window.addEventListener("keydown", (e) => {
    const searchInput = document.getElementById("menu-search");
    if (!searchInput) return;

    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    } else if (e.key === "Escape" && document.activeElement === searchInput) {
      searchInput.value = "";
      searchInput.dispatchEvent(new Event("input"));
      searchInput.blur();
    }
  });
}

function setupAmbientParticles() {
  const canvas = document.getElementById("ambient-particles-canvas");
  if (!canvas || prefersReducedMotion()) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const COUNT = 30;

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 1.5 + Math.random() * 2.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -0.15 - Math.random() * 0.35,
      alpha: 0.15 + Math.random() * 0.3,
      fadeSpeed: 0.003 + Math.random() * 0.004,
      hue: 35 + Math.random() * 15,
    });
  }

  function renderParticles() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.alpha += p.fadeSpeed;

      if (p.alpha > 0.45 || p.alpha < 0.1) {
        p.fadeSpeed = -p.fadeSpeed;
      }

      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${Math.max(0, p.alpha)})`;
      ctx.fill();
    });

    requestAnimationFrame(renderParticles);
  }

  requestAnimationFrame(renderParticles);
}

function updateDesktopGlance() {
  const glanceContainer = document.getElementById("desktop-order-glance");
  const badge = document.getElementById("glance-item-badge");
  const price = document.getElementById("glance-total-price");
  if (!glanceContainer || !badge || !price) return;

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
  badge.textContent = `${count} item${count !== 1 ? "s" : ""}`;
  price.textContent = `₹${total}`;

  if (count > 0) {
    glanceContainer.classList.remove("opacity-60");
  } else {
    glanceContainer.classList.add("opacity-60");
  }
}

function setupDockScrollSpy() {
  const categories = document.querySelectorAll(".collapsible-category");
  if (!categories.length || !("IntersectionObserver" in window)) return;

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          const categoryName = entry.target.dataset.category;
          if (!categoryName) return;

          document.querySelectorAll(".dock-pill").forEach((pill) => {
            if (pill.dataset.category === categoryName) {
              pill.classList.add("active");
              // Safely scroll only the dock horizontal bar without touching window scroll!
              scrollPillInDock(pill);
            } else {
              pill.classList.remove("active");
            }
          });

          if (window.Scene3D) {
            window.Scene3D.setCategoryMood(categoryName);
          }
          const label = document.getElementById("mood-category-label");
          if (label) {
            const icon = CATEGORY_ICONS[categoryName] || "🍽️";
            label.textContent = `${icon} ${categoryName}`;
          }
        }
      });
    },
    { threshold: [0.2, 0.4] }
  );

  categories.forEach((cat) => spyObserver.observe(cat));
}


