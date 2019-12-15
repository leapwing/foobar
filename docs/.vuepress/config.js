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
            title: '術練單',
            description: '技術紀錄學習練習筆記'
            }
    },
    themeConfig: {
      smoothScroll: true,
      nav: [
        {
          text: "歸檔",
          link: "/arch/"
        },
        {
          text: "重頭開始",
          link: "https://leapwing.github.io/"
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
      ],
      [
        '@vuepress/pwa',
        {
          serviceWorker: true,
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
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
    },
    evergreen: true
}