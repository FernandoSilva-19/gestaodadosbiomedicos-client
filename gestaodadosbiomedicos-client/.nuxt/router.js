import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _78917410 = () => interopDefault(import('..\\pages\\admins\\index.vue' /* webpackChunkName: "pages/admins/index" */))
const _0afe29c7 = () => interopDefault(import('..\\pages\\profissionaisSaude\\index.vue' /* webpackChunkName: "pages/profissionaisSaude/index" */))
const _2f4800be = () => interopDefault(import('..\\pages\\utentes\\index.vue' /* webpackChunkName: "pages/utentes/index" */))
const _4a347874 = () => interopDefault(import('..\\pages\\admins\\create.vue' /* webpackChunkName: "pages/admins/create" */))
const _fb0abf2a = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _7c7b59d7 = () => interopDefault(import('..\\pages\\profissionaisSaude\\create.vue' /* webpackChunkName: "pages/profissionaisSaude/create" */))
const _3d273c80 = () => interopDefault(import('..\\pages\\utentes\\create.vue' /* webpackChunkName: "pages/utentes/create" */))
const _833545b6 = () => interopDefault(import('..\\pages\\admins\\_username\\edit.vue' /* webpackChunkName: "pages/admins/_username/edit" */))
const _55990a34 = () => interopDefault(import('..\\pages\\profissionaisSaude\\_username\\edit.vue' /* webpackChunkName: "pages/profissionaisSaude/_username/edit" */))
const _72b4c671 = () => interopDefault(import('..\\pages\\utentes\\_username\\details.vue' /* webpackChunkName: "pages/utentes/_username/details" */))
const _48b7d86b = () => interopDefault(import('..\\pages\\utentes\\_username\\edit.vue' /* webpackChunkName: "pages/utentes/_username/edit" */))
const _b2f17608 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _78917410,
    name: "admins"
  }, {
    path: "/profissionaisSaude",
    component: _0afe29c7,
    name: "profissionaisSaude"
  }, {
    path: "/utentes",
    component: _2f4800be,
    name: "utentes"
  }, {
    path: "/admins/create",
    component: _4a347874,
    name: "admins-create"
  }, {
    path: "/auth/login",
    component: _fb0abf2a,
    name: "auth-login"
  }, {
    path: "/profissionaisSaude/create",
    component: _7c7b59d7,
    name: "profissionaisSaude-create"
  }, {
    path: "/utentes/create",
    component: _3d273c80,
    name: "utentes-create"
  }, {
    path: "/admins/:username/edit",
    component: _833545b6,
    name: "admins-username-edit"
  }, {
    path: "/profissionaisSaude/:username/edit",
    component: _55990a34,
    name: "profissionaisSaude-username-edit"
  }, {
    path: "/utentes/:username/details",
    component: _72b4c671,
    name: "utentes-username-details"
  }, {
    path: "/utentes/:username/edit",
    component: _48b7d86b,
    name: "utentes-username-edit"
  }, {
    path: "/",
    component: _b2f17608,
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
