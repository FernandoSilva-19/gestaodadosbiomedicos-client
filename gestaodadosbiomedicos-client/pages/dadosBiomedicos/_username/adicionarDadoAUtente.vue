<template>
  <div style="margin: 100px 50px;">
    <h1>Atribuir Dado biomédico a {{ username }}</h1>
    <form @submit.prevent="atribuir">
      <b-select v-model="option">
         <template v-slot:first>
        <option :value="null" disabled>-- Selecione o dado --</option>
      </template>
        <template v-for="option in options">
              <option :key="option" :value="option">
              {{ option.nome }} -- De {{ option.valorMinimo }} a {{ option.valorMaximo }}({{ option.unidade }})
            </option>
        </template>
      </b-select>
        <b-input v-model="valor" required
               placeholder="Valor (dentro dos limites)" />
      <p class="text-danger" v-show="errorMsg">{{ errorMsg }}</p>
      <div v-if="$auth.user.groups == 'Admin'">
              <nuxt-link to="/profissionaisSaude">Return</nuxt-link>
      </div>
      <div v-else>
            <nuxt-link to="/utentes">Return</nuxt-link>
      </div>

      <b-button pill variant="dark" size="sm" @click.prevent="atribuir">Atribuir</b-button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      valor: null,
      option: null,
            options: [],
      errorMsg: false
    };
  },
  created() {
    this.$axios
            .$get(`/api/phenomenType`)
            .then((options) => (this.options = options || {}))
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  methods: {
    atribuir() {
      this.$axios
        .$post(
          "/api/observations",
          {
             valor: this.valor,
             phenomenTypeNome: this.option.nome,
             utenteUsername: this.username
          }
        )
        .then(() => {
          this.$router.push("/utentes/");
        })
        .catch((error) => {
          if(this.valor < this.option.valorMinimo || this.valor > this.option.valorMinimo){
            this.errorMsg = "Value out of boundaries";
          }
          this.errorMsg = error.response.data;
        });

      //console.log("received: '"+ this.$route.params.data.email+"'")
    },
  },
};
</script>

