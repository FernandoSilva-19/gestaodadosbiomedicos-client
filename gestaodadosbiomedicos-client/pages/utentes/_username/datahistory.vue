<template>
<div>
    <h1>Histórico dos dados</h1>
    <b-container>
      <!-- try to remove :fields=”fields” to see the magic -->
      <b-select v-model="option">
         <template v-slot:first>
        <option :value="null" disabled>-- Selecione o dado --</option>
      </template>
        <template v-for="option in options">
              <option :key="option" :value="option">
              {{ option }}
            </option>
        </template>
      </b-select>
      <button @click.prevent="generateTable">Gerar tabela</button>
      <hr>
      <b-table striped over :items="dados" :fields="fields"/>
      <nuxt-link :to="`/utentes/${$auth.user.sub}/data`">Back</nuxt-link>

    </b-container>
</div>
</template>
<script>
export default{
    data(){
        return{
            option: null,
            options: [],
            fields: [
                "valor",
                "date",
            ],
            dados: [],
        }
    },
    created(){
        this.$axios
            .$get(`/api/observations/${this.$auth.user.sub}/name`)
            .then((options) => (this.options = options || {}))
    },
    methods:{
        generateTable(){
            if(this.option != null){
                this.$axios.$get(`/api/observations/${this.$auth.user.sub}/${this.option}`)
                    .then((dados) => this.dados = dados)
                    .catch((error) => {
                        this.errorMsg = error.response.data
                    })
            } else{
                alert("Selecione uma opção, por favor.")
            }
        }
    }
}

</script>

