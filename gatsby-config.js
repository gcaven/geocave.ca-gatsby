module.exports = {
  siteMetadata: {
    title: 'Caven.Codes',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts/`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
  ],
}
