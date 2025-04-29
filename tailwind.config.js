/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 🎨 Enhanced Main Palette
        primary: "#006BB8",
        secondary: "#2FA0DF",
        tertiary: "#FFC973",
        quaternary: "#FEE3B3",

        // 🎯 Professional Alert System
        alert: {
          success: "#48BB78",
          warning: "#ED8936",
          error: "#F56565",
          info: "#4299E1",
        },

        // 🖌️ Optimized Color Extensions
        color: {
          1: "#8A4FFF",
          2: "#FFB347",
          3: "#FF6B6B",
          4: "#66CC66",
          5: "#6B7AFF",
          6: "#FF8CC6",
        },
        stroke: {
          1: "#26242C",
        },
        
        // 🏁 Refined Neutral Scale
        n: {
          1: "#FFFFFF",
          2: "#F3F4F6",
          3: "#E5E7EB",
          4: "#9CA3AF",
          5: "#4B5563",
          6: "#374151",
          7: "#1F2937",
          8: "#111827",
          9: "#4F46E5",
          10: "#4338CA",
          11: "#1E1B4B",
          12: "#312E81",
          13: "#6B7280",
        },
      },

      // 🖋️ Enhanced Typography
      fontFamily: {
        sans: ["var(--font-sora)", "system-ui", ...fontFamily.sans],
        code: ["var(--font-code)", "ui-monospace", ...fontFamily.mono],
        grotesk: ["var(--font-grotesk)", "Inter", ...fontFamily.sans],
      },

      // 🔠 Improved Letter Spacing
      letterSpacing: {
        tagline: ".15em",
        tighter: "-0.02em",
        tight: "-0.01em",
      },

      // 📏 Refined Spacing System
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
        18: "4.5rem",
      },

      // 🎛️ Enhanced Opacity
      opacity: {
        15: ".15",
        85: ".85",
      },

      // 🔄 Smoother Transitions
      transitionDuration: {
        DEFAULT: "250ms",
        fast: "150ms",
        slow: "400ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      // 📚 z-Index Hierarchy
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        max: "999",
      },

      // 🖌️ Border Refinements
      borderWidth: {
        DEFAULT: "0.0625rem",
        1.5: "0.09375rem",
        3: "0.1875rem",
      },

      // 🎨 Enhanced Gradients
      backgroundImage: {
        "radial-gradient": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "conic-gradient": "conic-gradient(from 225deg, #FFB347, #79FFF7, #8A4FFF, #FF8CC6, #FFB347)",
        "primary-gradient": "linear-gradient(135deg, #8A4FFF 0%, #6B7AFF 100%)",
      },
      
      // ✨ New Shadows
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "primary-glow": "0 0 12px -2px rgba(138, 79, 255, 0.5)",
      },
    },
  },

  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities,theme }) {
      addBase({
        ":root": {
          "--color-text": theme("colors.n.8"),
          "--color-bg": theme("colors.n.1"),
          "--color-surface": theme("colors.n.2"),
        },
        ".dark": {
          "--color-text": theme("colors.n.2"),
          "--color-bg": theme("colors.n.8"),
          "--color-surface": theme("colors.n.7"),
        },
        html: {
          "@apply scroll-smooth": {},
        },
      });

      addComponents({
        // 🖋️ Refined Typography Scale
        ".h1": {
          "@apply font-semibold text-[2.25rem] leading-[2.75rem] tracking-tight md:text-[2.5rem] md:leading-[3rem] lg:text-[3rem] lg:leading-[3.75rem] xl:text-[3.5rem] xl:leading-[4.25rem]": {},
        },
        ".h2": {
          "@apply text-[1.5rem] leading-[2rem] tracking-tight md:text-[1.75rem] md:leading-[2.25rem] lg:text-[2rem] lg:leading-[2.5rem] xl:text-[2.25rem] xl:leading-[3rem]": {},
        },
        ".h3": {
          "@apply text-[1.25rem] leading-[1.75rem] md:text-[1.5rem] md:leading-[2rem]": {},
        },
        ".h4": {
          "@apply text-[1.125rem] leading-[1.5rem] md:text-[1.25rem] md:leading-[1.75rem]": {},
        },
        ".h5": {
          "@apply text-[1rem] leading-[1.5rem] font-medium": {},
        },
        ".h6": {
          "@apply text-[0.875rem] leading-[1.25rem] font-semibold uppercase tracking-wider": {},
        },
        ".body-1": {
          "@apply text-[0.9375rem] leading-[1.625rem] md:text-[1.0625rem] md:leading-[1.75rem] lg:text-[1.1875rem] lg:leading-[1.875rem]": {},
        },
        ".body-2": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[0.9375rem] md:leading-[1.625rem]": {},
        },
        ".caption": {
          "@apply text-[0.75rem] leading-[1.25rem] tracking-tight": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase": {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal italic pl-4 border-l-2 border-n-4": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider transition-colors": {},
        },
        
        // 🧩 New UI Components
        ".card": {
          "@apply bg-n-2 rounded-lg p-6 shadow-sm border border-n-3 dark:bg-n-7 dark:border-n-6": {},
        },
        ".input": {
          "@apply w-full bg-n-2 border border-n-3 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors dark:bg-n-7 dark:border-n-6": {},
        },
      });

      addUtilities({
        // 🛠️ Enhanced Utilities
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
        ".text-balance": {
          "text-wrap": "balance",
        },
        ".perspective-1000": {
          "perspective": "1000px",
        },
        ".preserve-3d": {
          "transform-style": "preserve-3d",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
      });
    }),
  ],
};