<template>
  <!-- easy components usage, already shipped with bootstrap css-->
  <div>
  <b-container>
    <!-- try to remove :fields=”fields” to see the magic -->
    <b-table striped over :items="utentes" :fields="fields" />
  </b-container>
  <nuxt-link to="/create">Criar novo utente</nuxt-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fields: ["username", "name", "email", "profissionalSaudeUsername"],
      utentes: [],
    };
  },
  created() {
    this.$axios.$get('/api/utentes').then((utentes) => { this.utentes = utentes })
    //this.$axios.$get("http://localhost:8080/gestaodadosbiomedicos/api/utentes");
  },
};
</script>
<style></style>
