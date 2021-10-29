module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Basic",
    description: "Basics of Gatsby"
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp", "gatsby-plugin-sharp","gatsby-plugin-image",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
