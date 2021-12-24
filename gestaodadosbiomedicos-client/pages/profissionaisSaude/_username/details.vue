<template>
  <b-container>
    <h4>Detalhes do Profissional de Saúde:</h4>
    <p>Username: {{ profissionalSaude.username }}</p>
    <p>Name: {{ profissionalSaude.name }}</p>
    <p>Email: {{ profissionalSaude.email }}</p>
    <p>Tipo: {{ profissionalSaude.tipo }}</p>
    <b>Utentes do {{ profissionalSaude.name }}:</b>
      <template v-for="utente in utentes">
        <li>{{utente.name}}</li>
      </template>
    <nuxt-link to="/profissionaisSaude">Back</nuxt-link>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      profissionalSaude: {},
      utentes:{}
    };
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  created() {
    this.$axios
      .$get(`/api/profissionaisSaude/${this.username}`)
      .then((profissionalSaude) => (this.profissionalSaude = profissionalSaude || {})),
      this.$axios
      .$get(`/api/profissionaisSaude/${this.username}/utentes`)
      .then((utentes) => (this.utentes = utentes || {}))
  },
};
</script>
