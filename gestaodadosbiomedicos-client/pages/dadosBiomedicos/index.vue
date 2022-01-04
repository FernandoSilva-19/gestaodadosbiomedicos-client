<template>
  <!-- easy components usage, already shipped with bootstrap css-->
  <div id="mainDivDadosBiomedicos">
    <b-container>
      <div v-if="$auth.user.groups == 'Admin'" align="left">
      <nuxt-link class="btn btn-success" to="/dadosBiomedicos/create"
      >Criar novo dado biómedico</nuxt-link>
      </div>
      <br>
      <!-- try to remove :fields=”fields” to see the magic -->
      <b-table striped over bordered table-variant="info" head-variant="dark" :items="dados" :fields="fields">
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
<style>
  #mainDivDadosBiomedicos {
   margin: 100px 50px;
  }
</style>
