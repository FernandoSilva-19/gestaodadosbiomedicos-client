<template>
  <div id="app">
    <b-navbar toggleable="lg" variant="info">
      <b-navbar-brand href="/">Gestao de Dados Biomédicos</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-if="$auth.loggedIn">
          <li class="nav-item" v-if="$auth.user.groups == 'ProfissionalSaude' || $auth.user.groups == 'Admin'">
            <nuxt-link class="nav-link" to="/utentes">Utentes</nuxt-link>
          </li>
          <li class="nav-item" v-if="$auth.user.groups == 'Admin'">
          <nuxt-link class="nav-link" to="/profissionaisSaude">Profissionais de Saúde</nuxt-link>
           </li>
          <li class="nav-item" v-if="$auth.user.groups == 'Admin'">
            <nuxt-link class="nav-link" to="/admins">Administradores</nuxt-link>
             </li>
          <li class="nav-item" v-if="$auth.user.groups == 'Admin'">
            <nuxt-link class="nav-link" to="/dadosBiomedicos">Dados Biómedicos</nuxt-link>
             </li>
          <li class="nav-item" v-if="$auth.user.groups == 'Utente'">
            <nuxt-link class="nav-link" :to="{ path: `/utentes/${$auth.user.sub}/data`}">Composição Corporal</nuxt-link>
          </li>
          <li class="nav-item" v-if="$auth.user.groups == 'Utente'">
            <nuxt-link class="nav-link" :to="{ path: `/utentes/${$auth.user.sub}/datahistory`}">Histórico de Dados Biomédicos</nuxt-link>
          </li>
          <li class="nav-item" v-if="$auth.user.groups == 'Utente'">
            <nuxt-link class="nav-link" :to="{ path: `/utentes/${$auth.user.sub}/prescricaohistory`}">Histórico de Prescrições</nuxt-link>
          </li>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-if="$auth.loggedIn" right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ $auth.user.sub }}</em>
            </template>
             <li class="nav-item" v-if="$auth.user.groups == 'ProfissionalSaude'">
              <nuxt-link class="dropdown-item" :to="{ path: `/profissionaisSaude/${$auth.user.sub}/details`}" >Profile</nuxt-link>
            </li>
            <li class="nav-item" v-else-if="$auth.user.groups == 'Utente'" >
               <nuxt-link class="dropdown-item" :to="{ path: `/utentes/${$auth.user.sub}/details`}" >Profile</nuxt-link>
            </li>
             <li class="nav-item" v-else >
               <nuxt-link class="dropdown-item" :to="{ path: `/admins/${$auth.user.sub}/details`}" >Profile</nuxt-link>
            </li>
            <b-dropdown-item @click.prevent="signOut">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <div class="nav-item" v-else>
            <nuxt-link class="nav-link" to="/auth/register">Create Account</nuxt-link>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <main>
      <Nuxt />
    </main>
  </div>
</template>
<script>
export default {
  methods: {
    signOut() {
      this.$auth.logout();
      this.$router.push("/auth/login");
    },
  }
};
</script>
