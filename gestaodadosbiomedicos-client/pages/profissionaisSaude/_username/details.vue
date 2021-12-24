<template>
  <b-container>
    <h4>Detalhes do Profisisonal de Saúde:</h4>
    <p>Username: {{ profissionalSaude.username }}</p>
    <p>Name: {{ profissionalSaude.name }}</p>
    <p>Email: {{ profissionalSaude.email }}</p>
    <p>Tipo: {{ profissionalSaude.tipo }}</p>
    <nuxt-link to="/profissionaisSaude">Back</nuxt-link>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      profissionalSaude: {},
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
      .then((profissionalSaude) => (this.profissionalSaude = profissionalSaude || {}))
  },
};
</script>
