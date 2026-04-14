import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import svgr from "vite-plugin-svgr"
import path from "path";

export default defineConfig({
	plugins: [
		laravel({
			input: ['resources/css/app.css', 'resources/js/app.tsx'],
			refresh: true,
		}),
		tailwindcss(),
		svgr(),
	],
	server: {
		watch: {
			ignored: ['**/storage/framework/views/**'],
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "resources/js"),
			"@components": path.resolve(__dirname, "resources/js/components"),
			"@lib": path.resolve(__dirname, "resources/js/lib"),
			"@layouts": path.resolve(__dirname, "resources/js/layouts"),
			"@pages": path.resolve(__dirname, "resources/js/pages"),
			"@styles": path.resolve(__dirname, "resources/js/styles"),
			"@assets": path.resolve(__dirname, "resources/js/assets"),
		},
	},
});
