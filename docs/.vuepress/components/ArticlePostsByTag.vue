<template>
  <RenderlessPagesList
    :byPaths="byPaths"
    :notPaths="notPaths"
    :byTags="byTags"
    :notTags="notTags"
    :byCategories="byCategories"
    :notCategories="notCategories"
  >
    <div slot-scope="{ pages, tags, formatDate, formatAnchor, tagBgColor,countByTag }">
      <div v-for="tag in tags()" :key="tag" v-if="tag === qs_name || !qs_name">
        <h3 :id="formatAnchor(tag)" class="anchor">
          <a :href="'#' + formatAnchor(tag)" aria-hidden="true" class="header-anchor py-8">#</a>
          <div
            class="flex items-center justify-between bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 my-4"
          >
            <div
              class="px-4 py-2 text-gray-900 bg-gray-400 text-sm uppercase rounded-full shadow"
              :class="tagBgColor(tag)"
            >{{ tag }}</div>
            <router-link :to="'?name=' + tag + '#' + formatAnchor(tag)" aria-hidden="true">
              <div
                class="text-sm bg-teal-500 text-teal-100 px-2 py-1 rounded-full"
              >{{countByTag(tag)}}</div>
            </router-link>
          </div>
        </h3>
        <ArticlePostsList :byTags="tag" />
      </div>
    </div>
  </RenderlessPagesList>
</template>

<script>
import RenderlessPagesList from "./RenderlessPagesList";
import PageListProps from "./pageListProps";
export default {
  props: PageListProps,
  components: {
    RenderlessPagesList
  },
  data() {
    return {
      qs_name: ""
    };
  },
  watch: {
    "$route.query.name": function() {
      this.qs_name = this.$route.query.name;
    }
  },
  mounted() {
    this.qs_name = this.$route.query.name;
    if (this.$store.state.archTagPath >= 0) {
      this.$store.commit("tagPathCount");
      if (this.$store.state.archTagPath == 0 && this.$route.hash) {
        setTimeout(() => this.fixScroll(this.$route.hash), 100);
      }
    }
  },
  methods: {
    fixScroll(anchor) {
      let anchorElement = document.querySelector(decodeURI(anchor));
      if (anchorElement) {
        scrollTo(0, anchorElement.offsetTop);
      }
    }
  }
};
</script>

<style scoped>
.anchor {
  margin-top: -3.1rem;
  padding-top: 4.6rem;
  margin-bottom: 0;
}
</style>
