<template>
  <div>
    <h1>Editar Utente</h1>
    <form @submit.prevent="edit">
      <b-input
        v-model="utente.password"
        :state="isPasswordValid"
        required
      />
      <b-input
        v-model.trim="utente.name"
        :state="isNameValid"
        required
      />
      <b-input
        ref="email"
        v-model.trim="utente.email"
        type="email"
        :state="isEmailValid"
        required
      />
      <b-select v-model="utente.profissionalSaudeUsername">

        <template v-for="profissionalSaudeUsername in profissionaisSaude">
          <option
            :key="profissionalSaudeUsername.username"
            :value="profissionalSaudeUsername.username"
          >
            {{ profissionalSaudeUsername.name }}
          </option>
        </template>
      </b-select>

      <p class="text-danger" v-show="errorMsg">{{ errorMsg }}</p>
      <nuxt-link to="/utentes">Return</nuxt-link>
      <button type="reset">Reset</button>
      <button @click.prevent="edit(utente)">Edit</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      utente: {},
      profissionaisSaude: [],
    };
  },
  created() {
    this.$axios
      .$get(`/api/utentes/${this.username}`)
      .then((utente) => (this.utente = utente || {})),
      this.$axios.$get('api/profissionaisSaude').then(profissionaisSaude => { this.profissionaisSaude = profissionaisSaude
    })
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
    isUsernameValid() {
      if (!this.username) {
        return null;
      }
      let usernameLen = this.username.length;
      if (usernameLen < 3 || usernameLen > 15) {
        return false;
      }
      return true;
    },
    isPasswordValid() {
      if (!this.password) {
        return null;
      }
      let passwordLen = this.password.length;
      if (passwordLen < 3 || passwordLen > 255) {
        return false;
      }
      return true;
    },
    isNameValid() {
      if (!this.name) {
        return null;
      }
      let nameLen = this.name.length;
      if (nameLen < 3 || nameLen > 25) {
        return false;
      }
      return true;
    },
    isEmailValid() {
      if (this.i == 0) {
        this.i = 1;
        return true;
      } else {
        if (!this.email) {
          return null;
        }

        /* asks the component if it’s valid.
      We don’t need to use a regex for the e-mail.
      The input field already does the job for us, because it is of type“email” and
      validates that the user writes an e-mail that belongs to the domain of IPLeiria.*/
        return this.$refs.email.checkValidity();
      }
    },
    isProfissionalSaudeValid() {
      if (!this.profissionalSaudeUsername) {
        return null;
      }
      return this.profissionaisSaude.some(
        (profissionalSaude) =>
          this.profissionalSaudeUsername === profissionalSaude.username
      );
    },
  },
  methods: {
    edit(utente) {
      this.$axios
        .$put("/api/utentes/" + this.username, {
          username: this.username,
          password: utente.password,
          name: utente.name,
          email: utente.email,
          profissionalSaudeUsername: utente.profissionalSaudeUsername,
        })
        .then(() => {
          this.$router.push("/utentes");
        })
        .catch((error) => {
          this.errorMsg = error.response.data;
        });

      //console.log("received: '"+ this.$route.params.data.email+"'")
    },
  },
};
</script>

