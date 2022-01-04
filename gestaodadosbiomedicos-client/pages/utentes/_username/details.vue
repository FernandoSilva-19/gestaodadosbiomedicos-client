<template>
<div id="mainDivDetails" v-if="utente != null">
    <h4>Detalhes do Utente:</h4>
    <p>Username: {{ utente.username }}</p>
    <p>Name: {{ utente.name }}</p>
    <p>Email: {{ utente.email }}</p>
    <p>Profissional de Saúde: {{ utente.profissionalSaudeUsername }}</p>
    <nuxt-link
      class="btn btn-primary btn-sm"
      :to="`/utentes/${utente.username}/edit`"
    >Editar</nuxt-link>

</div>
<div v-else>
      <h1>Sem Acesso</h1>
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
    }
  },
  created() {
    this.$auth.user.sub == this.username ? this.editProfile = "disabled" : this.editProfile = "enabled" // esta maneira nao presta pq vais ao html
    this.$axios                                                       // poes ativo de novo (o ideal seria depois fazer duas paginas)
      .$get(`/api/utentes/${this.username}`)
      .then((utente) => (this.utente = utente || null))
  },
};
</script>
<style>
  #mainDivDetails {
   margin: 100px 50px;
  }
</style>
