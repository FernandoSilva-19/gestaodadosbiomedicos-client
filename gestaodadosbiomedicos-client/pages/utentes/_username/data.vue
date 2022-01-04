<template>
<div id="mainDivData">
    <p>Altura: {{ altura? altura.valor+" cm" : "DESCONHECIDO"}}</p>
    <p>Peso: {{ peso? peso.valor+" KG" : "DESCONHECIDO"}}</p>
    <p>IMC: {{ imc? imc.valor+" KG/m^2" : "DESCONHECIDO"}}</p>
    <p>Classificação do IMC: {{ imc? classificacao : "DESCONHECIDO"}}</p>
    <hr>
    <nuxt-link
      class="btn btn-primary"
      :to="`/utentes/${$auth.user.sub}/addData`"
    >Atualizar peso e altura</nuxt-link>
    <nuxt-link
      :class="graphEnabled? 'btn btn-primary' : 'btn btn-danger'"
      :event="graphEnabled? 'click' : ''"
      :to="`/utentes/${$auth.user.sub}/datagraph`"
    >Gráfico</nuxt-link>
</div>
</template>
<script>
export default {
  data() {
    return {
      utente: {},
      altura: {},
      peso: {},
      imc: {},
      classificacao: "",
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
      .$get(`/api/utentes/${this.$auth.user.sub}`)
      .then((utente) => (this.utente = utente || {}))

    this.$axios
      .$get(`/api/observations/${this.$auth.user.sub}/altura/latest`)
      .then((altura) => (this.altura = altura || {}))
      .catch((err) => {
        if(err.response.status==404) this.graphEnabled = false
      })

    this.$axios
      .$get(`/api/observations/${this.$auth.user.sub}/peso/latest`)
      .then((peso) => (this.peso = peso || {}))
      .catch((err) => {
        if(err.response.status==404) this.graphEnabled = false
      })

    this.$axios
      .$get(`/api/observations/${this.$auth.user.sub}/imc/latest`)
      .then((imc) => {
        this.imc = imc
        if(this.imc.valor < 18.5) this.classificacao = "Abaixo do peso"
        else if(this.imc.valor < 25) this.classificacao = "Peso normal"
        else if(this.imc.valor < 30) this.classificacao = "Acima do peso"
        else if(this.imc.valor < 35) this.classificacao = "Obesidade classe I"
        else if(this.imc.valor < 40) this.classificacao = "Obesidade classe II"
        else if(this.imc.valor >= 40) this.classificacao = "Obesidade classe III"
      })
  }
}
</script>
<style>
  #mainDivData {
   margin: 100px 50px;
  }
</style>