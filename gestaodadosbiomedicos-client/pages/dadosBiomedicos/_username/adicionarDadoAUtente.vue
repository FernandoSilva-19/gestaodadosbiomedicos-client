<template>
  <div>
    <h1>Atribuir Dado biomédico para {{utente.name}}</h1>
    <form @submit.prevent="receitar">
      <b-select v-model="dado">

        <template v-for="dado in dadosBiomedicos">
          <option
            :key="dado.id"
            :value="dado.id"
          >
            {{ dado.nome }}
          </option>
        </template>
      </b-select>

      <p class="text-danger" v-show="errorMsg">{{ errorMsg }}</p>
      <nuxt-link to="/profissionaisSaude">Return</nuxt-link>
      <button @click.prevent="receitar">Receitar</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      utente:{},
      dadosBiomedicos: {},
      dado: null
    };
  },
  created() {
    this.$axios
      .$get(`/api/utentes/${this.username}`)
      .then((utente) => (this.utente = utente || {})),
      this.$axios.$get('api/dadosbiomedicos').then(dadosBiomedicos => { this.dadosBiomedicos = dadosBiomedicos
    })
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  methods: {
    receitar() {
      this.$axios
        .$post("/api/dadosbiomedicos/" + this.dado + "/enroll/" + this.username, {
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

