import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _376c7cea = () => interopDefault(import('../pages/admins/index.vue' /* webpackChunkName: "pages/admins/index" */))
const _745d6086 = () => interopDefault(import('../pages/dadosBiomedicos/index.vue' /* webpackChunkName: "pages/dadosBiomedicos/index" */))
const _6e6f408a = () => interopDefault(import('../pages/profissionaisSaude/index.vue' /* webpackChunkName: "pages/profissionaisSaude/index" */))
const _22e7706c = () => interopDefault(import('../pages/utentes/index.vue' /* webpackChunkName: "pages/utentes/index" */))
const _445129d8 = () => interopDefault(import('../pages/admins/create.vue' /* webpackChunkName: "pages/admins/create" */))
const _0aab1065 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _1c0cf2a1 = () => interopDefault(import('../pages/dadosBiomedicos/create.vue' /* webpackChunkName: "pages/dadosBiomedicos/create" */))
const _0ab0fc34 = () => interopDefault(import('../pages/utentes/create.vue' /* webpackChunkName: "pages/utentes/create" */))
const _508c8500 = () => interopDefault(import('../pages/admins/_username/details.vue' /* webpackChunkName: "pages/admins/_username/details" */))
const _b95c5888 = () => interopDefault(import('../pages/admins/_username/edit.vue' /* webpackChunkName: "pages/admins/_username/edit" */))
const _3647e683 = () => interopDefault(import('../pages/dadosBiomedicos/_username/removerDadoAUtente.vue' /* webpackChunkName: "pages/dadosBiomedicos/_username/removerDadoAUtente" */))
const _217cba24 = () => interopDefault(import('../pages/dadosBiomedicos/_id/edit.vue' /* webpackChunkName: "pages/dadosBiomedicos/_id/edit" */))
const _18d6e8d6 = () => interopDefault(import('../pages/dadosBiomedicos/_username/adicionarDadoAUtente.vue' /* webpackChunkName: "pages/dadosBiomedicos/_username/adicionarDadoAUtente" */))
const _77f7e263 = () => interopDefault(import('../pages/profissionaisSaude/create.vue' /* webpackChunkName: "pages/profissionaisSaude/create" */))
const _8cb42340 = () => interopDefault(import('../pages/prescricao/_username/receitar.vue' /* webpackChunkName: "pages/prescricao/_username/receitar" */))
const _c56a225e = () => interopDefault(import('../pages/profissionaisSaude/_username/details.vue' /* webpackChunkName: "pages/profissionaisSaude/_username/details" */))
const _a3ace7ea = () => interopDefault(import('../pages/profissionaisSaude/_username/edit.vue' /* webpackChunkName: "pages/profissionaisSaude/_username/edit" */))
const _3dbdf67c = () => interopDefault(import('../pages/utentes/_username/data.vue' /* webpackChunkName: "pages/utentes/_username/data" */))
const _7314b0fc = () => interopDefault(import('../pages/utentes/_username/datagraph.vue' /* webpackChunkName: "pages/utentes/_username/datagraph" */))
const _1ea4fe70 = () => interopDefault(import('../pages/utentes/_username/datahistory.vue' /* webpackChunkName: "pages/utentes/_username/datahistory" */))
const _d05224ee = () => interopDefault(import('../pages/utentes/_username/addData.vue' /* webpackChunkName: "pages/utentes/_username/addData" */))
const _23bf8f40 = () => interopDefault(import('../pages/utentes/_username/details.vue' /* webpackChunkName: "pages/utentes/_username/details" */))
const _329844dc = () => interopDefault(import('../pages/utentes/_username/edit.vue' /* webpackChunkName: "pages/utentes/_username/edit" */))
const _5acbdcff = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0035a5eb = () => interopDefault(import('../pages/utentes/_username/prescricaohistory.vue' /* webpackChunkName: "pages/utentes/_username/prescricaohistory" */))

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
    path: "/dadosBiomedicos/:id/edit",
    component: _7b875224,
    name: "dadosBiomedicos-id-edit"
  }, {
    path: "/dadosBiomedicos/:username/adicionarDadoAUtente",
    component: _707fcd16,
    name: "dadosBiomedicos-username-adicionarDadoAUtente"
  }, {
    path: "/dadosBiomedicos/:username/removerDadoAUtente",
    component: _11bd6c63,
    name: "dadosBiomedicos-username-removerDadoAUtente"
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
    path: "/profissionaisSaude/:username/prescricaohistory",
    component: _da3079c8,
    name: "profissionaisSaude-username-prescricaohistory"
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
