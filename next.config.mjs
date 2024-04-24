/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
			config.module.rules.push({
					test: /\.svg$/i,
					issuer: /\.[jt]sx?$/,
					use: ['@svgr/webpack'],
			});

			return config;
	},
	images: {
			domains: ['rhstore2.artem.et9.ru'],
	}
};

export default nextConfig;
