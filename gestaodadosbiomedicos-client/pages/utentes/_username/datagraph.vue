<template>
<div>
    <div class="small">
        <LineChart :chartData="datacollection"/>
    </div>
    <p style="textAlign: center">Os valores no eixo yy representam a altura(em 'cm') e o peso(em 'kg')</p>
    <nuxt-link :to="`/utentes/${$auth.user.sub}/data`">Return</nuxt-link>
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
        arrayUnique(array) {
            var a = array.concat();
            for(var i=0; i<a.length; ++i) {
                for(var j=i+1; j<a.length; ++j) {
                    if(a[i] === a[j])
                        a.splice(j--, 1);
                }
            }
            return a;
        },
        getFields(input, field) {
            var output = [];
            for (var i=0; i < input.length ; ++i)
                output.push(input[i][field]);
            return output;
        },
        fillData(){
            Promise.all([
                fetch(`/api/observations/${this.$auth.user.sub}/altura`),
                fetch(`/api/observations/${this.$auth.user.sub}/peso`)
            ]).then(async([altura,peso]) =>{
                const alturaJSON = await altura.json();
                const pesoJSON = await peso.json();

                this.datacollection = {
                        labels: this.arrayUnique(this.getFields(alturaJSON,"date").concat(this.getFields(pesoJSON,"date"))),
                        datasets: [
                            {
                            label: 'Altura',
                            backgroundColor: '#4bcc96',
                            data: this.getFields(alturaJSON,"valor")
                            },
                            {
                            label: 'Peso',
                            backgroundColor: '#f87979',
                            data: this.getFields(pesoJSON,"valor")
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
