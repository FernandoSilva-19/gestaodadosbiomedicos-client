<template>
  <div>
    <h1>Editar Dado Biómedico</h1>
    <form @submit.prevent="edit">
      <b-input
        v-model.trim="dado.nome"
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
    isNameValid() {
      if (!this.nome) {
        return null;
      }
      let nameLen = this.nome.length;
      if (nameLen < 5 || nameLen > 100) {
        return false;
      }
      return true;
    }
  },
  methods: {
    edit(dado) {
      this.$axios
        .$put("/api/dadosbiomedicos/" + this.id, {
          id: this.id,
          nome: dado.nome
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

