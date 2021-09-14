module.exports = {
  async redirects() {
    return [
      {
        source: "/live",
        destination: "https://www.twitch.tv/itsnsomnia",
        permanent: true,
      },
    ];
  },
};
