<template>
  <div>
    <h1>Receitar prescrição</h1>
    <form @submit.prevent="create">
      <b-input
        v-model="nome"
        :state="isNomeValid"
        required
        placeholder="Introduz o nome"
      />
      <b-input
        v-model="dose"
        :state="isDoseValid"
        placeholder="Introduz a dose (se aplicável)"
      />
      <b-input
        v-model="vezesAoDia"
        :state="isVezesAoDiaValid"
        required
        placeholder="Introduz o número de vezes por dia"
      />

      <p class="text-danger" v-show="errorMsg">{{ errorMsg }}</p>
      <nuxt-link :to="`/profissionaisSaude/${$auth.user.sub}/details`"
        >Return</nuxt-link
      >
      <button type="reset">Reset</button>
      <button @click.prevent="create">Prescrever</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nome: null,
      dose: null,
      vezesAoDia: null,
      errorMsg: false,
    };
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
    isNomeValid() {
      if (!this.nome) {
        return null;
      }
      let nomeLen = this.nome.length;
      if (nomeLen < 3 || nomeLen > 25) {
        return false;
      }
      return true;
    },
    isDoseValid() {
      if (!this.dose) {
        return null;
      }
      let doseLen = this.dose.length;
      if (doseLen < 3 || doseLen > 25) {
        return false;
      }
      return true;
    },
    isVezesAoDiaValid() {
      //depois ver melhor isto secalahr ainda trocamos para int no backend
      if (!this.vezesAoDia) {
        return null;
      }
      return true;
    },
  },
  methods: {
    create() {
      this.$axios
        .$post("/api/prescricao/", {
          nome: this.nome,
          dose: this.dose,
          vezesAoDia: this.vezesAoDia,
          utenteUsername: this.username,
        })
        .then(() => {
          this.$router.push(`/prc/${this.username}/consultar`);
        })
        .catch((error) => {
          this.errorMsg = error.response.data;
        });
    },
  },
};
</script>

