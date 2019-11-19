import Vue from "vue"
import Router from "vue-router"

Vue.use Router

export default new Router
  mode: 'history'
  linkActiveClass: "-current"
  scrollBehavior: (to, from, savedPosition) -> if savedPosition then savedPosition else { x: 0, y: 0 }
  routes: [
    {
      path: "/"
      name: "list"
      component: => `import(/* webpackChunkName: "list"*/ "./views/UnicodeList.vue")`
    }
    {
      path: "/set"
      name: "set"
      component: => `import(/* webpackChunkName: "set"*/ "./views/SetList.vue")`
    }
    {
      path: "/sample"
      name: "sample"
      component: => `import(/* webpackChunkName: "sample"*/ "./views/SampleList.vue")`
    }
    {
      path: "/tool"
      name: "tool"
      component: => `import(/* webpackChunkName: "tool"*/ "./views/Tool.vue")`
    }
    {
      path: "/license"
      name: "license"
      component: => `import(/* webpackChunkName: "license"*/ "./views/License.vue")`
    }
  ]
