<template>
  
  <div class="container-fluid fundo-canhoto col-10 canhoto">
        <fieldset class="d-flex flex-column gap-2" id="detail-canhoto">
          <div class="row">
            <div class="col sm-3">
              <label for="disabledTextInput" class="form-label">ID</label>
              <input type="text" disabled class="form-control" v-model="canhoto.id">
            </div>
            <div class="col sm-3">
              <label for="disabledTextInput" class="form-label">Número NF:</label>
              <input type="text" disabled class="form-control" v-model="canhoto.notaFiscal">
            </div>
            <div class="col sm-3">
              <label for="disabledTextInput" class="form-label">Entregador:</label>
              <input type="text" disabled class="form-control" v-model="canhoto.nome">
            </div>
          </div>
          <div class="row">
            <div class="col sm-3">
              <label for="disabledTextInput" class="form-label">Preço:</label>
              <input type="text" disabled class="form-control" v-model="canhoto.valorGasto">
            </div>
            <div class="col sm-3">
              <label for="disabledTextInput" class="form-label">Categorias:</label>
              <input v-if="canhoto.categoria == 1" type="text" disabled class="form-control"
                value="Alimentação">
              <input v-if="canhoto.categoria == 2" type="text" disabled class="form-control"
                value="Hospedagem">
              <input v-if="canhoto.categoria == 3" type="text" disabled class="form-control"
                value="Gasolina">
              <input v-if="canhoto.categoria == 4" type="text" disabled class="form-control"
                value="Remédios">
              <input v-if="canhoto.categoria == 5" type="text" disabled class="form-control"
                value="Reparos">
            </div>
            <div class="col sm-3">
              <label for="disabledTextInput" class="form-label">Data:</label>
              <input type="text"  disabled class="form-control" v-model="canhoto.data">
            </div>
          </div>
        </fieldset>
    </div>
</template>

<script>
export default {
  name: "detailsCanhoto",
  props: {
    canhoto: {
      type: Object,
    },
  },
}
</script>