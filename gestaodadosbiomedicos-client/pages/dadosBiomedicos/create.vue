<template>
<div>
    <h1>Criar um novo dado biómedico</h1>
  <form @submit.prevent="create">
      <b-input v-model.trim="name" :state="isNameValid" required
               placeholder="Introduz o novo dado biómedico" />
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
      name: null,
      id : null,
      dados:this.$axios.$get('api/dadosbiomedicos').then(dados => { this.dados = dados}),
      errorMsg: false
    };
  },
  computed:{
    isNameValid () {
      if (!this.name) {
        return null
      }
      let nameLen = this.name.length
      if (nameLen < 5 || nameLen > 100) {
        return false
      }
      return true
    }
  },
  methods: {
    create(dados) {
      this.$axios.$post("/api/dadosbiomedicos", {
          id: dados.length + 1,
          nome: this.name
        })
        .then(() => {
          this.$router.push("/dadosBiomedicos");
        })
        .catch(error => {
          this.errorMsg = error.response.data
        })
    },
  },
};
</script>

