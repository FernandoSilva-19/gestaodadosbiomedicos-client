<template>
<div>
    <h1>Adicionar novos dados no utente</h1>
  <form @submit.prevent="add">
     <b-input v-model.trim="altura" :state="isAlturaValid" required
               placeholder="Introduz a tua altura atual (medição: cm)" />
      <b-input v-model="peso" :state="isPesoValid" required
               placeholder="Introduz o teu peso atual (medição: KG)" />

    <p class="text-danger" v-show="errorMsg">{{ errorMsg }}</p>
    <nuxt-link :to="`/utentes/${$auth.user.sub}/data`">Return</nuxt-link>
    <button type="reset">Reset</button>
    <button @click.prevent="add">Add</button>
  </form>
</div>
</template>
<script>
export default {
  data() {
    return {
      utenteUsername: "",
      altura: null,
      peso: null,
      id: null,
      date: "",
      errorMsg: false
    };
  },
  created(){
          this.$axios
      .$get(`/api/utentes/${this.$auth.user.sub}`)
      .then((utente) => (this.utenteUsername = utente.username || {}))
  },
  computed: {
    isAlturaValid () {
      if (!this.altura) {
        return null
      }
      if (this.altura > 300 || this.altura < 100) { // estou a assumir que as pessoas têm pelo menos 100cm e menos de 300cm (epah se for preciso muda-se
        return false                                // os bébes podem ter tipo 30cm e cenas assim e pode haver um mutante com mais de 3 metros sei lá hahaha)
      }
      return true
    },
    isPesoValid () {
      if (!this.peso) {
        return null
      }
      if (this.peso > 400 || this.peso < 10) { // estou a assumir q um utente num minimo tem 10kg mas pode-se alterar um bebé pode ter menos de 10kg,
        return false                           // assumo tbem q nao ha ninguem com mais de 400kg hahaha (nota: fui ver à net e a pessoa mais pesada alguma vez
      }                                        // registada pesava 635kg cum crl haha
      return true
    },
  },
  methods: {
    add() {
      this.$axios.$post("/api/dadosutente", { // a testar, depois n vou passar assim o id nem a data como é obvio
          utenteUsername: this.utenteUsername,
          peso: this.peso,
          altura: this.altura,
          id: 89,
          date: ""
        })
        .then(() => {
          this.$router.push("/utentes/" + this.utenteUsername + "/data");
        })
        .catch(error => {
          this.errorMsg = error.response.data
        })
    },
  },
};
</script>

