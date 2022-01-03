<template>
  <b-container>
    <h3>Login into Gestão Dados Biomédicos</h3>
    <b-form @submit.prevent="onSubmit" @reset="onReset">
      <b-form-group label="Username" description="Enter your username">
        <b-input
          name="username"
          placeholder="Your username"
          v-model.trim="username"
          required
        />
      </b-form-group>
      <b-form-group label="Password" description="Enter your password">
        <b-input
          name="password"
          type="password"
          placeholder="Your password"
          v-model="password"
          required
        />
      </b-form-group>
      <b-button type="reset" class="btn-warning btn-sm">Reset</b-button>
      <b-button type="submit" class="btn-success btn-sm">Login</b-button>
     <!--  <nuxt-link class="btn btn-primary btn-sm" to="/utentes/create"
      >Criar conta</nuxt-link> -->
      </div>
    </b-form>
  </b-container>
</template>
<script>
export default {
  auth: false,
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    onSubmit() {
      let promise = this.$auth.loginWith("local", {
        data: {
          username: this.username,
          password: this.password,
        },
      });
      promise.then(() => {
        this.$toast.success("You are logged in!").goAway(3000);
        // check if the user $auth.user object is set
        console.log(this.$auth.user);
        // TODO redirect based on the user role
        // eg:

          this.$router.push("/");
      });
      promise.catch(() => {
        this.$toast
          .error("Sorry, you cant login. Ensure your credentials are incorrect")
          .goAway(3000);
      });
    },
    onReset() {
      this.username = null;
      this.password = null;
    },
  },
};
</script>
