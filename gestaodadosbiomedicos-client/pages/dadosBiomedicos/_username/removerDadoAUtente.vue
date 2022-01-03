<template>
  <div>
    <h1>Remover dado biomédico de {{ utente.name }}</h1>
    <form @submit.prevent="remover">
      <b-select v-model="option">
        <template v-for="option in options">
              <option :key="option" :value="option">
              {{ option.phenomenTypeNome }} - {{ option.valor }}
            </option>
        </template>
      </b-select>

      <p class="text-danger" v-show="errorMsg">{{ errorMsg }}</p>
      <nuxt-link to="/profissionaisSaude">Return</nuxt-link>
      <button @click.prevent="remover">Remover</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      utente: {},
      option: null,
            options: [],
      errorMsg:false
    };
  },
  created() {
    this.$axios
      .$get(`/api/utentes/${this.username}`)
      .then((utente) => (this.utente = utente || {})),
       this.$axios
            .$get(`/api/observations/${this.username}`)
            .then((options) => (this.options = options || {}))
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  methods: {
    remover() {
      this.$axios
        .$delete(
          "/api/observations/" + this.option.id,
          {}
        )
        .then(() => {
          this.$router.push("/utentes/");
        })
        .catch((error) => {
          this.errorMsg = error.response.data;
        });

      //console.log("received: '"+ this.$route.params.data.email+"'")
    },
  },
};
</script>
