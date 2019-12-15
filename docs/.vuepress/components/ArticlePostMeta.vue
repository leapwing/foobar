<template>
  <div
    class="bg-blue-100 border-t-2 border-blue-500 rounded-b px-4 py-2 shadow-md"
  >
    <div class="p-2 -mx-2 text-sm">
      <p v-if="$page.frontmatter.date" class="inline-block text-sm my-1 md:inline-block">
        Published on
        <small class="text-xs text-gray-100 bg-gray-600 px-2 py-1 rounded">
          {{ formatDate($page.frontmatter.date) }}
        </small>
      </p>
      <small
        v-if="$page.frontmatter.date && $page.lastUpdated"
        class="text-gray-900 hidden md:inline"
        >|</small
      >
      <p v-if="$page.lastUpdated" class="my-0 md:inline-block">
        Last updated on
        <small class="text-xs text-gray-100 bg-gray-600 px-2 py-1 rounded">
          {{ formatDate($page.lastUpdated) }}
        </small>
      </p>
    </div>
    <div class="p-2 -m-2">
      <div v-if="$page.frontmatter.categories.length > 0" class="my-1 text-sm">
        Categorized:
        <div
          v-for="(category, index) in $page.frontmatter.categories"
          :key="index"
          class="inline-block mx-1 reset-underline"
        >
          <router-link :to="'/arch/categories/#' + formatAnchor(category)">
            <div
              class="px-2 py-1 text-gray-900 bg-gray-400 text-xs uppercase rounded-lg"
              :class="categoryBgColor(category)"
            >
              {{ category }}
            </div>
          </router-link>
        </div>
      </div>

      <div v-if="$page.frontmatter.tags.length > 0" class="my-1 text-sm">
        Tagged:
        <div
          v-for="(tag, index) in $page.frontmatter.tags"
          :key="index"
          class="inline-block mx-1 reset-underline"
        >
          <router-link :to="'/arch/tags/#' + formatAnchor(tag)">
            <div
              class="px-2 py-1 text-gray-900 bg-gray-400 text-xs rounded-lg"
              :class="tagBgColor(tag)"
            >
              {{ tag }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { lightFormat, parseISO, isValid } from "date-fns";
export default {
  methods: {
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
    }
  }
};
</script>

<style scoped></style>
