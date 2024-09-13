import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      desktop: { min: "962px" },
      tablet: { max: "962px" },
      mobile: { max: "600px" },
    },
    colors: {
      primary: {
        100: "#FBAF85",
        200: "#D87D4A",
      },
      secondary: {
        100: "#101010",
        200: "#000000",
        300: "#191919",
      },
      tertiary: {
        100: "#FFFFFF",
        200: "#FAFAFA",
        300: "#F1F1F1",
        400: "#CFCFCF",
        500: "#4C4C4C",
      },
      status: {
        red: "#CD2C2C",
      },
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    backgroundImage: {
      "hero-desktop": "url('/images/home/desktop/image-hero.jpg')",
      "hero-tablet": "url('/images/home/tablet/image-hero.jpg')",
      "hero-mobile": "url('/images/home/mobile/image-hero.jpg')",
      "pattern-circle": "url('/images/home/desktop/pattern-circles.svg')",
      "zx7-speaker-desktop":
        "url('/images/home/desktop/image-speaker-zx7.jpg')",
      "zx7-speaker-mobile": "url('/images/home/mobile/image-speaker-zx7.jpg')",
      "best-gear-desktop": "url('/images/shared/desktop/image-best-gear.jpg')",
      "best-gear-tablet": "url('/images/shared/tablet/image-best-gear.jpg')",
      "best-gear-mobile": "url('/images/shared/mobile/image-best-gear.jpg')",
    },
    boxShadow: {
      "icon-shadow": "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;",
    },
    extend: {
      typography: () => ({
        "headline-h1": {
          css: {
            fontWeight: 700,
            fontSize: "3.5rem",
            lineHeight: "3.625rem",
            letterSpacing: "0.125rem",
          },
        },
        "headline-h2": {
          css: {
            fontWeight: 700,
            fontSize: "2.5rem",
            lineHeight: "2.75rem",
            letterSpacing: "0.089rem",
          },
        },
        "headline-h3": {
          css: {
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: "2.25rem",
            letterSpacing: "0.071rem",
          },
        },
        "headline-h4": {
          css: {
            fontWeight: 700,
            fontSize: "1.75rem",
            lineHeight: "2.391rem",
            letterSpacing: "0.125rem",
          },
        },
        "headline-h5": {
          css: {
            fontWeight: 700,
            fontSize: "1.5rem",
            lineHeight: "2.049rem",
            letterSpacing: "0.107rem",
          },
        },
        "headline-h6": {
          css: {
            fontWeight: 700,
            fontSize: "1.125rem",
            lineHeight: "1.537rem",
            letterSpacing: "0.081rem",
          },
        },
        body: {
          css: {
            fontWeight: 400,
            fontSize: "0.938rem",
            lineHeight: "1.563rem",
          },
        },
        overline: {
          css: {
            fontWeight: 400,
            fontSize: "0.875rem",
            lineHeight: "1.195rem",
            letterSpacing: "0.625rem",
          },
        },
        "sub-title": {
          css: {
            fontWeight: 400,
            fontSize: "0.813rem",
            lineHeight: "1.563rem",
            letterSpacing: "0.058rem",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
