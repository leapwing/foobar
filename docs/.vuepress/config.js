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
    plugins: [
      "@vuepress/back-to-top",
      [
        "@vuepress/last-updated",
        {
          transformer: (timestamp, lang) => {
            const fromUnixTime = require("date-fns/fromUnixTime");
            const timestampOffset = timestamp / 1000;
            return fromUnixTime(timestampOffset);
          }
        }
      ]
    ],
    postcss: {
        plugins: [
          require("tailwindcss")("./tailwind.config.js"),
          require("autoprefixer"),
          ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
        ]
      }
}