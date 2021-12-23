<template>
  <!-- easy components usage, already shipped with bootstrap css-->
  <div>
    <nuxt-link class="btn btn-primary" to="utentes/create"
      >Criar novo utente</nuxt-link>
    <b-container>
      <!-- try to remove :fields=”fields” to see the magic -->
      <b-table striped over :items="utentes" :fields="fields">
        <template v-slot:cell(actions)="row">
          <nuxt-link
            class="btn btn-secondary"
            :to="`/utentes/${row.item.username}`"
            >Details</nuxt-link
          >
          <nuxt-link
            class="btn btn-secondary"
            :to="`/utentes/${row.item.username}/edit`"
            >Edit</nuxt-link
          >
          <button class="btn btn-danger" @click="remove(row.item.username)">Delete</button>
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
    remove(username) {
      this.$axios.$delete("/api/utentes/" + username)
        .then(() => {
           this.$router.go();
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
