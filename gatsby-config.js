/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Yoichi Onishi | Engineer`,
    author: `Yoichi Onishi`,
    description: `I major in mechanical engineering. I am particularly interested in biomechanics and information engineering. I conduct research with the goal of applying machine learning to biomechanics.`,
    siteUrl: `https://barancezayirli.com/`,
    social: {
      twitter: `barancezayirli`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yoichi Onishi | Engineer`,
        short_name: `CV`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#38B2AC`,
        display: `standalone`,
        icon: 'src/assets/site-icon.png'
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-plugin-netlify-cms',
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true, // Enable tailwindcss support
      }
    }
  ],
};
