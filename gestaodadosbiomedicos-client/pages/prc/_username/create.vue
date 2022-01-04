<template>
  <div style="margin: 100px 50px;">
    <h1>Programa de reabilitação cardíaca de {{this.username}}</h1>
    <form @submit.prevent="create">
      <b-input
        v-model="duracaoPrograma"
        required
        placeholder="Introduza a duracao do programa (meses)"
      />
      <b-input
        v-model="duracaoTreinoDiario"
        required
        placeholder="Introduza a duracao de treino físico diário (horas)"
      />
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
      duracaoPrograma: null,
      duracaoTreinoDiario: null,
      errorMsg: false,
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
          duracaoPrograma: this.duracaoPrograma,
          duracaoTreinoDiario: this.duracaoTreinoDiario,
          utenteUsername: this.username,
        })
        .then(() => {
          this.$router.push(`/utentes/`);
        })
        .catch((error) => {
          if(this.duracaoPrograma > 0){
            this.errorMsg = "Utente already has a prc";
          }
          else this.errorMsg = "Duração has to be bigger than 0"
        });
    },
  },
};
</script>

