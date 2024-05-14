<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div class="container-fluid">
    <RouterView />
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
          <h4>Gestão de Funcionários</h4>
          <form class="canhoto">
            <fieldset class="d-flex flex-column gap-2">
              <legend>Detalhes do Funcionário</legend>
              <div class="row">
                <div class="col sm-3">
                  <label for="disabledTextInput" class="form-label">ID</label>
                  <input type="text" id="disabledTextInput" disabled class="form-control" value="1">
                </div>
                <div class="col sm-3">
                  <label for="disabledTextInput" class="form-label">Nome:</label>
                  <input type="text" id="disabledTextInput" disabled class="form-control" value="Jorginho">
                </div>
                <div class="col sm-3">
                  <label for="disabledTextInput" class="form-label">Sobrenome:</label>
                  <input type="text" id="disabledTextInput" disabled class="form-control" value="Da esquina">
                </div>
              </div>
              <div class="row">
                <div class="col sm-3">
                  <label for="disabledTextInput" class="form-label">E-mail:</label>
                  <input type="text" id="disabledTextInput" disabled class="form-control" value="JorginhoDaEsquina@gmail.com">
                </div>
                <div class="col sm-3">
                  <label for="disabledTextInput" class="form-label">Função:</label>
                  <input type="text" id="disabledTextInput" disabled class="form-control" value="Entregador">
                </div>
                <div class="col sm-3">
                  <label for="disabledTextInput" class="form-label">Data da Alteração:</label>
                  <input type="text" id="disabledTextInput" disabled class="form-control" value="07/05/2024">
                </div>
              </div>
              <div class="buttons d-flex flex-row justify-content-between">
                <div class="d-flex flex-row sm-2">
                  <router-link to="./user" class="btn btn-secondary">Voltar</router-link>
                </div>
                <div class="d-flex flex-row sm-2">
                  <router-link to="./user" class="btn btn-primary me-2">Aprovar</router-link>
                  <router-link to="./user" class="btn btn-danger">Reprovar</router-link>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: burlywood;
  color: black;
}

.navbar h5 {
  margin-left: 20%;
  color: black;
}

.fundo-canhoto h4 {
  margin: 15px;
}

.canhoto {
  margin: 50px;
}
</style>