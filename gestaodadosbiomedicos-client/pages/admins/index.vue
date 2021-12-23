<template>
  <!-- easy components usage, already shipped with bootstrap css-->
  <div>
  <b-container>
    <!-- try to remove :fields=”fields” to see the magic -->
    <b-table striped over :items="admins" :fields="fields">
        <template v-slot:cell(actions)="data">
          <b-button variant="primary" size="sm" @click="edit(data.item)">Editar</b-button>
          <b-button variant="danger" size="sm" @click="remove(data.item.username)">Remover</b-button>
        </template>
      </b-table>
  </b-container>
  <nuxt-link to="/admins/create">Criar novo administrador</nuxt-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fields: ["username", "name", "email", "actions"],
      admins: [],
    };
  },
  created() {
    this.$axios.$get('/api/admins').then((admins) => { this.admins = admins })
    //this.$axios.$get("http://localhost:8080/gestaodadosbiomedicos/api/utentes");
  },
  methods: {
    edit(data){
        // basta veres como fiz no edit do profissionaisSaude, depois de criares a pagina edit para isso
        // o nome da rota é gerado no ficheiro router.js dentro da pasta .nuxt na root do projeto

        // prontos e depois tem aquele bug minimo q te disse, no checkValidity() devolve sempre false no inicio,
        // deve ser pq n assume q foi alterado pq o user n escreve msm o email

        // se vires uma forma para corrigir msm corrige, senao fazes aquilo que disse
        // vês como guardar uma variavel entre renders pq ao ser chamada a funcao as variaveis do data() render voltam ao normal
        // depois quando descobrires como guardar entre renders é fazeres algo tipo assim: https://i.imgur.com/aPYSRGP.png
        // Nota: tenta ver tipo o state do react native, é capaz de haver aqui no vue nem sei

     // this.$router.push({ name: 'profissionaisSaude-edit', params: {data: data} })
      //this.$emit('data',username)
    },
    remove(username){
        this.$axios.$delete("/api/admins/" + username)
        .then(() => {
          this.$axios.$get('/api/admins').then((admins) => { this.admins = admins })
        })
        .catch(error => {
          this.errorMsg = error.response.data
        })
    }

  }
};
</script>
<style></style>
