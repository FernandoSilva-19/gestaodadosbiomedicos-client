import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _78917410 = () => interopDefault(import('..\\pages\\admins\\index.vue' /* webpackChunkName: "pages/admins/index" */))
const _6e9ab7aa = () => interopDefault(import('..\\pages\\dadosBiomedicos\\index.vue' /* webpackChunkName: "pages/dadosBiomedicos/index" */))
const _0afe29c7 = () => interopDefault(import('..\\pages\\profissionaisSaude\\index.vue' /* webpackChunkName: "pages/profissionaisSaude/index" */))
const _2f4800be = () => interopDefault(import('..\\pages\\utentes\\index.vue' /* webpackChunkName: "pages/utentes/index" */))
const _4a347874 = () => interopDefault(import('..\\pages\\admins\\create.vue' /* webpackChunkName: "pages/admins/create" */))
const _fb0abf2a = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _75562bf3 = () => interopDefault(import('..\\pages\\dadosBiomedicos\\create.vue' /* webpackChunkName: "pages/dadosBiomedicos/create" */))
const _7c7b59d7 = () => interopDefault(import('..\\pages\\profissionaisSaude\\create.vue' /* webpackChunkName: "pages/profissionaisSaude/create" */))
const _3d273c80 = () => interopDefault(import('..\\pages\\utentes\\create.vue' /* webpackChunkName: "pages/utentes/create" */))
const _83856112 = () => interopDefault(import('..\\pages\\admins\\_username\\details.vue' /* webpackChunkName: "pages/admins/_username/details" */))
const _833545b6 = () => interopDefault(import('..\\pages\\admins\\_username\\edit.vue' /* webpackChunkName: "pages/admins/_username/edit" */))
const _6917619d = () => interopDefault(import('..\\pages\\dadosBiomedicos\\_id\\edit.vue' /* webpackChunkName: "pages/dadosBiomedicos/_id/edit" */))
const _9f813238 = () => interopDefault(import('..\\pages\\dadosBiomedicos\\_username\\adicionarDadoAUtente.vue' /* webpackChunkName: "pages/dadosBiomedicos/_username/adicionarDadoAUtente" */))
const _533f4992 = () => interopDefault(import('..\\pages\\dadosBiomedicos\\_username\\removerDadoAUtente.vue' /* webpackChunkName: "pages/dadosBiomedicos/_username/removerDadoAUtente" */))
const _7d9b5989 = () => interopDefault(import('..\\pages\\prescricao\\_username\\receitar.vue' /* webpackChunkName: "pages/prescricao/_username/receitar" */))
const _44d55408 = () => interopDefault(import('..\\pages\\profissionaisSaude\\_username\\details.vue' /* webpackChunkName: "pages/profissionaisSaude/_username/details" */))
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
    path: "/dadosBiomedicos",
    component: _6e9ab7aa,
    name: "dadosBiomedicos"
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
    path: "/dadosBiomedicos/create",
    component: _75562bf3,
    name: "dadosBiomedicos-create"
  }, {
    path: "/profissionaisSaude/create",
    component: _7c7b59d7,
    name: "profissionaisSaude-create"
  }, {
    path: "/utentes/create",
    component: _3d273c80,
    name: "utentes-create"
  }, {
    path: "/admins/:username/details",
    component: _83856112,
    name: "admins-username-details"
  }, {
    path: "/admins/:username/edit",
    component: _833545b6,
    name: "admins-username-edit"
  }, {
    path: "/dadosBiomedicos/:id/edit",
    component: _6917619d,
    name: "dadosBiomedicos-id-edit"
  }, {
    path: "/dadosBiomedicos/:username/adicionarDadoAUtente",
    component: _9f813238,
    name: "dadosBiomedicos-username-adicionarDadoAUtente"
  }, {
    path: "/dadosBiomedicos/:username/removerDadoAUtente",
    component: _533f4992,
    name: "dadosBiomedicos-username-removerDadoAUtente"
  }, {
    path: "/prescricao/:username?/receitar",
    component: _7d9b5989,
    name: "prescricao-username-receitar"
  }, {
    path: "/profissionaisSaude/:username/details",
    component: _44d55408,
    name: "profissionaisSaude-username-details"
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
