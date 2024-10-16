/** @type {import('next').NextConfig} */
const nextConfig = {
    theme: {
        extend: {
          backgroundImage: {
            'hero-banner': "url('/img/banner.webp')",
           
          }
        }
      }
};

export default nextConfig;
