<template>
<div>
    <h1>Histórico das prescrições</h1>
    <b-container>
      <!-- try to remove :fields=”fields” to see the magic -->
      <b-table striped over :items="dados" :fields="fields"/>
      <nuxt-link :to="`/utentes/${$auth.user.sub}/details`">Back</nuxt-link>
    </b-container>
</div>
</template>
<script>
export default{
    data(){
        return{
          fields: ["nome", "tipo","dose", "vezesAoDia", "profissionalSaude","date"],
            dados: {},
        }
    },
    created(){
        this.$axios.$get(`/api/utentes/${this.$auth.user.sub}/historyprescricao`)
            .then((dados) => this.dados = dados)
    },

}

</script>

