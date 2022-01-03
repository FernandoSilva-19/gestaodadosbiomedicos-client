<template>
  <!-- easy components usage, already shipped with bootstrap css-->
  <div v-if="admins != null">
  <b-container>
     <nuxt-link class="btn btn-success" to="/admins/create">Criar novo Administrador</nuxt-link>
    <!-- try to remove :fields=”fields” to see the magic -->
    <b-table striped over :items="admins" :fields="fields">
        <template v-slot:cell(actions)="data">
         <div v-if=" $auth.user.sub == data.item.username">
          <nuxt-link
            class="btn btn-secondary btn-sm"
            :to="`/admins/${data.item.username}/details`"
            >Detalhes</nuxt-link
          >
          </div>
          <div v-if=" $auth.user.sub == data.item.username">
          <nuxt-link
            class="btn btn-primary btn-sm"
            :to="`/admins/${data.item.username}/edit`"
            >Editar</nuxt-link
          >
          </div>
          <div v-if="$auth.user.sub == data.item.username">
          <b-button class="btn btn-danger btn-sm" @click="remove(data.item.username)">Eliminar</b-button>
          </div>
        </template>
      </b-table>
      <nuxt-link to="/">Back</nuxt-link>
  </b-container>
  </div>
  <div v-else>
      <h1>Sem acesso</h1>
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
    this.$axios.$get('/api/admins').then((admins) => { this.admins = admins  || null })
    //this.$axios.$get("http://localhost:8080/gestaodadosbiomedicos/api/utentes");
  },
  methods: {
    edit(data){
        // prontos e depois tem aquele bug minimo q te disse, no checkValidity() devolve sempre false no inicio,
        // deve ser pq n assume q foi alterado pq o user n escreve msm o email

        // se vires uma forma para corrigir msm corrige, senao fazes aquilo que disse
        // vês como guardar uma variavel entre renders pq ao ser chamada a funcao as variaveis do data() render voltam ao normal
        // depois quando descobrires como guardar entre renders é fazeres algo tipo assim: https://i.imgur.com/aPYSRGP.png
        // Nota: tenta ver tipo o state do react native, é capaz de haver aqui no vue nem sei

    this.$router.push({ name: 'admins-edit', params: {data: data} })
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
