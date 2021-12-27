<template>
<div>
    <h1>Dados do utente '{{utente.username}}'</h1>
    <p>Altura: {{ dados.altura? dados.altura+" cm" : "DESCONHECIDO"}}</p>
    <p>Peso: {{ dados.peso? dados.peso+" KG" : "DESCONHECIDO"}}</p>
    <hr>
    <nuxt-link
      class="btn btn-primary"
      :to="`/utentes/${$auth.user.sub}/addData`"
    >Adicionar novos dados</nuxt-link>
    <nuxt-link
      :class="graphEnabled? 'btn btn-primary' : 'btn btn-danger'"
      :event="graphEnabled? 'click' : ''"
      :to="`/utentes/${$auth.user.sub}/datagraph`"
    >Gráfico</nuxt-link>
    <nuxt-link
      :class="graphEnabled? 'btn btn-primary' : 'btn btn-danger'"
      :event="graphEnabled? 'click' : ''"
      :to="`/utentes/${$auth.user.sub}/datahistory`"
    >Histórico</nuxt-link>
</div>
</template>
<script>
export default {
  data() {
    return {
      utente: {},
      dados: {},
      graphEnabled: true
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

    this.$axios
      .$get(`/api/dadosutente/${this.$auth.user.sub}/latest`)
      .then((dados) => this.dados = dados)
      .catch((err) => {
        if(err.response.status==404) this.graphEnabled = false
      })
  },
};
</script>

