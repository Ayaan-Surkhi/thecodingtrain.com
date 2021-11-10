module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.thecodingtrain.com',
    title: 'The Coding Train'
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        cssLoaderOptions: {
          localIdentName: '[name]-[local]-[hash:base64:3]'
        },
        postCssPlugins: [
          require(`postcss-import`),
          require('postcss-normalize'),
          require('postcss-nesting'),
          require('postcss-custom-properties')({
            importFrom: './src/styles/variables.css'
          }),
          require('postcss-calc')(),
          require('postcss-custom-media')({
            importFrom: './src/styles/variables.css'
          })
        ]
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'tracks',
        path: './content/tracks'
      },
      __key: 'tracks'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'videos',
        path: './content/videos'
      },
      __key: 'videos'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'challenges',
        path: './content/challenges'
      },
      __key: 'challenges'
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rules: {
          include: './src/images'
        }
      }
    }
  ]
};
