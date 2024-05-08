<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div class="container-fluid">
    <RouterView />
    <div class="info">
      <div class="row">
        <div class="navbar col-2">
          <router-link to="./newuser" class="icon new-user col-10">
            <h2><i class="bi bi-person-fill-add"></i></h2>
            <strong>Novo Usuário</strong>
          </router-link>
          <router-link to="./table" class="icon tabela col-6">
            <h2><i class="bi bi-grid-3x2"></i></h2>
            <strong>Tabela</strong>
          </router-link>
          <router-link to="./dashboard" class="icon voltar col-6">
            <h2><i class="bi bi-box-arrow-in-left"></i></h2>
            <strong>Voltar</strong>
          </router-link>
        </div>
        <div class="fundo-canhoto col-10">
          <h4>Gestão de Canhotos</h4>
          <form class="canhoto">
            <fieldset class="d-flex flex-column gap-2">
              <legend>Detalhes de Canhoto</legend>
              <div class="row">
                <div class="col sm-3">
                  <label for="disabledTextInput" class="form-label">ID</label>
                  <input type="text" id="disabledTextInput" disabled class="form-control" value="1">
                </div>
                <div class="col sm-3">
                  <label for="disabledTextInput" class="form-label">Número NF:</label>
                  <input type="text" id="disabledTextInput" disabled class="form-control" value="000000000000">
                </div>
                <div class="col sm-3">
                  <label for="disabledTextInput" class="form-label">Entregador:</label>
                  <input type="text" id="disabledTextInput" disabled class="form-control" value="Jorginho da esquina">
                </div>
              </div>
              <div class="row">
                <div class="col sm-3">
                  <label for="disabledTextInput" class="form-label">Preço:</label>
                  <input type="text" id="disabledTextInput" disabled class="form-control" value="9.999,00">
                </div>
                <div class="col sm-3">
                  <label for="disabledTextInput" class="form-label">Categorias:</label>
                  <input type="text" id="disabledTextInput" disabled class="form-control" value="Alimentação">
                </div>
                <div class="col sm-3">
                  <label for="disabledTextInput" class="form-label">Data:</label>
                  <input type="text" id="disabledTextInput" disabled class="form-control" value="01/01/2024">
                </div>
              </div>
              <div class="buttons d-flex flex-row justify-content-between">
                <div class="d-flex flex-row sm-2">
                  <router-link to="./table" class="btn btn-secondary">Voltar</router-link>
                </div>
                <div class="d-flex flex-row sm-2">
                  <router-link to="./table" class="btn btn-primary me-2">Aprovar</router-link>
                  <router-link to="./table" class="btn btn-danger">Reprovar</router-link>
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
</style>