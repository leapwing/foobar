<template>
  <RenderlessPagesList
    :byPaths="byPaths"
    :notPaths="notPaths"
    :byTags="byTags"
    :byCategories="byCategories"
    :notTags="notTags"
    :notCategories="notCategories"
  >
    <div
      slot-scope="{
        lastPosts,
        formatDate,
        formatAnchor,
        categoryBgColor,
        tagBgColor
      }"
    >
      <div class="flex flex-wrap justify-around -mx-4 px-2">
        <div
          v-if="page.lastUpdated"
          class="w-5/6 sm:w-80 md:w-72 px-2 my-2"
          v-for="(page, index) in lastPosts(3)"
          :key="page.path"
        >
          <div
            class="reset-underline flex flex-col text-gray-900 bg-gray-100 group hover:bg-blue-200 border-solid border border-gray-400 rounded-lg shadow-md"
          >
            <router-link :to="page.path" class="p-2 ">
              <p class="tracking-wide text-2xl text-indigo-600 font-bold my-1">
                {{ page.title }}
              </p>
              <p class="text-base text-gray-600 my-1">
                {{ page.frontmatter.description }}
              </p>
              <p class="text-gray-900 my-1 text-sm">
                Last updated on
                <small
                  class="px-2 py-1 text-xs bg-gray-500 text-gray-100 rounded"
                  >{{ formatDate(page.lastUpdated) }}</small
                >
              </p>
            </router-link>
            <div
              class="p-2 border-t border-gray-200 text-center"
              v-if="[...page.frontmatter.categories][0]"
            >
              <router-link
                :to="
                  '/arch/categories/#' +
                    formatAnchor([...page.frontmatter.categories][0])
                "
              >
                <div
                  class="inline-block w-40 break-words p-4 text-gray-900 uppercase bg-gray-400 rounded"
                  :class="categoryBgColor(page.frontmatter.categories)"
                >
                  {{ [...page.frontmatter.categories][0] }}
                </div>
              </router-link>

            </div>
            <div
              class="p-2 border-t border-gray-200"
              v-if="[...page.frontmatter.tags][0]"
            >
              <div
                v-for="(tag, index) in page.frontmatter.tags"
                :key="tag.path"
                class="inline-block m-1"
              >
                <router-link :to="'/arch/tags/#' + formatAnchor(tag)">
                  <div
                    class="px-2 py-1 text-gray-900 bg-gray-400 rounded-lg"
                    :class="tagBgColor(tag)"
                  >
                    {{ tag }}
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </RenderlessPagesList>
</template>

<script>
import { lightFormat, parseISO } from "date-fns";
import pageListProps from "./pageListProps";
import RenderlessPagesList from "./RenderlessPagesList";
export default {
  props: pageListProps,
  components: {
    RenderlessPagesList
  }
};
</script>
