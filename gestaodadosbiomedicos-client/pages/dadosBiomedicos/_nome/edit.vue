<template>
  <div>
    <h1>Editar Dado Biómedico - {{dado.nome}}</h1>
    <form @submit.prevent="edit">
      <span>Valor Minimo</span>
      <b-input
        v-model="dado.valorMinimo"
        required
      />
      <span>Valor Maximo</span>
      <b-input
        v-model.trim="dado.valorMaximo"
        required
      />
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
      unidade: null,
      valorMinimo: null,
      valorMaximo: null,
      errorMsg: false
    };
  },
  created() {
    this.$axios
      .$get(`/api/phenomenType/${this.nome}`)
      .then((dado) => (this.dado = dado || {}))
  },
  computed: {
    nome() {
      return this.$route.params.nome;
    },
  },
  methods: {
    edit(dado) {
      this.$axios
        .$put("/api/phenomenType/" + this.nome, {
          unidade: dado.unidade,
          valorMinimo: dado.valorMinimo,
          valorMaximo: dado.valorMaximo,
        })
        .then(() => {
          this.$router.push("/dadosBiomedicos");
        })
        .catch((error) => {
          this.errorMsg = error.response.data;
        });
      //console.log("received: '"+ this.$route.params.data.email+"'")
    },
  },
};
</script>

