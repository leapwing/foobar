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
              <p class="text-2xl tracking-wide text-indigo-700 my-0">{{ page.title }}</p>
              <p class="text-gray-600 my-0 text-lg">{{ page.frontmatter.description }}</p>
              <div class="text-gray-600 text-sm">
                <p v-if="page.frontmatter.date" class="md:inline-block my-0 text-sm">
                  Published on
                  <small
                    class="p-1 bg-gray-600 text-gray-200 text-xs rounded"
                  >{{formatDate(page.frontmatter.date)}}</small>
                </p>
                <small v-if="page.frontmatter.date && page.lastUpdated" class="hidden md:inline">|</small>
                <p v-if="page.lastUpdated" class="md:inline-block md:my-0 my-1 text-sm">
                  Last updated on
                  <small
                    class="p-1 bg-gray-600 text-gray-200 text-xs rounded"
                  >{{formatDate(page.lastUpdated)}}</small>
                </p>
              </div>      
            </router-link>
            <div v-if="page.frontmatter.categories[0]" class="p-2 block sm:hidden border-t border-b border-gray-200 text-center">
              <router-link
                :to="'/arch/categories/#'+formatAnchor(page.frontmatter.categories[0])"
              >
                <div
                  class="px-2 py-4 text-gray-900 bg-gray-400 uppercase rounded inline-block w-40 break-words"
                  :class="categoryBgColor(page.frontmatter.categories)"
                >{{...page.frontmatter.categories}}</div>
              </router-link>
            </div>
            <div class="my-2">
              <div
                v-if="page.frontmatter.tags[0]"
                v-for="(tag, index) in page.frontmatter.tags"
                :key="index"
                class="inline-block m-1"
              >
                <router-link :to="'/arch/tags/#'+formatAnchor(tag)">
                  <div class="px-2 py-1 text-gray-900 bg-gray-400 rounded-lg" :class="tagBgColor(tag)">{{tag}}</div>
                </router-link>
              </div>
            </div>
          </div>
          <div v-if="page.frontmatter.categories[0]" class="self-center mx-2 hidden sm:block">
            <router-link   
              :to="'/arch/categories/#'+formatAnchor(page.frontmatter.categories[0])"
            >
              <div
                class="px-4 py-4 text-gray-900 bg-gray-400 uppercase rounded break-words"
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