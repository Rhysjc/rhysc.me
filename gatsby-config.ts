import type { GatsbyConfig } from 'gatsby';

interface SitemapQuery {
  allSitePage: {
    nodes: Array<{
      path: string
    }>
  }
  allMdx: {
    nodes: Array<{
      frontmatter: {
        slug: string
        date: string
      }
    }>
  }
};

const config: GatsbyConfig = {
  graphqlTypegen: true,
  siteMetadata: {
    siteUrl: 'https://rhysc.me',
  },
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
    {
      resolve: 'gatsby-plugin-mixpanel',
      options: {
        // Not a secret!
        apiToken: '9484a7cca51ea941a6d7e1a14e016a76',
        enableOnDevMode: false,
        pageViews: 'all',
        trackPageViewsAs: 'Page view',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/',
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
          allMdx {
            nodes {
              frontmatter {
                slug
                date(formatString: "YYYY-MM-DD")
              }
            }
          }
        }        
        `,
        resolvePages: (data: SitemapQuery) => {
          const blogPostNodes: Record<string, { lastmod: string }> = data.allMdx.nodes.reduce((currentNodes, node) => {
            return {
              ...currentNodes,
              [`/blog/${node.frontmatter.slug}/`]: { lastmod: node.frontmatter.date },
            };
          }, {});

          return data.allSitePage.nodes.map((node) => ({ ...node, ...blogPostNodes[node.path] }));
        },
        serialize: ({ path, lastmod }: { path: string, lastmod?: string }) => ({
          url: path,
          lastmod,
        }),
      },
    },
  ],
};

export default config;
