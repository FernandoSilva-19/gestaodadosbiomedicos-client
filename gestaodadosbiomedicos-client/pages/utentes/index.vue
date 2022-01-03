<template>
  <!-- easy components usage, already shipped with bootstrap css-->
  <div v-if="utentes != null">
    <b-container>
      <div v-if="$auth.user.groups == 'Admin' || $auth.user.groups == ''" align="right">
      <nuxt-link class="btn btn-success" to="utentes/create"
      >Criar novo utente</nuxt-link>
      </div>
      <!-- try to remove :fields=”fields” to see the magic -->
      <b-table striped over :items="utentes" :fields="fields">
        <template v-slot:cell(actions)="data">
          <div v-if="$auth.user.groups == 'Admin' || $auth.user.sub == data.item.username || $auth.user.sub == data.item.profissionalSaudeUsername">
          <nuxt-link
            class="btn btn-secondary btn-sm"
            :to="`/utentes/${data.item.username}/details`"
            >Detalhes</nuxt-link
          >
          </div>
          <div v-if="$auth.user.groups == 'Admin' || $auth.user.sub == data.item.username">
          <nuxt-link
            class="btn btn-primary btn-sm"
            :to="`/utentes/${data.item.username}/edit`"
            >Editar</nuxt-link
          >
          </div>
          <div v-if="$auth.user.groups == 'ProfissionalSaude'">
          <nuxt-link
            class="btn btn-primary btn-sm"  :to="`/dadosBiomedicos/${data.item.username}/adicionarDadoAUtente`">
            Adicionar Dado Biomédico</nuxt-link
          >
          <nuxt-link
            class="btn btn-danger btn-sm"  :to="`/dadosBiomedicos/${data.item.username}/RemoverDadoAUtente`">
            Remover Dado Biomédico</nuxt-link
          >
          <nuxt-link
            class="btn btn-primary btn-sm"  :to="`/prc/${data.item.username}/create`">
            Criar PRC</nuxt-link
          >
           <nuxt-link
            class="btn btn-secondary btn-sm"  :to="`/prc/${data.item.username}/consultar`">
            Consultar PRC</nuxt-link
          >
          </div>
          <div v-if="$auth.user.groups == 'Admin'">
          <b-button class="btn btn-danger btn-sm" @click="remove(data.item.username)">Eliminar</b-button>
          </div>
        </template>
      </b-table>
      <nuxt-link to="/">Back</nuxt-link>
    </b-container>
  </div>
  <div v-else>
    <h1>Sem acesso</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fields: [
        "username",
        "name",
        "email",
        "actions",
      ],
      utentes: [],
    };
  },
  methods: {
    remove(username) {
      this.$axios.$delete("/api/utentes/" + username)
        .then(() => {
          this.$axios.$get('/api/utentes').then((utentes) => { this.utentes = utentes })
        })
        .catch(error => {
          this.errorMsg = error.response.data
        })
    }
  },
  created() {
    this.$axios.$get("/api/utentes").then((utentes) => {
      this.utentes = utentes || null
    });
    //this.$axios.$get("http://localhost:8080/gestaodadosbiomedicos/api/utentes");
  },
};
</script>
<style></style>
