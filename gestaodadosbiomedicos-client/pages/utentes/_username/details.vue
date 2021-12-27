<template>
  <b-container>
    <h4>Detalhes do Utente:</h4>
    <p>Username: {{ utente.username }}</p>
    <p>Name: {{ utente.name }}</p>
    <p>Email: {{ utente.email }}</p>
    <p>Profissional de Saúde: {{ utente.profissionalSaudeUsername }}</p>
    <b>Dados biomedicos do {{ utente.name }}:</b>
    <b-table striped over :items="dadosBiomedicos" :fields="fields"> </b-table>
    <div v-if="$auth.user.groups == 'Utente'">
      <nuxt-link to="/">Back</nuxt-link>
    </div>
    <div v-else>
       <nuxt-link to="/utentes">Back</nuxt-link>
    </div>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      utente: {},
      dadosBiomedicos: {},
      fields: ["tipo", "unidadeMedicao", "limiteMinimo", "limiteMaximo"],
    };
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  created() {
    this.$axios
      .$get(`/api/utentes/${this.username}`)
      .then((utente) => (this.utente = utente || {})),
      this.$axios
        .$get(`/api/utentes/${this.username}/dadosbiomedicos`)
        .then(
          (dadosBiomedicos) => (this.dadosBiomedicos = dadosBiomedicos || {})
        );
  },
};
</script>
