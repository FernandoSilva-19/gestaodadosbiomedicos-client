<template>
  <!-- easy components usage, already shipped with bootstrap css-->
  <b-container>
    <!-- try to remove :fields=”fields” to see the magic -->
    <b-table striped over :items="utentes" :fields="fields" />
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      fields: ["username", "name", "email"],
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
