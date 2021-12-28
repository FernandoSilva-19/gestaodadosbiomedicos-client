<template>
<div>
    <h1>Gráfico dos dados</h1>
    <p>Os valores no eixo yy representam a altura(em 'cm') e o peso(em 'kg')</p>
    <nuxt-link :to="`/utentes/${$auth.user.sub}/data`">Back</nuxt-link>
    <div class="small">
        <LineChart :chartData="datacollection"/>
    </div>
</div>
</template>
<script>
import LineChart from '../../../components/LineChart.vue'
export default{
    components: {
        LineChart
    },
    data(){
        return{
            datacollection: null
        }
    },
    mounted(){
        this.fillData()
    },
    methods:{
        getFields(input, field) {
            var output = [];
            for (var i=0; i < input.length ; ++i)
                output.push(input[i][field]);
            return output;
        },
        fillData(){
            this.$axios
                .$get(`/api/dadosutente/${this.$auth.user.sub}`)
                .then((dados) => {
                    this.datacollection = {
                        labels: this.getFields(dados,"date"),
                        datasets: [
                            {
                            label: 'Altura',
                            backgroundColor: '#4bcc96',
                            data: this.getFields(dados,"altura")
                            }, {
                            label: 'Peso',
                            backgroundColor: '#f87979',
                            data: this.getFields(dados,"peso")
                            }
                        ]
                    }
                })
        }
    }
}

</script>

<style>
  .small {
    max-width: 800px;
   margin:  10px auto;
  }
</style>
