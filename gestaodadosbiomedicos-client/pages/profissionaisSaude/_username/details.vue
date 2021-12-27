<template>
  <b-container>
    <h4>Detalhes do Profissional de Saúde:</h4>
    <p>Username: {{ profissionalSaude.username }}</p>
    <p>Name: {{ profissionalSaude.name }}</p>
    <p>Email: {{ profissionalSaude.email }}</p>
    <p>Tipo: {{ profissionalSaude.tipo }}</p>
    <b>Utentes do {{ profissionalSaude.name }}:</b>
        <b-table striped over :items="utentes" :fields="fields">
           <template v-slot:cell(actions)="data">
             <div v-if="$auth.user.groups == 'ProfissionalSaude'">
          <nuxt-link
            class="btn btn-primary btn-sm"  :to="`/dadosBiomedicos/${data.item.username}/adicionarDadoAUtente`">
            Adicionar Dado Biomédico</nuxt-link
          >
          <nuxt-link
            class="btn btn-primary btn-sm"  :to="`/dadosBiomedicos/${data.item.username}/RemoverDadoAUtente`">
            Remover Dado Biomédico</nuxt-link
          >
           <nuxt-link
            class="btn btn-primary btn-sm"  :to="`/dadosBiomedicos/${data.item.username}/adicionarDadoAUtente`">
            Receitar Prescrição</nuxt-link
          >
          </div>
          </template>
        </b-table>
    <nuxt-link to="/profissionaisSaude">Back</nuxt-link>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      profissionalSaude: [],
      utentes: [],
      fields: ["name", "username", "email", "actions"],
    };
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  created() {
    this.$axios
      .$get(`/api/profissionaisSaude/${this.username}`)
      .then(
        (profissionalSaude) =>
          (this.profissionalSaude = profissionalSaude || {})
      ),
      this.$axios
        .$get(`/api/profissionaisSaude/${this.username}/utentes`)
        .then((utentes) => (this.utentes = utentes || {}));
  },
};
</script>
