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
      {
        source: "/event/:id",
        destination: "/vote/:id",
        permanent: false,
      },
    ];
  },
  images: {
    domains: ["img.youtube.com", "res.cloudinary.com", "media.streamingcuba.com"],
  },
};
