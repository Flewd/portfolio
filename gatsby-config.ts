import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-emilia-core/gatsby-config.mjs
    siteTitle: `Mike Flood's Game Development Portfolio`,
    siteTitleAlt: `Mike Flood's Game Development Portfolio`,
    siteHeadline: `Mike Flood`,
    siteUrl: `https://mike-flood.com`,
    siteDescription: `Mike Flood's Game Development Portfolio`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@lekoarts_de`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mike Flood`,
        short_name: `Mike Flood`,
        description: `Mike Flood's Game Development Portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
     "gatsby-plugin-theme-ui",
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {

        name: `Mike Flood`,
        showThemeAuthor: true,
        formatString: 'MM/DD/YYYY',
        location: 'Chicago',
        socialMedia: [
          {
            title: 'Resume',
            href: 'https://drive.google.com/file/d/1Y4lS-cI8iUsy_Cz8Ep4hda-_6qFItyQE/view?usp=sharing'
          },
          {
            title: 'Itch.io',
            href: 'https://flewd.itch.io/'
          },
          {
            title: 'GitHub',
            href: 'https://github.com/Flewd'
          },
          {
            title: 'linkedIn',
            href: 'https://www.linkedin.com/in/michaelrflood/'
          },
          {
            title: 'Bluesky',
            href: 'https://bsky.app/profile/mikeflood.bsky.social'
          },
        ]

      },
    },
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
