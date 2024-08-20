/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  redirects: async()=>{
    return [
    {
      source: "/product",
      destination: "/studentlist",
      permanent:false // false means k product page hamne permanently delete nhi kia
    },
  ]
  }
};

export default nextConfig;
