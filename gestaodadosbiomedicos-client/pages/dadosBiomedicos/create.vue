<template>
<div>
    <h1>Criar um novo dado biómedico</h1>
  <form @submit.prevent="create">
      <div>
        <b-select v-model="selectedOption" :options="options">
        </b-select>
      </div>
      <b-input v-model="limiteMinimo" required :state="isLimiteMinimoValido"
               placeholder="Introduz o limite minimo" />
       <b-input v-model="limiteMaximo" required :state="isLimiteMaximoValido"
               placeholder="Introduz o limite máximo" />
    <p class="text-danger" v-show="errorMsg">{{ errorMsg }}</p>
    <nuxt-link to="/dadosBiomedicos">Return</nuxt-link>
    <button type="reset">Reset</button>
    <button @click.prevent="create(dados)">Create</button>
  </form>
</div>
</template>
<script>
export default {
  data() {
    return {
      id : null,
      limiteMinimo: null,
      limiteMaximo: null,
      dados:this.$axios.$get('api/dadosbiomedicos').then(dados => { this.dados = dados}),
      selectedOption: null,
      options: [
        {value: null, text: 'Seleciona um tipo'},
        {value: 'PERCENTAGEM_ALCOOL_QUARTO_PACIENTE', text: 'Percentagem de alcool no quarto do paciente'},
        {value: 'TEMPERATURA_QUARTO_PACIENTE', text: 'Temperatura do quarto do paciente'},
        {value: 'ILUMINACAO_QUARTO_PACIENTE', text: 'Iluminação no quarto do paciente'},
        {value: 'FREQUENCIA_CARDIACA', text: 'Frequência Cardíaca'},
        {value: 'TEMPERATURA_CORPORAL', text: 'Temperatura corporal'},
        {value: 'PERCENTAGEM_DE_OXIGENIO_NO_SANGUE', text: 'Percentagem de oxigénio no sangue'},
        {value: 'PERCENTAGEM_SUOR_PACIENTE_NO_CORPO', text: 'Percentagem de suor no corpo do paciente'}
      ],
      errorMsg: false
    };
  },
  computed:{
    isLimiteMinimoValido () {
      if (!this.limiteMinimo) {
        return null
      }
      if (this.limiteMinimo < 0) {
        return false
      }
      return true
    },
    isLimiteMaximoValido () {
      if (!this.limiteMaximo) {
        return null
      }
      if (this.limiteMaximo <= this.limiteMinimo) {
        return false
      }
      return true
    },
  },
  methods: {
    create(dados) {
      if(this.isLimiteMinimoValido && this.isLimiteMaximoValido){
      this.$axios.$post("/api/dadosbiomedicos", {
          id: dados.length + 1,
          tipo: this.selectedOption,
          unidadeMedicao: this.unidade,
          limiteMinimo: this.limiteMinimo,
          limiteMaximo: this.limiteMaximo
        })
        .then(() => {
          this.$router.push("/dadosBiomedicos");
        })
        .catch(error => {
          this.errorMsg = error.response.data
        })
      }
      else{
         this.errorMsg = "Limites errados"
      }
    },
  },
};
</script>

