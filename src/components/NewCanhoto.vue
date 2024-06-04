<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="container fundo-canhoto col-10 canhoto">
    <form @submit="saveCanhoto($event)" class="form row" id="newCanhotoForm">
      <div class="col-6">
        <label for="inputNome" class="form-label">Nome do Entregador</label>
        <input type="text" class="form-control" id="inputNome" v-model="canhoto.nome" placeholder="Ex: Julio César">
      </div>
      <div class="col-md-6">
        <label for="inputNota" class="form-label">Número da Nota</label>
        <input type="number" class="form-control" id="inputNota" v-model="canhoto.notaFiscal"
          placeholder="Ex: 000000000000">
      </div>
      <div class="col-6">
        <label for="inputGasto" class="form-label">Valor Gasto</label>
        <input type="number" step="0.01" class="form-control" id="inputGasto" v-model="canhoto.valorGasto" placeholder="Ex: R$500,00">
      </div>
      <div class="col-6">
        <label class="form-label" for="">Categoria</label>
        <select name="selectCategory" class="form-select" v-model="canhoto.categoria" aria-label="Default select example">
          <option selected disabled>Selecione o tipo da despesa</option>
          <option value="1">Alimentação</option>
          <option value="2">Hospedagem</option>
          <option value="3">Gasolina</option>
          <option value="4">Remédios</option>
          <option value="5">Reparos</option>
        </select>
      </div>
    </form>
  </div>

  <div class="modal fade" id="modalCanhotoAdicionado" tabindex="-1" aria-labelledby="modalCanhotoAdicionadoLabel">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalCanhotoAdicionadoLabel">
            Sucesso
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <span>Canhoto Adicionado com sucesso.</span>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CanhotoDataService from "../services/CanhotoDataService";

export default {
  name: "add-canhoto",
  data() {
    return {
      canhoto: {
        nome: "",
        notaFiscal: "",
        categoria: "",
        valorGasto: ""
      }
    };
  },
  methods: {
    saveCanhoto(event) {
      event.preventDefault();

      var data = {
        nome: this.canhoto.nome,
        notaFiscal: parseInt(this.canhoto.notaFiscal),
        categoria: parseInt(this.canhoto.categoria),
        valorGasto: parseFloat(this.canhoto.valorGasto),
      };
      CanhotoDataService.create(data)
        .then((response) => {
          this.canhoto = {};
          console.log(response.data);
        })
        .then(() => {
          this.showCanhotoAdicionado();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    showCanhotoAdicionado() {
      let modal = new bootstrap.Modal(document.querySelector("#modalCanhotoAdicionado"));
      modal.show();
    }
  },
};
</script>

<style scoped>
.form {
  margin-top: auto;
}


.form-label {
  padding-top: .5rem;
}

.fundo-canhoto {
  background-color: white;
  border-radius: 25px;
}

.container {
  width: fit-content;
}

.fundo-canhoto h4 {
  margin: 15px;
}

.canhoto {
  margin: 20px;
}

.canhoto .col-2,
.col-3 {
  margin-bottom: 20px;
  margin-top: 10px;
}
</style>
