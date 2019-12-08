export default {
    byPaths: {
      default() {
        return ["/notes"];
      },
      type: [Array, String]
    },
    notPaths: {
      default() {
        return ["/arch/", "/arch/categories/", "/arch/tags/"];
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
        return [null];
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
        return [null];
      },
      type: [Array, String]
    }
  };