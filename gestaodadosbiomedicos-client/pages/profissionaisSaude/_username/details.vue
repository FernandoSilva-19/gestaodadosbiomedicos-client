<template>
<div v-if="profissionalSaude != null">
  <b-container>
    <h4>Detalhes do Profissional de Saúde:</h4>
    <p>Username: {{ profissionalSaude.username }}</p>
    <p>Name: {{ profissionalSaude.name }}</p>
    <p>Email: {{ profissionalSaude.email }}</p>
    <p>Tipo: {{ profissionalSaude.tipo }}</p>
    <nuxt-link to="/profissionaisSaude">Back</nuxt-link>
  </b-container>
  </div>
  <div v-else><h1>Sem acesso</h1></div>
</template>
<script>
export default {
  data() {
    return {
      profissionalSaude: [],
      utentes: [],
      fields: ["name", "username", "email", "actions"],
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
      .then(
        (profissionalSaude) =>
          (this.profissionalSaude = profissionalSaude || null)
      ),
      this.$axios
        .$get(`/api/utentes`)
        .then((utentes) => (this.utentes = utentes || {}));
  },
};
</script>
