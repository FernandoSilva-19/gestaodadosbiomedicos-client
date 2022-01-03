<template>
<div v-if="profissionalSaude != null">
  <b-container>
    <h4>Detalhes do Profissional de Saúde:</h4>
    <p>Username: {{ profissionalSaude.username }}</p>
    <p>Name: {{ profissionalSaude.name }}</p>
    <p>Email: {{ profissionalSaude.email }}</p>
    <p>Tipo: {{ profissionalSaude.tipo }}</p>
    <hr>
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
          <!-- <nuxt-link
            class="btn btn-primary btn-sm"  :to="`/prescricao/${data.item.username}/receitar`">
            Receitar Prescrição</nuxt-link
          > -->
          <nuxt-link
            class="btn btn-primary btn-sm"  :to="`/prc/${data.item.username}/create`">
            Criar PRC</nuxt-link
          >
           <nuxt-link
            class="btn btn-primary btn-sm"  :to="`/prc/${data.item.username}/consultar`">
            Consultar PRC</nuxt-link
          >
          </div>
          </template>
        </b-table>
    <nuxt-link to="/profissionaisSaude">Back</nuxt-link>
  </b-container>
  </div>
  <div v-else><h1>Sem acesso</h1></div>
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
          (this.profissionalSaude = profissionalSaude || null)
      ),
      this.$axios
        .$get(`/api/utentes`)
        .then((utentes) => (this.utentes = utentes || {}));
  },
};
</script>
