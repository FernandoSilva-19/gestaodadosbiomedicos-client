<template>
  <!-- easy components usage, already shipped with bootstrap css-->
  <div>
  <b-container>
     <nuxt-link class="btn btn-success" to="/profissionaisSaude/create">Criar novo profissional de saúde</nuxt-link>
    <!-- try to remove :fields=”fields” to see the magic -->
    <b-table striped over :items="profissionaisSaude" :fields="fields">
      <template v-slot:cell(actions)="data">
        <b-button variant="primary" size="sm" @click="edit(data.item)">Editar</b-button>
        <b-button variant="danger" size="sm" @click="remove(data.item.username)">Remover</b-button>
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
      fields: ["username", "name", "email", "tipo", "actions"],
      profissionaisSaude: [],
    };
  },
  created() {
    this.$axios.$get('/api/profissionaisSaude').then((profissionaisSaude) => { this.profissionaisSaude = profissionaisSaude })
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
<style></style>
