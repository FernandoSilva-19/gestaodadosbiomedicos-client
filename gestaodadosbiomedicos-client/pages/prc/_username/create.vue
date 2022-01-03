<template>
  <div>
    <h1>Programa de reabilitação cardíaca de {{this.username}}</h1>
    <form @submit.prevent="create">
      <b-input
        v-model="duracao"
        required
        placeholder="Introduza a duracao do programa(meses)"
      />
      <p class="text-danger" v-show="errorMsg">{{ errorMsg }}</p>
      <nuxt-link to="/utentes/"
        >Return</nuxt-link
      >
      <button type="reset">Reset</button>
      <button @click.prevent="create">Criar Programa</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      duracao: null,
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
          duracao: this.duracao,
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

