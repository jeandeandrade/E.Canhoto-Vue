<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="container fundo-canhoto col-10 canhoto">
    <form @submit="saveCanhoto($event)" class="form row" id="newCanhotoForm">
      <div class="col-6">
        <label for="" class="form-label">Nome do Entregador</label>
        <select name="selectUser" class="form-select" v-model="canhoto.userId" aria-label="Default select example">
          <option disable selected value="">Selecione o entregador:</option>
          <option v-for="user in users" :key="user.id" :value="user.id">
            {{ user.nome }}
          </option>

        </select>
      </div>
      <div class="col-md-6">
        <label for="inputNota" class="form-label">Número da Nota</label>
        <input type="number" class="form-control" id="inputNota" v-model="canhoto.notaFiscal"
          placeholder="Ex: 000000000000">
      </div>
      <div class="col-6">
        <label for="inputGasto" class="form-label">Valor Gasto (R$)</label>
        <input type="number" step="0.01" class="form-control" id="inputGasto" v-model="canhoto.valorGasto" placeholder="Ex: 500.00" min="0" pattern="\d+(\.\d{1,2})?"
      </div>
      <div class="col-6">
        <label for="inputData" class="form-label">Data</label>
        <input type="date" class="form-control" id="inputGasto" v-model="canhoto.data">
      </div>
      <div class="col-6">
        <label class="form-label" for="">Categoria</label>
        <select name="selectCategory" class="form-select" v-model="canhoto.categoria" aria-label="Default select example">
          <option disabled selected value="">Selecione o tipo da despesa</option>
          <option value="1">Alimentação</option>
          <option value="2">Hospedagem</option>
          <option value="3">Gasolina</option>
          <option value="4">Remédios</option>
          <option value="5">Reparos</option>
        </select>
      </div>
      <div class="col-6">
        <label class="form-label" for="">Status</label>
        <select name="selectStatus" class="form-select" v-model="canhoto.status" aria-label="Default select example">
          <option disabled selected value="">Selecione o status do canhoto</option>
          <option value="0">Reprovado</option>
          <option value="1">Aprovado</option>
          <option value="2">Pendente</option>
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
import UserDataService from "@/services/UserDataService";

export default {
  name: "add-canhoto",
  data() {
    return {
      canhoto: {
        userId: "",
        notaFiscal: "",
        categoria: "",
        valorGasto: "",
        data: "",
        status: ""
      },
      users: []
    };
  },
  methods: {
    saveCanhoto(event) {
      event.preventDefault();

      var data = {
        userId: parseInt(this.canhoto.userId),
        notaFiscal: parseInt(this.canhoto.notaFiscal),
        categoria: parseInt(this.canhoto.categoria),
        valorGasto: parseFloat(this.canhoto.valorGasto),
        data: this.canhoto.data,
        status: parseInt(this.canhoto.status)
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
    },
    fetchUsers() {
      UserDataService.getAll()
      .then(response => {
        this.users = response.data;
        console.log(this.users)
      })
      .catch(e => {
        console.log(e);
      })
    }
  },
  mounted() {
    this.fetchUsers();
  }
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
