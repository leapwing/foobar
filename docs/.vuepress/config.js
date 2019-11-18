const archSideBarPaths = ["/arch/", "/arch/categories/", "/arch/tags/"];

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
    themeConfig: {
      smoothScroll: true,
      nav: [
        {
          text: "ARCH",
          link: "/arch/"
        },
        {
          text: "HOME",
          link: "https:/leapwing.github.io"
        }
      ],
      sidebar: {
        "/arch/": archSideBarPaths,
        "/arch/tags/": archSideBarPaths,
        "/arch/categories/": archSideBarPaths,
        "/": []
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
    markdown: {
      extendMarkdown: md => {
        md.use(require("markdown-it-task-lists")).use(
          require("markdown-it-imsize"),
          {
            autofill: true
          }
        );
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