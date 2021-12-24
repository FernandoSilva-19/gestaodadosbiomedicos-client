<template>
  <b-container>
    <h4>Detalhes do Administrador:</h4>
    <p>Username: {{ admin.username }}</p>
    <p>Name: {{ admin.name }}</p>
    <p>Email: {{ admin.email }}</p>
    <nuxt-link to="/admins">Back</nuxt-link>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      admin: {},
    };
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  created() {
    this.$axios
      .$get(`/api/admins/${this.username}`)
      .then((admin) => (this.admin = admin || {}))
  },
};
</script>
