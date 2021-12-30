<template>
  <b-container>
    <h4>Detalhes do Utente:</h4>
    <p>Username: {{ utente.username }}</p>
    <p>Name: {{ utente.name }}</p>
    <p>Email: {{ utente.email }}</p>
    <p>Profissional de Saúde: {{ utente.profissionalSaudeUsername }}</p>
    <b>Dados biomedicos do {{ utente.name }}:</b>
    <b-table striped over :items="dadosBiomedicos" :fields="fields"> </b-table>
    <hr />
    <b>Peso e altura atual do {{ utente.name }}:</b>
    <div>
      <br />
      <p>Altura: {{ dados.altura ? dados.altura + " cm" : "DESCONHECIDO" }}</p>
      <p>Peso: {{ dados.peso ? dados.peso + " KG" : "DESCONHECIDO" }}</p>
      <hr />
      <div v-if="$auth.user.groups == 'Utente'">
        <nuxt-link
          :class="graphEnabled ? 'btn btn-primary btn-sm' : 'btn btn-danger btn-sm'"
          :event="graphEnabled ? 'click' : ''"
          :to="`/utentes/${$auth.user.sub}/datagraph`"
          >Gráfico</nuxt-link
        >
        <nuxt-link
          :class="graphEnabled ? 'btn btn-primary btn-sm' : 'btn btn-danger btn-sm'"
          :event="graphEnabled ? 'click' : ''"
          :to="`/utentes/${$auth.user.sub}/datahistory`"
          >Histórico</nuxt-link
        >
      </div>
    </div>
    <br>
    <b>Prescrições atual do {{ utente.name }}:</b>
    <b-table striped over :items="prescricoes" :fields="fields2">
    <template v-slot:cell(actions)="data">
      <div v-if="$auth.user.groups == 'ProfissionalSaude'">
        <b-button class="btn btn-danger btn-sm" @click="remove(data.item.id)"
          >Eliminar</b-button
        >
      </div>
    </template>
    </b-table>
    <div v-if="$auth.user.groups == 'Utente'">
      <nuxt-link
            class="btn btn-primary btn-sm"
            :to="`/utentes/${$auth.user.sub}/prescricaohistory`"
            >Histórico</nuxt-link
          >
    </div>
    <hr />
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
      fields: [
        "tipo",
        "unidadeMedicao",
        "limiteMinimo",
        "limiteMaximo",
        "valor",
      ],
      dados: {},
      fields2: ["nome", "dose", "vezesAoDia", "data", "actions"],
      prescricoes: {},
      graphEnabled: true,
    };
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  methods: {
    remove(id) {
      this.$axios
        .$delete("/api/prescricao/" + id)
        .then(() => {
          this.$axios.$get(`/api/prescricao/${this.username}`).then((prescricoes) => {
            this.prescricoes = prescricoes;
          });
        })
        .catch((error) => {
          this.errorMsg = error.response.data;
        });
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
      .then((dados) => (this.dados = dados))
      .catch((err) => {
        if (err.response.status == 404) this.graphEnabled = false;
      });
    this.$axios
      .$get(`/api/prescricao/${this.username}`)
      .then((prescricoes) => (this.prescricoes = prescricoes || {}));
  },
};
</script>
