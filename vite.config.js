import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import UnoCSS from "unocss/vite";
import { presetUno, presetWebFonts } from "unocss";

export default defineConfig({
	plugins: [
		solidPlugin(),
		UnoCSS({
			shortcuts: { container: "max-w-5xl mx-auto" },
			rules: [
				[
					"header-bg",
					{
						"background-image":
							"linear-gradient(rgba(38, 57, 88, 0.89), rgba(38, 57, 88, 0.89)), url('/src/assets/header.jpg')",
					},
				],
			],
			presets: [
				presetUno(),
				presetWebFonts({ provider: "google", fonts: { opensans: "Open Sans" } }),
			],
		}),
	],
	build: {
		target: "esnext",
	},
});
