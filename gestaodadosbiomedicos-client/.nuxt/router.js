import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _376c7cea = () => interopDefault(import('../pages/admins/index.vue' /* webpackChunkName: "pages/admins/index" */))
const _26640d9f = () => interopDefault(import('../pages/create.vue' /* webpackChunkName: "pages/create" */))
const _6e6f408a = () => interopDefault(import('../pages/profissionaisSaude/index.vue' /* webpackChunkName: "pages/profissionaisSaude/index" */))
const _22e7706c = () => interopDefault(import('../pages/utentes/index.vue' /* webpackChunkName: "pages/utentes/index" */))
const _445129d8 = () => interopDefault(import('../pages/admins/create.vue' /* webpackChunkName: "pages/admins/create" */))
const _77f7e263 = () => interopDefault(import('../pages/profissionaisSaude/create.vue' /* webpackChunkName: "pages/profissionaisSaude/create" */))
const _045b6031 = () => interopDefault(import('../pages/profissionaisSaude/edit.vue' /* webpackChunkName: "pages/profissionaisSaude/edit" */))
const _5acbdcff = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admins",
    component: _376c7cea,
    name: "admins"
  }, {
    path: "/create",
    component: _26640d9f,
    name: "create"
  }, {
    path: "/profissionaisSaude",
    component: _6e6f408a,
    name: "profissionaisSaude"
  }, {
    path: "/utentes",
    component: _22e7706c,
    name: "utentes"
  }, {
    path: "/admins/create",
    component: _445129d8,
    name: "admins-create"
  }, {
    path: "/profissionaisSaude/create",
    component: _77f7e263,
    name: "profissionaisSaude-create"
  }, {
    path: "/profissionaisSaude/edit",
    component: _045b6031,
    name: "profissionaisSaude-edit"
  }, {
    path: "/",
    component: _5acbdcff,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
