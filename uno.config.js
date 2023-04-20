import {
	defineConfig,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerVariantGroup,
} from "unocss";
import features from "./src/utils/features.js";

export default defineConfig({
	shortcuts: { container: "max-w-5xl mx-auto" },
	rules: [
		[
			"header-bg",
			{
				"background-image":
					"linear-gradient(rgba(38, 57, 88, 0.89), rgba(38, 57, 88, 0.89)), url('/assets/header.jpg')",
			},
		],
	],
	presets: [
		presetUno(),
		presetIcons({
			extraProperties: {
				display: "inline-block",
				"vertical-align": "middle",
			},
		}),
		presetWebFonts({ provider: "google", fonts: { opensans: "Open Sans" } }),
	],
	transformers: [transformerVariantGroup()],
	safelist: [...features.map((feature) => `i-${feature.icon}`)],
});
