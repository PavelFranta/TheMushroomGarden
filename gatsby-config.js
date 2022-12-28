module.exports = {
  siteMetadata: {
    title: `The Mushroom Garden`,
    siteUrl: `https://themushroomgarden.netlify.app`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Mushroom Garden`,
        short_name: `TheMushroomGarden`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-postcss',
  ],
};
