/** @type {import('next').NextConfig} */
const nextConfig = {
    // Cấu hình redirection
    async redirects() {
      return [
        {
          source: '/news/:id', // Đường dẫn nguồn
          destination: '/newsDetail/:id', // Đường dẫn đích
          permanent: true, // Redirection vĩnh viễn
        },
      ];
    },
  };
  
  // Xuất cấu hình
  export default nextConfig;
  