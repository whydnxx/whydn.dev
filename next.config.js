module.exports = {
  async redirects() {
    return [
      {
        source: "/live",
        destination: "https://www.youtube.com/channel/UCreUvMLZ6xOaJ1DxyBa--AA",
        permanent: true,
      },
      {
        source: "/support",
        destination: "https://saweria.co/whydnxx",
        permanent: true,
      },
    ];
  },
};
