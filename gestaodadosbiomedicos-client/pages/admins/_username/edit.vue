<template>
<div v-if="admin != null">
    <h1>Editar Admin</h1>
  <form @submit.prevent="edit">
      <b-input v-model="admin.password" :state="isPasswordValid" required
               placeholder="Introduz a tua password" />
      <b-input v-model.trim="admin.name" :state="isNameValid" required
               placeholder="Introduz o teu nome" />
      <b-input ref="email" v-model.trim="admin.email" type="email"
               :state="isEmailValid" required placeholder="Introduz o teu e-mail" />

    <p class="text-danger" v-show="errorMsg">{{ errorMsg }}</p>
    <nuxt-link to="/admins">Return</nuxt-link>
    <button type="reset">Reset</button>
    <button @click.prevent="edit(admin)">Edit</button>
  </form>
</div>
 <div v-else>
  <h1>Sem Acesso</h1>
</div>
</template>
<script>
export default {
  data() {
    return {
      admin:{},
      errorMsg: false,
    };
  },
  created() {
    this.$axios
      .$get(`/api/admins/${this.username}`)
      .then((admin) => (this.admin = admin || null))
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
    isUsernameValid () {
      if (!this.username) {
        return null
      }
      let usernameLen = this.username.length
      if (usernameLen < 3 || usernameLen > 15) {
        return false
      }
      return true
    },
    isPasswordValid () {
      if (!this.password) {
        return null
      }
      let passwordLen = this.password.length
      if (passwordLen < 3 || passwordLen > 255) {
        return false
      }
      return true
    },
    isNameValid () {
      if (!this.name) {
        return null
      }
      let nameLen = this.name.length
      if (nameLen < 3 || nameLen > 25) {
        return false
      }
      return true
    },
    isEmailValid () {
      if(this.i == 0){
        this.i = 1
        return true
      } else{
        if (!this.email) {
          return null
        }

      /* asks the component if it’s valid.
      We don’t need to use a regex for the e-mail.
      The input field already does the job for us, because it is of type“email” and
      validates that the user writes an e-mail that belongs to the domain of IPLeiria.*/
        return this.$refs.email.checkValidity()

      }
    },
  },
  methods: {
    edit(admin) {
      this.$axios.$put("/api/admins/" + this.username, {
          email: admin.email,
          name: admin.name,
          password: admin.password,
          username: this.username,
        })
        .then(() => {
          this.$router.push("/admins");
        })
        .catch(error => {
          this.errorMsg = error.response.data
        })

      //console.log("received: '"+ this.$route.params.data.email+"'")

    },
  },
};
</script>

