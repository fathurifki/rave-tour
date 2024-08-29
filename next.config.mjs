const nextConfig = {
  reactStrictMode: true,
  target: "server",
  generateEtags: false,
  onDemandEntries: {
    maxInactiveAge: 0,
    pagesBufferLength: 1,
  },
};

export default nextConfig;
