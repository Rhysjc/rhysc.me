import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
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
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog/`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
  ],
};

export default config;
