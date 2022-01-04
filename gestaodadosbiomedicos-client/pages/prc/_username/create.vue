<template>
  <div style="margin: 100px 50px;">
    <h1>Programa de reabilitação cardíaca de {{this.username}}</h1>
    <form @submit.prevent="create">
      <b-input
        v-model="duracao"
        required
        placeholder="Introduza a duracao do programa (meses)"
      />
      <b-input
        v-model="duracaoTreinoDiario"
        required
        placeholder="Introduza a duracao de treino físico diário (horas)"
      />
      <b-input
        v-model="observacoes"
        required
        placeholder="Observações: "
      />
      <template>
        <div>
          <b-form-select v-model="fase" :options="options"></b-form-select>
        </div>
      </template>
      <p>
      <p class="text-danger" v-show="errorMsg">{{ errorMsg }}</p>
      <nuxt-link to="/utentes/"
      >Return</nuxt-link
      >
      <b-button pill variant="dark" size="sm" type="reset">Reset</b-button>
      <b-button pill variant="dark" size="sm" @click.prevent="create">Criar Programa</b-button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      duracao: null,
      duracaoTreinoDiario: null,
      observacoes: null,
      fase: null,
      errorMsg: false,
      selected: null,
      options: [
        { value: null, text: '-- Selecione a fase em que se encontra o utente --' },
        { value: 'a', text: 'FASE 1: Paciente ainda hospitalizado' },
        { value: 'b', text: 'FASE 2: Paciente ainda em reabilitação cardiovascular após a alta' },
        { value: { C: '3PO' }, text: 'FASE 3: Paciente ainda em supervisão, devido a ser um utente de elevado risco' },
        { value: { C: '3PO' }, text: 'FASE 4: Paciente não supervisionado. Programa dinâmico, sem a regular supervisão de um profissional de saúde' },
      ]
    };
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  methods: {
    create() {
      this.$axios
        .$post("/api/prc/", {
          duracao: this.duracao,
          duracaoTreinoDiario: this.duracaoTreinoDiario,
          observacoes: this.observacoes,
          fase: this.fase,
          utenteUsername: this.username,
        })
        .then(() => {
          this.$router.push(`/utentes/`);
        })
        .catch((error) => {
          if(this.duracao > 0){
            this.errorMsg = "Utente already has a prc";
          }
          else this.errorMsg = "Duração has to be bigger than 0"
        });
    },
  },
};
</script>

