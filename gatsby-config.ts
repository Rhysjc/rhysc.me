import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'rhysc.me',
    siteUrl: 'https://rhysc.me',
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'work sans:400,600',
          'roboto mono:400,600',
        ],
      },
    },
    'gatsby-plugin-dark-mode',
  ],
};

export default config;
