<template>
<div style="margin: 100px 50px;" v-if="$auth.user.groups == 'Admin'">
  <b-container>
    <p>Username: {{ admin.username }}</p>
    <p>Name: {{ admin.name }}</p>
    <p>Email: {{ admin.email }}</p>
  </b-container>
  </div>
  <div v-else>
  <h1>Sem Acesso</h1>
</div>
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
      .then((admin) => (this.admin = admin || null))
  },
};
</script>
