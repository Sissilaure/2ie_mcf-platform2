/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        "2ie-red": "#C8102E",
        "2ie-yellow": "#F5A623",
        "2ie-green": "#1E7A34",
        "2ie-blue": "#1565C0",
        "2ie-dark": "#0A1628",
        "2ie-navy": "#0d3d91",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0A1628 0%, #0d3d91 50%, #1565C0 100%)",
        "mcf-gradient":
          "linear-gradient(90deg, #C8102E, #F5A623, #1E7A34, #1565C0)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "slide-right": "slideRight 0.5s ease forwards",
        "count-up": "countUp 2s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.08)",
        "card-hover": "0 12px 40px rgba(0,0,0,0.15)",
        glow: "0 0 30px rgba(21,101,192,0.3)",
        "glow-red": "0 0 30px rgba(200,16,46,0.3)",
        "glow-green": "0 0 30px rgba(30,122,52,0.3)",
        glass: "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        "2ie": {
          primary: "#1565C0",
          "primary-content": "#ffffff",
          secondary: "#F5A623",
          "secondary-content": "#ffffff",
          accent: "#1E7A34",
          "accent-content": "#ffffff",
          neutral: "#0A1628",
          "neutral-content": "#ffffff",
          "base-100": "#F8FAFC",
          "base-200": "#F1F5F9",
          "base-300": "#E2E8F0",
          "base-content": "#0F172A",
          info: "#1565C0",
          success: "#1E7A34",
          warning: "#F5A623",
          error: "#C8102E",
        },
      },
    ],
    darkTheme: false,
    base: true,
    styled: true,
    utils: true,
  },
};
