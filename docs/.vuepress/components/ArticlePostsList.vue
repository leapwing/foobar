<template>
  <RenderlessPagesList
    :byPaths="byPaths"
    :notPaths="notPaths"
    :byTags="byTags"
    :byCategories="byCategories"
    :notTags="notTags"
    :notCategories="notCategories"
  >
    <div slot-scope="{ pages, formatDate, formatAnchor, categoryBgColor, tagBgColor }">
      <div v-for="page in pages" :key="page.path" class="my-4">
        <div
          class="reset-underline flex justify-between py-2 px-2 bg-gray-100 group hover:bg-blue-200 border-solid border border-gray-400 rounded-lg shadow-md"
        >
          <div class="flex-1">
            <router-link :to="page.path" class>
              <p v-if="page.frontmatter.date" class="inline-block text-gray-900 my-0 text-sm">
                Published on
                <small
                  class="p-1 bg-gray-600 text-white rounded"
                >{{formatDate(page.frontmatter.date)}}</small>
              </p>
              <small v-if="page.frontmatter.date && page.lastUpdated" class="text-gray-900">|</small>
              <p class="inline-block text-gray-900 my-0 text-sm">
                Last updated on
                <small
                  class="p-1 bg-gray-600 text-white rounded"
                >{{formatDate(page.lastUpdated)}}</small>
              </p>
              <p class="text-3xl text-gray-900 my-0 text-lg">{{ page.title }}</p>
              <p class="text-gray-700 my-0">從各種開始模板創建一個新項目。</p>
            </router-link>
            <div class="my-2">
              <div
                v-for="(tag, index) in page.frontmatter.tags"
                :key="index"
                class="inline-block m-1"
              >
                <router-link :to="'/arch/tags/#'+formatAnchor(tag)">
                  <div class="px-2 py-1 text-gray-900 bg-gray-400 rounded-lg">{{tag}}</div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="self-center mx-2">
            <router-link
              v-if="[...page.frontmatter.categories][0]"
              :to="'/arch/categories/#'+formatAnchor([...page.frontmatter.categories][0])"
            >
              <div
                class="px-2 py-4 text-gray-900 bg-gray-400 rounded"
                :class="categoryBgColor(page.frontmatter.categories)"
              >{{...page.frontmatter.categories}}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </RenderlessPagesList>
</template>

<script>
import pageListProps from "./pageListProps";
import RenderlessPagesList from "./RenderlessPagesList";
export default {
  props: pageListProps,
  components: {
    RenderlessPagesList
  }
};
</script>

<style>
</style>