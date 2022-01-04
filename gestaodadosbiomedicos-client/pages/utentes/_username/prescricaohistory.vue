<template>
<div id="mainDivPrescricoes">
    <div v-if="dados.length > 0">
        <b-container>
        <b-table striped over bordered table-variant="info" head-variant="dark" :items="dados" :fields="fields"/>
        </b-container>
    </div>
    <div v-else>
        <b>Atualmente não existe nenhuma prescrição. Verifique mais tarde.</b>
    </div>
</div>
</template>
<script>
export default{
    data(){
        return{
          fields: ["nome", "tipoPrescricao","dose", "vezesAoDia", "profissionalSaudeUsername","data","dataValidade"],
            dados: [],
        }
    },
    created(){
        this.$axios.$get(`/api/utentes/${this.$auth.user.sub}/historyprescricao`)
            .then((dados) => this.dados = dados)
    },

}

</script>
<style>
  #mainDivPrescricoes {
   margin: 100px 50px;
  }
</style>

