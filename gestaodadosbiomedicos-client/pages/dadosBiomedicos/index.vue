<template>
  <!-- easy components usage, already shipped with bootstrap css-->
  <div>
    <b-container>
      <div v-if="$auth.user.groups == 'Admin'">
      <nuxt-link class="btn btn-success" to="/dadosBiomedicos/create"
      >Criar novo dado biómedico</nuxt-link>
      </div>
      <!-- try to remove :fields=”fields” to see the magic -->
      <b-table striped over :items="dados" :fields="fields">
        <template v-slot:cell(actions)="data">
          <div v-if="$auth.user.groups == 'Admin' && needLimite(data.item.tipo)">
          <nuxt-link
            class="btn btn-primary btn-sm"
            :to="`/dadosBiomedicos/${data.item.id}/edit`"
            >Editar</nuxt-link
          >
          </div>
          <div v-if="$auth.user.groups == 'Admin'">
          <b-button class="btn btn-danger btn-sm" @click="remove(data.item.id)">Eliminar</b-button>
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
        "id",
        "tipo",
        "unidadeMedicao",
        "limiteMinimo",
        "limiteMaximo",
        "actions",
      ],
      dados: [],
    };
  },
  methods: {
    remove(id) {
      this.$axios.$delete("/api/dadosbiomedicos/" + id)
        .then(() => {
          this.$axios.$get('/api/dadosbiomedicos').then((dados) => { this.dados = dados })
        })
        .catch(error => {
          this.errorMsg = error.response.data
        })
    },
    needLimite(option){
      if(option == 'TEMPERATURA_CORPORAL' || option ==  'TEMPERATURA_QUARTO_PACIENTE' || option == 'FREQUENCIA_CARDIACA' || option == 'ILUMINACAO_QUARTO_PACIENTE'){
      return true;
      }
      return false;
    },
  },
  created() {
    this.$axios.$get("/api/dadosbiomedicos").then((dados) => {
      this.dados = dados;
    });
    //this.$axios.$get("http://localhost:8080/gestaodadosbiomedicos/api/utentes");
  },
};
</script>
<style></style>
