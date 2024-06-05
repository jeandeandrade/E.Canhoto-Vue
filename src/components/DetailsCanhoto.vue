<template>
  <div class="container-fluid fundo-canhoto col-10 canhoto">
    <fieldset class="d-flex flex-column gap-2" id="detail-canhoto">
      <div class="row">
        <div class="col sm-3">
          <label for="disabledTextInput" class="form-label">ID</label>
          <input type="text" id="disabledTextInput" disabled class="form-control" v-model="detail_canhoto.id">
        </div>
        <div class="col sm-3">
          <label for="disabledTextInput" class="form-label">Número NF:</label>
          <input type="text" id="disabledTextInput" disabled class="form-control" v-model="detail_canhoto.notaFiscal">
        </div>
        <div class="col sm-3">
          <label for="disabledTextInput" class="form-label">Entregador:</label>
          <input type="text" id="disabledTextInput" disabled class="form-control" v-model="detail_canhoto.nome">
        </div>
      </div>
      <div class="row">
        <div class="col sm-3">
          <label for="disabledTextInput" class="form-label">Preço:</label>
          <input type="text" id="disabledTextInput" disabled class="form-control" v-model="detail_canhoto.valorGasto">
        </div>
        <div class="col sm-3">
          <label for="disabledTextInput" class="form-label">Categorias:</label>
          <input v-if="detail_canhoto.categoria == 1" type="text" id="disabledTextInput" disabled class="form-control"
            value="Alimentação">
          <input v-if="detail_canhoto.categoria == 2" type="text" id="disabledTextInput" disabled class="form-control"
            value="Hospedagem">
          <input v-if="detail_canhoto.categoria == 3" type="text" id="disabledTextInput" disabled class="form-control"
            value="Gasolina">
          <input v-if="detail_canhoto.categoria == 4" type="text" id="disabledTextInput" disabled class="form-control"
            value="Remédios">
          <input v-if="detail_canhoto.categoria == 5" type="text" id="disabledTextInput" disabled class="form-control"
            value="Reparos">
        </div>
        <div class="col sm-3">
          <label for="disabledTextInput" class="form-label">Data:</label>
          <input type="text" id="disabledTextInput" disabled class="form-control" v-model="detail_canhoto.data">
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import CanhotoDataService from "../services/CanhotoDataService";

export default {
  name: "details-canhoto",
  props: ['id'],
  data() {
    return {
      detail_canhoto: {
        id: "",
        nome: "",
        notaFiscal: "",
        categoria: "",
        valorGasto: "",
        data: "000000000",
      }
    };
  },
  methods: {
    getInfoById(id){
      CanhotoDataService.getById(id)
      .then(response => {
        this.detail_canhoto = response.data;
        console.log(this.detail_canhoto)
      })
      .catch(e => {
        console.log(e)
      });
    }
  },
  mounted() {
    console.log(this.canhotos)
    // document.querySelector("#detail-canhoto").addEventListener("update", this.getInfoById(this.props.id))
  },
}
</script>