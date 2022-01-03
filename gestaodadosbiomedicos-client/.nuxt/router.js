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
const _833545b6 = () => interopDefault(import('..\\pages\\admins\\_username\\edit.vue' /* webpackChunkName: "pages/admins/_username/edit" */))
const _2662d61b = () => interopDefault(import('..\\pages\\dadosBiomedicos\\_nome\\edit.vue' /* webpackChunkName: "pages/dadosBiomedicos/_nome/edit" */))
const _83856112 = () => interopDefault(import('..\\pages\\admins\\_username\\details.vue' /* webpackChunkName: "pages/admins/_username/details" */))
const _9f813238 = () => interopDefault(import('..\\pages\\dadosBiomedicos\\_username\\adicionarDadoAUtente.vue' /* webpackChunkName: "pages/dadosBiomedicos/_username/adicionarDadoAUtente" */))
const _533f4992 = () => interopDefault(import('..\\pages\\dadosBiomedicos\\_username\\removerDadoAUtente.vue' /* webpackChunkName: "pages/dadosBiomedicos/_username/removerDadoAUtente" */))
const _fcfcc15a = () => interopDefault(import('..\\pages\\prc\\_username\\consultar.vue' /* webpackChunkName: "pages/prc/_username/consultar" */))
const _0ecf5436 = () => interopDefault(import('..\\pages\\prc\\_username\\create.vue' /* webpackChunkName: "pages/prc/_username/create" */))
const _7d9b5989 = () => interopDefault(import('..\\pages\\prescricao\\_username\\receitar.vue' /* webpackChunkName: "pages/prescricao/_username/receitar" */))
const _1c6b7b9a = () => interopDefault(import('..\\pages\\utentes\\_username\\addData.vue' /* webpackChunkName: "pages/utentes/_username/addData" */))
const _781ef553 = () => interopDefault(import('..\\pages\\utentes\\_username\\datagraph.vue' /* webpackChunkName: "pages/utentes/_username/datagraph" */))
const _458ac34e = () => interopDefault(import('..\\pages\\utentes\\_username\\datahistory.vue' /* webpackChunkName: "pages/utentes/_username/datahistory" */))
const _72b4c671 = () => interopDefault(import('..\\pages\\utentes\\_username\\details.vue' /* webpackChunkName: "pages/utentes/_username/details" */))
const _cbbeda88 = () => interopDefault(import('..\\pages\\utentes\\_username\\prescricaohistory.vue' /* webpackChunkName: "pages/utentes/_username/prescricaohistory" */))
const _48b7d86b = () => interopDefault(import('..\\pages\\utentes\\_username\\edit.vue' /* webpackChunkName: "pages/utentes/_username/edit" */))
const _b2f17608 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _53dd8a0b = () => interopDefault(import('..\\pages\\utentes\\_username\\data.vue' /* webpackChunkName: "pages/utentes/_username/data" */))
const _55990a34 = () => interopDefault(import('..\\pages\\profissionaisSaude\\_username\\edit.vue' /* webpackChunkName: "pages/profissionaisSaude/_username/edit" */))
const _44d55408 = () => interopDefault(import('..\\pages\\profissionaisSaude\\_username\\details.vue' /* webpackChunkName: "pages/profissionaisSaude/_username/details" */))

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
    path: "/dadosBiomedicos/:id/edit",
    component: _217cba24,
    name: "dadosBiomedicos-id-edit"
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
    component: _fcfcc15a,
    name: "prc-username-consultar"
  }, {
    path: "/prc/:username?/create",
    component: _0ecf5436,
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
