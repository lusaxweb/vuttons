module.exports = {
  title: 'Vuttons',
	description: 'Buttons Components for Vuejs',
  // base: '/vuttons/',
  head: [
    ['link', { rel: 'icon', href: '/favicon-vuttons2.jpg' }]
  ],
  plugins: [
    ['container', {
      type: 'tip',
      defaultTitle: '',
    }],
    ['container', {
      type: 'warning',
      defaultTitle: '',
    }],
    ['container', {
      type: 'danger',
      defaultTitle: '',
    }],
  ],
  themeConfig: {
    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
      // If set to true, the default text config will be:
      // updatePopup: {
      //    message: "New content is available.",
      //    buttonText: "Refresh"
      // }
    },
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'lusaxweb/vuttons',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'lusaxweb/vuttons',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to true, set to false to disable
    // editLinks: true,
    // // custom text for edit link. Defaults to "Edit this page"
    logo:'/vuttons-logo-vertical.png',
    nav: [
      { text: 'Buttons', link: '/' },
      { text: 'Docs', link: '/docs/' },
      {
        text: 'Learn More',
        items: [
          // { text: 'API', link: '/api/' },
          { text: 'Blog', link: 'https://lusaxweb.github.io/vuesax-blog/articles' },
          { text: 'Tips', link: 'https://lusaxweb.github.io/vuesax-blog/tips' },
        ]
      },
      {
        text: 'Ecosystem',
        items: [
          {
            text: 'Social',
            items: [
              { text: 'GitHub', link: 'https://github.com/lusaxweb/vuttons' },
              { text: 'Behance', link: 'https://www.behance.net/ManuelRovira' },
              { text: 'Dribbble', link: 'https://dribbble.com/ManuelRovira' },
            ]
          },
          {
            text: 'Help',
            items: [
              { text: 'Issues', link: 'https://github.com/lusaxweb/vuttons/issues' },
              { text: 'Edit Page', link: 'https://github.com/lusaxweb/vuttons' },
              { text: 'Latest Releases', link: 'https://github.com/lusaxweb/vuttons/releases' },
            ]
          },
          {
            text: 'Contact',
            items: [
              { text: 'Lusaxweb', link: 'http://www.lusaxweb.com.ve' },
              { text: 'Email', link: 'mailto:lusaxweb@gmail.com' },
              { text: 'Pull Request', link: 'https://github.com/lusaxweb/vuttons/pulls' },
            ]
          }
        ]
      },


    ]
  }
}
