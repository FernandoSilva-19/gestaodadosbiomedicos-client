<template>
<div>
    <h1>Dados do utente '{{utente.username}}'</h1>
    <p>Altura: {{ altura? altura.valor+" cm" : "DESCONHECIDO"}}</p>
    <p>Peso: {{ peso? peso.valor+" KG" : "DESCONHECIDO"}}</p>
    <p>IMC: {{ imc? imc.valor+" KG/m^2" : "DESCONHECIDO"}}</p>
    <p>Classificação do IMC: {{ imc? classificacao : "DESCONHECIDO"}}</p>
    <hr>
    <nuxt-link
      class="btn btn-primary"
      :to="`/utentes/${$auth.user.sub}/addData`"
    >Adicionar novos dados</nuxt-link>
    <nuxt-link
      :class="graphEnabled? 'btn btn-primary' : 'btn btn-danger'"
      :event="graphEnabled? 'click' : ''"
      :to="`/utentes/${$auth.user.sub}/datagraph`"
    >Gráfico</nuxt-link>
    <nuxt-link
      :class="graphEnabled? 'btn btn-primary' : 'btn btn-danger'"
      :event="graphEnabled? 'click' : ''"
      :to="`/utentes/${$auth.user.sub}/datahistory`"
    >Histórico de dados</nuxt-link>
    <nuxt-link
      class="btn btn-primary"
      :to="`/utentes/${$auth.user.sub}/prescricaohistory`"
    >Histórico de prescricoes</nuxt-link>
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
      .then((imc) => (this.imc = imc || {}))
      .catch((err) =>{
        if(err.response.status==404) this.calculateIMC()
      })
  },
  methods:{
    calculateIMC(){ // ver depois
      Object.keys(this.altura).length === 0 && Object.keys(this.peso).length === 0? 
        this.imc = this.peso.valor/((this.altura.valor/100)*(this.altura.valor/100)) : this.imc = {}
    }
  }
}
</script>