module.exports = {
  siteMetadata: {
    name: `お持ち帰りごはん 旭川版`,
    siteUrl: process.env.URL || "",
    title: `旭川の飲食店をみんなで応援しよう！`,
    description: `旭川地方のテイクアウトサービスを実施しているお店を掲載しております`,
    keywords: [`旭川`, `ごはん`, `グルメ`, `テイクアウト`, `持ち帰り`, `宅配`]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remote-filesystem`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: process.env.URL || ""
      }
    },
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: `types/graphql-types.d.ts`,
        documentPaths: [
          "./src/**/*.{ts,tsx}",
          "./node_modules/gatsby-*/**/*.js"
        ]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true
      }
    },
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `お持ち帰りごはん 旭川版`,
        short_name: `お持ち帰りごはん`,
        lang: `ja`,
        start_url: `/`,
        background_color: `#f5f5f1`,
        theme_color: `#221f1f`,
        display: `standalone`,
        icon: `static/logo.png`
      }
    },
    `gatsby-plugin-offline`
  ]
};
