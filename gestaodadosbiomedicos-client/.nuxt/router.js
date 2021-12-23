import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _376c7cea = () => interopDefault(import('../pages/admins/index.vue' /* webpackChunkName: "pages/admins/index" */))
const _6e6f408a = () => interopDefault(import('../pages/profissionaisSaude/index.vue' /* webpackChunkName: "pages/profissionaisSaude/index" */))
const _22e7706c = () => interopDefault(import('../pages/utentes/index.vue' /* webpackChunkName: "pages/utentes/index" */))
const _445129d8 = () => interopDefault(import('../pages/admins/create.vue' /* webpackChunkName: "pages/admins/create" */))
const _77f7e263 = () => interopDefault(import('../pages/profissionaisSaude/create.vue' /* webpackChunkName: "pages/profissionaisSaude/create" */))
const _0ab0fc34 = () => interopDefault(import('../pages/utentes/create.vue' /* webpackChunkName: "pages/utentes/create" */))
const _508c8500 = () => interopDefault(import('../pages/admins/_username/details.vue' /* webpackChunkName: "pages/admins/_username/details" */))
const _b95c5888 = () => interopDefault(import('../pages/admins/_username/edit.vue' /* webpackChunkName: "pages/admins/_username/edit" */))
const _c56a225e = () => interopDefault(import('../pages/profissionaisSaude/_username/details.vue' /* webpackChunkName: "pages/profissionaisSaude/_username/details" */))
const _a3ace7ea = () => interopDefault(import('../pages/profissionaisSaude/_username/edit.vue' /* webpackChunkName: "pages/profissionaisSaude/_username/edit" */))
const _23bf8f40 = () => interopDefault(import('../pages/utentes/_username/details.vue' /* webpackChunkName: "pages/utentes/_username/details" */))
const _329844dc = () => interopDefault(import('../pages/utentes/_username/edit.vue' /* webpackChunkName: "pages/utentes/_username/edit" */))
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
    path: "/utentes/create",
    component: _0ab0fc34,
    name: "utentes-create"
  }, {
    path: "/admins/:username/details",
    component: _508c8500,
    name: "admins-username-details"
  }, {
    path: "/admins/:username/edit",
    component: _b95c5888,
    name: "admins-username-edit"
  }, {
    path: "/profissionaisSaude/:username/details",
    component: _c56a225e,
    name: "profissionaisSaude-username-details"
  }, {
    path: "/profissionaisSaude/:username/edit",
    component: _a3ace7ea,
    name: "profissionaisSaude-username-edit"
  }, {
    path: "/utentes/:username/details",
    component: _23bf8f40,
    name: "utentes-username-details"
  }, {
    path: "/utentes/:username/edit",
    component: _329844dc,
    name: "utentes-username-edit"
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
