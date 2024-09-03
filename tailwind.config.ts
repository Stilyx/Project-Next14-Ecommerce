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
			desktop: { min: "769px" },
			tablet: { max: "768px" },
			mobile: { max: "450px" },
		},
		colors: {
			primary: {
				100: "#FBAF85",
				200: "#D87D4A",
			},
			secondary: {
				100: "#101010",
				200: "#000000",
			},
			tertiary: {
				100: "#FFFFFF",
				200: "#FAFAFA",
				300: "#F1F1F1",
			},
		},
		fontFamily: {
			manrope: ["Manrope", "sans-serif"],
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
