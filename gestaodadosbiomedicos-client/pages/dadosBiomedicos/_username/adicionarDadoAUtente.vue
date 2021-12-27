<template>
  <div>
    <h1>Atribuir Dado biomédico a {{ utente.name }}</h1>
    <form @submit.prevent="atribuir">
      <b-select v-model="dado">
        <template v-for="dado in dadosBiomedicos">
              <option :key="dado.id" :value="dado.id">
              {{ dado.tipo }}
               <p>--- Limites -> {{dado.limiteMinimo}} / {{dado.limiteMaximo}}</p>
            </option>
        </template>
      </b-select>

      <p class="text-danger" v-show="errorMsg">{{ errorMsg }}</p>
      <nuxt-link to="/profissionaisSaude">Return</nuxt-link>
      <button @click.prevent="atribuir">Atribuir</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      utente: {},
      dadosBiomedicos: [],
      dado: null,
      errorMsg: false
    };
  },
  created() {
    this.$axios
      .$get(`/api/utentes/${this.username}`)
      .then((utente) => (this.utente = utente || {})),
      this.$axios.$get("api/dadosbiomedicos").then((dadosBiomedicos) => {
        this.dadosBiomedicos = dadosBiomedicos;
      })
  },
  computed: {
    username() {
      return this.$route.params.username;
    }
  },
  methods: {
    atribuir() {
      this.$axios
        .$post(
          "/api/dadosbiomedicos/" + this.dado + "/enroll/" + this.username,
          {}
        )
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

