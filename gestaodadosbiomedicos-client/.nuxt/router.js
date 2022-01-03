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
const _77f7e263 = () => interopDefault(import('../pages/profissionaisSaude/create.vue' /* webpackChunkName: "pages/profissionaisSaude/create" */))
const _0ab0fc34 = () => interopDefault(import('../pages/utentes/create.vue' /* webpackChunkName: "pages/utentes/create" */))
const _508c8500 = () => interopDefault(import('../pages/admins/_username/details.vue' /* webpackChunkName: "pages/admins/_username/details" */))
const _b95c5888 = () => interopDefault(import('../pages/admins/_username/edit.vue' /* webpackChunkName: "pages/admins/_username/edit" */))
const _18d6e8d6 = () => interopDefault(import('../pages/dadosBiomedicos/_username/adicionarDadoAUtente.vue' /* webpackChunkName: "pages/dadosBiomedicos/_username/adicionarDadoAUtente" */))
const _12895e7c = () => interopDefault(import('../pages/prc/_username/consultar.vue' /* webpackChunkName: "pages/prc/_username/consultar" */))
const _8cb42340 = () => interopDefault(import('../pages/prescricao/_username/receitar.vue' /* webpackChunkName: "pages/prescricao/_username/receitar" */))
const _c56a225e = () => interopDefault(import('../pages/profissionaisSaude/_username/details.vue' /* webpackChunkName: "pages/profissionaisSaude/_username/details" */))
const _3dbdf67c = () => interopDefault(import('../pages/utentes/_username/data.vue' /* webpackChunkName: "pages/utentes/_username/data" */))
const _d05224ee = () => interopDefault(import('../pages/utentes/_username/addData.vue' /* webpackChunkName: "pages/utentes/_username/addData" */))
const _a3ace7ea = () => interopDefault(import('../pages/profissionaisSaude/_username/edit.vue' /* webpackChunkName: "pages/profissionaisSaude/_username/edit" */))
const _3615b127 = () => interopDefault(import('../pages/prc/_username/create.vue' /* webpackChunkName: "pages/prc/_username/create" */))
const _3647e683 = () => interopDefault(import('../pages/dadosBiomedicos/_username/removerDadoAUtente.vue' /* webpackChunkName: "pages/dadosBiomedicos/_username/removerDadoAUtente" */))
const _f3acab34 = () => interopDefault(import('../pages/dadosBiomedicos/_nome/edit.vue' /* webpackChunkName: "pages/dadosBiomedicos/_nome/edit" */))
const _7314b0fc = () => interopDefault(import('../pages/utentes/_username/datagraph.vue' /* webpackChunkName: "pages/utentes/_username/datagraph" */))
const _1ea4fe70 = () => interopDefault(import('../pages/utentes/_username/datahistory.vue' /* webpackChunkName: "pages/utentes/_username/datahistory" */))
const _329844dc = () => interopDefault(import('../pages/utentes/_username/edit.vue' /* webpackChunkName: "pages/utentes/_username/edit" */))
const _0035a5eb = () => interopDefault(import('../pages/utentes/_username/prescricaohistory.vue' /* webpackChunkName: "pages/utentes/_username/prescricaohistory" */))
const _23bf8f40 = () => interopDefault(import('../pages/utentes/_username/details.vue' /* webpackChunkName: "pages/utentes/_username/details" */))
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
    path: "/dadosBiomedicos",
    component: _745d6086,
    name: "dadosBiomedicos"
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
    path: "/auth/login",
    component: _0aab1065,
    name: "auth-login"
  }, {
    path: "/dadosBiomedicos/create",
    component: _1c0cf2a1,
    name: "dadosBiomedicos-create"
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
    path: "/dadosBiomedicos/:nome/edit",
    component: _2662d61b,
    name: "dadosBiomedicos-nome-edit"
  }, {
    path: "/dadosBiomedicos/:username/adicionarDadoAUtente",
    component: _18d6e8d6,
    name: "dadosBiomedicos-username-adicionarDadoAUtente"
  }, {
    path: "/dadosBiomedicos/:username/removerDadoAUtente",
    component: _3647e683,
    name: "dadosBiomedicos-username-removerDadoAUtente"
  }, {
    path: "/prc/:username?/consultar",
    component: _12895e7c,
    name: "prc-username-consultar"
  }, {
    path: "/prc/:username?/create",
    component: _3615b127,
    name: "prc-username-create"
  }, {
    path: "/prescricao/:username?/receitar",
    component: _8cb42340,
    name: "prescricao-username-receitar"
  }, {
    path: "/profissionaisSaude/:username/details",
    component: _c56a225e,
    name: "profissionaisSaude-username-details"
  }, {
    path: "/profissionaisSaude/:username/edit",
    component: _a3ace7ea,
    name: "profissionaisSaude-username-edit"
  }, {
    path: "/profissionaisSaude/:username/prescricaohistory",
    component: _da3079c8,
    name: "profissionaisSaude-username-prescricaohistory"
  }, {
    path: "/utentes/:username/addData",
    component: _d05224ee,
    name: "utentes-username-addData"
  }, {
    path: "/utentes/:username/data",
    component: _3dbdf67c,
    name: "utentes-username-data"
  }, {
    path: "/utentes/:username/datagraph",
    component: _7314b0fc,
    name: "utentes-username-datagraph"
  }, {
    path: "/utentes/:username/datahistory",
    component: _1ea4fe70,
    name: "utentes-username-datahistory"
  }, {
    path: "/utentes/:username/details",
    component: _23bf8f40,
    name: "utentes-username-details"
  }, {
    path: "/utentes/:username/edit",
    component: _329844dc,
    name: "utentes-username-edit"
  }, {
    path: "/utentes/:username/prescricaohistory",
    component: _0035a5eb,
    name: "utentes-username-prescricaohistory"
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
