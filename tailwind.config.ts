import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	darkMode: "selector",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"t1-secondary": "#af9660",
				"t1-primary-dark": "#DB1A23ff",
				"t1-primary": "#831415ff",
			},
			fontFamily: {
				sans: ["var(--family-montserrat)", ...fontFamily.sans],
				serif: ["var(--family-poppins)", ...fontFamily.serif],
			},
			backgroundImage: {
				"border-challenger":
					"linear-gradient(45deg, #fef066ff 0, #a3661dff 60%, #80430dff 100%);",
				"border-master":
					"linear-gradient(-50deg, #889c95e6 0, #435951e6 50%, #fcf379e6 100%);",
				"border-diamond":
					"linear-gradient(50deg, #7abebdff,#34a4cfff,#2768aeff,#0d2378ff);",
				"border-platinum":
					"linear-gradient(50deg, #419899ff, #59e87bff, #162925ff)",
				"border-gold":
					"linear-gradient(150deg,#fbf4c4ff 0,#bc8e41ff 20%,#602705ff 50%,#940805ff 80%,#590708ff 100%)",
				"border-silver":
					"linear-gradient(45deg, #dee9e1ff 0, #52655aff 80%, #807638ff 100%)",
				"border-bronze":
					" linear-gradient(140deg,#cfbb86ff,#73340aff,#432a14ff,#2e1a0bff,#120803ff)",
			},
		},
	},
	plugins: [],
} satisfies Config;
