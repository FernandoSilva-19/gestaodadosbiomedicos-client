<template>
  <div>
    <h1>Criar um novo dado biómedico</h1>
    <form @submit.prevent="create">
      <b-input
        v-model="nome"
        required
        placeholder="Introduz o nome"
      />
      <b-input
        v-model="unidade"
        required
        placeholder="Introduz a unidade de medida"
      />
      <b-input
        v-model="valorMinimo"
        required
        placeholder="Introduz o valor minimo"
      />
      <b-input
        v-model="valorMaximo"
        required
        placeholder="Introduz o valor maximo"
      />
      <p class="text-danger" v-show="errorMsg">{{ errorMsg }}</p>
      <nuxt-link to="/dadosBiomedicos">Return</nuxt-link>
      <button type="reset">Reset</button>
      <button @click.prevent="create">Create</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nome: null,
      unidade: null,
      valorMinimo: null,
      valorMaximo: null,
      errorMsg: false,
    };
  },
  methods: {
    create() {
      this.$axios
        .$post("/api/phenomenType/", {
          nome: this.nome,
          unidade: this.unidade,
          valorMinimo: this.valorMinimo,
          valorMaximo: this.valorMaximo,
        })
        .then(() => {
          this.$router.push("/dadosBiomedicos");
        })
        .catch((error) => {
          this.errorMsg = error.response.data;
        });
    },
  },
};
</script>

