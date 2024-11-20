import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: 'standalone',
	images: {
		remotePatterns: [
			{
				hostname: '*',
				protocol: 'http'
			},
			{
				hostname: '*',
				protocol: 'https'
			}
		]
	}
}

export default nextConfig
