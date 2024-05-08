<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
    <RouterView/>
    <div class="container">
        <div class="info">
            <div class="row">
                <div class="navbar col-2">
                    <router-link to="./user" class="icon new-user col-10">
                        <h2><i class="bi bi-person-fill-add"></i></h2>
                        <strong>Usuários</strong>
                    </router-link>
                    <router-link to="./table" class="icon tabela col-6">
                        <h2><i class="bi bi-grid-3x2"></i></h2>
                        <strong>Canhotos</strong>
                    </router-link>
                    <router-link to="./dashboard" class="icon voltar col-6">
                        <h2><i class="bi bi-box-arrow-in-left"></i></h2>
                        <strong>Voltar</strong>
                    </router-link>
                </div>
                <div class="fundo-canhoto col-10">
                    <h4>Cadastrar Funcionário</h4>
                    <div class="row canhoto">


                        <form class="form row">
                            <div class="col-6">
                                <label for="inputNome" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="inputNome" placeholder="Ex: Julio César">
                            </div>
                            <div class="col-md-6">
                                <label for="inputNota" class="form-label">Sobrenome</label>
                                <input type="text" class="form-control" id="inputNota" placeholder="Ex: Moreno">
                            </div>
                            <div class="col-6">
                                <label for="inputGasto" class="form-label">E-mail</label>
                                <input type="text" class="form-control" id="inputGasto" placeholder="Ex: JCesarM@gmail.com">
                            </div>
                            <div class="col-6">
                                <label for="inputGasto" class="form-label">Função</label>
                                <input type="text" class="form-control" id="inputGasto" placeholder="Ex: Entregador">
                            </div>
                        </form>
                        <div class="buttons" id="btn">
                            <router-link to="./user" class="md-2 btn btn-primary" id="registerBtn">
                              Enviar
                            </router-link>
                            <router-link to="./user" class="md-2 btn btn-danger" id="cancelRegisterBtn">
                              Cancelar
                            </router-link>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
<<<<<<< HEAD
.container-fluid form {
  margin: 2px 2px 2px 2px;
=======
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-color: burlywood;
    color: black;
>>>>>>> df5d565 (Add new files)
}

.form {
    margin-top: auto;
}

<<<<<<< HEAD
.container-fluid form .form-label {
  font-size: 16px;
  font-weight: 500;
}

.container-fluid form .form-control {
  background-color: #fdeaab;
  border: none !important;
  box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.3);
  margin: 2px;
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  outline: none !important;
}

.container-fluid form .form-label {
  margin: 0;
}
</style>
=======
.form-label {
    padding-top: .5rem;
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

.canhoto .col-2,
.col-3 {
    margin-bottom: 20px;
    margin-top: 10px;
}

</style>
>>>>>>> df5d565 (Add new files)
