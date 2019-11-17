const purgecss = require("@fullhuman/postcss-purgecss")({
    content: [
      "./node_modules/@vuepress/theme-default/**/*.*",
      "./node_modules/@vuepress/!(theme-default)/**/*.vue",
      "./docs/.vuepress/styles/*.styl",
      "./docs/.vuepress/components/*.vue",
      "./docs/**/*.md"
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  });

module.exports = {
    base: '/foobar/',
    locales: {
        '/': {
            lang: 'zh-TW',
            title: 'foobar',
            description: 'Vue-powered Static Site Generator'
            }
    },
    postcss: {
        plugins: [
          require("tailwindcss")("./tailwind.config.js"),
          require("autoprefixer"),
          ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
        ]
      }
}