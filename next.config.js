module.exports = {
    future: {
        webpack5: true,
    },
    async redirects() {
        return [
          {
            source: '/:id',
            destination: '/event/:id',
            permanent: true,
          },
          {
            source: '/vote/:id',
            destination: '/event/:id',
            permanent: true,
          },
        ]
      },
};