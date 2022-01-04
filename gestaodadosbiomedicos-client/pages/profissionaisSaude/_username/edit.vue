<template>
  <div style="margin: 100px 50px;" v-if="profissionalSaude != null || $auth.user.groups == 'Utente'">
    <form @submit.prevent="edit">
      <b-input
        v-model="profissionalSaude.password"
        :state="isPasswordValid"
        required
      />
      <b-input
        v-model.trim="profissionalSaude.name"
        :state="isNameValid"
        required
      />
      <b-input
        ref="email"
        v-model.trim="profissionalSaude.email"
        type="email"
        :state="isEmailValid"
        required
      />
      <div v-if="$auth.user.groups == 'Admin'">
        <b-select
          v-model="profissionalSaude.tipo"
          :options="options"
        >
        </b-select>
      </div>

      <p class="text-danger" v-show="errorMsg">{{ errorMsg }}</p>
      <div v-if="$auth.user.groups == 'Admin'">
        <nuxt-link to="/profissionaisSaude">Return</nuxt-link>
      </div>
      <div v-else>
        <nuxt-link :to="`/profissionaisSaude/${$auth.user.sub}/details`">Return</nuxt-link>
      </div>
      <b-button pill variant="dark" size="sm" type="reset">Reset</b-button>
      <b-button pill variant="dark" size="sm" @click.prevent="edit(profissionalSaude)">Edit</b-button>
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
      errorMsg: false,
      profissionalSaude: {},
      options: [
        {value: null, text: 'Seleciona um tipo'},
        {value: 'CARDIOLOGISTA', text: 'Cardiologista'},
        {value: 'NUTRICIONISTA', text: 'Nutricionista'},
        {value: 'MEDICO_GERAL', text: 'Médico Geral'},
      ]
    };
  },
  created() {
    this.$axios
      .$get(`/api/profissionaisSaude/${this.username}`)
      .then((profissionalSaude) => (this.profissionalSaude = profissionalSaude || null))
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
  },
  methods: {
    edit(profissionalSaude) {
      this.$axios
        .$put("/api/profissionaisSaude/" + this.username, {
          email: profissionalSaude.email,
          name: profissionalSaude.name,
          password: profissionalSaude.password,
          username: this.username,
          tipo: profissionalSaude.tipo,
        })
        .then(() => {
          this.$router.push("/profissionaisSaude");
        })
        .catch((error) => {
          this.errorMsg = error.response.data;
        });

      //console.log("received: '"+ this.$route.params.data.email+"'")
    },
  },
};
</script>
