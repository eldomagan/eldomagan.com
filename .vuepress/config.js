module.exports = {
  title: 'I\'m Eldo Magan, Full-Stack Web Developer',
  description: 'Hi, i\'m Eldo Magan, a full-stack web developer working on cool stuff',
  themeConfig: {
    homeNav: [
      { text: 'Home', link: '#home' },
      { text: 'About', link: '#about' },
      { text: 'Blog', link: process.env.BLOG_URL || '/blog/' }
    ],
    blogNav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: process.env.SITE_URL || '/' }
    ]
  },

  plugins: [
    '@vuepress/register-components'
  ],

  postcss: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer')
    ]
  }
}
