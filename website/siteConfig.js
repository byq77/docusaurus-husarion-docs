/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/logo_husarion_sd'.
    image: '/img/logo_husarion_sd',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Husarion Docs', // Title for your website.
  tagline: 'A website for testing',
  // url: 'https://your-docusaurus-test-site.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  url: 'https://byq77.github.io',
  baseUrl: '/docusaurus-husarion-docs/',
  disableHeaderTitle: true,
  disableTitleTagline: true,
  docsUrl: '', // remove /docs/ from URL
  // Used for publishing and more
  projectName: 'docusaurus-husarion-docs',
  organizationName: 'byq77',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'tutorials/index', label: 'Tutorials'},
    {doc: 'doc4', label: 'Manuals'},
    {doc: 'doc4', label: 'Software'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
    {search: true}
  ],

  // If you have users set above, you add it here:
  users,
  usePrism: ['jsx'],
  /* path to images for header/footer */
  headerIcon: 'img/husarion_logo_white.svg',
  footerIcon: 'img/husarion_logo_white.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#d0112b',
    secondaryColor: '#a50d22',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  algolia: {
    apiKey: 'my-api-key',
    indexName: 'my-index-name',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Husarion`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    '/js/scrollspy.js',
    '/js/sidebarScroll.js',
  ],
  scrollToTop: true,
  scrollToTopOptions: {
    diameter: 56, // px
    cornerOffset: 20, // px
    backgroundColor: '#d0112b',
    textColor: '#fff',
    zIndex: 100,
  },
  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,
  // Open Graph and Twitter card images.
  ogImage: 'img/favicon.ico',
  twitterImage: 'img/favicon.ico',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;