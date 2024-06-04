<script setup>
import { defineProps, reactive } from "vue";

const id = defineProps(['id']);


let retrieveCanhoto = () => {
  CanhotoDataService.get(id)
    .then(response => {
      this.canhoto = response.data;
      console.log(this.canhoto);
    })
    .catch(e => {
      console.log(e);
    });
}
</script>

<template>
  <div class="container-fluid fundo-canhoto col-10 canhoto">
    <fieldset class="d-flex flex-column gap-2">
      <div class="row">
        <div class="col sm-3">
          <label for="disabledTextInput" class="form-label">ID</label>
          <input type="text" id="disabledTextInput" disabled class="form-control" v-model="canhoto.id">
        </div>
        <div class="col sm-3">
          <label for="disabledTextInput" class="form-label">Número NF:</label>
          <input type="text" id="disabledTextInput" disabled class="form-control" v-model="canhoto.notaFiscal">
        </div>
        <div class="col sm-3">
          <label for="disabledTextInput" class="form-label">Entregador:</label>
          <input type="text" id="disabledTextInput" disabled class="form-control" v-model="canhoto.nome">
        </div>
      </div>
      <div class="row">
        <div class="col sm-3">
          <label for="disabledTextInput" class="form-label">Preço:</label>
          <input type="text" id="disabledTextInput" disabled class="form-control" v-model="canhoto.valorGasto">
        </div>
        <div class="col sm-3">
          <label for="disabledTextInput" class="form-label">Categorias:</label>
          <input v-if="canhoto.categoria == 1" type="text" id="disabledTextInput" disabled class="form-control"
            value="Alimentação">
          <input v-if="canhoto.categoria == 2" type="text" id="disabledTextInput" disabled class="form-control"
            value="Hospedagem">
          <input v-if="canhoto.categoria == 3" type="text" id="disabledTextInput" disabled class="form-control"
            value="Gasolina">
          <input v-if="canhoto.categoria == 4" type="text" id="disabledTextInput" disabled class="form-control"
            value="Remédios">
          <input v-if="canhoto.categoria == 5" type="text" id="disabledTextInput" disabled class="form-control"
            value="Reparos">
        </div>
        <div class="col sm-3">
          <label for="disabledTextInput" class="form-label">Data:</label>
          <input type="text" id="disabledTextInput" disabled class="form-control" v-model="canhoto.data">
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import CanhotoDataService from "../services/CanhotoDataService";

export default {
  name: "details-canhoto",
  data() {
    return {
      canhoto: {
        id: "",
        nome: "",
        notaFiscal: "",
        categoria: "",
        valorGasto: "",
        data: "000000000",
      }
    };
  },
  props: ['id'],
  setup(props) {
    this.canhoto.id = props.id;
  },
  methods: {

  }
}
</script>