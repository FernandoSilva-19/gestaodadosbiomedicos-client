<template>
  <b-container>
    <h4>Detalhes do Programa de Reabilitação Cardíaca de {{utente.name}}:</h4>
    <b>Dados biomedicos atuais:</b>
    <b-table striped over :items="dadosBiomedicosUtente" :fields="fieldsDadosBiomedicos"> </b-table>
    <b>Prescricoes atuais:</b>
    <div align="right">
    <nuxt-link
            class="btn btn-primary btn-sm"  :to="`/prescricao/${utente.username}/receitar`">
            Receitar Prescrição</nuxt-link
          >
          </div>
    <b-table striped over :items="prescricoesUtente" :fields="fieldsPrescricao">
      <template v-slot:cell(actions)="data">
      <div v-if="$auth.user.groups == 'ProfissionalSaude'">
        <b-button class="btn btn-danger btn-sm" @click="remove(data.item.id)"
          >Eliminar</b-button
        >
      </div>
    </template> </b-table>
    <nuxt-link :to="`/prc/${utente.username}/consultar`">Back</nuxt-link>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      utente:[],
      dadosBiomedicosUtente: [],
      prescricoesUtente: [],
      prcUtente: [],
      fieldsDadosBiomedicos: [
        "phenomenTypeNome",
        "valor",
        "date",
      ],
      fieldsPrescricao: ["nome", "dose", "vezesAoDia", "data", "actions"],
      fieldsPRC: ["duracao"],
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
          this.$axios.$get(`/api/prescricao/${this.username}`).then((prescricoesUtente) => {
            this.prescricoesUtente = prescricoesUtente;
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
      .then(
        (utente) =>
          (this.utente = utente || {})
      ),
    this.$axios
      .$get(`/api/observations/${this.username}`)
      .then(
        (dadosBiomedicosUtente) =>
          (this.dadosBiomedicosUtente = dadosBiomedicosUtente || {})
      ),
      this.$axios
      .$get(`/api/prescricao/${this.username}`)
      .then((prescricoesUtente) => (this.prescricoesUtente = prescricoesUtente || {}));
      this.$axios
        .$get(`/api/prc/${this.username}`)
        .then((prcUtente) => (this.prcUtente = prcUtente || {}));
  },
};
</script>
