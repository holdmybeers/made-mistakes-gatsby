module.exports = {
  // pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Made Mistakes', // Navigation and site title
  titleAlt: 'Made Mistakes', // Title for schema.org JSONLD
  description: 'Personal website of designer Michael Rose (@mmistakes).',
  url: 'https://mademistakes.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  image: {
    // Used for SEO, relative to /static/ folder
    src: '/images/made-mistakes-logo.png',
    width: 384,
    height: 384,
  },
  ogLanguage: 'en_US', // Facebook Language
  staticmanApi:
    'https://api.staticman.net/v3/entry/github/mmistakes/gatsby-test/master/comments',

  // JSONLD / Manifest
  favicon: 'src/images/made-mistakes-logo.png', // Used for manifest favicon generation
  shortName: 'Made Mistakes', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Michael Rose', // Author for schema.org JSONLD
  themeColor: '#ffffff',
  backgroundColor: '#000000',

  twitter: '@mmistakes', // Twitter username
  facebook: 'Made Mistakes', // Facebook site name
  googleAnalyticsID: '',
}
