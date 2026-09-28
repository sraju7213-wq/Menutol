/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./collapsible_categories.html"
  ],
  safelist: [
    // Dynamic category classes from script.js CATEGORY_COLORS
    "bg-stone-100", "border-stone-200", "text-stone-700", "bg-stone-200", "text-stone-600",
    "bg-amber-50", "border-amber-100", "text-amber-800", "bg-amber-100", "text-amber-600",
    "border-amber-200", "text-amber-700",
    "bg-amber-900/10", "border-amber-900/20", "text-amber-950", "bg-amber-900/20", "text-amber-900",
    "bg-sky-50", "border-sky-100", "text-sky-800", "bg-sky-100", "text-sky-600",
    "bg-pink-50", "border-pink-100", "text-pink-800", "bg-pink-100", "text-pink-600",
    "bg-red-50", "border-red-100", "text-red-800", "bg-red-100", "text-red-600",
    "border-red-200", "text-red-700",
    "bg-yellow-50", "border-yellow-100", "text-yellow-800", "bg-yellow-100", "text-yellow-600",
    "bg-orange-50", "border-orange-100", "text-orange-800", "bg-orange-100", "text-orange-600",
    "bg-emerald-50", "border-emerald-100", "text-emerald-800", "bg-emerald-100", "text-emerald-600",
    "bg-teal-50", "border-teal-100", "text-teal-800", "bg-teal-100", "text-teal-600",
    "bg-green-50", "border-green-100", "text-green-800", "bg-green-100", "text-green-600",
    "bg-green-100", "text-green-600", "bg-green-600",
    "bg-indigo-50", "border-indigo-100", "text-indigo-800", "bg-indigo-100", "text-indigo-600",
    "bg-blue-50", "border-blue-100", "text-blue-800", "bg-blue-100", "text-blue-600",
    "bg-cyan-50", "border-cyan-100", "text-cyan-800", "bg-cyan-100", "text-cyan-600",
    "bg-rose-50", "border-rose-100", "text-rose-800", "bg-rose-100", "text-rose-600",
    "bg-cafe-green", "text-cafe-green", "text-cafe-green-dark", "text-cafe-green-light",
    "bg-cafe-beige", "bg-cafe-beige-dark", "bg-cafe-cream",
    "animate-slide-up", "animate-scale-in", "animate-pulse-soft", "animate-bounce-subtle", "animate-spin-slow"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        cafe: {
          green: "#16401F",
          "green-light": "#256333",
          "green-dark": "#091E0E",
          "green-surface": "#0E2814",
          gold: "#D4AF37",
          "gold-light": "#F5E29E",
          "gold-dark": "#B38728",
          beige: "#08170B",
          "beige-dark": "#0F2613",
          cream: "#173B1E",
        },
      },
      animation: {
        "slide-up": "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in": "scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "bounce-subtle": "bounceSubtle 0.6s ease-out",
        "spin-slow": "spin 12s linear infinite",
        "slide-in": "slideIn 0.3s ease-out",
        "pulse-once": "pulseOnce 0.5s ease-out",
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseOnce: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
    },
  },
  plugins: [],
};
