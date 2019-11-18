<script>
import { lightFormat, parseISO, compareDesc, isValid } from "date-fns";

export default {
  props: {
    byPaths: {
      default() {
        return [];
      },
      type: [Array, String]
    },
    notPaths: {
      default() {
        return [];
      },
      type: [Array, String]
    },
    byCategories: {
      default() {
        return [];
      },
      type: [Array, String]
    },
    notCategories: {
      default() {
        return [];
      },
      type: [Array, String]
    },
    byTags: {
      default() {
        return [];
      },
      type: [Array, String]
    },
    notTags: {
      default() {
        return [];
      },
      type: [Array, String]
    }
  },
  computed: {
    filterdPages() {
      this.filterPages();
      return this.pages;
    }
  },
  data() {
    return {
      pages: []
    };
  },
  methods: {
    filterPages() {
      this.setPages();
      this.filterOutByPaths();
      this.filterByPaths();
      this.filterByCategories();
      this.filterOutByCategories();
      this.filterByTags();
      this.filterOutByTags();
      this.sortByMostRecent();
    },
    setPages() {
      this.pages = this.$site.pages;
    },
    getValue(obj, path, def_val) {
      return path
        .replace(/\[|\]\.?/g, ".")
        .split(".")
        .filter(v => v)
        .reduce((acc, val) => (acc && acc[val]) || def_val, obj);
    },
    filterOutByPaths() {
      this.filterIsNot("notPaths", "path");
    },
    filterByPaths() {
      this.filterStartsWith("byPaths", "path");
    },
    filterByCategories() {
      this.filterIncludes("byCategories", "frontmatter.categories");
    },
    filterOutByCategories() {
      this.filterIncludes("notCategories", "frontmatter.categories", true);
    },
    filterByTags() {
      this.filterIncludes("byTags", "frontmatter.tags");
    },
    filterOutByTags() {
      this.filterIncludes("notTags", "frontmatter.tags", true);
    },
    filterIsNot(byWhat, byKey) {
      let pageKeyValues = this.getValue(this, byWhat);
      if (!pageKeyValues.length) return;
      if (typeof pageKeyValues === "string") {
        pageKeyValues = [pageKeyValues];
      }
      this.pages = this.pages.filter(page => {
        let yesNos = [];
        pageKeyValues.forEach(value => {
          yesNos.push(this.getValue(page, byKey) === value);
        });
        return !yesNos.some(res => res);
      });
    },
    filterStartsWith(byWhat, byKey) {
      let pageKeyValues = this.getValue(this, byWhat);
      if (!pageKeyValues.length) return;
      if (typeof pageKeyValues === "string") {
        pageKeyValues = [pageKeyValues];
      }
      this.pages = this.pages.filter(page => {
        let yesNos = [];
        pageKeyValues.forEach(value => {
          yesNos.push(this.getValue(page, byKey).startsWith(value));
        });
        return yesNos.some(res => res);
      });
    },
    filterIncludes(byWhat, byKey, exclude = false) {
      let pageKeyValues = this.getValue(this, byWhat);
      if (!pageKeyValues.length) return;
      if (typeof pageKeyValues === "string") {
        pageKeyValues = [pageKeyValues];
      }
      this.pages = this.pages.filter(page => {
        let pageKeyValue = this.getValue(page, byKey, []);
        let yesNo = pageKeyValues.some(value => {
          return pageKeyValue.includes(value);
        });
        return !exclude ? yesNo : !yesNo;
      });
    },
    sortByMostRecent() {
      this.pages.sort((a, b) => {
        let fisrtData = parseISO(a.frontmatter.date);
        let secondData = parseISO(b.frontmatter.date);
        if (!isValid(fisrtData)) {
          return 1;
        }
        if (!isValid(secondData)) {
          return -1;
        }
        return compareDesc(fisrtData, secondData);
      });
    },
    lastPosts(limit) {
      let Posts = [...this.pages].sort((a, b) => {
        return compareDesc(parseISO(a.lastUpdated), parseISO(b.lastUpdated));
      });
      Posts = Posts.slice(0, limit);
      return Posts;
    },
    categories() {
      let categories_compact_uniq = [
        ...new Set(this.pages.flatMap(x => x.frontmatter.categories))
      ].filter(v => v);
      return categories_compact_uniq.sort();
    },
    tags() {
      let tags_compact_uniq = [
        ...new Set([...this.pages].flatMap(x => x.frontmatter.tags))
      ].filter(v => v);
      return tags_compact_uniq.sort();
    },
    formatDate(date) {
      let parseDate = parseISO(date);
      if (isValid(parseDate)) {
        return lightFormat(parseISO(date), "yyyy-MM-dd");
      }
      return null;
    },
    formatAnchor(string) {
      return string.toLowerCase().replace(/ /g, "-");
    },
    categoryBgColor(category) {
      if (typeof category === "string") {
        return `bg-category-${category.toLowerCase()}`;
      }
      return `bg-category-${[...category][0].toLowerCase()}`;
    },
    tagBgColor(tag) {
      if (typeof tag === "string") {
        return `bg-tag-${tag.toLowerCase()}`;
      }
      return `bg-tag-${[...tag][0].toLowerCase()}`;
    },
    countByCategory(category) {
      let filterdPages = [...this.pages].filter(page => {
        let pageKeyValue = this.getValue(page, "frontmatter.categories", []);
        return pageKeyValue.includes(category);
      });
      return filterdPages.length;
    },
    countByTag(tag) {
      let filterdPages = [...this.pages].filter(page => {
        let pageKeyValue = this.getValue(page, "frontmatter.tags", []);
        return pageKeyValue.includes(tag);
      });
      return filterdPages.length;
    }
  },
  render() {
    return this.$scopedSlots.default({
      pages: this.filterdPages,
      lastPosts: this.lastPosts,
      categories: this.categories,
      tags: this.tags,
      formatDate: this.formatDate,
      formatAnchor: this.formatAnchor,
      categoryBgColor: this.categoryBgColor,
      tagBgColor: this.tagBgColor,
      countByCategory: this.countByCategory,
      countByTag: this.countByTag
    });
  }
};
</script>
