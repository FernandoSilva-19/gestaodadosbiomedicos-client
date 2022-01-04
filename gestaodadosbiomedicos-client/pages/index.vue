<template>
<div id="mainDivIndex" v-if="utente != null">
    <div v-if="$auth.user.groups == 'Utente'">
            <b-container>
        <div v-if="dadosBiomedicos.length > 0">
            <b>Dados biomédicos de {{ utente.name }}:</b>
            <b-table striped over bordered table-variant="info" head-variant="dark" :items="dadosBiomedicos" :fields="fields"> </b-table>
        </div>
        <div v-else>
            <b>Dados biomédicos de {{ utente.name }}: Sem dados biomédicos</b>
        </div>

        <hr />
        <br>
        <b>Peso e altura atual de {{ utente.name }}:</b>
        <div>
        <br />
        <p>Altura: {{ altura? altura.valor+" cm" : "DESCONHECIDO"}}</p>
        <p>Peso: {{ peso? peso.valor+" KG" : "DESCONHECIDO"}}</p>
        </div>
        <hr />
        <br>
        <div v-if="prescricoes.length > 0">
                <b>Prescrições atuais de {{ utente.name }}:</b>
                <b-table striped over bordered table-variant="info" head-variant="dark" :items="prescricoes" :fields="fields2">
                {{/*<template v-slot:cell(actions)="data">
                    <div v-if="$auth.user.groups == 'ProfissionalSaude'">
                        <b-button class="btn btn-danger btn-sm" @click="remove(data.item.id)"
                        >Eliminar</b-button>
                    </div>
                </template>*/}}
                </b-table>
        </div> 
        <div v-else>
            <b>Prescrições atuais de {{ utente.name }}: Sem prescrições</b>
        </div>     
    </b-container>
    </div>
    <div v-if="$auth.user.groups == 'Admin'">
        <b>Bem vindo de volta, Administrador {{$auth.user.sub}}!</b>
    </div>
    <div v-if="$auth.user.groups == 'ProfissionalSaude'">
        <b>Bem vindo de volta, Profissional de Saúde {{$auth.user.sub}}!</b>
    </div>
</div>
<div v-else>
    <h1>Sem Acesso</h1>
</div>
</template>
<script>
export default {
  data() {
    return {
      utente: {},
      dadosBiomedicos: {},
      fields: ["phenomenTypeNome", "valor", "date"],
      fields2: ["nome", "tipoPrescricao", "dose", "vezesAoDia", "profissionalSaudeUsername", "data", "dataValidade"],
      prescricoes: [],
      graphEnabled: true,
      altura: {},
      peso: {},
    };
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  created() {
    this.$axios
      .$get(`/api/utentes/${this.$auth.user.sub}`)
      .then((utente) => (this.utente = utente || null)),
      this.$axios
        .$get(`/api/observations/${this.$auth.user.sub}`)
        .then(
          (dadosBiomedicos) => (this.dadosBiomedicos = dadosBiomedicos || {})
        ),
      this.$axios
        .$get(`/api/prescricao/${this.$auth.user.sub}/naoExpiradas`)
        .then((prescricoes) => (this.prescricoes = prescricoes || {}));
    this.$axios
      .$get(`/api/observations/${this.$auth.user.sub}/altura/latest`)
      .then((altura) => (this.altura = altura))
      .catch((err) => {
        if (err.response.status == 404) this.graphEnabled = false;
      });

    this.$axios
      .$get(`/api/observations/${this.$auth.user.sub}/peso/latest`)
      .then((peso) => (this.peso = peso))
      .catch((err) => {
        if (err.response.status == 404) this.graphEnabled = false;
      });
  },
};
</script>
<style>
#mainDivIndex {
  margin: 50px 50px;
}
</style>