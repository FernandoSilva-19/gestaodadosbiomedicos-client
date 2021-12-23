<template>
<div>
    <h1>Criar um novo utente</h1>
  <form @submit.prevent="create">
     <b-input v-model.trim="username" :state="isUsernameValid" required
               placeholder="Introduz o teu username" />
      <b-input v-model="password" :state="isPasswordValid" required
               placeholder="Introduz a tua password" />
      <b-input v-model.trim="name" :state="isNameValid" required
               placeholder="Introduz o teu nome" />
      <b-input ref="email" v-model.trim="email" type="email"
               :state="isEmailValid" required placeholder="Introduz o teu e-mail" />
      <b-select v-model="profissionalSaudeUsername">
      <template v-slot:first>
        <option :value="null" disabled>-- Selecione o profissional de saude --</option>
      </template>
      <template v-for="profissionalSaudeUsername in profissionaisSaude">
        <option :key="profissionalSaudeUsername.username" :value="profissionalSaudeUsername.username">
          {{ profissionalSaudeUsername.name }}
        </option>
      </template>
      </b-select>
    <p class="text-danger" v-show="errorMsg">{{ errorMsg }}</p>
    <nuxt-link to="/utentes">Return</nuxt-link>
    <button type="reset">Reset</button>
    <button @click.prevent="create">Create</button>
  </form>
</div>
</template>
<script>
export default {
  data() {
    return {
      username: null,
      password: null,
      name: null,
      email: null,
      profissionalSaudeUsername: null,
      profissionaisSaude: [],
      errorMsg: false
    };
  },
  created() {
    this.$axios.$get('api/profissionaisSaude').then(profissionaisSaude => { this.profissionaisSaude = profissionaisSaude
    })
  },
  computed: {
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
      if (!this.email) {
        return null
      }
      /* asks the component if it’s valid.
      We don’t need to use a regex for the e-mail.
      The input field already does the job for us, because it is of type“email” and
      validates that the user writes an e-mail that belongs to the domain of IPLeiria.*/
        return this.$refs.email.checkValidity()
    },
    isProfissionalSaudeValid () {
      if (!this.profissionalSaudeUsername) {
        return null
      }
      return this.profissionaisSaude.some(profissionalSaude => this.profissionalSaudeUsername === profissionalSaude.username)
    }
  },
  methods: {
    create() {
      this.$axios.$post("/api/utentes", {
          email: this.email,
          name: this.name,
          password: this.password,
          profissionalSaudeUsername: this.profissionalSaudeUsername,
          username: this.username
        })
        .then(() => {
          this.$router.push("/utentes");
        })
        .catch(error => {
          this.errorMsg = error.response.data
        })
    },
  },
};
</script>

