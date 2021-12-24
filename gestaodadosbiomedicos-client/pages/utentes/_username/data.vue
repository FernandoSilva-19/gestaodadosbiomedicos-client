<template>
<div>
    <h1>Dados do utente '{{utente.username}}'</h1>
    <p>Altura: {{ utente.altura? utente.altura+" cm" : "DESCONHECIDO"}}</p>
    <p>Peso: {{ utente.peso? utente.peso+" KG" : "DESCONHECIDO"}}</p>
    <hr>
    <nuxt-link
      class="btn btn-primary"
      :to="`/utentes/${$auth.user.sub}/addData`"
    >Adicionar novos dados</nuxt-link>
</div>
</template>
<script>
export default {
  data() {
    return {
      utente: {},
    };
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  created() {
    this.$axios
      .$get(`/api/utentes/${this.$auth.user.sub}`)
      .then((utente) => (this.utente = utente || {}))
  },
};
</script>

