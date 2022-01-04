<template>
  <div id="mainDivProfissionaisSaude">
    <div v-if="profissionaisSaude != null">
  <b-container>
    <div v-if=" $auth.user.groups == 'Admin'" align="left">
     <nuxt-link class="btn btn-success" to="/profissionaisSaude/create">Criar novo profissional de saúde</nuxt-link>
     </div>
    <br>
    <b-table striped over bordered table-variant="info" head-variant="dark" :items="profissionaisSaude" :fields="fields">
      <template v-slot:cell(actions)="data">
          <div v-if=" $auth.user.groups == 'Admin' || $auth.user.sub == data.item.username">
          <nuxt-link
            class="btn btn-secondary btn-sm"
            :to="`/profissionaisSaude/${data.item.username}/details`"
            >Detalhes</nuxt-link
          >
          </div>
          <div v-if="$auth.user.groups == 'Admin' || $auth.user.sub == data.item.username">
          <nuxt-link
            class="btn btn-primary btn-sm"
            :to="`/profissionaisSaude/${data.item.username}/edit`"
            >Editar</nuxt-link
          >
          </div>
          <div v-if="$auth.user.groups == 'Admin'">
          <b-button class="btn btn-danger btn-sm" @click="remove(data.item.username)">Eliminar</b-button>
          </div>
      </template>
    </b-table>
  </b-container>
  </div>
  <div v-else>
    <h1>Sem Acesso</h1>
  </div>

  </div>
</template>
<script>

export default {
  data() {
    return {
      fields: ["username", "name", "email", "tipo", "actions"],
      profissionaisSaude: [],
    };
  },
  created() {
    this.$axios.$get('/api/profissionaisSaude').then((profissionaisSaude) => { this.profissionaisSaude = profissionaisSaude || null })
  },
  methods: {
    edit(data){
      this.$router.push({ name: 'profissionaisSaude-edit', params: {data: data} })
      //this.$emit('data',username)
    },
    remove(username){
        this.$axios.$delete("/api/profissionaisSaude/" + username)
        .then(() => {
          this.$axios.$get('/api/profissionaisSaude').then((profissionaisSaude) => { this.profissionaisSaude = profissionaisSaude })
        })
        .catch(error => {
          this.errorMsg = error.response.data
        })
    }

  }

};
</script>
<style>
  #mainDivProfissionaisSaude {
   margin: 100px 50px;
  }
</style>

