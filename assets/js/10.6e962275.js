(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{28:function(t,e,a){"use strict";e.a={byPaths:{default:()=>["/notes"],type:[Array,String]},notPaths:{default:()=>["/arch/","/arch/categories/","/arch/tags/"],type:[Array,String]},byCategories:{default:()=>[],type:[Array,String]},notCategories:{default:()=>[null],type:[Array,String]},byTags:{default:()=>[],type:[Array,String]},notTags:{default:()=>[null],type:[Array,String]}}},89:function(t,e,a){"use strict";a.r(e);var r=a(28),s=a(30),o={props:r.a,components:{RenderlessPagesList:s.default}},n=a(2),i=Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("RenderlessPagesList",{attrs:{byPaths:t.byPaths,notPaths:t.notPaths,byTags:t.byTags,byCategories:t.byCategories,notTags:t.notTags,notCategories:t.notCategories},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.pages,s=e.formatDate,o=e.formatAnchor,n=e.categoryBgColor,i=e.tagBgColor;return a("div",{},t._l(r,(function(e){return a("div",{key:e.path,staticClass:"my-4"},[a("div",{staticClass:"reset-underline flex justify-between py-2 px-2 bg-gray-100 group hover:bg-blue-200 border-solid border border-gray-400 rounded-lg shadow-md"},[a("div",{staticClass:"flex-1"},[a("router-link",{attrs:{to:e.path}},[a("p",{staticClass:"text-2xl tracking-wide text-indigo-700 my-0"},[t._v(t._s(e.title))]),t._v(" "),a("p",{staticClass:"text-gray-600 my-0 text-lg"},[t._v(t._s(e.frontmatter.description))]),t._v(" "),a("div",{staticClass:"text-gray-600 text-sm"},[e.frontmatter.date?a("p",{staticClass:"md:inline-block my-0 text-sm"},[t._v("\n                Published on\n                "),a("small",{staticClass:"p-1 bg-gray-600 text-gray-200 text-xs rounded"},[t._v(t._s(s(e.frontmatter.date)))])]):t._e(),t._v(" "),e.frontmatter.date&&e.lastUpdated?a("small",{staticClass:"hidden md:inline"},[t._v("|")]):t._e(),t._v(" "),e.lastUpdated?a("p",{staticClass:"md:inline-block md:my-0 my-1 text-sm"},[t._v("\n                Last updated on\n                "),a("small",{staticClass:"p-1 bg-gray-600 text-gray-200 text-xs rounded"},[t._v(t._s(s(e.lastUpdated)))])]):t._e()])]),t._v(" "),e.frontmatter.categories[0]?a("div",{staticClass:"p-2 block sm:hidden border-t border-b border-gray-200 text-center"},[a("router-link",{attrs:{to:"/arch/categories/#"+o(e.frontmatter.categories[0])}},[a("div",{staticClass:"px-2 py-4 text-gray-900 bg-gray-400 rounded inline-block w-40 break-words",class:n(e.frontmatter.categories)},[t._v(t._s.apply(void 0,e.frontmatter.categories))])])],1):t._e(),t._v(" "),a("div",{staticClass:"my-2"},t._l(e.frontmatter.tags,(function(r,s){return e.frontmatter.tags[0]?a("div",{key:s,staticClass:"inline-block m-1"},[a("router-link",{attrs:{to:"/arch/tags/#"+o(r)}},[a("div",{staticClass:"px-2 py-1 text-gray-900 bg-gray-400 rounded-lg",class:i(r)},[t._v(t._s(r))])])],1):t._e()})),0)],1),t._v(" "),e.frontmatter.categories[0]?a("div",{staticClass:"self-center mx-2 hidden sm:block"},[a("router-link",{attrs:{to:"/arch/categories/#"+o(e.frontmatter.categories[0])}},[a("div",{staticClass:"px-4 py-4 text-gray-900 bg-gray-400 rounded break-words",class:n(e.frontmatter.categories)},[t._v(t._s.apply(void 0,e.frontmatter.categories))])])],1):t._e()])])})),0)}}])})}),[],!1,null,null,null);e.default=i.exports}}]);