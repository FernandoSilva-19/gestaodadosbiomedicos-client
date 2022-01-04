import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a790107 = () => interopDefault(import('..\\pages\\admins\\index.vue' /* webpackChunkName: "pages/admins/index" */))
const _2100e9fc = () => interopDefault(import('..\\pages\\dadosBiomedicos\\index.vue' /* webpackChunkName: "pages/dadosBiomedicos/index" */))
const _47acc656 = () => interopDefault(import('..\\pages\\profissionaisSaude\\index.vue' /* webpackChunkName: "pages/profissionaisSaude/index" */))
const _60bda78f = () => interopDefault(import('..\\pages\\utentes\\index.vue' /* webpackChunkName: "pages/utentes/index" */))
const _0c5b6a97 = () => interopDefault(import('..\\pages\\admins\\create.vue' /* webpackChunkName: "pages/admins/create" */))
const _6584598c = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _280e793c = () => interopDefault(import('..\\pages\\auth\\register.vue' /* webpackChunkName: "pages/auth/register" */))
const _26d0a042 = () => interopDefault(import('..\\pages\\dadosBiomedicos\\create.vue' /* webpackChunkName: "pages/dadosBiomedicos/create" */))
const _54bf61b0 = () => interopDefault(import('..\\pages\\profissionaisSaude\\create.vue' /* webpackChunkName: "pages/profissionaisSaude/create" */))
const _42a8d5e2 = () => interopDefault(import('..\\pages\\utentes\\create.vue' /* webpackChunkName: "pages/utentes/create" */))
const _176244c8 = () => interopDefault(import('..\\pages\\admins\\_username\\details.vue' /* webpackChunkName: "pages/admins/_username/details" */))
const _6fdfd174 = () => interopDefault(import('..\\pages\\admins\\_username\\edit.vue' /* webpackChunkName: "pages/admins/_username/edit" */))
const _6bc089a8 = () => interopDefault(import('..\\pages\\dadosBiomedicos\\_nome\\edit.vue' /* webpackChunkName: "pages/dadosBiomedicos/_nome/edit" */))
const _707fcd16 = () => interopDefault(import('..\\pages\\dadosBiomedicos\\_username\\adicionarDadoAUtente.vue' /* webpackChunkName: "pages/dadosBiomedicos/_username/adicionarDadoAUtente" */))
const _11bd6c63 = () => interopDefault(import('..\\pages\\dadosBiomedicos\\_username\\removerDadoAUtente.vue' /* webpackChunkName: "pages/dadosBiomedicos/_username/removerDadoAUtente" */))
const _839f883c = () => interopDefault(import('..\\pages\\prc\\_username\\consultar.vue' /* webpackChunkName: "pages/prc/_username/consultar" */))
const _671d9a07 = () => interopDefault(import('..\\pages\\prc\\_username\\create.vue' /* webpackChunkName: "pages/prc/_username/create" */))
const _4effe250 = () => interopDefault(import('..\\pages\\prescricao\\_username\\receitar.vue' /* webpackChunkName: "pages/prescricao/_username/receitar" */))
const _36b0504e = () => interopDefault(import('..\\pages\\profissionaisSaude\\_username\\details.vue' /* webpackChunkName: "pages/profissionaisSaude/_username/details" */))
const _cd16fffa = () => interopDefault(import('..\\pages\\profissionaisSaude\\_username\\edit.vue' /* webpackChunkName: "pages/profissionaisSaude/_username/edit" */))
const _30359f2e = () => interopDefault(import('..\\pages\\utentes\\_username\\addData.vue' /* webpackChunkName: "pages/utentes/_username/addData" */))
const _5c9cc0c8 = () => interopDefault(import('..\\pages\\utentes\\_username\\data.vue' /* webpackChunkName: "pages/utentes/_username/data" */))
const _4bfeb262 = () => interopDefault(import('..\\pages\\utentes\\_username\\datagraph.vue' /* webpackChunkName: "pages/utentes/_username/datagraph" */))
const _381f53a8 = () => interopDefault(import('..\\pages\\utentes\\_username\\datahistory.vue' /* webpackChunkName: "pages/utentes/_username/datahistory" */))
const _3e2e7b40 = () => interopDefault(import('..\\pages\\utentes\\_username\\details.vue' /* webpackChunkName: "pages/utentes/_username/details" */))
const _72e82408 = () => interopDefault(import('..\\pages\\utentes\\_username\\edit.vue' /* webpackChunkName: "pages/utentes/_username/edit" */))
const _54f5d0cb = () => interopDefault(import('..\\pages\\utentes\\_username\\prescricaohistory.vue' /* webpackChunkName: "pages/utentes/_username/prescricaohistory" */))
const _75bf01ea = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6a790107,
    name: "admins"
  }, {
    path: "/dadosBiomedicos",
    component: _2100e9fc,
    name: "dadosBiomedicos"
  }, {
    path: "/profissionaisSaude",
    component: _47acc656,
    name: "profissionaisSaude"
  }, {
    path: "/utentes",
    component: _60bda78f,
    name: "utentes"
  }, {
    path: "/admins/create",
    component: _0c5b6a97,
    name: "admins-create"
  }, {
    path: "/auth/login",
    component: _6584598c,
    name: "auth-login"
  }, {
    path: "/auth/register",
    component: _280e793c,
    name: "auth-register"
  }, {
    path: "/dadosBiomedicos/create",
    component: _26d0a042,
    name: "dadosBiomedicos-create"
  }, {
    path: "/profissionaisSaude/create",
    component: _54bf61b0,
    name: "profissionaisSaude-create"
  }, {
    path: "/utentes/create",
    component: _42a8d5e2,
    name: "utentes-create"
  }, {
    path: "/admins/:username/details",
    component: _176244c8,
    name: "admins-username-details"
  }, {
    path: "/admins/:username/edit",
    component: _6fdfd174,
    name: "admins-username-edit"
  }, {
    path: "/dadosBiomedicos/:nome/edit",
    component: _6bc089a8,
    name: "dadosBiomedicos-nome-edit"
  }, {
    path: "/dadosBiomedicos/:username/adicionarDadoAUtente",
    component: _707fcd16,
    name: "dadosBiomedicos-username-adicionarDadoAUtente"
  }, {
    path: "/dadosBiomedicos/:username/removerDadoAUtente",
    component: _11bd6c63,
    name: "dadosBiomedicos-username-removerDadoAUtente"
  }, {
    path: "/prc/:username?/consultar",
    component: _839f883c,
    name: "prc-username-consultar"
  }, {
    path: "/prc/:username?/create",
    component: _671d9a07,
    name: "prc-username-create"
  }, {
    path: "/prescricao/:username?/receitar",
    component: _4effe250,
    name: "prescricao-username-receitar"
  }, {
    path: "/profissionaisSaude/:username/details",
    component: _36b0504e,
    name: "profissionaisSaude-username-details"
  }, {
    path: "/profissionaisSaude/:username/edit",
    component: _cd16fffa,
    name: "profissionaisSaude-username-edit"
  }, {
    path: "/utentes/:username/addData",
    component: _30359f2e,
    name: "utentes-username-addData"
  }, {
    path: "/utentes/:username/data",
    component: _5c9cc0c8,
    name: "utentes-username-data"
  }, {
    path: "/utentes/:username/datagraph",
    component: _4bfeb262,
    name: "utentes-username-datagraph"
  }, {
    path: "/utentes/:username/datahistory",
    component: _381f53a8,
    name: "utentes-username-datahistory"
  }, {
    path: "/utentes/:username/details",
    component: _3e2e7b40,
    name: "utentes-username-details"
  }, {
    path: "/utentes/:username/edit",
    component: _72e82408,
    name: "utentes-username-edit"
  }, {
    path: "/utentes/:username/prescricaohistory",
    component: _54f5d0cb,
    name: "utentes-username-prescricaohistory"
  }, {
    path: "/",
    component: _75bf01ea,
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
