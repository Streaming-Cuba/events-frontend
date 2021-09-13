module.exports = {
  future: {
    webpack5: true,
  },
  async redirects() {
    return [
      {
        source: "/:id",
        destination: "/event/:id",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["img.youtube.com", "res.cloudinary.com", "media.streamingcuba.com"],
  },
};
