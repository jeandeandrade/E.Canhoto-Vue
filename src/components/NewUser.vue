<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="container-fluid fundo-canhoto">
      <div class="row canhoto">
        <form @submit="saveUser($event)" class="form row" id="newUserForm">
          <div class="col-6">
            <label for="inputNome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="inputNome" v-model="user.nome" placeholder="Ex: Julio César" />
          </div>
          <div class="col-6">
            <label for="inputGasto" class="form-label">E-mail</label>
            <input type="text" class="form-control" id="inputGasto" v-model="user.email" placeholder="Ex: JCesarM@gmail.com" />
          </div>
          <div class="col-6">
            <label for="inputGasto" class="form-label">Função</label>
            <input type="text" class="form-control" id="inputGasto" v-model="user.funcao" placeholder="Ex: Entregador" />
          </div>
        </form>
      </div>
  </div>

  <div class="modal fade" id="modalUserAdicionado" tabindex="-1" aria-labelledby="modalCanhotoAdicionadoLabel">
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
            <span>Usuario Adicionado com sucesso.</span>
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
import UserDataService from "../services/UserDataService";

export default {
  name: "add-user",
  data() {
    return {
      user: {
        nome: "",
        email: "",
        funcao: ""
      }
    };
  },
  methods: {
    saveUser(event) {
      event.preventDefault();
      
      var data = {
        nome: this.user.nome,
        email: this.user.email,
        funcao: this.user.funcao
      };
      UserDataService.create(data)
        .then((response) => {
          this.user = {};
          console.log(response.data);
        })
        .then(() => {
          this.showUserAdicionado();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    showUserAdicionado() {
      let modal = new bootstrap.Modal(document.querySelector("#modalUserAdicionado"));
      modal.show();
    }
  },
};
</script>

<style scoped>
.container-fluid form {
  margin: 2px 2px 2px 2px;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: burlywood;
  color: black;
}

.form {
  margin-top: auto;
}



.container-fluid form .form-label {
  margin: 0;
}

.form-label {
  padding-top: 0.5rem;
}

.fundo-canhoto {
  background-color: white;
  border-radius: 25px;
}

.fundo-canhoto h4 {
  margin: 15px;
}

.canhoto {
  margin: 20px;
}

.form-label {
  padding-top: 0.5rem;
}
</style>
