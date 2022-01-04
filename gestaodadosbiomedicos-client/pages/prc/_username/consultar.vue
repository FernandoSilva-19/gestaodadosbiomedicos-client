<template>
  <div v-if="prcUtente == null">
    <h1>Sem Acesso</h1>
  </div>
  <div style="margin: 100px 50px;" v-else-if="prcUtente.duracao != null">
    <b-container>
      <h4>
        Detalhes do Programa de Reabilitação Cardíaca de {{ utente.name }}:
      </h4>
      <div v-if="prcUtente.duracao == 1">
        <h5>Duração: {{prcUtente.duracao}} mês</h5>
      </div>
      <div v-else>
        <h5>Duração: {{prcUtente.duracao}} meses</h5>
      </div>
      <div v-if="prcUtente.duracaoTreinoDiario == 1">
        <h5>Duração de Treino Físico Diário: {{prcUtente.duracaoTreinoDiario}} hora</h5>
      </div>
      <div v-else>
        <h5>Duração de Treino Físico Diário: {{prcUtente.duracaoTreinoDiario}} horas</h5>
      </div>
      <div>
        <h5>Observações: {{prcUtente.observacoes}}</h5>
      </div>
      <div>
        <h5>{{prcUtente.fase}}</h5>
      </div>
      <hr>
      <b>Dados biomedicos atuais:</b>
      <div v-if="dadosBiomedicosUtente != null">
        <b-table
          striped over bordered table-variant="info" head-variant="dark"
          :items="dadosBiomedicosUtente"
          :fields="fieldsDadosBiomedicos"
        >
        </b-table>
      </div>
      <div v-else>
        <p>Sem dados</p>
      </div>
      <b>Prescricoes atuais:</b>
      <div align="right">
        <nuxt-link
          class="btn btn-success btn-sm"
          :to="`/prescricao/${utente.username}/receitar`"
        >
          Receitar Prescrição</nuxt-link
        >
      </div>
      <div v-if="prescricoesUtente != null">
        <b-table
          striped over bordered table-variant="info" head-variant="dark"
          :items="prescricoesUtente"
          :fields="fieldsPrescricao"
        >
          <template v-slot:cell(actions)="data">
            <div v-if="$auth.user.groups == 'ProfissionalSaude'">
              <b-button
                class="btn btn-danger btn-sm"
                @click="remove(data.item.id)"
              >Eliminar</b-button
              >
            </div>
          </template>
        </b-table>
      </div>
      <div v-else>
        <p>Sem prescrições</p>
      </div>
      <nuxt-link to="/utentes/">Back</nuxt-link>
    </b-container>
  </div>
  <div v-else>
    <h1>Utente não tem prc criado</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      utente: [],
      dadosBiomedicosUtente: [],
      prescricoesUtente: [],
      prcUtente: null,
      fieldsDadosBiomedicos: ["phenomenTypeNome", "valor", "date"],
      fieldsPrescricao: [
        "nome",
        "dose",
        "vezesAoDia",
        "profissionalSaudeUsername",
        "tipoPrescricao",
        "data",
        "dataValidade",
        "actions",
      ],
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
          this.$axios
            .$get(`/api/prescricao/${this.username}`)
            .then((prescricoesUtente) => {
              this.prescricoesUtente = prescricoesUtente;
            });
        })
        .catch((error) => {
          this.errorMsg = error.response.data;
        });
    }
  },
  created() {
    this.$axios
      .$get(`/api/utentes/${this.username}`)
      .then((utente) => (this.utente = utente || {})),
      this.$axios
        .$get(`/api/observations/${this.username}`)
        .then(
          (dadosBiomedicosUtente) =>
            (this.dadosBiomedicosUtente = dadosBiomedicosUtente || null)
        ),
      this.$axios
        .$get(`/api/prescricao/${this.username}`)
        .then(
          (prescricoesUtente) =>
            (this.prescricoesUtente = prescricoesUtente || null)
        );
    this.$axios
      .$get(`/api/prc/${this.username}`)
      .then((prcUtente) => (this.prcUtente = prcUtente || null));
  },
};
</script>
