<template>
<div>
    <h1>Histórico dos dados</h1>
    <b-container>
      <!-- try to remove :fields=”fields” to see the magic -->
      <b-table striped over :items="dados" :fields="fields"/>
      <nuxt-link :to="`/utentes/${$auth.user.sub}/data`">Back</nuxt-link>
    </b-container>
</div>
</template>
<script>
export default{
    data(){
        return{
            fields: [
                "id",
                "altura",
                "peso",
                "date"
            ],
            dados: [],
        }
    },
    created(){
        this.$axios.$get(`/api/dadosutente/${this.$auth.user.sub}`)
            .then((dados) => this.dados = dados)
    },

}

</script>

