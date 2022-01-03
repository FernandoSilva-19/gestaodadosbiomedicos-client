<template>
  <!-- easy components usage, already shipped with bootstrap css-->
  <div>
    <b-container>
      <div v-if="$auth.user.groups == 'Admin'" align="right">
      <nuxt-link class="btn btn-success" to="/dadosBiomedicos/create"
      >Criar novo dado biómedico</nuxt-link>
      </div>
      <!-- try to remove :fields=”fields” to see the magic -->
      <b-table striped over :items="dados" :fields="fields">
        <template v-slot:cell(actions)="data">
          <div v-if="$auth.user.groups == 'Admin'">
          <nuxt-link
            class="btn btn-primary btn-sm"
            :to="`/dadosBiomedicos/${data.item.nome}/edit`"
            >Editar</nuxt-link
          >
          </div>
          <div v-if="$auth.user.groups == 'Admin'">
          <b-button class="btn btn-danger btn-sm" @click="remove(data.item.nome)">Eliminar</b-button>
          </div>
        </template>
      </b-table>
      <nuxt-link to="/">Back</nuxt-link>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fields: [
        "nome",
        "unidade",
        "valorMinimo",
        "valorMaximo",
        "actions",
      ],
      dados: [],
    };
  },
  methods: {
    remove(nome) {
      this.$axios.$delete("/api/phenomenType/" + nome)
        .then(() => {
          this.$axios.$get('/api/phenomenType').then((dados) => { this.dados = dados })
        })
        .catch(error => {
          this.errorMsg = error.response.data
        })
    },
  },
  created() {
    this.$axios.$get("/api/phenomenType").then((dados) => {
      this.dados = dados;
    });
    //this.$axios.$get("http://localhost:8080/gestaodadosbiomedicos/api/utentes");
  },
};
</script>
<style></style>
