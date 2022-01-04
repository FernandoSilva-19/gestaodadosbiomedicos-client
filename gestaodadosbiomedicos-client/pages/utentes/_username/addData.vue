<template>
<div id="mainDivAddData">
  <form @submit.prevent="add">
     <b-input v-model.trim="altura.valor" :state="isAlturaValid" required
               placeholder="Introduz a tua altura atual (medição: cm)" />
      <b-input v-model="peso.valor" :state="isPesoValid" required
               placeholder="Introduz o teu peso atual (medição: KG)" />

    <p class="text-danger" v-show="errorMsg">{{ errorMsg }}</p>
    <nuxt-link :to="`/utentes/${$auth.user.sub}/data`">Return</nuxt-link>
    <b-button pill variant="dark" size="sm" type="reset">Reset</b-button>
    <b-button pill variant="dark" size="sm" @click.prevent="add">Add</b-button>
  </form>
</div>
</template>
<script>
export default {
  data() {
    return {
      utenteUsername: "",
      altura: {valor: "", minimo: "", maximo: ""},
      peso: {valor: "", minimo: "", maximo: ""},
      errorMsg: false
    };
  },
  created(){
          this.$axios
      .$get(`/api/utentes/${this.$auth.user.sub}`)
      .then((utente) => (this.utenteUsername = utente.username || {}))

      // get limites
      this.$axios.$get("/api/phenomenType/altura")
      .then((altura) => {
        this.altura.minimo = altura.minimo;
        this.altura.maximo = altura.maximo;
      })
      this.$axios.$get("/api/phenomenType/peso")
      .then((peso) => {
        this.peso.minimo = peso.minimo;
        this.peso.maximo = peso.maximo;
      })
  },
  computed: {
    isAlturaValid () {
      if (!this.altura.valor) {
        return null
      }
      if (this.altura.valor > this.altura.minimo || this.altura < this.altura.maximo) {
        return false                             
      }
      return true
    },
    isPesoValid () {
      if (!this.peso.valor) {
        return null
      }
      if (this.peso.valor > this.peso.minimo || this.peso < this.peso.maximo) {
        return false                           
      }                                       
      return true
    },
  },
  methods: {
    add() {
      this.$axios.$post("/api/observations", { 
          valor: this.altura.valor,
          phenomenTypeNome: "altura",
          utenteUsername: this.utenteUsername
        })
        .catch(error => {
          this.errorMsg = error.response.data
        })

      this.$axios.$post("/api/observations", { 
          valor: this.peso.valor,
          phenomenTypeNome: "peso",
          utenteUsername: this.utenteUsername
        })
        .catch(error => {
          this.errorMsg = error.response.data
        })

      this.$axios.$post("/api/observations", { 
          valor: this.peso.valor/((this.altura.valor/100)*(this.altura.valor/100)),
          phenomenTypeNome: "imc",
          utenteUsername: this.utenteUsername
        })
        .then(() => {
          this.$router.push("/utentes/" + this.utenteUsername + "/data");
        })
        .catch(error => {
          this.errorMsg = error.response.data
        })

      if(this.peso.valor/((this.altura.valor/100)*(this.altura.valor/100)) < 18.5 || this.peso.valor/((this.altura.valor/100)*(this.altura.valor/100)) >= 30){
      this.$axios
        .$post("/api/prescricao/", {
          nome: "Ginásio",
          dose: null,
          tipoPrescricao: "DESPORTO",
          vezesAoDia: "1",
          utenteUsername: this.utenteUsername,
          profissionalSaudeUsername: null,
          dataValidade: null
        })
      }
    },
  },
};
</script>
<style>
  #mainDivAddData {
   margin: 100px 50px;
  }
</style>

