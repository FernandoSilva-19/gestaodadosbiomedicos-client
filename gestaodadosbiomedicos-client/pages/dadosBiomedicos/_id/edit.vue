<template>
  <div>
    <h1>Editar Dado Biómedico</h1>
    <form @submit.prevent="edit">
       <div v-if="needLimite(dado.tipo)">
      <b-input
        v-model="dado.limiteMinimo"
        required :state="isLimiteMinimoValido"
      />
      <b-input
        v-model.trim="dado.limiteMaximo"
        required :state="isLimiteMaximoValido"
      />
       </div>
      <p class="text-danger" v-show="errorMsg">{{ errorMsg }}</p>
      <nuxt-link to="/dadosBiomedicos">Return</nuxt-link>
      <button type="reset">Reset</button>
      <button @click.prevent="edit(dado)">Edit</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dado: {},
      limiteMinimo: null,
      limiteMaximo: null,
      valor: null,
      errorMsg: false
    };
  },
  created() {
    this.$axios
      .$get(`/api/dadosbiomedicos/${this.id}`)
      .then((dado) => (this.dado = dado || {}))
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    isLimiteMinimoValido () {
      if (!this.limiteMinimo) {
        return null
      }
      if (this.limiteMinimo < 0) {
        return false
      }
      this.errorMsg = "Limite minimo tem de ser maior que 0"
      return true
    },
    isLimiteMaximoValido () {
      if (!this.limiteMaximo) {
        return null
      }
      if (this.limiteMaximo <= this.limiteMinimo) {
        return false
      }
       this.errorMsg = "Limite máximo tem de ser maior que o limite minimo"
      return true

    }
  },
  methods: {
    edit(dado) {
      this.$axios
        .$put("/api/dadosbiomedicos/" + this.id, {
          id: this.id,
          tipo: dado.tipo,
          unidadeMedicao: this.unidade,
          limiteMinimo: dado.limiteMinimo,
          limiteMaximo: dado.limiteMaximo,
          valor: dado.limiteMinimo
        })
        .then(() => {
          this.$router.push("/dadosBiomedicos");
        })
        .catch((error) => {
          this.errorMsg = error.response.data;
        });
      //console.log("received: '"+ this.$route.params.data.email+"'")
    },
    needLimite(option){
      if(option == 'TEMPERATURA_CORPORAL' || option ==  'TEMPERATURA_QUARTO_PACIENTE' || option == 'FREQUENCIA_CARDIACA' || option == 'ILUMINACAO_QUARTO_PACIENTE'){
      return true;
      }
      else if (option == 'PERCENTAGEM_ALCOOL_QUARTO_PACIENTE' || option ==  'PERCENTAGEM_DE_OXIGENIO_NO_SANGUE' || option == 'PERCENTAGEM_SUOR_PACIENTE_NO_CORPO') {
        return false;
      }
    },
  },
};
</script>

