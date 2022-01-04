<template>
<div id="mainDivBiomedicos">
    <div v-if="options.length > 0">
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
        <b-button pill variant="dark" size="sm" @click.prevent="generateTable">Gerar tabela</b-button>
        <vue-excel-xlsx
            class="btn btn-dark btn-sm rounded-pill"
            :data="data"
            :columns="columns"
            :filename="filename"
            :sheetname="'sheetname'"
            >
            Exportar tabela para excel
        </vue-excel-xlsx>
        <hr>
        <b-table striped over bordered table-variant="info" head-variant="dark" fixed :items="dados" :fields="fields"/>
        </b-container>
    </div>
    <div v-else>
        <b>Atualmente não existem quaisquer dados biomédicos. Verifique mais tarde.</b>
    </div>
</div>
</template>
<script>
import VueExcelXlsx from "vue-excel-xlsx";
import Vue from "vue"

Vue.use(VueExcelXlsx);

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
            columns : [
                    {
                        label: "Valor",
                        field: "valor",
                    },
                    {
                        label: "Date",
                        field: "date",
                    },
            ],
            data: [],
            filename: ""
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
                    .then((dados) => {
                        this.filename = this.option
                        this.data = []
                        this.dados = dados
                        dados.forEach((x) => this.data.push({
                        valor: x.valor,
                        date: x.date,
                        }))
                        console.log(this.data)
                    })
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

<style>
  #mainDivBiomedicos {
   margin: 100px auto;
  }
</style>

