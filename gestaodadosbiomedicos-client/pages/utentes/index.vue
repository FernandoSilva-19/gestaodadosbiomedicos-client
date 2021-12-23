<template>
  <!-- easy components usage, already shipped with bootstrap css-->
  <div>
    <b-container>
      <nuxt-link class="btn btn-success" to="utentes/create"
      >Criar novo utente</nuxt-link>
      <!-- try to remove :fields=”fields” to see the magic -->
      <b-table striped over :items="utentes" :fields="fields">
        <template v-slot:cell(actions)="data">
          <nuxt-link
            class="btn btn-secondary" size="sm"
            :to="`/utentes/${data.item.username}`"
            >Details</nuxt-link
          >
          <b-button variant="primary" @click="edit(data.item)">Editar</b-button>
          <b-button class="btn btn-danger" @click="remove(data.item.username)">Delete</b-button>
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
        "username",
        "name",
        "email",
        "profissionalSaudeUsername",
        "actions",
      ],
      utentes: [],
    };
  },
  methods: {
    edit(data){
      this.$router.push({ name: 'utentes-edit', params: {data: data} })
      //this.$emit('data',username)
    },
    remove(username) {
      this.$axios.$delete("/api/utentes/" + username)
        .then(() => {
          this.$axios.$get('/api/utentes').then((utentes) => { this.utentes = utentes })
        })
        .catch(error => {
          this.errorMsg = error.response.data
        })
    }
  },
  created() {
    this.$axios.$get("/api/utentes").then((utentes) => {
      this.utentes = utentes;
    });
    //this.$axios.$get("http://localhost:8080/gestaodadosbiomedicos/api/utentes");
  },
};
</script>
<style></style>
