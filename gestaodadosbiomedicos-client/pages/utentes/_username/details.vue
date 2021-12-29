<template>
  <b-container>
    <h4>Detalhes do Utente:</h4>
    <p>Username: {{ utente.username }}</p>
    <p>Name: {{ utente.name }}</p>
    <p>Email: {{ utente.email }}</p>
    <p>Profissional de Saúde: {{ utente.profissionalSaudeUsername }}</p>
    <b>Dados biomedicos do {{ utente.name }}:</b>
    <hr>
    <b-table striped over :items="dadosBiomedicos" :fields="fields"> </b-table>
    <hr>
    <b>Peso e altura atual do {{ utente.name }}:</b>
    <div><p>Altura: {{ dados.altura? dados.altura+" cm" : "DESCONHECIDO"}}</p>
    <p>Peso: {{ dados.peso? dados.peso+" KG" : "DESCONHECIDO"}}</p>
    <hr>
    <div v-if="$auth.user.groups == 'Utente'">
    <nuxt-link
      :class="graphEnabled? 'btn btn-primary' : 'btn btn-danger'"
      :event="graphEnabled? 'click' : ''"
      :to="`/utentes/${$auth.user.sub}/datagraph`"
    >Gráfico</nuxt-link>
    <nuxt-link
      :class="graphEnabled? 'btn btn-primary' : 'btn btn-danger'"
      :event="graphEnabled? 'click' : ''"
      :to="`/utentes/${$auth.user.sub}/datahistory`"
    >Histórico</nuxt-link></div>
    </div>
    <b>Prescrições do {{ utente.name }}:</b>
    <hr>
    <b-table striped over :items="prescricoes" :fields="fields2"> </b-table>
    <hr>
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
      fields: ["tipo", "unidadeMedicao", "limiteMinimo", "limiteMaximo", "valor"],
       dados: {},
       fields2: ["nome", "dose", "vezesAoDia"],
       prescricoes:{},
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
      .$get(`/api/utentes/${this.username}`)
      .then((utente) => (this.utente = utente || {})),
      this.$axios
        .$get(`/api/utentes/${this.username}/dadosbiomedicos`)
        .then(
          (dadosBiomedicos) => (this.dadosBiomedicos = dadosBiomedicos || {})
        );
        this.$axios
      .$get(`/api/dadosutente/${this.username}/latest`)
      .then((dados) => this.dados = dados)
      .catch((err) => {
        if(err.response.status==404) this.graphEnabled = false
      });
      this.$axios
      .$get(`/api/prescricao/${this.username}`)
      .then((prescricoes) => (this.prescricoes = prescricoes || {}))
  },
};
</script>
