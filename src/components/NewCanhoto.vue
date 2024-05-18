<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
<div class="container">
  <RouterView/>
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
          <h4>Cadastro de Canhotos</h4>
          <div class="row canhoto">
            <form class="form row">
              <div class="col-6">
                <label for="inputNome" class="form-label"
                  >Nome do Entregador</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNome"
                  placeholder="Ex: Julio César"
                />
              </div>
              <div class="col-md-6">
                <label for="inputNota" class="form-label">Número da Nota</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNota"
                  placeholder="Ex: 000000000000"
                />
              </div>
              <div class="col-6">
                <label for="inputGasto" class="form-label">Valor Gasto</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputGasto"
                  placeholder="Ex: R$500,00"
                />
              </div>
              <div class="col-6">
                <label class="form-label" for="">Categoria</label>
                <select
                  name="selectCategory"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option selected disabled>Selecione o tipo da despesa</option>
                  <option value="1">Alimentação</option>
                  <option value="2">Hospedagem</option>
                  <option value="3">Gasolina</option>
                  <option value="4">Remédios</option>
                  <option value="5">Reparos</option>
                </select>
              </div>
            </form>
            <div class="buttons" id="btn">
              <router-link
                to="./table"
                class="md-2 btn btn-primary"
                id="registerBtn"
              >
                Enviar
              </router-link>
              <router-link
                to="./table"
                class="md-2 btn btn-warning"
                id="cancelRegisterBtn"
              >
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
.canhoto {
  margin: 20px;
}

.form-label {
  padding-top: 0.5rem;
}
</style>
