<template>
  <div>
    <h1>Editar profissional de saúde</h1>
    <form @submit.prevent="edit">
      <b-input
        v-model="profissionaisSaude.password"
        :state="isPasswordValid"
        required
      />
      <b-input
        v-model.trim="profissionaisSaude.name"
        :state="isNameValid"
        required
      />
      <b-input
        ref="email"
        v-model.trim="profissionaisSaude.email"
        type="email"
        :state="isEmailValid"
        required
      />
      <div>
        <b-select
          v-model="profissionaisSaude.tipo"
          :options="options"
        >
        </b-select>
      </div>

      <p class="text-danger" v-show="errorMsg">{{ errorMsg }}</p>
      <nuxt-link to="/profissionaisSaude">Return</nuxt-link>
      <button type="reset">Reset</button>
      <button @click.prevent="edit">Edit</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      errorMsg: false,
      profissionaisSaude: {},
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
      .then((profissionaisSaude) => (this.profissionaisSaude = profissionaisSaude || {}))
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
    edit(profissionaisSaude) {
      this.$axios
        .$put("/api/profissionaisSaude/" + this.username, {
          email: profissionaisSaude.email,
          name: profissionaisSaude.name,
          password: profissionaisSaude.password,
          username: this.username,
          tipo: profissionaisSaude.tipo,
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
