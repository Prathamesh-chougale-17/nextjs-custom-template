/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
      remotePatterns:[
        {
          protocol: 'https',
          hostname:  "api.microlink.io"
        }
      ]
    },
    async headers() {
      return [
        {
          source: '/:path*{/}?',
          headers: [
            {
              key: 'X-Accel-Buffering',
              value: 'no',
            },
          ],
        },
      ];
    },
};

export default nextConfig;
